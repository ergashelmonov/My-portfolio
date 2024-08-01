import PropTypes from "prop-types";
const ProjectCard = ({ img, name, skills, link, work }) => {
  return (
    <div className="border-gray border-[1px] max-w-[330px] w-full flex-shrink-0 max-h-[450px] flex flex-col">
      <a href={link} target="_blank">
        <img
          src={img}
          alt="project photo"
          className="w-[330px] h-[200px] flex-shrink-0"
        />
      </a>
      <h3 className="p-2 w-full font-normal text-gray border-y-[1px] border-y-gray">
        {skills}
      </h3>
      <div className="p-4 flex flex-col gap-4 justify-between h-full">
        <h2 className="font-n text-2xl text-white">{name}</h2>
        <p className="font-normal text-gray">{work}</p>
        <a href={link} target="_blank" className="font-medium text-white">
          <button className="p-[8px_16px] border-[1px] border-primary w-full">
            LIVE {"<~>"}
          </button>
        </a>
      </div>
    </div>
  );
};

ProjectCard.prototype = {
  img: PropTypes.string,
  name: PropTypes.string,
  skills: PropTypes.string,
  link: PropTypes.string,
  work: PropTypes.string,
};
export default ProjectCard;
