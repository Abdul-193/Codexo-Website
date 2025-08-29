import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import Projekte from "./pages/Projekte";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/homepage" element={<Navigate to="/" replace />} />
          <Route path="/projekte" element={<Projekte />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
