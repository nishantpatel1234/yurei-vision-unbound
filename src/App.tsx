import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Philosophy from "./pages/Philosophy";
import VideoEditing from "./pages/VideoEditing";
import Design from "./pages/Design";
import AIProjects from "./pages/AIProjects";
import Fitness from "./pages/Fitness";
import Japan from "./pages/Japan";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/video-editing" element={<VideoEditing />} />
          <Route path="/design" element={<Design />} />
          <Route path="/ai-projects" element={<AIProjects />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/japan" element={<Japan />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
