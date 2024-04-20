import { Link } from "react-router-dom";
import Card from "../components/Card";
import TeamCard from "../components/TeamCard";

export default function AboutUs() {
  return (
    <>
      {/* About Section  */}
      <div
        className="flex justify-center items-center  p-8"
        style={{ backgroundColor: "#f0f8ff" }}
      >
        <div className="flex flex-row justify-between items-center max-w-9xl mx-auto">
          <div className="flex-1 px-4 py-2 text-left">
            <h1 className="text-3xl font-bold text-zinc-800 mb-4">
              About Ecoyaan
            </h1>
            <p className="text-zinc-700 mb-2">
              At Ecoyaan, we are more than just a platform. Our goal is to build
              a community of eco-conscious people who share a common vision and
              passion for a more sustainable world.
            </p>
            <p className="text-zinc-700 mb-2">
              We recognize that sustainability is a journey (as the Sanskrit
              word “yaan” suggests). To keep you motivated on this journey, on
              our platform and our social media pages, you can find:
            </p>
            <ul>
              <li>
                Tips and tricks to adopt a more eco-friendly and low-waste
                lifestyle
              </li>
              <li>
                {" "}
                Videos, posts, and quizzes on climate change and sustainability{" "}
              </li>
              <li>
                Events and pledges that invite you to adopt a more sustainable
                lifestyle
              </li>
            </ul>
          </div>
          <div className={`flex-1 px-4 py-2 `}>
            <img
              src="https://ecoyaan.com/images/about-us-sustainable-lifestyle-partner.png"
              alt="Sustainable Environment Illustration"
              className="max-w-full h-auto rounded-lg "
            />
          </div>
        </div>
      </div>

      {/* Values Section  */}
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-left mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <Card
            title="Trust"
            description="We value the trust of our community. We strive to be transparent and honest in everything we do, from the content we share today to sourcing our products in the future."
            altText="Trust"
            imgDir="https://ecoyaan.com/images/Trust.png"
          />
          <Card
            title="Authenticity"
            description="We are genuine in our mission to promote sustainability and environmental awareness. An authentic community of eco-conscious people can inspire each other on the journey towards sustainability."
            altText="Authenticity"
            imgDir="https://ecoyaan.com/images/Authenticity.png"
          />
          <Card
            title="Impact"
            description="We measure our success by our impact on the planet and our community. We aim to empower our sellers and customers to make responsible choices that benefit their well-being and the well-being of others."
            altText="Impact"
            imgDir="https://ecoyaan.com/images/Impact.png"
          />
          <Card
            title="Fun & Engaging"
            description="Moving towards a sustainable lifestyle and the constant news around climate change can be stressful. We aim to inject fun and creativity into everything we do, from designing our products to providing services."
            altText="Fun & Engaging"
            imgDir="https://ecoyaan.com/images/FunAndEngaging.png"
          />
        </div>
      </div>

      {/* Story Section  */}
      <div
        className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        style={{ backgroundColor: "#f0f8ff" }}
      >
        <h2 className="text-3xl font-bold text-left mb-12">Our Story</h2>
        <div className={`flex flex-row items-center gap-8`}>
          <div
            className={`flex flex-col items-center md:w-1/3`}
            style={{ width: "14%" }}
          >
            <div>
              <img
                src="https://ecoyaan.com/images/about-us-founding-team-01.png"
                alt="Abhishek"
                className={` w-36 h-36  mb-4}`}
              />
            </div>
            <div>
              <img
                src="https://ecoyaan.com/images/about-us-founding-team-02.png"
                alt="Sarwan"
                className={` w-36  h-36 mt-8  mb-4`}
              />
            </div>
          </div>
          <div className="md:w-2/3" style={{ width: "fit-content" }}>
            <p className={`mb-4`}>
              We started Ecoyaan after watching an episode of “Our Planet II”,
              where we saw the devastating impact of plastic pollution and
              climate change on the albatross birds. That moment ignited our
              mission.
            </p>
            <p className={`mb-4`}>
              Our research suggests that many Indians understand global warming,
              yet access to sustainable practices and products remains limited.
              We also noticed that there is a lack of support for eco-friendly
              businesses.
            </p>
            <p className={`mb-4`}>
              We created Ecoyaan to connect consumers, businesses, and
              sustainability experts. We want to make it easy and convenient for
              people to access eco-friendly products and services, learn and
              share best practices, and support sustainability initiatives.
            </p>
            <p className={`mb-4`}>
              As founders, we are not perfect, but we are passionate. We believe
              that every small step matters. Join us and be a part of the
              Ecoyaan community — together, we’ll make a difference.
            </p>
            <p>
              Connect with the founders on LinkedIn here:{" "}
              <Link to="/" className={`text-blue-600`}>
                Abhishek Rao
                <img
                  src="https://cdn-icons-png.flaticon.com/128/174/174857.png"
                  alt="Instagram"
                  width={"15px"}
                  height={"15px"}
                  style={{
                    display: "inline",
                    marginLeft: "5px",
                    marginRight: "5px",
                  }}
                />
              </Link>
              {"  "}
              <Link to="/" className={`text-blue-600`}>
                Sarwanjeet Singh
                <img
                  src="https://cdn-icons-png.flaticon.com/128/174/174857.png"
                  alt="Instagram"
                  width={"15px"}
                  height={"15px"}
                  style={{ display: "inline", marginLeft: "5px" }}
                />
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Team Section  */}
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-left mb-12">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamCard
            imgDir="https://ecoyaan.com/images/about-us-social-media-team-01.png"
            name="SHRUTHI"
            role="SOCIAL MEDIA"
            description="Shruthi is in charge of our Instagram. She is a practising Vegan and
          cares deeply about sustainability. Follow her small business"
            link="here"
            logo={true}
          />
          <TeamCard
            imgDir="https://ecoyaan.com/images/about-us-social-media-team-02.png0"
            name="URMIL"
            role="SOCIAL MEDIA"
            description="Urmil creates engaging content for us. She runs her own sustainable apparel store with her sister and advocates for slow fashion. Check out her business"
            link="here"
            logo={true}
          />
          <TeamCard
            imgDir="https://ecoyaan.com/images/about-us-product-team-01.png"
            name="DIVYA"
            role="UX DESIGN"
            description="Divya creates user-friendly and engaging interfaces for our platform. Check out more of her work on "
            link="Behance"
          />
          <TeamCard
            imgDir="https://ecoyaan.com/images/about-us-product-team-02.png"
            name="PRASHANITH"
            role="ENGINEERING"
            description="Prashanith is our front-end engineer, who brings the UX designs to life"
          />
          <TeamCard
            imgDir="https://ecoyaan.com/images/about-us-product-team-03.png"
            name="SAI ABHILASH"
            role="ENGINEERING"
            description="Sai Abhilash is our back-end engineer, who manages and optimises the infrastructure and logic of our platform"
          />
          <TeamCard
            imgDir="https://ecoyaan.com/images/favicon.png"
            name="???"
            role="TEAM ECOYAAN"
            description="This spot awaits you. Check out our "
            link="open positions"
          />
        </div>
      </div>
    </>
  );
}
