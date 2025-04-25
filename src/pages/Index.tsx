import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Lazy load components
const Hero = lazy(() => import("@/components/Hero"));
const Experience = lazy(() => import("@/components/Experience"));
const Projects = lazy(() => import("@/components/Projects"));
const Education = lazy(() => import("@/components/Education"));
const HonoursAndAchievements = lazy(() => import("@/components/HonoursAndAchievements"));
const TechStack = lazy(() => import("@/components/TechStack"));
const Contact = lazy(() => import("@/components/Contact"));

// Loading component that matches the design theme
const LoadingSection = () => (
  <div className="section-padding">
    <div className="section-container">
      <div className="flex items-center justify-center h-64">
        <div className="animate-pulse space-y-4">
          <div className="h-4 w-32 bg-tertiary/20 rounded"></div>
          <div className="h-8 w-64 bg-tertiary/10 rounded"></div>
          <div className="h-4 w-48 bg-tertiary/20 rounded"></div>
        </div>
      </div>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<LoadingSection />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<LoadingSection />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<LoadingSection />}>
          <TechStack />
        </Suspense>
        <Suspense fallback={<LoadingSection />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<LoadingSection />}>
          <Education />
        </Suspense>
        <Suspense fallback={<LoadingSection />}>
          <HonoursAndAchievements />
        </Suspense>
        <Suspense fallback={<LoadingSection />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
