import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginForm } from "../components/Login/LoginForm";


export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
}
