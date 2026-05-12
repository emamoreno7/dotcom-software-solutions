import Header from './components/Header';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Cases from './components/Cases';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="bg-dark min-h-screen font-sans text-white antialiased">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Services />
        <WhyUs />
        <Process />
        <Cases />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
