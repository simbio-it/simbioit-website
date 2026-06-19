import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Servidor de produção da SimbioIT:
 *  - serve os arquivos estáticos do build (dist/)
 *  - expõe POST /api/contact, que envia o formulário ao Telegram
 *
 * O token do bot NUNCA vai ao frontend — fica só aqui, via variável de ambiente.
 */

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "..", "dist");

const PORT = process.env.PORT || 3001;
const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

const app = express();
app.disable("x-powered-by");
app.use(express.json({ limit: "16kb" }));

const escapeHtml = (s = "") =>
  String(s).replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c]);

app.post("/api/contact", async (req, res) => {
  const { nome, email, servico, mensagem, hp } = req.body ?? {};

  // honeypot: bots costumam preencher; humanos não veem o campo
  if (hp) return res.json({ ok: true });

  if (!nome || !email || !mensagem) {
    return res.status(400).json({ ok: false, error: "Preencha nome, email e mensagem." });
  }
  if (!TOKEN || !CHAT_ID) {
    console.error("[contact] TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID não configurados");
    return res.status(500).json({ ok: false, error: "Servidor de contato não configurado." });
  }

  const text =
    "<b>📬 Novo contato — site SimbioIT</b>\n\n" +
    `<b>Nome:</b> ${escapeHtml(nome)}\n` +
    `<b>Email:</b> ${escapeHtml(email)}\n` +
    `<b>Serviço:</b> ${escapeHtml(servico || "—")}\n\n` +
    `<b>Mensagem:</b>\n${escapeHtml(mensagem)}`;

  try {
    const tg = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });

    if (!tg.ok) {
      const body = await tg.text();
      console.error("[contact] Telegram falhou", tg.status, body);
      return res.status(502).json({ ok: false, error: "Não foi possível enviar agora." });
    }
    return res.json({ ok: true });
  } catch (err) {
    console.error("[contact] erro", err);
    return res.status(500).json({ ok: false, error: "Erro interno ao enviar." });
  }
});

// Arquivos estáticos do build
app.use(express.static(distDir));

// SPA fallback: qualquer GET não-API devolve o index.html (react-router cuida das rotas)
app.use((req, res, next) => {
  if (req.method !== "GET") return next();
  res.sendFile(path.join(distDir, "index.html"));
});

app.listen(PORT, () => {
  console.log(`SimbioIT rodando na porta ${PORT}`);
  if (!TOKEN || !CHAT_ID) {
    console.warn("⚠️  TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID ausentes — /api/contact vai falhar.");
  }
});
