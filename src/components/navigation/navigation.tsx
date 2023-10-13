import Image from "next/image";
import redditbig from "../../../public/redditbig.svg";
import redditsmall from "../../../public/redditsmall.svg";
import { CiSearch } from "react-icons/ci";
import {
  BsFillSearchHeartFill,
  BsQrCodeScan,
  BsThreeDots,
} from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { NavButton } from "../UI/navbutton";

export default function Navigation() {
  return (
    // wrapper
    <header className="border-0 border-b border-b-neutral-800 flex items-center fixed">
      <nav className="flex justify-between items-center bg-neutral-900 w-screen py-1.5 px-3 md:py-2 md:px-8">
        {/* logo */}
        <div className="flex items-center">
          <NavButton
            className="text-white md:hidden hover:bg-neutral-700 active:bg-neutral-600 rounded-full px-2 py-1.5"
            icon={AiOutlineMenu}
            iconClass="w-5 h-6"
          />
          <a href="#" className="flex justify-center items-center md:hidden">
            <Image
              src={redditsmall}
              alt="Logo Reddit Small"
              width={30}
              className="ml-2"
            />
          </a>
          <a href="#" className="hidden md:block">
            <Image src={redditbig} alt="Logo Reddit Big" width={100} />
          </a>
        </div>
        {/* searchbar */}
        <div className="group h-10 w-5/12 hidden md:block">
          <div className="group-hover:bg-neutral-700 flex bg-neutral-800 px-4 py-1 rounded-tl-3xl rounded-bl-3xl w-full h-full rounded-tr-3xl rounded-br-3xl">
            <span>
              <CiSearch className="h-full w-5 text-gray-300" />
            </span>
            <input
              type="text"
              className="group-hover:bg-neutral-700 bg-neutral-800 text-white p-1 text-xs w-full focus:outline-none"
              placeholder="Search Reddit"
            />
          </div>
        </div>
        {/* buttons */}
        <div className="hidden md:flex md:gap-2">
          <NavButton
            className="flex justify-center items-center bg-neutral-800 text-white px-3 py-2.5 rounded-3xl text-sm font-semibold gap-2 hover:bg-neutral-700 active:bg-neutral-600"
            icon={BsQrCodeScan}
            iconClass="w-4 h-4"
            text="Get app"
          />
          <NavButton
            className="flex justify-center items-center bg-orange-700 text-white px-3 py-2.5 rounded-3xl text-xs font-bold gap-2 hover:bg-orange-900 active:bg-orange-800"
            text="Log In"
          />
          <NavButton
            className="flex justify-center items-center text-white px-3 py-3 rounded-full text-xs font-bold gap-2 text-center self-center hover:bg-neutral-700 active:bg-neutral-600"
            icon={BsThreeDots}
            iconClass="w-5 h-5"
          />
        </div>
        <div className="flex md:hidden pr-4">
          <NavButton
            className="flex justify-center items-center self-center bg-orange-700 text-white px-3 h-8 rounded-3xl text-xs font-semibold gap-2 active:bg-orange-800"
            text="Use App"
          />
          <NavButton
            className="flex justify-center items-center ml-3 rounded-xl p-1 hover:bg-neutral-700 active:bg-neutral-600"
            iconClass="text-white w-7 h-7"
            icon={CiSearch}
          />
          <NavButton
            className="flex justify-center items-center self-center hover:bg-neutral-700 active:bg-neutral-600 p-2 rounded-full"
            iconClass="text-white w-5 h-5"
            icon={BsThreeDots}
          />
        </div>
      </nav>
    </header>
  );
}
