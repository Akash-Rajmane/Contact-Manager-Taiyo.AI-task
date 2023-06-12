import React from "react";
import "./App.css";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Edit from "./pages/Edit";
import Sidebar from "./components/Sidebar";
import Charts from "./pages/Charts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Contact />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/charts" element={<Charts />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
