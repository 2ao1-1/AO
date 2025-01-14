import { Link } from "react-router-dom";
import { Data } from "../data";
import SiteMap from "./SiteMap";
import SocialMedia from "./SocialMedia";

export default function Navbar() {
  return (
    <nav className="border-b font-mono">
      <div className="container mx-auto flex md:grid md:grid-cols-4 md:gap-24 justify-between items-center py-2 px-4 cursor-default">
        <Name />
        <Status />
        <SiteMap />
        <SocialMedia />
      </div>
    </nav>
  );
}

function Name() {
  return (
    <div>
      <span className="text-gray-500 text-[8px] md:text-sm">Name</span>
      <p className="text-[10px] md:text-base text-black tracking-sm">
        <span className="hover:border-b-2 border-black transition-colors">
          <Link to="/">{Data.name}</Link>
        </span>
        __@{Data.birthYear}, {Data.role}.
      </p>
    </div>
  );
}

function Status() {
  return (
    <div className="">
      <span className="text-gray-500 text-[8px] md:text-sm">Status</span>
      <p className="text-[10px] md:text-base text-black tracking-sm">
        Currently<span className="text-red-600"> {Data.status}</span>
      </p>
    </div>
  );
}
