// import { ReactLenis } from "lenis/react";
// import { useRef, useEffect } from "react";
// import { Data } from "../Data";
// import { Link } from "react-router-dom";
// import CircularText from "../components/CircularText";

// // import Header from "./../Layout/Header";
// import Footer from "./../Layout/Footer";
// // import Sidebar from "./../Layout/Sidebar";
// // import MainNoise from "../Layout/MainNoise";

// export default function Home() {
//   return (
//     <ReactLenis root>
//       <main className="relative ">
//         <MainNoise>
//           <Header />
//         </MainNoise>

//         <section className="container mx-auto bg-paper w-full relative">
//           <div className="grid grid-cols-8 gap-10 justify-between py-8 relative">
//             <div className="grid gap-2 col-span-6">
//               {Data.projects.map((project, i) => (
//                 <figure
//                   key={i}
//                   className="sticky top-0 h-screen grid place-content-center"
//                 >
//                   <LandingPageProject
//                     i={i}
//                     bio={project.bio}
//                     img={project.img}
//                     title={project.title}
//                     description={project.description}
//                     skill={project.skill}
//                     url={project.url}
//                     repo={project.repo}
//                   />
//                 </figure>
//               ))}
//             </div>

//             <div className="sticky top-0 h-screen grid place-content-center">
//               <div>
//                 <Sidebar />
//               </div>
//             </div>
//           </div>
//         </section>

//         <Footer />
//       </main>
//     </ReactLenis>
//   );
// }

// function MainNoise({ children, className }) {
//   return (
//     <div className={`${className} bg-paper w-full  relative overflow-hidden`}>
//       <Noise
//         patternSize={300}
//         patternScaleX={1}
//         patternScaleY={1}
//         patternRefreshInterval={2}
//         patternAlpha={15}
//       />
//       {children}
//     </div>
//   );
// }

// function Noise({
//   patternSize = 250,
//   patternScaleX = 1,
//   patternScaleY = 1,
//   patternRefreshInterval = 2,
//   patternAlpha = 15,
// }) {
//   const grainRef = useRef(null);

//   useEffect(() => {
//     const canvas = grainRef.current;
//     const ctx = canvas.getContext("2d");
//     let frame = 0;

//     const patternCanvas = document.createElement("canvas");
//     patternCanvas.width = patternSize;
//     patternCanvas.height = patternSize;
//     const patternCtx = patternCanvas.getContext("2d");
//     const patternData = patternCtx.createImageData(patternSize, patternSize);
//     const patternPixelDataLength = patternSize * patternSize * 4;

//     const resize = () => {
//       canvas.width = window.innerWidth * window.devicePixelRatio;
//       canvas.height = window.innerHeight * window.devicePixelRatio;

//       ctx.scale(patternScaleX, patternScaleY);
//     };

//     const updatePattern = () => {
//       for (let i = 0; i < patternPixelDataLength; i += 4) {
//         const value = Math.random() * 255;
//         patternData.data[i] = value;
//         patternData.data[i + 1] = value;
//         patternData.data[i + 2] = value;
//         patternData.data[i + 3] = patternAlpha;
//       }
//       patternCtx.putImageData(patternData, 0, 0);
//     };

//     const drawGrain = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       ctx.fillStyle = ctx.createPattern(patternCanvas, "repeat");
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
//     };

//     const loop = () => {
//       if (frame % patternRefreshInterval === 0) {
//         updatePattern();
//         drawGrain();
//       }
//       frame++;
//       window.requestAnimationFrame(loop);
//     };

//     window.addEventListener("resize", resize);
//     resize();
//     loop();

//     return () => {
//       window.removeEventListener("resize", resize);
//     };
//   }, [
//     patternSize,
//     patternScaleX,
//     patternScaleY,
//     patternRefreshInterval,
//     patternAlpha,
//   ]);

//   return <canvas className="absolute inset-0 w-full h-full" ref={grainRef} />;
// }

// // header
// function Header({ role }) {
//   return (
//     <header className="container mx-auto w-full">
//       <TopHead />
//       <HeadBar />
//       <Role role={Data.role} />
//     </header>
//   );
// }

