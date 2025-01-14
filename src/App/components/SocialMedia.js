import { data, Link } from "react-router-dom";
import { Data } from "../data";

export default function SocialMedia() {
  return (
    <div className="hidden md:block">
      <span className="text-gray-500 text-[8px] md:text-base">
        Let's connect
      </span>
      <SocialLink />
    </div>
  );
}
function SocialLink() {
  return (
    <div className="text-[10px] md:text-base text-black leading-6">
      {Data.social.map((link, index) => (
        <span key={index}>
          <Link
            to={link.link}
            target="_blank"
            className="hover:border-b-2 border-black transition-colors"
          >
            {link.name}
          </Link>
          {index < Data.social.length - 1 && ", "}
        </span>
      ))}
      .
    </div>
  );
}
