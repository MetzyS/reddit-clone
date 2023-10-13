import { NavButton } from "../UI/navbutton";
import { NavItem } from "../UI/navitem";
import Image from "next/image";
import { FaExternalLinkSquareAlt, FaReact } from "react-icons/fa";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import ReactIcon from "../../../public/reactjs.svg";
import NextIcon from "../../../public/nextjs.svg";
import TailwindIcon from "../../../public/tailwind.svg";
import GitHubIcon from "../../../public/github.svg";

export default function Navigation() {
  const Icon = <Image src={ReactIcon} alt="" />;
  return (
    <nav className="fixed flex mt-12 w-72 bg-neutral-900 h-full overflow-y-scroll overflow-x-hidden">
      <ul className="w-full">
        {/* Popular */}
        <div className="border-0 border-b border-neutral-800 py-3">
          <NavItem icon={FaExternalLinkSquareAlt} text="Popular" main={true} />
        </div>

        {/* Recent */}
        <div className="flex flex-col gap-3 border-0 border-b border-neutral-800 py-3">
          <button
            type="button"
            className="flex justify-between h-8 items-center hover:bg-neutral-800"
          >
            <span className="text-xs tracking-widest px-6 text-neutral-400">
              RECENT
            </span>
            <button type="button" className="mr-6">
              <MdExpandLess className="w-5 h-5 text-neutral-300" />
            </button>
          </button>

          <div>
            <NavItem
              image={NextIcon}
              btnClass="hover:bg-neutral-800"
              imageWidth={25}
              text="NextJS"
            />
            <NavItem
              image={ReactIcon}
              btnClass="hover:bg-neutral-800"
              imageWidth={25}
              text="ReactJS"
            />
            <NavItem
              image={TailwindIcon}
              btnClass="hover:bg-neutral-800"
              imageWidth={25}
              text="TailwindCSS"
            />
            <NavItem
              image={GitHubIcon}
              btnClass="hover:bg-neutral-800"
              imageWidth={25}
              text="GitHub"
            />
          </div>
        </div>
        {/* Topics */}
        <div></div>
      </ul>
    </nav>
  );
}
