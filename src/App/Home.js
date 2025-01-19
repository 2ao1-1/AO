import React from "react";
import { Data } from "../data.js";
import { LastProjects } from "./components/LastProjects.js";

export default function Home() {
  // const [showMenu, setShowMenu] = useState(0);

  return (
    <section className="page container mx-auto h-full flex flex-col md:flex-row justify-between md:overflow-hidden font-mono items-center">
      <MainContent />
      <Image />
      <Menu />
    </section>
  );
}
function MainContent() {
  return (
    <div className="w-full md:w-1/2 p-4 mx-4 my-16 md:my-20">
      <h1 className="text-4xl md:text-6xl text-black mb-10 font-primary">
        My name is <span className="text-red-600">{Data.name}</span>.
        <br />
        I'm a <span className="text-red-600">{Data.role}</span> from{" "}
        {Data.location.city} {Data.location.country}.
      </h1>
      <LastProjects />
    </div>
  );
}

function Image() {
  return (
    <div className="justify-center items-center flex  my-10 relative w-full md:w-1/2">
      <img
        src={Data.images.hero}
        className="heroImg mx-auto w-40 md:w-[300px]"
        alt={Data.name}
      />
    </div>
  );
}

function Menu() {
  return (
    <p className="text-gray-500 relative md:fixed bottom-10 right-10  tracking-wide hover:text-black cursor-pointer">
      Use menu to explore
    </p>
  );
}
