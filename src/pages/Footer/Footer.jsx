import Logo from "../../assets/svg/logo.svg";
import Github from "../../assets/svg/github-icon.svg";
import { FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="p-[32px_0_100px_0] border-t-[1px] border-t-gray w-full flex justify-center flex-shrink-0 mt-[263px]">
      <div className="flex  justify-between max-w-[1120px] w-full">
        <div>
          <div className="flex items-center gap-[9px]">
            <Logo className="w-[16px] h-[16px] fill-[#fff]" />
            <h1 className="font-bold text-white text-[16px]">Ergash Ali</h1>
          </div>
          <p className="mt-4 font-normal text-white">Front-end developer</p>
        </div>
        <div>
          <h2 className="font-medium text-2xl text-white">Media</h2>
          <div className="flex items-center gap-2 mt-2">
            <a target="_blank" href="https://github.com/ergashelmonov">
              <Github className="w-8 h-8" />
            </a>
            <a target="_blank" href="https://t.me/Ergash_Ali_dasturchi">
              <FaTelegramPlane fill="#abb2bf" className="w-7 h-7" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/ergash_ali_elmonov/"
            >
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
