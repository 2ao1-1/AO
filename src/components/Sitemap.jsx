import { Data } from "../Data";
import { Link } from "react-router-dom";

export default function SiteMap() {
  return (
    <div className="p-4 w-1/4">
      <span className="text-midText text-sm">Sitemap</span>

      <div className="text-base leading-6 text-Details">
        {Data.siteMap.map((page, index) => (
          <span key={index}>
            <Link
              to={page === "Index" ? "/" : `/${page}`}
              className="hover:text-Main hover:border-b-2 border-darktext transition-colors"
            >
              {page === "Projects" ? `${page}[${Data.projects.length}]` : page}
            </Link>
            {index < Data.siteMap.length - 1 && ", "}
          </span>
        ))}
      </div>
    </div>
  );
}
