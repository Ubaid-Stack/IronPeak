import About from "./components/About/About";
import Container from "./components/Container";
import Hero from "./components/Hero/Hero";
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
    </>
  );
};

export default App;
