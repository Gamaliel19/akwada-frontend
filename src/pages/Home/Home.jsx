import DomainsSection from "../../components/common/DomainsSection/DomainsSection";
import SectionPresentation from "../../components/common/Section/Section";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <SectionPresentation />
      <DomainsSection />
      {/* Sections suivantes viendront ici */}
    </>
  );
};

export default Home;
