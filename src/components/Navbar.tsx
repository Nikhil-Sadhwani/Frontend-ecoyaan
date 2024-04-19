import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="bg-white shadow-md sticky top-0 left-0 z-50 h-16">
      <div className="w-full px-6">
        <div className="flex justify-between items-center h-16">
          <div
            className="text-3xl font-bold text-green-600 justify-center items-center "
            style={{ color: "rgb(22 163 74 )" }}
          >
            Ecoyaan
          </div>
          <div className="space-x-4 gap-6">
            <a
              href="#"
              className="text-zinc-800 hover:text-green-600 font-bold "
              style={{ marginRight: "15px" }}
            >
              Home
            </a>
            <a
              href="#"
              className="text-zinc-800 hover:text-green-600 font-bold "
              style={{ marginRight: "15px" }}
            >
              About Us
            </a>
            <a
              href="#"
              className="text-zinc-800 hover:text-green-600 font-bold "
              style={{ marginRight: "15px" }}
            >
              Sell on Ecoyaan
            </a>
            <a
              href="#"
              className="text-zinc-800 hover:text-green-600 font-bold "
              style={{ marginRight: "15px" }}
            >
              Careers
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
