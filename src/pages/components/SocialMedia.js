import { Link } from "react-router-dom";
import { Data } from "../../Data";

export default function SocialMedia({ hide, width }) {
  return (
    <div className={`${hide} ${width} md:block`}>
      <span className="text-PrimaryLight text-[8px] md:text-sm">
        Let's connect
      </span>
      <SocialLink />
    </div>
  );
}
function SocialLink() {
  return (
    <div className="text-Details text-base  leading-6 ">
      {Data.social.map((link, index) => (
        <span key={index}>
          <Link
            to={link.link}
            target="_blank"
            className="hover:text-Main hover:border-b-2 border-PrimaryLight transition-colors"
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
