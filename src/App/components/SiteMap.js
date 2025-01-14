import { Link } from "react-router-dom";
import { Data } from "../../data";

export default function SiteMap() {
  return (
    <div className="hidden md:block">
      <span className="text-gray-500 text-[8px] md:text-base">Sitemap</span>
      <SiteLink />
    </div>
  );
}
function SiteLink() {
  return (
    <div className="text-[10px] md:text-base text-black leading-6">
      {Data.siteMap.map((page, index) => (
        <span key={index}>
          <Link
            to={page === "Index" ? "/" : `/${page}`}
            className="hover:border-b-2 border-black transition-colors"
          >
            {page === "Projects" ? `${page}[${Data.projects.length}]` : page}
          </Link>
          {index < Data.siteMap.length - 1 && ", "}
        </span>
      ))}
    </div>
  );
}
