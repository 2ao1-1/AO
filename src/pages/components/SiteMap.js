import { Link } from "react-router-dom";
import { Data } from "../../Data";

export default function SiteMap({ hide, width }) {
  return (
    <div className={`${hide} ${width}  md:block`}>
      <span className="text-PrimaryLight text-[8px] md:text-sm">Sitemap</span>
      <SiteLink />
    </div>
  );
}
function SiteLink() {
  return (
    <div className="text-base leading-6 text-Details">
      {Data.siteMap.map((page, index) => (
        <span key={index}>
          <Link
            to={page === "Index" ? "/" : `/${page}`}
            className="hover:text-Main hover:border-b-2 border-PrimaryLight transition-colors"
          >
            {page === "Projects" ? `${page}[${Data.projects.length}]` : page}
          </Link>
          {index < Data.siteMap.length - 1 && ", "}
        </span>
      ))}
    </div>
  );
}
