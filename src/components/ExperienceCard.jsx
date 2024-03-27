//import { experience } from "../assets";

// eslint-disable-next-line react/prop-types
const ExperienceCard = ({ logo, Position, CompanyName, Website, Certificate, time, comment }) => {
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className=" w-full rounded-[20px] shadow-3xl px-10 py-10 bg-slate-50 dark:bg-gray-900"
      >
        <img src={logo} width={130} alt="img" />

        <h1 className="mt-5 font-palanquin text-xl md:text-3xl leading-normal font-bold text-red-500">
          {Position} ( {time})
        </h1>
        <p className="mt-3 break-words font-montserrat text-lg leading-normal">
          <span className=" font-semibold">Company Name :</span> {CompanyName}
        </p>
        <p className="mt-3 break-words font-montserrat text-lg leading-normal">
        <a className="text-red-500" href={Website} target="_blank">Website Link</a>{Certificate ? <span> / <a className="text-red-500" href={Certificate} target="_blank">Certificate Link</a></span> : null}
        </p>
        <p className="mt-3 break-words font-montserrat text-sm md:text-lg leading-normal text-slate-gray text-justify">
          {comment}
        </p>
      </div>
      <br/>
    </div>
  );
};

export default ExperienceCard;
