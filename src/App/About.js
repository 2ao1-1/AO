// import { useNavigate } from "react-router-dom";
import React from "react";
import { Data } from "../data.js";
import Footer from "./components/footer.js";

export default function About() {
  return (
    <section id="About" className="About font-mono">
      <div className="container mx-auto my-4 tracking-xs flex flex-col md:flex-row md:flex-wrap border-b">
        <div className="text-base font-bold md:text-5xl mt-4 mb-8 indent-10 w-full p-4 text-center">
          Hi, I’m <span className="text-red-600">{Data.name}</span>, {Data.bio}
        </div>
        <div className="w-full md:w-1/3  md:block">
          <img src={Data.img} alt={Data.name} className="w-[250px] mx-auto" />
        </div>
        <div className="w-full md:w-2/3 font-mono text-justify text-sm tracking-tight p-4">
          {Data.story.growing.map((story) => (
            <p>{story}</p>
          ))}
          {Data.story.hope.map((story) => (
            <p>{story}</p>
          ))}
        </div>
        {/* <div className="w-full font-mono text-justify gap-10  columns-1 md:columns-2 lg:columns-3 text-sm tracking-tight p-4"></div> */}
      </div>
      <div id="experiance" className="container mx-auto hidden">
        <h2 className="text-5xl">experiance</h2>
      </div>
      <Footer />
    </section>
  );
}
