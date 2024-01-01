import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { TbFileStack } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className=" bg-Primary">
      <div className="text-white py-9 flex flex-col ">
        <div className="flex justify-evenly">
          <a
            href="mailto:mohamedmusthaqeem2003@gmail.com"
            className="flex gap-2"
          >
            <span className="hidden md:block">Mail</span>
            <IoIosMail size={25} />
          </a>
          <a
            href="https://github.com/MohamedMusthaqeem"
            target="blank"
            className="flex gap-2"
          >
           <span className="hidden md:block">Github</span> <FaGithub size={25} />
          </a>
          <a
            href="https://mohamedmusthaqeem-webdeveloper.netlify.app/"
            target="blank"
            className="flex gap-2"
          >
           <span className="hidden md:block">Portfolio</span>
            <TbFileStack size={25} />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-musthaqeem-114327250?utm_source=share&utm_campaign=share_via&utm_content=profile"
            target="blank"
            className="flex gap-2"
          >
            <span className="hidden md:block">LinkedIn</span>
            <FaLinkedin size={25} />
          </a>
        </div>
        <div className="flex flex-col items-center space-y-1 pt-5">
          <p>© 2023 Musthaqeem. All rights reserved.</p>
          <p>Designed and Developed By</p>
          <p>Mohamed Musthaqeem</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
