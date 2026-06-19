import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Home } from "@/pages/Home";
import { IaPage } from "@/pages/IaPage";
import { DevOpsPage } from "@/pages/DevOpsPage";
import { FinOpsPage } from "@/pages/FinOpsPage";
import { ApmPage } from "@/pages/ApmPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/ia" element={<IaPage />} />
          <Route path="/devops" element={<DevOpsPage />} />
          <Route path="/finops" element={<FinOpsPage />} />
          <Route path="/apm" element={<ApmPage />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
