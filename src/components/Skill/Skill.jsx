import SkillBox from "./SkillBox";

const skillTitles = [
  "Dasturlash tillari",
  "Vositalar",
  "Boshqalar",
  "Kutubxonalar",
];
const skillInfos = [
  "TypeScript JavaScript",
  "VSCode Figma Git",
  "HTML CSS SCSS SASS",
  "TailwindCss React Redux Redux-Tulkit",
];

const Skill = () => {
  return (
    <div className="skills w-full max-w-[1120px] flex flex-col gap-12 mb-12 bg-[url('../../assets/image/skill-bg.png')] bg-no-repeat bg-[top_54px_left_32px] items-end">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4 after:block after:bg-primary after:w-[511px] after:h-[1px] max-[740px]:after:hidden">
          <h2 className="font-medium text-[32px] text-white ">
            <span className="text-primary">#</span>bilimlar
          </h2>
        </div>
      </div>
      <div className="flex gap-4 max-w-[580px] flex-wrap justify-end max-[432px]:justify-center">
        {skillTitles.map((item, index) => {
          return <SkillBox key={index} title={item} info={skillInfos[index]} />;
        })}
      </div>
    </div>
  );
};

export default Skill;
