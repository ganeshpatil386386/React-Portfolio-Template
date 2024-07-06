import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Blogs from "./pages/Blogs";
import Projects from "./pages/Projects";
import Youtube from "./pages/Youtube";

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => {
    setIsDark(!isDark);
  };

  return (
    <Router>
      <div className={isDark ? "dark" : ""}>
        <div
          className={`min-h-screen flex flex-col ${
            isDark
              ? "bg-slate-800 text-white"
              : "bg-slate-100 text-black overflow-auto"
          }`}
        >
          <Navbar isDark={isDark} toggleDark={toggleDark} />
          <Routes>
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/youtube' element={<Youtube />} />
            <Route path='/' element={<Content />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