// // main head
// function TopHead() {
//   return (
//     <div className="border-b border-midText flex items-center">
//       <Logo />

//       {/* portfolio */}
//       <div className="p-4 flex items-center w-1/2 justify-center">
//         <h1 className="font-title text-8xl">My Portfolio</h1>
//       </div>

//       {/* site map */}
//       <SiteMap />
//     </div>
//   );
// }
// function Logo() {
//   return (
//     <div className="p-4 w-1/4">
//       <CircularText
//         text={Data.role + " "}
//         onHover="speedUp"
//         spinDuration={20}
//         className="custom-class flex justify-center items-center"
//       >
//         <img
//           src="/src/assets/images/favicon.png"
//           alt=""
//           className="w-[40px] h-[40px] grayscale-100"
//         />
//       </CircularText>
//     </div>
//   );
// }
// function SiteMap() {
//   return (
//     <div className="p-4 w-1/4">
//       <span className="text-midText text-sm">Sitemap</span>

//       <div className="text-base leading-6 text-Details">
//         {Data.siteMap.map((page, index) => (
//           <span key={index}>
//             <Link
//               to={page === "Index" ? "/" : `/${page}`}
//               className="hover:text-Main hover:border-b-2 border-darktext transition-colors"
//             >
//               {page === "Projects" ? `${page}[${Data.projects.length}]` : page}
//             </Link>
//             {index < Data.siteMap.length - 1 && ", "}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }

// // Head bar
// function HeadBar() {
//   return (
//     <div className="container mx-auto border-b border-midText flex items-center gap-8 justify-evenly">
//       {/* update info */}
//       <UpdateInfo>Latest</UpdateInfo>

//       {/* email */}
//       <MainLinks>
//         <Link to={Data.social[5].link}>{Data.email}</Link>
//       </MainLinks>

//       {/* name */}
//       <h2 className="text-xl font-bold font-subHead">{Data.name}</h2>

//       {/* github */}
//       <MainLinks>
//         <Link to={Data.social[1].link}>{Data.social[1].link}</Link>
//       </MainLinks>

//       {/* update info */}
//       <UpdateInfo>Edition</UpdateInfo>
//     </div>
//   );
// }

// /* update info */
// function UpdateInfo({ children }) {
//   return <span className="text-midText text-sm">{children}</span>;
// }

// /* used links */
// function MainLinks({ children }) {
//   return <span className="text-sm font-subHead">{children}</span>;
// }

// // role
// function Role({ role }) {
//   return (
//     <div className="flex justify-center pt-4 border-b border-midText items-center w-full md:col-span-3">
//       <h1 className="text-9xl font-bold font-headline">{role}</h1>
//     </div>
//   );
// }

// // projects
// function LandingPageProject({
//   i,
//   bio,
//   img,
//   title,
//   description,
//   skill,
//   url,
//   repo,
// }) {
//   return (
//     <div className="w-full my-8 relative h-screen col-span-6">
//       {/* {Data.projects.map((p, i) => ( */}
//       {Data.projects.map((p, i) => (
//         <MainNoise key={i} className=" absolute top-0 bg-paper">
//           {/* project img */}
//           <ProjetImg src={img} title={title} bio={bio} />

//           {/* projet description */}
//           <LandingProjectDescription
//             description={description}
//             skills={skill}
//             url={url}
//             repo={repo}
//           />
//         </MainNoise>
//       ))}
//     </div>
//   );
// }

// function ProjetImg({ src, title, bio }) {
//   return (
//     <div className="border-b border-lightText grayscale-100">
//       <img src={src} alt={title} />
//       <p className="text-xs py-2 border-b">{bio}</p>
//       <h3 className="font-subHead text-4xl py-4">{title}</h3>
//     </div>
//   );
// }

