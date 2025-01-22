import React, { useState, useRef, useEffect } from "react";
import SiteMap from "./SiteMap";
import SocialMedia from "./SocialMedia";

export function MenuBtn({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return document.addEventListener("mousedown", handleClickOutside);
  }, []);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="block md:hidden z-10 h-fit" ref={menuRef}>
      {!isOpen &&
        (children ? (
          <div onClick={handleMenu}>{children}</div>
        ) : (
          <button
            onClick={handleMenu}
            className={`hidden md:flex p-2 rounded-lg hover:bg-PrimaryDark/10 transition-colors duration-200 float-right`}
            aria-label="Toggle menu"
          >
            <div className={`flex flex-col gap-1.5 w-6`}>
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="#9b9b9b"
              >
                <path d="M3 12h18" />
                <path d="M3 20h18" />
                <path d="M3 4h18" />
              </svg>
            </div>
          </button>
        ))}

      <div
        className={`fixed top-0 right-0 h-full w-96 max-w-full bg-PrimaryDark text-Main transform transition-transform duration-300 ease-in-out shadow-xl p-4 z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 space-y-6 ">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 m-4 bg-Secondary hover:bg-PrimaryLight/10 rounded-full transition-colors"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="pt-8 text-Main grid gap-8">
            <SiteMap />
            <SocialMedia />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed top-0 left-0 inset-0 bg-PrimaryDark/25 backdrop-blur-sm transition-opacity z-0"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}
