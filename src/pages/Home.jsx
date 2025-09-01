
import Header from "../components/Header";
import HeroSection from "../components/SaladHeroSection";
import SaladHeroSection from "../components/SaladAboutUs";
import SaladEssence from "../components/SaladEssence";
import SaladMenu from "../components/SaladMenu";
import SaladTicket from "../components/SaladTicket";
import SaladTestimonials from "../components/SaladTestimonials";
import SubscriptionPlans from "../components/SubscriptionPlans";
import FranchiseOpportunity from "../components/FranchiseOpportunity";
import OrderNow from "../components/OrderNow";
import AppComingSoon from "../components/AppComingSoon";
import DriverSection from "../components/DriverSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <SaladHeroSection title="About Us" visual={true} />
      <SaladEssence />
      <SaladMenu/>
      <SaladTicket />
      <SaladTestimonials />
      <SubscriptionPlans />
      <DriverSection />
      <FranchiseOpportunity />
      <OrderNow />
      <AppComingSoon />
      <Footer />
    </div>
  );
};

export default Index;
