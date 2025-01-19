// import React from "react";
import { Data } from "../data.js";
import Footer from "./components/footer";
import { Link } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";

export default function Projects() {
  return (
    <section className="grid">
      <div className="p-8">
        <HorizontalOnVerticalScroll />
      </div>
      {Data.projects.map((p, i) => (
        <>
          <Project
            key={i}
            title={p.title}
            image={p.img}
            description={p.description}
            url={p.url}
            skills={p.skill}
            features={p.features}
          />
        </>
      ))}
      <div>
        <Footer />
      </div>
    </section>
  );
}

function Project({ title, image, description, skills, url, features }) {
  return (
    <div className="flex">
      <div>
        <img src={image} alt={title} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
          {features.map((feat) => (
            <>
              <li>{feat}</li>
            </>
          ))}
        </ul>
        <div>
          {skills.map((skill) => (
            <span>{skill}</span>
          ))}
        </div>
        <button>
          <Link to={url}>View Demo</Link>
        </button>
      </div>
    </div>
  );
}

const HorizontalOnVerticalScroll = () => {
  const containerRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setScrollWidth(containerRef.current.scrollWidth - window.innerWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollTop = window.scrollY;
      container.style.transform = `translateX(-${scrollTop}px)`;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        height: `${scrollWidth + window.innerHeight}px`,
        position: "relative",
      }}
    >
      <div
        ref={containerRef}
        style={{
          display: "flex",
          position: "sticky",
          top: 0,
          left: 0,
          width: "fit-content",
          willChange: "transform",
        }}
      >
        {/* العناصر التي يتم تمريرها أفقيًا */}
        <div style={{ width: "50vw", height: "50vh", background: "red" }}>
          Item 1
        </div>
        <div style={{ width: "50vw", height: "50vh", background: "blue" }}>
          Item 2
        </div>
        <div style={{ width: "50vw", height: "50vh", background: "green" }}>
          Item 3
        </div>
        <div style={{ width: "50vw", height: "50vh", background: "gray" }}>
          Item 3
        </div>
        <div style={{ width: "50vw", height: "50vh", background: "black" }}>
          Item 3
        </div>
        <div style={{ width: "50vw", height: "50vh", background: "orange" }}>
          Item 3
        </div>
      </div>
    </div>
  );
};
