import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { a } from "framer-motion/client";

const Footer = () => {
  return (
    <footer className="max-w-7xl w-full pt-20 pb-10 bg-black-100" id="contact">

      <div className="flex flex-col items-center justify-center">
        <p className="text-white-200 md:mt-10 my-5 text-center">
          질문이나 연락을 원하시면 저의 개인 메일을 통해 메일 주세요.
        </p>
        <a href="mailto:yhk8462@naver.com">
          <MagicButton
            title="메일 보내기"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Youngho Kim
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a href={info.link}>
              <div
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </div>
            </a>

          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;