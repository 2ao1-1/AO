import React, { useState, useRef, useEffect } from "react";
import { Data } from "../../Data";
import { Link } from "react-router-dom";

export function LastProjects() {
  return (
    <div className="space-y-6">
      <div className="relative w-full overflow-hidden">
        <div className="flex">
          <AdvancedScroll />
        </div>
        <span className="float-end text-xs text-PrimaryLight cursor-default">
          click to preview
        </span>
      </div>
      <Link
        className="border-b-2 border-PrimaryLight px-1 text-xl hover:bg-Main hover:text-PrimaryDark transition-colors"
        to={Data.siteMap[Data.siteMap.indexOf("Projects")]}
      >
        View My Work
      </Link>
    </div>
  );
}

const AdvancedScroll = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const animate = () => {
      if (!isPaused && containerRef.current) {
        containerRef.current.scrollLeft += 1;
        if (
          containerRef.current.scrollLeft >=
          (containerRef.current.scrollWidth -
            containerRef.current.clientWidth) /
            2
        ) {
          containerRef.current.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-4">
      <div
        ref={containerRef}
        className={`flex gap-6 scrollbar-hide relative overflow-x-scroll whitespace-nowrap cursor-grab select-none ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          setIsDragging(false);
        }}
      >
        <div className="inline-flex gap-8 animate-carousel">
          <ProjectsList />
          <ProjectsList />
          <ProjectsList />
        </div>
      </div>
    </div>
  );
};

function ProjectsList() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      {Data.projects.map((project, i) => (
        <Link
          to={project.url}
          target="_blank"
          key={project.title}
          className={`relative group w-80 h-52 flex-shrink-0 overflow-hidden p-1 border border-PrimaryLight transition-all duration-300 ${
            hoveredIndex === i ? "scale-110" : ""
          }`}
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="w-full h-full">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={project.img}
              alt={project.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-PrimaryDark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-primary text-xl text-Main font-bold mb-2 border-b border-PrimaryLight/30 pb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-Main/80 mb-4 line-clamp-2">
                  {project.bio}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.skill.map((item) => (
                    <span
                      key={item}
                      className="text-xs border border-PrimaryLight/50 hover:border-Main px-2 py-1 text-Main/90 hover:text-Main transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

const style = document.createElement("style");
style.textContent = `
  @keyframes carousel {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  .animate-carousel {
    animation: carousel 60s linear infinite;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;
document.head.appendChild(style);
