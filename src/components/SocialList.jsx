import PropTypes from "prop-types";
import Github from "../assets/svg/github-icon.svg";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SocialList = ({ className }) => {
  return (
    <div
      className={`flex flex-col items-center gap-2  fixed top-0 left-5 before:w-[2px] before:h-[191px] before:bg-gray max-[802px]:hidden`}
    >
      <a target="_blank" href="https://github.com/ergashelmonov">
        <Github className="w-8 h-8" />
      </a>
      <a target="_blank" href="https://t.me/Ergash_Ali_dasturchi">
        <FaTelegramPlane fill="#abb2bf" className="w-7 h-7" />
      </a>
      <a target="_blank" href="https://www.instagram.com/ergash_ali_elmonov/">
        <LuInstagram stroke="#abb2bf" className="w-7 h-7" />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/ergash-elmonov-405409320/"
      >
        <FaLinkedin fill="#abb2bf" className="w-7 h-7" />
      </a>
      <a target="_blank" href="https://elmonovergash@gmail.com">
        <MdEmail fill="#abb2bf" className="w-7 h-7" />
      </a>
    </div>
  );
};

SocialList.propTypes = {
  className: PropTypes.string,
};

export default SocialList;
