import Categories from "./components/categories";
import Featured from "./components/featured";
import HeroSection from "./components/hero-section";
import Sponsor from "./components/sponsor";

export default function Home() {
  let sponsors = [
    {sponsorImage: "/sponsor/logo.png", sponsorAlt: "zapier"},
    {sponsorImage: "/sponsor/logo1.png", sponsorAlt: "pipedrive"},
    {sponsorImage: "/sponsor/logo2.png", sponsorAlt: "cib_bank"},
    {sponsorImage: "/sponsor/logo3.png", sponsorAlt: "z"},
    {sponsorImage: "/sponsor/logo4.png", sponsorAlt: "burnt toast"},
    {sponsorImage: "/sponsor/logo5.png", sponsorAlt: "pandadoc"},
    {sponsorImage: "/sponsor/logo6.png", sponsorAlt: "moz"}
  ]

  return (
      <div>
        <HeroSection/>
        <section className="flex justify-center items-center mb-12 ">

          <section className="flex justify-center w-[90vw] sm:w-[85vw] md:w-[80vw] lg:w-[75vw]">
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">

            {sponsors.map((sponsor) => (
              <Sponsor image={sponsor.sponsorImage} alt={sponsor.sponsorAlt}/>
            ))}
            </section>
          </section>
        </section>
        <Featured/>
        <Categories/>
      </div>
  );
}
