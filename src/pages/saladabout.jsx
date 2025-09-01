import Header from "../components/Header";
import About from "../components/About";
import HeroSection from "../components/SaladHeroSection";
import MealPlans from "../components/MealPlan";
import Footer from "../components/Footer";
import CredibilitySection from "../components/CredibilitySection";
import SaladAboutUs from "../components/SaladAboutUs";
import Bmr from "../components/Bmr";
import OrderNow from "../components/OrderNow";
import "./MealPlan2.css";

const Saladabout = () => {

  return (
    <div >
      <Header />
      <SaladAboutUs title="Our Story" />
      <About title="About Us" />
      <CredibilitySection />
      <OrderNow />
      <Footer />
    </div>
  );
};

export default Saladabout;
