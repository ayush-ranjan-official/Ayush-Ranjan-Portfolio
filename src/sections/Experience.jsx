import ExperienceCard from "../components/ExperienceCard";
import { experience } from "../constants";

const Experience = () => {
  return (
    <section id="experience" className="max-container">
      <h2 className="text-red-500 font-palanquin text-center sm:text-4xl text-[40px] font-bold mb-10">
        Experience
      </h2>
      <div className=" ">
        {experience.map((experience) => (
          <ExperienceCard key={experience.name} {...experience} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
