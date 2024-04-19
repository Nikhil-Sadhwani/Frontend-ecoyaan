import React from "react";
import Para_Image from "../components/Para_Image";
import Carousel from "../components/Carousal";

type Props = {};

export default function ({}: Props) {
  return (
    <div>
      <Carousel />
      <Para_Image
        heading="Join our community in creating a more sustainable future for
            everyone "
        paragraph={[
          "At Ecoyaan, we are more than just a platform. Our vision is to build an eco-conscious community for people and products.",
          "Consider us your partner for all things sustainable. To keep you motivated on the journey, we will provide you with engaging information about climate change, the latest updates on climate policies and lifestyle tips that you can adopt to reduce your impact on the environment.",
        ]}
        imageDir="https://ecoyaan.com/images/Impact.png"
        showImageAtLeft={false}
      />
      <Para_Image
        heading="Carefully curated Eco-friendly products"
        paragraph={[
          "We believe that every purchase you make can have a positive impact on the planet and the future.",
          "Soon, we will be connecting you with eco-friendly and sustainable products that are carefully selected based on their environmental and social benefits.",
        ]}
        imageDir="https://ecoyaan.com/images/ProductCuration.mp4"
        showImageAtLeft={true}
        isVideo={true}
      />
      <Para_Image
        heading="For businesses that care deeply about sustainability"
        paragraph={[
          "Do you run a business that is committed to sustainability in every aspect of your work?",
          "Do you want to showcase your products to an incredible audience of eco-conscious consumers who care?",
          "If yes, then you are the perfect fit for our platform. Our community appreciates and supports businesses that are transparent, ethical, and innovative in their approach to sustainability. Contact us today:",
        ]}
        imageDir="https://ecoyaan.com/images/OurStory4.png"
        showImageAtLeft={false}
      />
      <div
        style={{ width: "400px", marginBottom: "36px", textAlign: "center" }}
      >
        <button
          className=" text-white px-4 py-2 mt-2 rounded-lg "
          style={{ width: "150px", background: "rgb(22 163 74 )" }}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}
