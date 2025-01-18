import React from "react";
import { Data } from "../data.js";
import Footer from "./components/footer.js";

export default function About() {
  return (
    <section id="About" className=" font-secondary">
      <div className="container mx-auto my-4 tracking-xs flex flex-col md:flex-row md:flex-wrap border-b">
        <div className="w-full md:w-3/5 p-4 md:grid items-center my-10 md:my-24">
          <p>
            Hi, I’m <span className="font-bold text-red-600">{Data.name}</span>,{" "}
            {Data.bio}
          </p>
        </div>
        <div className="w-full md:w-2/5  md:block my-10 md:my-24">
          <img
            src={Data.images.storyImg}
            alt={Data.name}
            className="w-[200px] mx-auto shadow-lg"
          />
        </div>
        <div className="w-full py-14 px-4 grid md:grid-cols-2 gap-8">
          <ShowInterest storyImg="./assets/img/story1.jpg" />
          <Chapter data={Data.story.Beginning} head="The Creative Beginnings">
            <Note content={Data.story.note} />
          </Chapter>

          <Chapter data={Data.story.TechSpark} head="The Tech Spark">
            <Point
              head="The Turning Point:"
              content={Data.story.TurningPoint}
            />
          </Chapter>
          <ShowInterest storyImg="./assets/img/story2.jpg" />

          <ShowInterest storyImg="./assets/img/story3.jpg" />
          <Chapter
            data={Data.story.LearningJourney[0]}
            head="The Learning Journey"
          >
            <ShowSkills skills={Data.skills} />
            {Data.story.LearningJourney[1]}
          </Chapter>

          <Chapter data={Data.story.PresentFuture[0]} head="Present & Future">
            <Point head="Vision:" content={Data.story.Vision} />
            {Data.story.PresentFuture[1]}
          </Chapter>
          <ShowInterest storyImg="./assets/img/story4.png" />
        </div>
      </div>
      <div id="experiance" className="container mx-auto hidden">
        <h2 className="text-5xl">experiance</h2>
      </div>
      <Footer />
    </section>
  );
}

function Chapter({ children, data, head }) {
  return (
    <div className="md:col-span-1">
      <h3 className="chapter-title flex items-center gap-3 font-bold text-black/50 mb-4">
        {head}
      </h3>
      <p className="mb-4">{data}</p>
      {children}
    </div>
  );
}
function Note({ content }) {
  return (
    <div className=" ml-8 p-4 border-l border-black/50 italic text-center bg-black/5">
      <qoute>"{content}"</qoute>
    </div>
  );
}

function Point({ head, content }) {
  return (
    <div className="bg-slate-400/10 p-4 text-sm rounded-md mb-4">
      <p>
        <span className="font-bold">{head}</span> {content}
      </p>
    </div>
  );
}

function ShowSkills({ skills }) {
  return (
    <div className="flex flex-wrap gap-4 mb-4">
      {skills.map((skill) => (
        <span className="px-4 bg-slate-400/10 rounded-md">{skill}</span>
      ))}
    </div>
  );
}

function ShowInterest({ storyImg }) {
  return (
    <div className="col-span-1 flex justify-center items-center">
      <img src={storyImg} className="h-[300px]" />
    </div>
  );
}
