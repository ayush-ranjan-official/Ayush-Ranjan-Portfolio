import { linkto, github } from "../assets";

const ProjectCard = ({ imgURL, name, comment, livelink, githublink }) => {
  return (
    <div
      data-aos="zoom-out-up"
      data-aos-duration="1000"
      className="bg-white rounded-lg shadow-lg drop-shadow-2xl hover:bg-slate-200 hover:scale-105 duration-500 dark:bg-slate-900 w-full min-h-[500px] flex flex-col"
    >
      <div className="flex flex-col h-full">
        <div className="w-full h-[200px]">
          <img 
            src={imgURL} 
            alt={name} 
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-2xl leading-normal font-semibold font-palanquin mb-4">
            {name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 font-palanquin text-base flex-grow">
            {comment}
          </p>
          <div className="flex justify-center items-center gap-4 mt-6">
            <a
              href={livelink} 
              target="_blank"
              className="bg-coral-red shadow-lg hover:shadow-red-900 p-2.5 text-white w-full rounded-full flex justify-center items-center gap-2 font-bold transition-all hover:bg-red-600"
            >
              Demo <img src={linkto} width={20} alt="link" />
            </a>
            <a
              href={githublink} 
              target="_blank"
              className="bg-coral-red shadow-lg hover:shadow-red-900 p-2.5 text-white w-full rounded-full flex justify-center items-center gap-2 font-bold transition-all hover:bg-red-600"
            >
              github <img src={github} width={20} alt="github" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
