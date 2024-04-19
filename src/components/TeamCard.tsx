import React from "react";
import { Link } from "react-router-dom";

interface Props {
  imgDir: string;
  name: string;
  role: string;
  description: string;
  link?: string;
  logo?: Boolean;
}

export default function TeamCard(props: Props) {
  return (
    <div className="flex flex-col justify-between items-center max-w-7xl mx-auto text-center">
      <div className="overflow-hidden hover:scale-105 transition-transform">
        <img
          src={props.imgDir}
          alt="member"
          className="w-32 h-32 rounded-full mx-auto"
        />
      </div>
      <div className="flex-1 px-4 py-2 text-center">
        <h3 className="text-lg font-semibold mb-2">{props.name}</h3>
        <h3 className="text-lg mb-4" style={{ color: "#9b2f2f" }}>
          {props.role}
        </h3>
        <p className="text-left">
          {props.description}
          <Link to="/" className="text-blue-500">
            {" "}
            {props.link ? props.link : ""}
            {props.logo ? (
              <img
                src="https://cdn-icons-png.flaticon.com/128/174/174855.png"
                alt="Instagram"
                width={"20px"}
                height={"20px"}
                style={{ display: "inline", marginLeft: "10px" }}
              />
            ) : (
              <></>
            )}
          </Link>
        </p>
      </div>
    </div>
  );
}
