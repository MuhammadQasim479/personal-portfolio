import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Stack } from "@/sections/Stack";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";

const App = () => {
  return (
    <ErrorBoundary>
      {/* Keyboard users can jump straight past the nav. */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-primary focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <ScrollProgress />

      <div id="top" className="min-h-screen overflow-x-hidden">
        <Navbar />
        <main id="main">
          <Hero />
          <About />
          <Stack />
          <Projects />
          <Experience />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default App;
