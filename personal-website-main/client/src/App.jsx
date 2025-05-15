import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

// Create a wrapper component to handle route changes
const RouteWrapper = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const handleRouteChange = () => {
  //     setIsLoading(true);
  //     // Simulate loading time
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 1500); // Adjust timing as needed
  //   };

  //   handleRouteChange();
  // }, [location.pathname]);

  return (
    <>
      <PageTransition isLoading={isLoading} />
      <main className={`pt-16 ${isLoading ? "hidden" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
};

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <BrowserRouter>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
          <Navbar />
          <RouteWrapper />
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
