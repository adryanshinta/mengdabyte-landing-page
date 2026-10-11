import { Suspense, lazy, useEffect, useRef } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { FloatingWhatsApp } from "./components/layout/FloatingWhatsApp";
import { Home } from "./pages/Home";

const CourseDetail = lazy(() =>
  import("./pages/CourseDetail").then((module) => ({
    default: module.CourseDetail,
  })),
);

function ScrollManager() {
  const { pathname, hash, key } = useLocation();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    const pathnameChanged = prevPathname.current !== pathname;
    prevPathname.current = pathname;

    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({
          behavior: pathnameChanged ? "instant" : "smooth",
          block: "start",
        });
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash, key]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Navbar />
      <Suspense
        fallback={<div className="min-h-[60vh]" aria-label="Memuat halaman" />}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kursus/:slug" element={<CourseDetail />} />
        </Routes>
      </Suspense>
      <Footer />
      <FloatingWhatsApp />
    </BrowserRouter>
  );
}
