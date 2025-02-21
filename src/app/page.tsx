import {
  Achievements,
  Footer,
  Header,
  Hero,
  HowItWorks,
  OurExperience,
  Partnerships,
  SupportAnyDevice,
} from "@/sections/landingpage";

export default function Home() {
  return (
    <section className="">
      <Header />
      <Hero />
      <SupportAnyDevice />
      <Achievements />
      <HowItWorks />
      <OurExperience />
      <Partnerships />
      <Footer />
    </section>
  );
}
