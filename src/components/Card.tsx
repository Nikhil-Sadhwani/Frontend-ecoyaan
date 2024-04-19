import React, { FC } from "react";

interface CardProps {
  title: string;
  description: string;
  altText: string;
  imgDir: string;
}

const Card: FC<CardProps> = (props) => {
  return (
    <div className="flex flex-row justify-between items-center max-w-7xl mx-auto text-center">
      <div
        className=" h-28 mr-4  rounded-lg overflow-hidden hover:scale-105 transition-transform"
        style={{ width: "200px" }}
      >
        <img src={props.imgDir} alt={props.altText} />
      </div>
      <div className="flex-1 px-4 py-2 text-left">
        <h3 className="text-lg font-semibold">{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
