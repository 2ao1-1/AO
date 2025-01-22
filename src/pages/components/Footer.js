import SiteMap from "./SiteMap.js";
import SocialMedia from "./SocialMedia.js";
import { Data } from "../../Data.js";

export default function Footer() {
  return (
    <footer id="footer" className="p-2 relative bottom-0">
      <div className="container mx-auto p-4">
        <div className="flex justify-between gap-2 md:gap-8">
          <SiteMap width={"w-[300px]"} />
          <SocialMedia width={"w-[300px]"} />
        </div>
        <div className="copyright text-center w-full">@2025, {Data.name}.</div>
      </div>
    </footer>
  );
}
