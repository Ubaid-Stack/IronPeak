import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Container from "./components/Container";
import Faq from "./components/FAQ/Faq";
import Hero from "./components/Hero/Hero";
import Membership from "./components/Membership/Membership";
import Navbar from "./components/Navbar/Navbar";
import Team from "./components/OurTeam/Team";
import Program from "./components/Program/Program";
import Testimonials from "./components/Testimonial/Testimonials";
import WhyUsSection from "./components/WhyUsSection/WhyUsSection";

const App = () => {
  return (
    <>
      <section className="[background:var(--gradient-hero)] mt-28 mb-18">
        <Container>
          <Navbar />
          <Hero />
        </Container>
      </section>
      <section className="bg-(--color-secondary) py-20">
        <Container>
          <About />
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <Program />
        </Container>
      </section>
      <section className="bg-(--color-secondary) py-20">
        <Container>
          <WhyUsSection />
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <Team />
        </Container>
      </section>
      <section className="bg-(--color-secondary) py-20">
        <Container>
          <Membership />
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <Faq />
        </Container>
      </section>
      <section className="bg-(--color-secondary) py-20">
        <Container>
          <Testimonials />
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <Contact />
        </Container>
      </section>
    </>
  );
};

export default App;
