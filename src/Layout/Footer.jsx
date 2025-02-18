import { Data } from "./../Data";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <FooterBar />
      <div className="container mx-auto p-4 flex justify-center gap-8">
        <Link to={Data.contacts[1].link}>
          <span>{Data.email}</span>
        </Link>
        <Link to={"/"}>
          <img src="./../src/assets/qr-code.svg" alt="" className="w-8" />
        </Link>
        <span>@{Data.name}</span>
      </div>
    </footer>
  );
}

function FooterBar() {
  return (
    <div className="container mx-auto border-y border-midText text-midText p-2 flex items-center gap-8 justify-evenly">
      {Data.social.map((social, i) => (
        <span key={i}>
          <Link to={social.link}>{social.name}</Link>
        </span>
      ))}
    </div>
  );
}
