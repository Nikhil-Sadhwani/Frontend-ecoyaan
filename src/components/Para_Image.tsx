import React, { FC } from "react";

interface EcoyaanCommunityProps {
  heading: string;
  paragraph: string[];
  imageDir: string;
  showImageAtLeft: Boolean;
  isVideo?: Boolean;
}

const EcoyaanCommunity: FC<EcoyaanCommunityProps> = (props) => {
  return (
    <div className="flex justify-center items-center bg-white p-8">
      <div className="flex flex-row justify-between items-center max-w-7xl mx-auto">
        <div
          className={
            `flex-1 px-4 py-2 ` +
            (props.showImageAtLeft === true ? "" : "hidden")
          }
        >
          {props.isVideo && props.isVideo === true ? (
            <iframe
              width="560"
              height="315"
              src="https://ecoyaan.com/images/ProductCuration.mp4"
              title="video "
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <img
              src={props.imageDir}
              alt="Sustainable Environment Illustration"
              className="max-w-full h-auto rounded-lg "
            />
          )}
        </div>
        <div className="flex-1 px-4 py-2 text-left">
          <h1 className="text-3xl font-bold text-zinc-800 mb-4">
            {props.heading}
          </h1>
          {props.paragraph.map((para: string) => {
            return <p className="text-zinc-700 mb-2">{para}</p>;
          })}
        </div>
        <div
          className={
            `flex-1 px-4 py-2 ` +
            (props.showImageAtLeft === true ? "hidden" : "")
          }
        >
          {props.isVideo && props.isVideo === true ? (
            <iframe
              width="560"
              height="315"
              src="https://ecoyaan.com/images/ProductCuration.mp4"
              title="video "
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <img
              src={props.imageDir}
              alt="Sustainable Environment Illustration"
              className="max-w-full h-auto rounded-lg "
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default EcoyaanCommunity;
