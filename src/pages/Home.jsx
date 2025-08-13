
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Bmr from "../components/Bmr";
import MealPlans from "../components/MealPlan";
import NoMealSection from "../components/NoMealSection";
import HowWeWork from "../components/HowWeWork";
import WhyChooseUs from "../components/WhyChooseUs";
import BlogSection from "../components/BlogSection";
import CustomerSay from "../components/CustomerSay";
import EnrollmentProcess from "../components/EnrolmentProcess";
import CallToAction from "../components/CallToAction";
import Reel from "../components/Reel";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <Bmr />
      <MealPlans />
      <NoMealSection />
      <HowWeWork />
      <WhyChooseUs />
      <CustomerSay />
      <Reel />
      <BlogSection />
      <EnrollmentProcess />
      
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