// function LandingProjectDescription({ description, skills, url, repo }) {
//   return (
//     <div className="py-4 columns-2">
//       <p>{description}</p>
//       <div>
//         <h4 className="font-semibold mb-2">Skills:</h4>
//         <ul className="flex flex-wrap gap-2">
//           {/* {Data.skills.map((skill, i) => (
//             <li
//               key={i}
//               className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
//             >
//               {skill}
//             </li>
//           ))} */}
//         </ul>
//       </div>
//       <div className="flex gap-4 py-4">
//         <Link to={url}>
//           <button className="px-4 bg-midText hover:bg-darktext text-white border">
//             Demo
//           </button>
//         </Link>
//         <Link to={repo}>
//           <button className="px-4 bg-midText hover:bg-darktext text-white border">
//             Repo
//           </button>
//         </Link>
//         <Link to="/">
//           <button className="px-4 bg-midText hover:bg-darktext text-white border">
//             See More
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// // sidebar
// function Sidebar() {
//   return (
//     <>
//       {/* about */}
//       <LandingAbout src={Data.images.myImg} name={Data.name} bio={Data.bio} />
//       {/* education */}
//       <LandingEducation edu={Data.education} />

//       {/* skills */}
//       <div className="py-8">
//         <h2 className="font-bold">Skills:</h2>
//         <div style={{ height: "170px", position: "relative" }}></div>
//       </div>
//     </>
//   );
// }

// function LandingAbout({ src, name, bio }) {
//   return (
//     <div className="border-b pb-4">
//       <div className="grid justify-end pt-8 pb-4 border-b mb-4 h-[30%]">
//         <img src={src} alt={name} className="object-cover" />
//         <p className="text-xs">{name}</p>
//       </div>
//       <p>{bio}</p>
//     </div>
//   );
// }

// function LandingEducation({ edu }) {
//   return (
//     <div className="border-b py-4">
//       <h2 className="font-bold">Education:</h2>
//       <i>
//         {edu.field}, <br />
//         {edu.uni}
//       </i>
//     </div>
//   );
// }

import React, { useRef, useState, useEffect } from "react";
import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
// import Image from "next/image";

const projects = [
  {
    title: "Matthias Leidinger",
    description:
      "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    link: "https://images.unsplash.com/photo-1605106702842-01a887a31122?q=80&w=500&auto=format&fit=crop",
    color: "#5196fd",
  },
  {
    title: "Clément Chapillon",
    description:
      "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes.",
    link: "https://images.unsplash.com/photo-1605106250963-ffda6d2a4b32?w=500&auto=format&fit=crop&q=60",
    color: "#8f89ff",
  },
  {
    title: "Zissou",
    description: `'Though he views photography as a medium for storytelling, Zissou's images don't insist on a narrative. Both crisp and ethereal.'`,
    link: "https://images.unsplash.com/photo-1605106901227-991bd663255c?w=500&auto=format&fit=crop",
    color: "#13006c",
  },
];

const Card = ({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative h-[450px] w-[70%] rounded-md p-10 origin-top"
      >
        <h2 className="text-2xl text-center font-semibold">{title}</h2>
        <div className="flex h-full mt-5 gap-10">
          <div className="w-[40%] relative top-[10%]">
            <p className="text-sm">{description}</p>
            <span className="flex items-center gap-2 pt-2">
              <a href="#" className="underline cursor-pointer">
                See more
              </a>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>
          <div className="relative w-[60%] h-full rounded-lg overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              {/* <Image fill src={url} alt="image" className="object-cover" /> */}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Home = () => {
  const [opacity, setOpacity] = useState(0.15);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main className="relative bg-black" ref={container}>
        {/* Noise Overlay */}
        <div
          className="absolute top-0 left-0 w-full h-full content-[''] z-10 pointer-events-none bg-[url('https://res.cloudinary.com/dzl9yxixg/image/upload/noise_yvdidf.gif')]"
          style={{ opacity }}
        />

        {/* Hero Section */}
        <section className="text-white h-[70vh] w-full bg-slate-950 grid place-content-center">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
            Stacking Cards with Noise Effect
            <br />
            Scroll down! 👇
          </h1>
        </section>

        {/* Cards Section */}
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>

        {/* Footer */}
        <footer className="group bg-slate-950">
          <h1 className="text-[16vw] translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear">
            ui-layout
          </h1>
          <div className="bg-black h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full" />
        </footer>
      </main>
    </ReactLenis>
  );
};

export default Home;
