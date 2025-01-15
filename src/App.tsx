import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const loadFont = async () => {
      const font = new FontFace(
        'Manrope',
        'url(https://fonts.gstatic.com/s/manrope/v15/xn7gYHE41ni1AdIRggexSg.woff2)'
      );

      try {
        await font.load();
        document.fonts.add(font);
        console.log('Manrope font loaded successfully');
      } catch (error) {
        console.error('Error loading Manrope font:', error);
      }
    };

    loadFont();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;