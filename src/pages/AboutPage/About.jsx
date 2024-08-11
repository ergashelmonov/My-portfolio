import Navigation from "../../components/Navigation";
import Skill from "../../components/Skill/Skill";

const aboutMe = [
  "Assalomu Alaykum. Mening ismim Ergash!",
  `Men 2009-yil 7-aprelda Qashqadaryo viloyati Koson tumanida tug'ulganman`,
  `Men Qarshi shahridagi Open Web Academy o'quv markazida Front-End kursni o'qiganman.
   Men noldan o'zgaruvchan veb-saytlar yarata olaman va ular zamonaviy hamda foydalanuvchilar uchun juda qulay.`,
  `Men hali Junior dasturchiman chunki  kursni tugatganimga hali uncha kup bulmadi lekin kurs davomida anchagina loyihalar qilishga ulgurdim.`,
];

const About = () => {
  return (
    <div className="max-w-5xl w-full">
      <Navigation path="Men haqimda" des="Men kimman ?" />
      <div className="about-me max-w-[1120px] w-full flex flex-col bg-[url('../../assets/image/about-me.png')] bg-no-repeat bg-contain bg-[top_0px_right_0px] mb-[112px]">
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
          })}
        </div>
      </div>
      <Skill />
    </div>
  );
};

export default About;
