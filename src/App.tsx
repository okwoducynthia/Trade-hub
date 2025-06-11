import "./App.css";
import Advisor from "./Components/Advisors/Advisor";
import Crypto from "./Components/Crypto/Crypto";
import Footer from "./Components/Footer/Footer";
import Forex from "./Components/Forex/Forex";
import Hero from "./Components/Hero/Hero";
import Mission from "./Components/Mission/Mission";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import TradingTicker from "./Components/Tradeticker/Tradeticker";
import Wealth from "./Components/Wealth/Wealth";
import Testimonial from "./Components/Testimonial/Testimonial";
import Question from "./Components/Question/Question";




function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Mission />
      <Services />
      <TradingTicker />
      <Wealth />
      <Crypto />
      <Forex />
      <Advisor />   
      <Question/> 
      <Testimonial/>
      <Footer />

      
    </>
  );
}

export default App;
