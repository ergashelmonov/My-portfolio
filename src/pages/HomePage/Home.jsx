import { Link } from "react-router-dom";
import ProjectCard from "../../components/ProjectCards/ProjectCard.jsx";
import ProjectImg1 from "../../assets/image/project-img_1.png";
import ProjectImg2 from "../../assets/image/project-img_2.png";
import ProjectImg3 from "../../assets/image/project-img_3.png";
import MainImg from "../../assets/image/main-img.png";
import Skill from "../../components/Skill/Skill.jsx";

const projectImgs = [ProjectImg1, ProjectImg2, ProjectImg3];
const projectNames = [
  "Ecommerce Product Page",
  "Bookshelter",
  "Dictionary Web App",
];
const projectSkills = [
  "HTML CSS REACT.js",
  "HTML CSS Tailwind.css REACT.JS",
  "HTML SCSS Javascript",
];
const projectWork = ["Product page", "Library", "Vocabulary"];
const projectLinks = [
  "https://ecommerce-product-page-react-mu.vercel.app/",
  "https://bookshelterdev.netlify.app/",
  "https://dictionarywebappjs.netlify.app/",
];

const aboutMe = [
  "Assalomu Alaykum. Mening ismim Ergash Ali!",
  `Men Qarshi shahridagi Open Web Academy o'quv markazida Front-End kursni o'qiganman.
   Men noldan o'zgaruvchan veb-saytlar yarata olaman va ular zamonaviy hamda foydalanuvchilar uchun juda qulay.`,
  `Men hali Junior dasturchiman chunki  kursni tugatganimga hali uncha kup bulmadi lekin kurs davomida anchagina loyihalar qilishga ulgurdim.`,
];

const Home = () => {
  return (
    <>
      <main className="main flex justify-between p-[62px_46px_0_0] gap-[18px] items-center max-w-[1120px] w-full flex-wrap max-[1172px]:justify-center max-[1172px]:items-center max-[1172px]:pr-0">
        <div className="max-w-[537px] max-[1172px]:text-center">
          <h1 className="font-semibold text-[32px] text-primary">
            Assalomu Alaykum.
          </h1>
          <p className="font-semibold text-[32px] text-white">
            Mening ismim Ergash Ali men
            <span className="text-primary"> Front-end</span> dasturchiman
          </p>
          <Link to="/contacts">
            <button className="p-[8px_16px] border border-primary  font-medium text-white mt-5">
              Men bilan bog'laning!!
            </button>
          </Link>
        </div>
        <div className="bg-[url(../svg/logo.svg)] bg-no-repeat bg-auto bg-[top_84px_left_20px] relative after:w-[84px] after:h-[84px] after:bg-[url(../svg/dots.svg)] after:absolute after:bottom-[156px] after:right-[46px]">
          <img
            src={`${MainImg}`}
            alt="MainImg"
            className="w-[460px] h-[380px] object-cover"
          />
          <div className="flex  border-solid bg-background border-[1px] border-gray items-center gap-2.5 -translate-y-[20px] relative before:w-[16px] before:h-[16px] before:bg-primary before:block p-[10px_8px]">
            <p className="font-medium text-gray">
              Hozirda{" "}
              <span className="text-white font-semibold">Portfoliyom</span>{" "}
              ustida ishlayapman
            </p>
          </div>
        </div>
      </main>
      <div className="projects max-w-[1120px] w-full flex flex-col gap-12 relative after:w-[84px] after:h-[84px] after:bg-[url(../svg/dots.svg)] after:absolute after:bottom-[362px] after:-left-[160px]">
        <div className="flex items-center justify-between w-full flex-wrap">
          <div className="flex items-center gap-4 after:block after:bg-primary after:w-[511px] after:h-[1px] max-[1077px]:after:hidden">
            <h2 className="font-medium text-[32px] text-white ">
              <span className="text-primary">#</span>Loyihalarim
            </h2>
          </div>
          <Link to="/projects" className="font-medium  text-white">
            Hammasini ko'rish ~~{">"}
          </Link>
        </div>
        <div className="flex gap-4 mb-[106px] justify-center flex-wrap">
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

      <Skill />

      <div className="about-me max-w-[1120px] w-full flex flex-col bg-[url('../../assets/image/about-me.png')] bg-no-repeat bg-[top_0px_right_0px]">
        <div className="max-w-[515px] flex flex-col gap-8">
          {aboutMe.map((item, index) => {
            return (
              <p
                key={index}
                className="font-normal text-base leading-[162%] text-gray"
              >
                {item}
              </p>
            );
          })}{" "}
          <Link to={"/about"}>
            <button className="p-[8px_16px] border border-primary w-full font-medium text-white mt-5">
              Davomini o'qish -{">"}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
