import Navigation from "../../components/Navigation";
import ProjectCard from "../../components/ProjectCards/ProjectCard";
import ProjectImg1 from "../../assets/image/project-img_1.png";
import ProjectImg2 from "../../assets/image/project-img_2.png";
import ProjectImg3 from "../../assets/image/project-img_3.png";
import ProjectImg4 from "../../assets/image/project-img_4.png";
import ProjectImg5 from "../../assets/image/project-img_5.png";

const projectImgs = [
  ProjectImg1,
  ProjectImg2,
  ProjectImg3,
  ProjectImg4,
  ProjectImg5,
];
const projectNames = [
  "Ecommerce Product Page",
  "Bookshelter",
  "Dictionary Web App",
  "dine-restaurant-website",
  "github-user-search-app",
];
const projectSkills = [
  "HTML CSS REACT.js",
  "HTML CSS Tailwind.css REACT.JS",
  "HTML SCSS Javascript",
  "HTML SCSS Javascript",
  "HTML CSS REACT.js",
];
const projectWork = [
  "Product page",
  "Library",
  "Vocabulary",
  "Restaurant website",
  "github-user-search",
];

const projectLinks = [
  "https://ecommerce-product-page-react-mu.vercel.app/",
  "https://bookshelterdev.netlify.app/",
  "https://dictionarywebappjs.netlify.app/",
  "https://github.com/ergashelmonov/dine-restaurant-website",
  "https://github-user-search-app-wine.vercel.app/",
];
const Projects = () => {
  return (
    <div className="max-w-5xl w-full">
      <Navigation path="loyihalarim" des="men qilgan loyihalar ruyhati" />
      <div>
        <h2 className="font-medium text-[32px] text-white mb-12">
          <span className="text-primary">#</span>Tugallangan Loyihalar
        </h2>
        <div className="flex gap-4 mb-[106px] flex-wrap justify-start">
          {projectNames.map((item, index) => {
            return (
              <ProjectCard
                key={index}
                name={item}
                img={projectImgs[index]}
                skills={projectSkills[index]}
                link={projectLinks[index]}
                work={projectWork[index]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Projects;
