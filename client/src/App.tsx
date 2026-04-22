import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import CookieBanner from "./components/CookieBanner";
import Home from "./pages/Home";
import Platform from "./pages/Platform";
import DealSourcing from "./pages/DealSourcing";
import DueDiligence from "./pages/DueDiligence";
import SellSide from "./pages/SellSide";
import Valuation from "./pages/Valuation";
import Marketplace from "./pages/Marketplace";
import Architecture from "./pages/Architecture";
import HowItWorks from "./pages/HowItWorks";
import Contact from "./pages/Contact";
import ContactThanks from "./pages/ContactThanks";
import Debug from "./pages/Debug";
import LegalHub from "./pages/legal/LegalHub";
import Terms from "./pages/legal/Terms";
import Privacy from "./pages/legal/Privacy";
import SubProcessors from "./pages/legal/SubProcessors";
import DPA from "./pages/legal/DPA";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/platform" component={Platform} />
      <Route path="/deal-sourcing" component={DealSourcing} />
      <Route path="/due-diligence" component={DueDiligence} />
      <Route path="/sell-side" component={SellSide} />
      <Route path="/valuation" component={Valuation} />
      <Route path="/marketplace" component={Marketplace} />
      <Route path="/architecture" component={Architecture} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/contact" component={Contact} />
      <Route path="/contact/thanks" component={ContactThanks} />
      {/* Legal routes */}
      <Route path="/legal" component={LegalHub} />
      <Route path="/legal/terms" component={Terms} />
      <Route path="/legal/privacy" component={Privacy} />
      <Route path="/legal/sub-processors" component={SubProcessors} />
      <Route path="/legal/dpa" component={DPA} />
      {/* Alias routes */}
      <Route path="/buy-side" component={DealSourcing} />
      <Route path="/debug" component={Debug} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster
            theme="dark"
            position="top-right"
            toastOptions={{
              style: {
                background: "oklch(0.13 0.018 240)",
                border: "1px solid oklch(0.22 0.018 240)",
                color: "oklch(0.96 0.005 240)",
              },
            }}
          />
          <Router />
          {/* Cookie consent banner — rendered globally, manages its own visibility */}
          <CookieBanner />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
