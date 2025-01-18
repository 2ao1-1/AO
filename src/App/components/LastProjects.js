import React, { useState } from "react";
import { Data } from "../../data";
import { Link } from "react-router-dom";

export function LastProjects() {
  return (
    <div>
      <div className="relative w-full h-60 py-2 overflow-hidden gap-8">
        <div className="flex whitespace-nowrap">
          <div className="animate-scrollProjects flex gap-8">
            <ShowProjects />
          </div>
        </div>
      </div>
      <Link
        className="border-b-2 border-black px-1 text-xl hover:bg-black hover:text-white before:translate-x-0 after:translate-x-full transition-colors animate-infinite-scroll"
        to={Data.siteMap[Data.siteMap.indexOf("Projects")]}
      >
        View My Work
      </Link>
    </div>
  );
}
function ShowProjects() {
  const [hover, setHover] = useState({});

  return Data.projects.map((project, i) => (
    <div
      className="w-72 h-48 bg-white flex text-xl font-semibold text-gray-800 relative overflow-hidden"
      key={i}
      onMouseEnter={() => setHover((h) => ({ ...h, [i]: true }))}
      onMouseLeave={() => setHover((h) => ({ ...h, [i]: false }))}
    >
      <div className="w-full h-full flex items-center justify-center">
        <img src={project.img} alt={project.title} className="w-full h-full" />
      </div>
      {hover[i] && (
        <div className="p-4 absolute bg-black/50 bg-opacity-90 text-white tracking-wide bottom-0 w-full h-full flex justify-center items-center">
          <h3>{project.title}</h3>
        </div>
      )}
    </div>
  ));
}
