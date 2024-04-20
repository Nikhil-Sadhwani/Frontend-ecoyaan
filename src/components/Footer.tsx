import React, { FC } from "react";
import { Link } from "react-router-dom";

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink: FC<FooterLinkProps> = ({ to, children }) => {
  return (
    <li>
      <Link
        to={to}
        className={`text-zinc-600 dark:text-zinc-300 hover:text-zinc-800 dark:hover:text-zinc-100`}
      >
        {children}
      </Link>
    </li>
  );
};

const Footer: FC = () => {
  return (
    <>
      <div className="bg-gray-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
        <div className="flex justify-center mt-1">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-bold "
            style={{ padding: "4px", float: "right", borderRadius: "4px" }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/130/130906.png"
              alt="arrow"
              style={{ display: "inline", marginRight: "10px" }}
              width={"10px"}
              height={"10px"}
            />
            Back to top
          </button>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 p-8">
          <div className="text-left">
            <h3 className="font-bold text-lg mb-3">Company</h3>
            <ul>
              <FooterLink to="/aboutus">About Us</FooterLink>
              <FooterLink to="/">Sell on Ecoyaan</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
            </ul>
          </div>
          <div className="text-left">
            <h3 className="font-bold text-lg mb-3">Links</h3>
            <ul>
              <FooterLink to="/">Privacy Policy</FooterLink>
              <FooterLink to="/">Terms of Use</FooterLink>
            </ul>
          </div>
          <div className="text-left">
            <h3 className="font-bold text-lg mb-3">Follow Us</h3>
            <div className={`flex space-x-3 `} style={{ width: "80px" }}>
              <Link
                to="/"
                className={`text-zinc-600 dark:text-zinc-300 hover:text-zinc-800 dark:hover:text-zinc-100`}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/174/174855.png"
                  alt="Instagram"
                />
              </Link>
              <Link
                to="/"
                className={`text-zinc-600 dark:text-zinc-300 hover:text-zinc-800 dark:hover:text-zinc-100`}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/174/174857.png"
                  alt="Linkedin"
                />
              </Link>
              <Link
                to="/"
                className={`text-zinc-600 dark:text-zinc-300 hover:text-zinc-800 dark:hover:text-zinc-100`}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/145/145802.png"
                  alt="Facebook"
                />
              </Link>
            </div>
          </div>
          <div className="text-left">
            <h3 className=" text-lg mb-3">
              Subscribe to receive updates on blogs, future launches and more!
            </h3>

            <form action="#" method="POST">
              <input
                type="email"
                placeholder="Your Email Address"
                className={`w-full rounded border-none shadow-md`}
              />
              <p className="text-xs mt-1">
                By subscribing, you agree to receive notifications
              </p>
              <Link to="/" className="text-blue-500 underline">
                Privacy Policy
              </Link>
              <button
                type="submit"
                className={`w-full mt-2 rounded p-2 text-white`}
                style={{
                  background: "rgb(22 163 74 )",
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="text-left">
            <h3 className="font-bold text-lg mb-3">Registered Address:</h3>
            <div className="flex space-x-3">
              1-N-12T-781/1 <br />
              Sri Krishna Vilasa,
              <br /> Urvastores,
              <br /> Ashoknagar(MR),
              <br /> Mangalore,
              <br /> Dakshina Kannada- 575006,
              <br /> Karnataka, India
            </div>
          </div>
          <div className="text-left">
            <h3 className="font-bold text-lg mb-3">Legal Business Name:</h3>
            <div className="flex space-x-3">
              Kindkarma E-Retail Private Limited <br />
              <br />
              CIN: U47912KA2023PTC182592
              <br /> Telephone: +91 9980490777
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
