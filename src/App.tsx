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
        <section id="inicio"><Hero /></section>
        <section id="problemas"><Problems /></section>
        <section id="servicios"><Services /></section>
        <section id="why-us"><WhyUs /></section>
        <section id="proceso"><Process /></section>
        <section id="casos"><Cases /></section>
        <section id="nosotros"><About /></section>
        <section id="faq"><FAQ /></section>
        <section id="contacto"><Contact /></section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}