import { Data } from "./../Data";
import { Link } from "react-router-dom";

export default function LandingPageProject() {
  return (
    <div className="w-full justify-center grid items-center col-span-6">
      <div className="w-full my-8 h-fit justify-center">
        {/* {Data.projects.map((p, i) => ( */}

        {/* project img */}
        <ProjetImg
          src={Data.projects[0].img}
          title={Data.projects[0].title}
          bio={Data.projects[0].bio}
        />

        {/* projet description */}
        <LandingProjectDescription
          description={Data.projects[0].description}
          skills={Data.projects[0].skill}
          url={Data.projects[0].url}
          repo={Data.projects[0].repo}
        />
        {/* </MainNoise> */}
        {/* )} */}
      </div>
    </div>
  );
}

function ProjetImg({ src, title, bio }) {
  return (
    <div className="border-b border-lightText grayscale-100">
      <img src={src} alt={title} />
      <p className="text-xs py-2 border-b">{bio}</p>
      <h3 className="font-subHead text-4xl py-4">{title}</h3>
    </div>
  );
}

function LandingProjectDescription({ description, skills, url, repo }) {
  return (
    <div className="py-4 columns-2 gap-52">
      <p>{description}</p>
      <div>
        <h4 className="font-semibold mb-2">Skills:</h4>
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <li
              key={i}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-4 py-4">
        <Link to={url}>
          <button className="px-4 bg-midText hover:bg-darktext text-white border">
            Demo
          </button>
        </Link>
        <Link to={repo}>
          <button className="px-4 bg-midText hover:bg-darktext text-white border">
            Repo
          </button>
        </Link>
        <Link to="/">
          <button className="px-4 bg-midText hover:bg-darktext text-white border">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
}
