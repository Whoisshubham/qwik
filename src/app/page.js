'use client'
import Footer from "./components/Footer";
import Card from "./pages/Card";
import { Service } from "./constants";
import HeroSection from "./pages/HeroSection";
import Services from "./pages/Services";
import Navbar from "./components/Navbar";
import BottomFixedButtons from "./components/BottomFixedButtons";
import { ToastContainer, toast } from 'react-toastify';


function page() {
  return (
    <main>
      
      <Navbar />
      <ToastContainer />
      <HeroSection />
      <BottomFixedButtons />
      <Card />
      <Services service={Service} />
      <Footer />
    </main>
  );
}

export default page;
