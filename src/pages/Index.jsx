import { Data } from "./../Data";
import { Link } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";

// Layout
import MainNoise from "../Layout/MainNoise";
import Header from "../Layout/Header";
import LandingPageProject from "../Layout/LandingPageProject";
import Sidebar from "../Layout/Sidebar";
import Footer from "../Layout/Footer";

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <MainNoise>
        <main ref={container} className="relative">
          <div className=" text-texts w-full z-50 relative">
            <Header role={Data.role} />
            <section className="container mx-auto grid md:grid-cols-8 gap-10">
              <LandingPageProject />
              <Sidebar />
            </section>
          </div>
          <Footer />
        </main>
      </MainNoise>
    </ReactLenis>
  );
}
