import { Data } from "../Data";
import { Link } from "react-router-dom";

// components
import Logo from "./Logo";
import SiteMap from "../components/Sitemap";

export default function Header({ role }) {
  return (
    <header className="container mx-auto w-full">
      <TopHead />
      <HeadBar />
      <Role role={role} />
    </header>
  );
}

// main head
function TopHead() {
  return (
    <div className="border-b border-midText flex items-center">
      <Logo />

      {/* portfolio */}
      <div className="p-4 flex items-center w-1/2 justify-center">
        <h1 className="font-title text-8xl">My Portfolio</h1>
      </div>

      {/* site map */}
      <SiteMap />
    </div>
  );
}

// Head bar
function HeadBar() {
  return (
    <div className="container mx-auto border-b border-midText flex items-center gap-8 justify-evenly">
      {/* update info */}
      <UpdateInfo>Latest</UpdateInfo>

      {/* email */}
      <MainLinks>
        <Link to={Data.contacts[0].link}>{Data.email}</Link>
      </MainLinks>

      {/* name */}
      <h2 className="text-xl font-bold font-subHead">{Data.name}</h2>

      {/* github */}
      <MainLinks>
        <Link to={Data.contacts[1].link}>{Data.contacts[1].name}</Link>
      </MainLinks>

      {/* update info */}
      <UpdateInfo>Edition</UpdateInfo>
    </div>
  );
}

/* update info */
function UpdateInfo({ children }) {
  return <span className="text-midText text-sm">{children}</span>;
}

/* used links */
function MainLinks({ children }) {
  return <span className="text-sm font-subHead">{children}</span>;
}

// role
function Role({ role }) {
  return (
    <div className="flex justify-center pt-4 border-b border-midText items-center w-full md:col-span-3">
      <h1 className="text-9xl font-bold font-headline">{role}</h1>
    </div>
  );
}
