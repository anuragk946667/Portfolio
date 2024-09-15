// //react//

// import javascript from "../../public/javascript.png";
// import mongodb from "../../public/mongodb.jpg";
// import express from "../../public/express.png";
// import react from "../../public/reactjs.png";
// import nodejs from "../../public/node.png";

// function Portfolio() {
//   const cardItem = [
//     {
//       id: 1,
//       name: "JavaScript Developer",
//       logo: javascript,
//     },
//     {
//       id: 2,
//       name: "MongoDB Developer",
//       logo: mongodb,
//     },
//     {
//       id: 3,
//       name: "Express Developer",
//       logo: express,
//     },
//     {
//       id: 4,
//       name: "React Developer",
//       logo: react,
//     },
//     {
//       id: 5,
//       name: "Node.js Developer",
//       logo: nodejs,
//     },
//   ];
//   return (
//     <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 mt-10">
//       <div>
//         <h1 className="text-3xl font-bold text-ellipsis mb-5">PortFolio</h1>
//         <span className="underline">Featured Project</span>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
//           {cardItem.map(({ id, name, logo }) => (
//             <div
//               className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 "
//               key={id}
//             >
//               <img
//                 src={logo}
//                 className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
//                 alt=""
//               />
//               <div>
//                 <div className=" px-2 font-bold text-xl mb-2 ">{name}</div>
//                 <p className="px-2 text-gray-700">lorem ispum dolor, sir a emrn kwn aass jen ejs</p>
//               </div>
//               <div className=" px-6 py-4 space-x-3 justify-around">
//                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">Video</button>
//                 <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">Source code</button>
//               </div>
//             </div>
//           ))} 
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Portfolio;
