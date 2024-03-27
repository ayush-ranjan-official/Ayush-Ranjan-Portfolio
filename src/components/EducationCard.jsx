import { education } from "../assets";

// eslint-disable-next-line react/prop-types
const EducationCard = ({ name, course, duration }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className=" w-full rounded-[20px] shadow-3xl px-10 py-10 bg-slate-50 dark:bg-gray-900"
    >
      <img src={education} width={100} alt="img" />

      <h1 className="mt-5 font-palanquin text-xl md:text-3xl leading-normal font-bold text-red-500">
        {name}
      </h1>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal">
        <span className=" font-semibold">Course Name:</span> {course}
      </p>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal">
        {duration}
      </p>
      <p className="mt-3 break-words font-montserrat text-sm md:text-lg leading-normal text-slate-gray text-justify">
      <span className=" font-semibold">Relevant Computer Science Courseworks :</span>
      <br/>
      <br/>
        1. Data structures and algorithms (CSE201)<br/>
        2. Principles of Blockchain Technologies (CSO506)<br/>
        3. Artificial Intelligence (CSO303)<br/>
        4. Computer Programming (CSI101)<br/>
        5. Optimization Techniques (CSD516)<br/>
        6. Evolutionary Computation (CSD405)
      </p>
    </div>
  );
};

export default EducationCard;
