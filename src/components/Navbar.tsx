import { Link } from "react-router-dom";

export default function Navbar() {
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
            <Link
              to="/"
              className="text-zinc-800 hover:text-green-600 font-bold "
              style={{ marginRight: "15px" }}
            >
              Home
            </Link>
            <Link
              to="/aboutus"
              className="text-zinc-800 hover:text-green-600 font-bold "
              style={{ marginRight: "15px" }}
            >
              About Us
            </Link>
            <Link
              to="/"
              className="text-zinc-800 hover:text-green-600 font-bold "
              style={{ marginRight: "15px" }}
            >
              Sell on Ecoyaan
            </Link>
            <Link
              to="/"
              className="text-zinc-800 hover:text-green-600 font-bold "
              style={{ marginRight: "15px" }}
            >
              Careers
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
