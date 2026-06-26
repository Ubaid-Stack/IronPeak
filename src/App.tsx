import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Faq from "./components/FAQ/Faq";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Membership from "./components/Membership/Membership";
import Navbar from "./components/Navbar/Navbar";
import PageSection from "./components/PageSection";
import Team from "./components/OurTeam/Team";
import Program from "./components/Program/Program";
import Testimonials from "./components/Testimonial/Testimonials";
import WhyUsSection from "./components/WhyUsSection/WhyUsSection";

const App = () => (
  <>
    <Navbar />

    <PageSection id="home" variant="hero">
      <Hero />
    </PageSection>

    <PageSection id="about" variant="alt">
      <About />
    </PageSection>

    <PageSection id="programs">
      <Program />
    </PageSection>

    <PageSection id="why-us" variant="alt">
      <WhyUsSection />
    </PageSection>

    <PageSection id="team">
      <Team />
    </PageSection>

    <PageSection id="membership" variant="alt">
      <Membership />
    </PageSection>

    <PageSection id="faq">
      <Faq />
    </PageSection>

    <PageSection id="testimonials" variant="alt">
      <Testimonials />
    </PageSection>

    <PageSection id="contact">
      <Contact />
    </PageSection>

    <PageSection variant="footer">
      <Footer />
    </PageSection>
  </>
);

export default App;
