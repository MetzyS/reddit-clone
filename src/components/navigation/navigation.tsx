"use client";
import { NavButton } from "../UI/navbutton";
import { useState } from "react";
import { NavItem } from "../UI/navitem";
import Image from "next/image";
import { FaExternalLinkSquareAlt, FaReact } from "react-icons/fa";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import ReactIcon from "../../../public/reactjs.svg";
import NextIcon from "../../../public/nextjs.svg";
import TailwindIcon from "../../../public/tailwind.svg";
import GitHubIcon from "../../../public/github.svg";

export default function Navigation(props: { menuIsOpen: boolean }) {
  // Gestion de l'ouverture des catégories (recent, topics..) dans la nav mobile
  const initialSubMenuIsOpen = {
    recent: true,
    topics: false,
    resources: false,
  };

  interface subMenuIsOpen {
    recent: boolean;
    topics: boolean;
    resources: boolean;
  }

  const [subMenuIsOpen, setSubMenuIsOpen] = useState(initialSubMenuIsOpen);
  const handleSubMenuClick = (submenu: string) => {
    const value = subMenuIsOpen[submenu as keyof subMenuIsOpen];
    setSubMenuIsOpen((prevSubMenuIsOpen) => ({
      ...prevSubMenuIsOpen,
      [submenu]: !value,
    }));
  };

  const Icon = <Image src={ReactIcon} alt="" />;
  return (
    <nav
      className={`fixed flex mt-12 border-0 border-t border-neutral-800 ${
        props.menuIsOpen ? "w-72" : "w-0"
      } bg-neutral-900 h-full pr-1 overflow-hidden hover:overflow-y-scroll`}
    >
      <ul className="w-full">
        {/* Popular */}
        <div className="border-0 border-b border-neutral-800 py-2.5">
          <NavItem icon={FaExternalLinkSquareAlt} text="Popular" main={true} />
        </div>

        {/* Recent */}
        <div className="flex flex-col border-0 border-b border-neutral-800 py-3 mt-1 mb-1">
          {/* creer un component pour ce bouton: */}
          <button
            type="button"
            className="flex justify-between h-8 items-center hover:bg-neutral-800"
            onClick={() => handleSubMenuClick("recent")}
          >
            <span className="text-xs tracking-widest px-4 text-neutral-400">
              RECENT
            </span>
            <span className="mr-6">
              <MdExpandLess
                className={
                  subMenuIsOpen.recent
                    ? "w-5 h-5 text-neutral-300 rotate-180"
                    : "w-5 h-5 text-neutral-300"
                }
              />
            </span>
          </button>

          {/* Recent items */}
          <div className={subMenuIsOpen.recent ? "block" : "hidden"}>
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
        <div className="flex flex-col border-0 border-b border-neutral-800 py-4 mb-2">
          <button
            type="button"
            className="flex justify-between h-8 items-center hover:bg-neutral-800"
            onClick={() => handleSubMenuClick("topics")}
          >
            <span className="text-xs tracking-widest px-4 text-neutral-400">
              TOPICS
            </span>
            <span className="mr-6">
              <MdExpandLess
                className={
                  subMenuIsOpen.topics
                    ? "w-5 h-5 text-neutral-300 rotate-180"
                    : "w-5 h-5 text-neutral-300"
                }
              />
            </span>
          </button>

          {/* Topics items */}
          <div className={subMenuIsOpen.topics ? "block" : "hidden"}>
            <NavItem
              image={NextIcon}
              btnClass="hover:bg-neutral-800"
              imageWidth={25}
              text="NextJS"
            />
            <NavItem
              image={NextIcon}
              btnClass="hover:bg-neutral-800"
              imageWidth={25}
              text="NextJS"
            />
            <NavItem
              image={NextIcon}
              btnClass="hover:bg-neutral-800"
              imageWidth={25}
              text="NextJS"
            />
          </div>
        </div>

        {/* Ressources category */}
        <div className="flex flex-col  py-3 mt-1 mb-2">
          <button
            type="button"
            className="flex justify-between h-8 items-center hover:bg-neutral-800"
            onClick={() => handleSubMenuClick("resources")}
          >
            <span className="text-xs tracking-widest px-4 text-neutral-400">
              RESOURCES
            </span>
            <span className="mr-6">
              <MdExpandLess
                className={
                  subMenuIsOpen.resources
                    ? "w-5 h-5 text-neutral-300 rotate-180"
                    : "w-5 h-5 text-neutral-300"
                }
              />
            </span>
          </button>
          {/* Resources items */}
          <div className={subMenuIsOpen.resources ? "block" : "hidden"}>
            <NavItem
              image={NextIcon}
              btnClass="hover:bg-neutral-800"
              imageWidth={25}
              text="NextJS"
            />
            <NavItem
              image={NextIcon}
              btnClass="hover:bg-neutral-800"
              imageWidth={25}
              text="NextJS"
            />
            <NavItem
              image={NextIcon}
              btnClass="hover:bg-neutral-800"
              imageWidth={25}
              text="NextJS"
            />
          </div>
        </div>
      </ul>
    </nav>
  );
}
