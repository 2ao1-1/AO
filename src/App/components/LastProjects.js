import React, { useState, useRef, useEffect } from "react";
import { Data } from "../../data";
import { Link } from "react-router-dom";

export function LastProjects() {
  return (
    <div>
      <div className="relative w-full py-2 overflow-hidden gap-8">
        <div className="">
          <div className="flex">
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
  return <DraggableInfiniteCarousel />;
}

const DraggableInfiniteCarousel = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  // التحريك التلقائي
  useEffect(() => {
    const animate = () => {
      if (!isPaused && containerRef.current) {
        containerRef.current.scrollLeft += 1;

        // إعادة التعيين عند الوصول للنهاية
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

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    setIsDragging(false);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div
        ref={containerRef}
        className={`
          relative 
          overflow-x-scroll 
          whitespace-nowrap 
          cursor-grab
          select-none 
          scrollbar-hide
          ${isDragging ? "cursor-grabbing" : ""}
        `}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="inline-flex gap-6 p-4">
          {Data.projects.map((project, i) => (
            <div
              key={project.title}
              className={`
                w-96 h-56 
                flex-shrink-0 
                rounded-xl 
                flex items-center justify-center 
                text-white text-3xl font-bold
                transform hover:scale-105 transition-all duration-300
                shadow-lg 
                backdrop-blur-md
              `}
            >
              <div className="w-full h-full relative">
                <img
                  className="relative w-full h-full z-0 object-cover rounded-xl"
                  src={project.img}
                />
                {isPaused && (
                  <div className="absolute top-0 w-96 h-56 z-10 bg-black/30 flex flex-col flex-wrap justify-center items-center rounded-xl">
                    <h3>{project.title}</h3>
                    <p className="text-sm w-3/4 flex-wrap flex">
                      {project.bio}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.skill.map((item) => (
                        <span className="bg-white text-black rounded-md text-sm px-2">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
          {/* تكرار نفس العناصر للتمرير اللانهائي */}
          {Data.projects.map((project, i) => (
            <div
              key={project.title}
              className={`
                w-96 h-56 
                flex-shrink-0 
                rounded-xl 
                flex items-center justify-center 
                text-black text-3xl font-bold
                transform hover:scale-105 transition-all duration-300
                border border-white/20 
                shadow-lg 
                backdrop-blur-md
              `}
            >
              <div className="w-full h-full relative">
                <img
                  className="relative w-full h-full z-0 object-cover"
                  src={project.img}
                />
                {isPaused && (
                  <div className="absolute top-0 w-full h-full z-10 bg-black/30 flex flex-col justify-center items-center rounded-xl">
                    <h3>{project.title}</h3>
                    <p>{project.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.skill.map((item) => (
                        <span className="bg-white rounded-md text-sm px-2">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// إضافة styles لإخفاء scrollbar
const style = document.createElement("style");
style.textContent = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;
document.head.appendChild(style);
