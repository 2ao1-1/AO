import React from "react";
import { MenuBtn } from "./MenuBtn";

export default function Menu() {
  return (
    <>
      <div className="fixed md:hidden bottom-8 right-8 z-50">
        <MenuBtn>
          <span className="bg-PrimaryDark/80 hover:bg-PrimaryLight backdrop-blur-sm text-PrimaryLight hover:text-PrimaryDark border border-PrimaryLight/50 px-6 py-3 shadow-lg transition-colors flex items-center gap-2">
            <span>Menu</span>
            <svg
              className="w-4 h-4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </span>
        </MenuBtn>
      </div>
    </>
  );
}
