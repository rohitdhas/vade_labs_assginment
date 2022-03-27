import logo from "../public/main_logo.svg";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-100 shadow-md flex justify-between align items-center px-10 py-4 z-20">
      <a href="#">
        <Image height={40} className="cursor-pointer" alt="logo" src={logo} />
      </a>
      <div className="flex align items-center text-black">
        <a
          href="#skip_hussle"
          className="mr-6 cursor-pointer hover:bg-gray-300 p-2 rounded-md"
        >
          Skip the hassle
        </a>
        <a
          href="#cruise_through_backend"
          className="cursor-pointer hover:bg-gray-300 p-2 rounded-md"
        >
          Cruise through backend
        </a>
      </div>
      <button className="bg-blue-600 rounded-md px-4 py-2 text-white text-sm hover:bg-blue-700 cursor-pointer">
        Get Early Access
      </button>
    </nav>
  );
}
