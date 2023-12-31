import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SetAvatar from "./components/SetAvatar";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/chat/beginner" element={<Chat level="beginner" />} />
        <Route path="/chat/intermediate" element={<Chat level="intermediate" />} />
        <Route path="/chat/advanced" element={<Chat level="advanced" />} />
      </Routes>
    </BrowserRouter>
  );
}
