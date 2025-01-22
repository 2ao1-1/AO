import React from "react";
import { Data } from "../Data.js";
import { LastProjects } from "./components/LastProject.js";
import Menu from "./components/Menu.js";

export default function Home() {
  return (
    <section className="min-h-screen bg-PrimaryDark">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-8">
          {/* Hero Section */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 p-4">
            {/* Text Content */}
            <MainContent />

            {/* Image */}
            <Image />
          </div>

          {/* Projects Section */}
          <div className="w-full">
            <LastProjects />
          </div>
        </div>
        <Menu />
      </div>
    </section>
  );
}

function MainContent() {
  return (
    <div className="w-full md:w-1/2 space-y-6">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-Details font-primary inline-block cursor-default">
        My name is <span className="text-Main inline-block">{Data.name}</span>.
        <br />
        I'm a <span className="text-Main inline">{Data.role}</span> from{" "}
        {Data.location.city} {Data.location.country}.
      </h1>
    </div>
  );
}

function Image() {
  return (
    <div className="w-full md:w-1/2 flex justify-end items-center">
      <div className="relative w-48 sm:w-56 md:w-64 lg:w-72 aspect-square">
        <img
          src={Data.images.myImg}
          className="w-full h-full object-contain"
          alt={Data.name}
        />
      </div>
    </div>
  );
}
