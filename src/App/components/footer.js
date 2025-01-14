import SiteMap from "./SiteMap.js";
import SocialMedia from "./SocialMedia.js";
import { Data } from "../data.js";

export default function Footer() {
  return (
    <footer id="footer" className="p-2">
      <div className="flex justify-around p-4 gap-4">
        <SiteMap />
        <SocialMedia />
      </div>
      <div className="copyright text-center w-full p-4">
        @2024, {Data.name}.
      </div>
    </footer>
  );
}
