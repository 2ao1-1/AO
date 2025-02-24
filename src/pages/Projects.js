import { Data } from "../Data.js";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
import Menu from "./components/Menu";
import Task from "./components/Tasks.js";
// import BlogPage from "./components/Blog.js";
export default function Projects() {
  return (
    <section className="min-h-screen bg-PrimaryDark text-Details font-secondary">
      <div className="container mx-auto">
        <div className="p-4 lg:p-8">
          <h1 className="text-4xl lg:text-6xl font-bold text-Main my-4">
            Selected Projects
            <br /> <span className="float-end">2024-2025</span>
          </h1>
          <HorizontalOnVerticalScroll />
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-10">
          <h2 className="text-4xl font-bold text-Main mb-12 col-span-1 md:col-span-2 lg:col-span-4">
            Tasks
          </h2>

          {Data.Tasks.map((p, i) => (
            <Task
              key={i}
              title={p.title}
              image={p.img}
              url={p.url}
              skills={p.skill}
              bio={p.bio}
              type={p.type}
            />
          ))}
        </div>*/}
      </div>
      {/* <div className="container mx-auto p-4">
        <span className="float-end text-xs text-PrimaryLight cursor-default">
          Working on Blog section
        </span>
        <BlogPage />
      </div> */}
      <Menu />
      <Footer />
    </section>
  );
}

const HorizontalOnVerticalScroll = () => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hasReachedTriggerPoint, setHasReachedTriggerPoint] = useState(false);

  const SCROLL_TRIGGER_POINT = 100;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll >= SCROLL_TRIGGER_POINT) {
        setHasReachedTriggerPoint(true);

        const extraScroll = currentScroll - SCROLL_TRIGGER_POINT;
        const maxExtraScroll = window.innerHeight * 3 - SCROLL_TRIGGER_POINT;
        const horizontalScrollPercentage = Math.min(
          (extraScroll / maxExtraScroll) * 100,
          100
        );

        setScrollPosition(horizontalScrollPercentage);
      } else {
        setHasReachedTriggerPoint(false);
        setScrollPosition(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (containerRef.current && hasReachedTriggerPoint) {
      const container = containerRef.current;
      const totalScroll = container.scrollWidth - container.clientWidth;
      const currentScroll = (scrollPosition / 100) * totalScroll;
      container.scrollLeft = currentScroll;
    }
  }, [scrollPosition, hasReachedTriggerPoint]);

  return (
    <div
      className="relative"
      style={{
        height: `${window.innerHeight * 4}px`,
      }}
    >
      <div
        ref={containerRef}
        className="sticky top-0 flex overflow-x-auto w-full p-2 md:p-10 gap-4"
        style={{
          height: "100vh",
        }}
      >
        {Data.projects.map((p, i) => (
          <div
            key={i}
            className="flex justify-center flex-shrink-0 w-full border h-[90vh] p-2 md:p-4"
          >
            <Project
              title={p.title}
              image={p.img}
              description={p.description}
              url={p.url}
              skills={p.skill}
              features={p.features}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

function Project({ title, image, description, skills, url, features }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-7xl mx-auto p-0 md:p-4">
      <div className="relative w-full md:w-1/2 h-64 md:h-auto max-w-sm md:max-w-full">
        <img
          className="object-cover w-full h-full shadow-lg "
          src={image}
          alt={title}
        />
      </div>

      <div className="w-full md:w-1/2 space-y-6 overflow-y-scroll px-4 max-h-[60vh] ">
        <h3 className="text-2xl md:text-4xl text-Main font-primary break-words">
          {title}
        </h3>

        <div className="flex flex-wrap gap-2 items-center">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="shadow-md px-3 py-1 bg-Secondary/30 border border-PrimaryLight  text-xs md:text-sm"
            >
              {skill}
            </span>
          ))}
          |
          <Link
            to={url}
            target="_blank"
            className="ml-4 text-sm text-Main hover:text-Details hover:border-b hover:border-Main transition-colors"
          >
            View Demo
          </Link>
        </div>

        <div className={`text-ellipsis ${isExpanded ? "" : "line-clamp-3"}`}>
          <p className="text-sm md:text-base text-Details">{description}</p>

          <ul className="space-y-2">
            {features.map((feat, index) => (
              <li
                key={index}
                className="flex items-start text-sm md:text-base text-Details"
              >
                <span className="mr-2 text-Main">-</span>
                <span className="break-words">{feat}</span>
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs md:text-sm text-Main underline hover:text-Details transition-colors"
        >
          {isExpanded ? "Show less" : "Show more"}
        </button>
      </div>
    </div>
  );
}
