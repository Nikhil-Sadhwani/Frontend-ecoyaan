import { FC, useState, useEffect } from "react";

interface ImageData {
  src: string;
  alt: string;
  title: string;
  para: string;
  buttonText: string;
}

const IMAGEDATA: ImageData[] = [
  {
    src: "https://ecoyaan.com/images/carousel-1.png",
    alt: "Image 1",
    title: "Buy Less, Buy Better!",
    para: " Authentic source of truth for your sustainability needs.",
    buttonText: "About Us",
  },
  {
    src: "https://ecoyaan.com/images/carousel-2.png",
    alt: "Image 2",
    title: "Follow us on Instagram",
    para: "For climate news, lifestyle tips, & updates",
    buttonText: "Follow Us",
  },
  {
    src: "https://ecoyaan.com/images/carousel-3.png",
    alt: "Image 3",
    title: "Are you a business that truly cares about sustainability?",
    para: "We would love to work with you",
    buttonText: "Get in Touch",
  },
];

const Carousal: FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const showNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % IMAGEDATA.length);
  };

  const showPrevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + IMAGEDATA.length) % IMAGEDATA.length
    );
  };

  useEffect(() => {
    const interval = setInterval(showNextImage, 3000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [currentImageIndex]);

  return (
    <div className="relative bg-zinc-900 text-white" style={{ height: "85vh" }}>
      <div className="flex overflow-x-auto" style={{ height: "85vh" }}>
        {IMAGEDATA.map((image: ImageData, index: number) => (
          <div
            key={index}
            className="w-full"
            style={{
              display: index === currentImageIndex ? "block" : "none",
            }}
          >
            <div
              className="flex justify-between mb-2 absolute "
              style={{ width: "inherit", height: "100%" }}
            >
              <button onClick={showPrevImage}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/271/271220.png"
                  alt="left arrow"
                  width={"20px"}
                  height={"10px"}
                />
              </button>
              <button onClick={showNextImage}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
                  alt="right arrow"
                  width={"20px"}
                  height={"10px"}
                />
              </button>
            </div>
            <img
              src={image.src}
              alt={image.alt}
              style={{ width: "100%", height: "100%" }}
            />
            <div
              className="absolute inset-0 flex flex-col items-left top-40"
              style={{ width: "500px", marginLeft: "165px" }}
            >
              <h2 className="text-black text-left text-3xl font-bold mb-4">
                {image.title}
              </h2>
              <p className="text-black text-xl text-left mb-4">{image.para}</p>
              <button
                className=" text-white px-4 py-2 mt-2 rounded-lg "
                style={{ width: "150px", background: "rgb(22 163 74 )" }}
              >
                {image.buttonText}
              </button>
            </div>
            {/* <div
              className="absolute inset-0 flex flex-row top-35 "
              style={{ width: "fit-content" }}
            >
              <button onClick={showNextImage}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
                  alt="right arrow"
                  width={"20px"}
                  height={"10px"}
                />
              </button>
            </div> */}
          </div>
        ))}
      </div>
      <div className="flex flex-row mt-4 justify-center">
        <button
          className={`w-3 h-3 ${
            currentImageIndex === 0 ? "bg-zinc-600" : "bg-zinc-300"
          } rounded-full m-2`}
          onClick={() => {
            setCurrentImageIndex(0);
          }}
        ></button>
        <button
          className={`w-3 h-3 ${
            currentImageIndex === 1 ? "bg-zinc-600" : "bg-zinc-300"
          } rounded-full m-2`}
          onClick={() => {
            setCurrentImageIndex(1);
          }}
        ></button>
        <button
          className={`w-3 h-3 ${
            currentImageIndex === 2 ? "bg-zinc-600" : "bg-zinc-300"
          } rounded-full m-2`}
          onClick={() => {
            setCurrentImageIndex(2);
          }}
        ></button>
      </div>
    </div>
  );
};

export default Carousal;
