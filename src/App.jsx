import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Testimonials from './components/Testimonials.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import Pricing from './components/Pricing.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <div  className="smooth-scroll">
      <section id='home'>
      <Hero />
      </section>
      <section id='about-us'>
      <About />
      </section>
      <section id='our-services'>
      <Services />
      </section>
      <section id='pricing'>
      <Pricing />
      </section>
      <section id='testimonial'>
      <Testimonials />
      </section>
      <section id='contact-us'>
      <ContactForm />
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default App;