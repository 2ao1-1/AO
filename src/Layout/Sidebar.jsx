import { Data } from "./../Data";
import SkillsMenu from "./../components/SkillMenu";
export default function Sidebar() {
  return (
    <div className="w-full col-span-2 h-fit py-4">
      {/* about */}
      <LandingAbout src={Data.images.myImg} name={Data.name} bio={Data.bio} />
      {/* education */}
      <LandingEducation edu={Data.education} />

      {/* skills */}
      <div className="py-4 ">
        <h2 className="font-bold">Skills:</h2>
        <div style={{ position: "relative" }}>
          <SkillsMenu />
        </div>
      </div>
    </div>
  );
}

function LandingAbout({ bio }) {
  return (
    <div className="border-b py-4">
      <p>{bio}</p>
    </div>
  );
}

function LandingEducation({ edu }) {
  return (
    <div className="border-b py-4">
      <h2 className="font-bold">Education:</h2>
      <i>
        {edu.field}, <br />
        {edu.uni}
      </i>
    </div>
  );
}
