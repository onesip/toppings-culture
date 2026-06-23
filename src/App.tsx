import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Header from "./components/Header";

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-[#FDFCFB] font-sans text-[#1A1A1A] selection:bg-[#F5F2ED] selection:text-[#1A1A1A]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topping/:id" element={<Detail />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
