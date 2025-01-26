import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function Task({ title, image, skills, url, bio, repo, type }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-Secondary/50 border border-Secondary  overflow-hidden shadow-md ">
      <div className="relative h-40 sm:h-50">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <span className="absolute top-1 right-1 text-PrimaryDark bg-Secondary/20 z-10 text-xs px-2 py-1">
          {type}
        </span>
      </div>
      <div className="p-4">
        <h4 className="font-primary text-xl lg:text-3xl text-Main font-bold mb-2">
          {title}
        </h4>
        <p
          className={`text-sm lg:text-base mb-4 ${
            isExpanded ? "" : "line-clamp-2"
          }`}
        >
          {bio}
        </p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs text-Main mb-2 underline"
        >
          {isExpanded ? "Show less" : "Show more"}
        </button>
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="text-xs lg:text-sm px-2 py-1 bg-Secondary/30 border border-PrimaryLight "
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <Link
            to={url}
            target="_blank"
            className="inline-block text-Main hover:text-Details border-b border-PrimaryLight hover:border-Main transition-colors"
          >
            View Demo
          </Link>
          <Link
            to={repo}
            target="_blank"
            className="inline-block text-Main hover:text-Details border-b border-PrimaryLight hover:border-Main transition-colors"
          >
            View Repo
          </Link>
        </div>
      </div>
    </div>
  );
}
