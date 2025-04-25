import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="min-h-screen flex flex-col">
        <Helmet>
          <title>Devansh Raj | Full Stack Developer</title>
          <meta name="description" content="Portfolio of Devansh Raj, a Full Stack Developer specializing in React, Node.js, and modern web technologies." />
          <meta name="keywords" content="Devansh Raj, Full Stack Developer, React Developer, Web Developer, Portfolio" />
          <meta name="author" content="Devansh Raj" />
          <meta property="og:title" content="Devansh Raj | Full Stack Developer" />
          <meta property="og:description" content="Portfolio of Devansh Raj, a Full Stack Developer specializing in React, Node.js, and modern web technologies." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://devanshraj.vercel.app" />
          <meta property="og:image" content="/og-image.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Devansh Raj | Full Stack Developer" />
          <meta name="twitter:description" content="Portfolio of Devansh Raj, a Full Stack Developer specializing in React, Node.js, and modern web technologies." />
          <meta name="twitter:image" content="/og-image.jpg" />
          <link rel="canonical" href="https://devanshraj.vercel.app" />
        </Helmet>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
