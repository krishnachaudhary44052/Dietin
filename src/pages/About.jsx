import Header from '../components/Header';
import ClientInfo from '../components/ClientInfo';
import CustomerSay from '../components/CustomerSay';
import BlogSection from '../components/BlogSection';
import WhoAreWe from '../components/WhoAreWe';
import Footer from '../components/Footer';

const about = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <WhoAreWe />
      <ClientInfo />
      <CustomerSay />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default about;