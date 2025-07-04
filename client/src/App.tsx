import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Home from "@/pages/home";
import Quote from "@/pages/quote";
import Booking from "@/pages/booking";
import Reviews from "@/pages/reviews";
import About from "@/pages/about";
import ServiceDetail from "@/pages/service-detail";
import ApartmentCleaning from "@/pages/apartment-cleaning";
import CorporateCleaning from "@/pages/corporate-cleaning";
import BlockCleaning from "@/pages/block-cleaning";
import CarWash from "@/pages/car-wash";
import CarpetCleaning from "@/pages/carpet-cleaning";
import GarbageCanCleaning from "@/pages/garbage-can-cleaning";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/quote" component={Quote} />
      <Route path="/booking" component={Booking} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/about" component={About} />
      <Route path="/services/apartment-cleaning" component={ApartmentCleaning} />
      <Route path="/services/corporate-cleaning" component={CorporateCleaning} />
      <Route path="/services/blocks-cleaning" component={BlockCleaning} />
      <Route path="/services/car-wash" component={CarWash} />
      <Route path="/services/carpet-cleaning" component={CarpetCleaning} />
      <Route path="/services/garbage-can-cleaning" component={GarbageCanCleaning} />
      <Route path="/services/blocks">
        {() => {
          window.location.href = '/services/blocks-cleaning';
          return null;
        }}
      </Route>

      <Route path="/services/:serviceId" component={ServiceDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
