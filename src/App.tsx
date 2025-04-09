import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Changed Switch to Routes
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import FAQs from "./components/FAQs"; // Changed import to FAQs
import Footer from "./components/Footer";
import ScrollingText from "./components/ScrollingText";

const App = () => {
  return (
    <Router>
      <div className="bg-transparent mx-auto min-h-screen w-full container overflow-hidden">
        <Header />
        <Hero />
        <ScrollingText 
          text="INSTANT • AUTOMATION • CUSTOMIZABLE • SECURE • EFFICIENCY • INNOVATION   " 
          speed={10}
          textColor="#ffffff"
        />
        <Routes> {/* Changed Switch to Routes */}
          <Route path="/about" element={<About />} /> {/* Changed component to element */}
          {/* Add other routes here */}
          <Route path="/" element={
            <>
              <About />
              <FAQs /> {/* Changed component to FAQs */}
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
