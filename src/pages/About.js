import React, { useState } from "react";
import { Data } from "../Data.js";
import Footer from "./components/Footer.js";
import Menu from "./components/Menu.js";

export default function About() {
  return (
    <section id="About" className="bg-PrimaryDark text-Details font-secondary">
      <div className="container mx-auto tracking-xs flex flex-col md:flex-row md:flex-wrap border-b border-PrimaryLight">
        <div className="w-full md:w-3/5 p-4 md:grid items-center my-10 md:my-24">
          <p>{Data.story.intro}</p>
        </div>
        <div className="w-full md:w-2/5  md:block my-10 md:my-24">
          <img
            src={Data.images.myImg}
            alt={Data.name}
            className="w-[200px] mx-auto shadow-lg"
          />
        </div>
        <div className="w-full py-14 px-4 grid md:grid-cols-2 gap-8">
          <Chapter
            data={Data.story.Beginning}
            head="The Creative Beginnings"
            storyImg={Data.images.storyImg}
          >
            <Note content={Data.story.note} />
          </Chapter>

          <Chapter
            data={Data.story.TechSpark}
            head="The Tech Spark"
            storyImg={Data.images.storyImg}
          >
            <Point
              head="The Turning Point:"
              content={Data.story.TurningPoint}
            />
          </Chapter>

          <Chapter
            data={Data.story.LearningJourney[0]}
            head="The Learning Journey"
            storyImg={Data.images.storyImg}
          >
            <ShowSkills skills={Data.skills} />
            {Data.story.LearningJourney[1]}
          </Chapter>

          <Chapter
            data={Data.story.PresentFuture[0]}
            head="Present & Future"
            storyImg={Data.images.storyImg}
          >
            <Point head="Vision:" content={Data.story.Vision} />
            {Data.story.PresentFuture[1]}
          </Chapter>
        </div>
      </div>
      <div id="experiance" className="container mx-auto p-4">
        <span className="float-end text-xs text-PrimaryLight cursor-default">
          Working on experiance section
        </span>
        {/* <h2 className="text-5xl">experiance</h2> */}
      </div>
      <Menu />
      <Footer />
    </section>
  );
}

function Chapter({ children, data, head, storyImg }) {
  const [popUp, setPopUp] = useState({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPopUp({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top + 20,
    });
  };

  const handleHoverOn = (e) => {
    setIsHover(true);
    handleMouseMove(e);
  };

  const handleHoverOut = () => {
    setIsHover(false);
  };

  return (
    <div
      className="relative md:col-span-1"
      onMouseEnter={handleHoverOn}
      onMouseLeave={handleHoverOut}
      onMouseMove={handleMouseMove}
    >
      <h3 className="chapter-title flex items-center gap-3 font-bold text-Main mb-4">
        {head}
      </h3>
      <p className="mb-4">{data}</p>
      {children}

      {isHover && (
        <div
          className="absolute z-50"
          style={{
            left: `${popUp.x}px`,
            top: `${popUp.y}px`,
            transform: "translate(-50%, 0)",
          }}
        >
          <ShowInterest storyImg={storyImg} />
        </div>
      )}
    </div>
  );
}

function Note({ content }) {
  return (
    <div className="ml-8 p-4 border-l-2 border-PrimaryLight italic text-center bg-Secondary shadow-lg">
      <qoute>"{content}"</qoute>
    </div>
  );
}

function Point({ head, content }) {
  return (
    <div className="bg-Secondary border border-PrimaryLight p-4 text-sm mb-4 shadow-lg">
      <p>
        <span className="font-bold text-Details">{head}</span> {content}
      </p>
    </div>
  );
}

function ShowSkills({ skills }) {
  return (
    <div className="flex flex-wrap gap-4 mb-4">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="shadow-lg px-4 bg-Secondary/30 border border-PrimaryLight "
        >
          {skill}
        </span>
      ))}
    </div>
  );
}

function ShowInterest({ storyImg }) {
  return (
    <div className="col-span-1 flex justify-center items-center">
      <img
        src={storyImg}
        className="w-48 h-32 object-cover rounded-md shadow-md"
        alt="Popup"
      />
    </div>
  );
}
