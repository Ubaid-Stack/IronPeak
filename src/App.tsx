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
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -50% 0px",
        threshold: 0,
      },
    );
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />

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
      <Analytics />
    </>
  );
};

export default App;
