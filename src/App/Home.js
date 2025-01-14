import React from "react";
import { Data } from "../data.js";

export default function Home() {
  return (
    <section className="page container mx-auto h-svh flex flex-col md:flex-row justify-between md:overflow-hidden font-mono items-center">
      <MainContent />
      <Image />
      <ScrollInfo />
    </section>
  );
}
function MainContent() {
  return (
    <div className="md:w-1/2 mx-4 my-16 md:my-20">
      <h1 className="text-xl md:text-3xl text-black mb-10">
        Hi I'm {Data.name}.
        <br />
        I'm a <span className="text-red-600">{Data.role}</span> from{" "}
        {Data.location.city} {Data.location.country}.
      </h1>
      <LastProjects />
    </div>
  );
}

function LastProjects() {
  return (
    <div>
      <div className="relative w-full h-60 py-2 overflow-hidden">
        <div className="projects absolute left-full flex gap-8 animate-scrollProjects">
          <ShowProjects />
        </div>
      </div>
      <button className="border-b-2 border-black px-1 text-xl hover:bg-black hover:text-white transition-colors">
        View My Work
      </button>
    </div>
  );
}

function ShowProjects() {
  return Data.projects.map((project, i) => {
    return (
      <div
        className="w-72 h-48 bg-white flex text-xl font-semibold text-gray-800 relative overflow-hidden"
        key={i}
      >
        <div className="w-full h-full flex items-center justify-center">
          <img
            src="https://via.placeholder.com/150"
            alt={project.title}
            className="w-full h-full "
          />
        </div>
        <div className="p-4 absolute bg-white/50 bg-opacity-90 text-black tracking-wide bottom-0 w-full">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      </div>
    );
  });
}

function Image() {
  console.log(Data.img);
  return (
    <div className="justify-center items-center flex  my-10 relative w-[350px]">
      <img
        // src={Data.img}
        src="./public/assets/img/My__img.jpg"
        className="mx-auto w-40 md:w-[350px]"
        alt={Data.name}
      />
    </div>
  );
}

function ScrollInfo() {
  return (
    <p className="text-gray-500  relative md:fixed bottom-5 right-10  tracking-wide hover:text-black cursor-pointer">
      Use menu to explore
    </p>
  );
}
