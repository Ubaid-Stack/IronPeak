import About from "./components/About/About";
import Container from "./components/Container";
import Faq from "./components/FAQ/Faq";
import Hero from "./components/Hero/Hero";
import Membership from "./components/Membership/Membership";
import Navbar from "./components/Navbar/Navbar";
import Team from "./components/OurTeam/Team";
import Program from "./components/Program/Program";
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
      <section className="bg-(--color-secondary) py-18">
        <Container>
          <About />
        </Container>
      </section>
      <section className="py-18">
        <Container>
          <Program />
        </Container>
      </section>
      <section className="bg-(--color-secondary) py-18">
        <Container>
          <WhyUsSection />
        </Container>
      </section>
      <section className="py-18">
        <Container>
          <Team />
        </Container>
      </section>
      <section className="bg-(--color-secondary) py-18">
        <Container>
          <Membership />
        </Container>
      </section>
      <section className="py-18">
        <Container>
          <Faq />
        </Container>
      </section>
    </>
  );
};

export default App;
