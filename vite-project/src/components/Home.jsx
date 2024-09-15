// import React from "react";
import pic from "../../public/Anurag photo.jpg";
import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { FaNode } from "react-icons/fa";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 "
      >
        <div className="flex flex-col md:flex-row ">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">WELCOME IN MY FEED</span>
            <div className="flex space-x-1 text-2xl md:text-4xl ">
              <h1>Hello, i am a &nbsp; </h1>
              {/* <span className="text-red-500 font-bold">Developer</span> */}
              <ReactTyped
                className="text-red-500 font-bold"
                strings={["Developer", "Coder", "Editor"]}
                typeSpeed={100}
                backSpeed={30}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify text-clip font-semibold">
              I am a passionate and skilled MERN stack developer with a strong
              foundation in web development. With hands-on experience in
              building dynamic and responsive web applications, I have
              successfully crafted a bookstore web app, showcasing my ability to
              integrate MongoDB, Express, React, and Node.js into seamless
              solutions. I hold certifications from WebDocs in MERN STACK
              Development. I have also worked on graphic designing and guiding
              collaborating on multiple projects. My commitment to delivering
              clean, efficient code, combined with a flair for design, makes me
              a valuable asset to any development team.
            </p>
            <br />
            {/*social media icon*/}
            <div className="flex items-center flex-col md:flex-row justify-between space-y-7 md:space-y-0">
              <div className="space-y-4 ">
                <h1 className="font-bold">Avaliable on:</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="https://www.facebook.com/profile.php?id=100011181039853&sk=about"
                      target="_blank"
                    >
                      <IoLogoFacebook className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.linkedin.com/in/anurag-kumar-96a998251"
                      target="_blank"
                    >
                      <FaLinkedin className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/anuragk_26/"
                      target="_blank"
                    >
                      <FaInstagram className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://youtube.com/@anuragk_2625?si=oNyhGf4dDwdWIua1"
                      target="_blank"
                    >
                      <FaYoutubeSquare className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h1 className="font-bold ">Currently Working on:</h1>
                <ul className="flex space-x-4">
                  <li>
                    <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  </li>
                  <li>
                    <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  </li>
                  <li>
                    <IoLogoReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  </li>
                  <li>
                    <FaNode className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*right side image corner*/}
          <div className="md:w1/2 md:ml-48 mt-8  md:mt-20 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt=""
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
