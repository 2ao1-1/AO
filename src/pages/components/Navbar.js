import React from "react";
import { Link } from "react-router-dom";
import { Data } from "./../../Data.js";
import { MenuBtn } from "./MenuBtn";
import SiteMap from "./SiteMap.js";
import SocialMedia from "./SocialMedia.js";

export default function Navbar() {
  return (
    <nav className="border-b border-PrimaryLight bg-PrimaryDark font-mono">
      <div className="container mx-auto flex justify-between items-center py-2 px-4 cursor-default">
        <Name />
        <Status />
        <SiteMap hide={"hidden"} width={"w-[250px]"} />
        <SocialMedia hide={"hidden"} width={"w-[250px]"} />

        <MenuBtn />
      </div>
    </nav>
  );
}

function Name() {
  return (
    <div className="md:w-[200px]">
      <span className="text-PrimaryLight text-[8px] md:text-sm">Name</span>
      <p className="text-[10px] md:text-base text-Details tracking-sm">
        <span className="text-Main hover:border-b-2 border-PrimaryLight transition-colors">
          <Link to="/">{Data.name}</Link>
        </span>
        __@{Data.birthYear}, {Data.role}.
      </p>
    </div>
  );
}

function Status() {
  return (
    <div className="md:w-[200px]">
      <span className="text-PrimaryLight text-[8px] md:text-sm">Status</span>
      <p className="text-[10px] md:text-base text-Details tracking-sm">
        Currently<span className="text-Main"> {Data.status}</span>
      </p>
    </div>
  );
}
