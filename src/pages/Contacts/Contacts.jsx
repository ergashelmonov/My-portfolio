import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import Navigation from "../../components/Navigation";
import { LuInstagram } from "react-icons/lu";
import { MdEmail } from "react-icons/md";

const Contacts = () => {
  return (
    <>
      <Navigation path="bog'lanish" des="men bilan bog'lanish!" />
      <div className="flex items-start gap-5 justify-end max-[920px]:flex-col max-[596px]:items-end">
        <div className="border-[#abb2bf] border border-solid p-4">
          <h2 className="font-semibold text-base text-white mb-2">
            Menning raqammim!
          </h2>
          <p className="font-normal text-base text-[#abb2bf] flex items-center gap-1 mt-4">
            +998 97 803 94 44
          </p>
          <p className="font-normal text-base text-[#abb2bf] flex items-center gap-1 mt-4">
            +998 88 428 17 58
          </p>
        </div>

        <div className="border-[#abb2bf] border border-solid p-4">
          <h2 className="font-semibold text-base text-white mb-2 max-[596px]:text-base">
            Menning ijtimoiy tarmoqlardagi akauntlarim
          </h2>
          <p className="font-normal text-base text-[#abb2bf] flex items-center gap-1 mt-4 max-[596px]:text-[10px]">
            <a
              target="_blank"
              href="https://t.me/Ergash_Ali_07"
              className="flex items-center gap-1"
            >
              <FaTelegramPlane /> https://t.me/Ergash_Ali_07
            </a>{" "}
          </p>
          <p className="font-normal text-base text-[#abb2bf] flex items-center gap-1 mt-4 max-[596px]:text-[10px]">
            <a
              target="_blank"
              href="https://github.com/ergashelmonov"
              className="flex items-center gap-1"
            >
              <FaGithub /> https://github.com/ergashelmonov
            </a>{" "}
          </p>
          <p className="font-normal text-base text-[#abb2bf] flex items-center gap-1 mt-4 max-[596px]:text-[10px]">
            <a
              target="_blank"
              className="flex items-center gap-1"
              href="https://www.instagram.com/ergash_ali_elmonov/"
            >
              <LuInstagram stroke="#abb2bf" />
              https://www.instagram.com/ergash_ali_elmonov/
            </a>
          </p>
          <p className="font-normal text-base text-[#abb2bf] flex items-center gap-1 mt-4 max-[596px]:text-[10px]">
            <a
              target="_blank"
              className="flex items-center gap-1"
              href="https://www.linkedin.com/in/ergash-elmonov-405409320/"
            >
              <FaLinkedin stroke="#abb2bf" />
              https://www.linkedin.com/in/ergash-elmonov-405409320/
            </a>
          </p>
          <p className="font-normal text-base text-[#abb2bf] flex items-center gap-1 mt-4 max-[596px]:text-[10px]">
            <a
              target="_blank"
              className="flex items-center gap-1"
              href="https://elmonovergash@gmail.com"
            >
              <MdEmail fill="#abb2bf" />{" "}
              elmonovergash@gmail.com
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
export default Contacts;
