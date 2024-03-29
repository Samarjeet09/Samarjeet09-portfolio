import SolarSystem from "./SolarSystem";
import content from "./content";
// console.log(content)
const aboutSection = content.aboutSection
const About = () => {
  return (
    <section className="pt-8 md:pt-24 w-full flex flex-col" name="about">
      <div className="w-full max-w-[900px] flex flex-col justify-center mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row align-center justify-center md:justify-between">
          <SolarSystem />
          <div className="md:ml-4 lg:ml-14">
            <h1 className="font-medium text-xl 2xl:text-2xl border-b-4 inline-block border-theme-white mb-4 pb-1 hover:scale-110">
              {aboutSection.sectionName}
            </h1>
            <p className="text-base 2xl:text-lg text-justify hover:scale-105">{aboutSection.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
