// import React from "react";
// import { Data } from "./data";
import React, { useRef, useEffect, useState } from "react";
import Footer from "./components/footer";

export default function Contacts() {
  return (
    <section>
      Contact Page Content
      {/* <HorizontalOnVerticalScroll />
      <HorizontalOnVerticalScroll /> */}
      <Footer />
    </section>
  );
}

// const HorizontalOnVerticalScroll = () => {
//   const containerRef = useRef(null);
//   const [scrollWidth, setScrollWidth] = useState(0);

//   useEffect(() => {
//     const handleResize = () => {
//       if (containerRef.current) {
//         setScrollWidth(containerRef.current.scrollWidth - window.innerWidth);
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleScroll = () => {
//     if (containerRef.current) {
//       const container = containerRef.current;
//       const scrollTop = window.scrollY;
//       container.style.transform = `translateX(-${scrollTop}px)`;
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div
//       style={{
//         height: `${scrollWidth + window.innerHeight}px`,
//         position: "relative",
//       }}
//     >
//       <div
//         ref={containerRef}
//         style={{
//           display: "flex",
//           position: "sticky",
//           top: 0,
//           left: 0,
//           width: "fit-content",
//           willChange: "transform",
//         }}
//       >
//         {/* العناصر التي يتم تمريرها أفقيًا */}
//         <div style={{ width: "100vw", height: "80vh", background: "red" }}>
//           Item 1
//         </div>
//         <div style={{ width: "100vw", height: "80vh", background: "blue" }}>
//           Item 2
//         </div>
//         <div style={{ width: "100vw", height: "80vh", background: "green" }}>
//           Item 3
//         </div>
//       </div>
//     </div>
//   );
// };
