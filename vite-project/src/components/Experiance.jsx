//react//

import html from "../../public/html.png";
import css from "../../public/css.jpg";
import javascript from "../../public/javascript.png";
import react from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
import mongodb from "../../public/mongodb.jpg";
import express from "../../public/express.png";

function Portfolio() {
  const cardItem = [
    {
      id: 1,
      name: "HTML",
      logo: html,
    },
    {
      id: 2,
      name: "CSS",
      logo: css,
    },
    {
      id: 3,
      name: "JS",
      logo: javascript,
    },
    {
      id: 4,
      name: "React Developer",
      logo: react,
    },
    {
      id: 5,
      name: "Node.js Developer",
      logo: nodejs,
    },
    {
      id: 6,
      name: "mongoDb",
      logo: mongodb,
    },
    {
      id: 7,
      name: "Express",
      logo: express,
    },
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold text-ellipsis mb-5">Experiance</h1>
        <span className="text-pretty font-serif bg-yellow-100">
          I Have More than 2 Year of experinance in Below Technology.
        </span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-16">
          {cardItem.map(({ id, name, logo }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 "
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className=" px-2 font-bold text-xl mb-2 ">{name}</div>
                <p className="px-2 text-gray-700">
                  I have Work On this Technology and make many Projects from this.
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">Video</button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">Source code</button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
