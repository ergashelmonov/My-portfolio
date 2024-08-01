import Github from "../assets/svg/github-icon.svg";
import { LuInstagram } from "react-icons/lu";
import { FaTelegramPlane } from "react-icons/fa";
const SocialList = () => {
  return (
    <div className="flex flex-col items-center gap-2  fixed top-0 left-5 before:w-[2px] before:h-[191px] before:bg-gray">
      <a target="_blank" href="https://github.com/ergashelmonov">
        <Github className="w-8 h-8" />
      </a>
      <a target="_blank" href="https://t.me/Ergash_Ali_dasturchi">
        <FaTelegramPlane fill="#abb2bf" className="w-7 h-7" />
      </a>
      <a target="_blank" href="https://www.instagram.com/ergash_ali_elmonov/">
        <LuInstagram stroke="#abb2bf" className="w-7 h-7" />
      </a>
    </div>
  );
};

export default SocialList;
