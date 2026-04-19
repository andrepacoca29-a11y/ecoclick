import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import SementePage from "./SementePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cultivo/:slug" element={<SementePage />} />
      </Routes>
    </BrowserRouter>
  );
}