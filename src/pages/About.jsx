"use client";
import { ReactLenis } from "lenis/react";
import Sidebar from "../Layout/Sidebar";
import Footer from "../Layout/Footer";

export default function index() {
  return (
    <ReactLenis root>
      <main className="bg-black">
        <section className="text-white w-full bg-slate-950">
          <div className="flex justify-between px-16">
            {/* Main Content */}
            <div className="flex-1">
              <figure className="sticky top-0 h-screen grid place-content-center">
                <article className="bg-green-500 h-72 w-[30rem] rounded-lg rotate-6 p-4 grid place-content-center gap-4">
                  <h1 className="text-2xl font-semibold">Image MouseTrail</h1>
                  <p>
                    An Mouse who is running with couple of images and the best
                    part is you can hide all the images when you don't move your
                    mouse. I hope you'll love it
                  </p>
                  <a
                    href="https://ui-layout.com/components/image-mousetrail"
                    target="_blank"
                    className="w-fit bg-black p-3 rounded-md cursor-pointer"
                  >
                    Click to View
                  </a>
                </article>
              </figure>
              <figure className="sticky top-0 h-screen grid place-content-center">
                <article className="bg-red-400 h-72 w-[30rem] rounded-lg p-4 grid place-content-center gap-4">
                  <h1 className="text-2xl font-semibold">
                    Progressive Carousel
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius consequatur explicabo assumenda odit necessitatibus
                    possimus ducimus aliquam. Ullam dignissimos animi officiis,
                    in sequi et inventore harum ipsam sed.
                  </p>
                  <a
                    href="https://ui-layout.com/components/progressive-carousel"
                    target="_blank"
                    className="w-fit bg-black p-3 rounded-md cursor-pointer"
                  >
                    Click to View
                  </a>
                </article>
              </figure>
              {/* You can add more figures here */}
            </div>

            {/* Sidebar */}
            <div className="w-1/4 bg-gray-800 p-6 rounded-lg sticky top-0 h-screen">
              <Sidebar />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </ReactLenis>
  );
}
