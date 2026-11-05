import Navbar from './components/ds/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import DeltaCards from './sections/DeltaCards.jsx';
import Stepper from './sections/Stepper.jsx';
import Requirements from './sections/Requirements.jsx';
import BentoGrid from './sections/BentoGrid.jsx';
import Faq from './sections/Faq.jsx';
import Banner from './sections/Banner.jsx';
import Footer from './sections/Footer.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <DeltaCards />
        <Stepper />
        <Requirements />
        <BentoGrid />
        <Faq />
        <Banner />
      </main>
      <Footer />
    </>
  );
}
