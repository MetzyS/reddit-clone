import Image from "next/image";
import redditlogo from "../../../public/redditlogo.svg";
import { CiSearch } from "react-icons/ci";
import { BsQrCodeScan, BsThreeDots } from "react-icons/bs";
import { NavButton } from "../UI/navbutton";

export default function Navigation() {
  return (
    // wrapper
    <header className="border-0 border-b border-b-gray-500 flex items-center">
      <nav className="flex justify-between px-8 py-2 bg-neutral-900 w-screen">
        {/* logo */}
        <div>
          <a href="#">
            <Image src={redditlogo} alt="" width={100} />
          </a>
        </div>
        {/* searchbar */}
        <div className="group h-9 w-5/12">
          <div className="group-hover:bg-neutral-700 flex bg-neutral-800 px-4 py-1 rounded-tl-2xl rounded-bl-2xl w-full h-full rounded-tr-2xl rounded-br-2xl">
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
        <div className="flex gap-2">
          <NavButton
            className="flex justify-center items-center bg-neutral-800 text-white px-3 py-2.5 rounded-3xl text-xs font-bold gap-2 hover:bg-neutral-700 active:bg-neutral-600"
            icon={BsQrCodeScan}
            text="Get app"
          />
          <NavButton
            className="flex justify-center items-center bg-orange-700 text-white px-3 py-2.5 rounded-3xl text-xs font-bold gap-2 hover:bg-orange-900 active:bg-orange-800"
            text="Log In"
          />
          <NavButton
            className="flex justify-center items-center text-white px-3 py-2.5 rounded-3xl text-xs font-bold gap-2 text-center self-center hover:bg-neutral-700 active:bg-neutral-600"
            icon={BsThreeDots}
          />
        </div>
      </nav>
    </header>
  );
}
