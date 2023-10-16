"use client";
import { NavButton } from "../UI/NavButton";
import { useState } from "react";
import { NavItem } from "../UI/NavItem";
import Image from "next/image";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { MdExpandLess } from "react-icons/md";
import { MobileMenuModal } from "../modal/MobileMenuModal";
import { IoGameControllerOutline } from "react-icons/io5";
import ReactIcon from "../../../public/reactjs.svg";
import NextIcon from "../../../public/nextjs.svg";
import TailwindIcon from "../../../public/tailwind.svg";
import GitHubIcon from "../../../public/github.svg";
import { useMenu } from "@/app/store/useMenu";
import { NavSubMenu } from "../UI/NavSubMenu";
import { DUMMY_SUBCAT } from "@/data/DUMMY_DATA";
import { useMenuTopics } from "@/app/store/useMenuTopics";

export default function Navigation() {
  // Gestion de l'ouverture des catégories + modale (recent, topics..) dans la nav mobile

  const { menu, headerMenu, recent, resources, topics, openMenu, closeMenu } =
    useMenu();
  const { openMenuTopics, closeMenuTopics } = useMenuTopics();

  return (
    <>
      {menu && (
        <div
          className="bg-black opacity-30 h-full w-full fixed z-10"
          onClick={() => {
            closeMenu("menu");
            closeMenu("headerMenu");
          }}
        ></div>
      )}
      <nav
        className={`fixed z-20 flex mt-12 border-0 border-t border-neutral-800 ${
          menu ? "w-72" : "w-0"
        } bg-neutral-900 h-full pr-1 overflow-hidden hover:overflow-y-scroll`}
      >
        <ul className="w-full">
          {/* Popular */}
          <div className="border-0 border-b border-neutral-800 py-2.5">
            <NavItem
              icon={FaExternalLinkSquareAlt}
              text="Popular"
              main={true}
            />
          </div>

          {/* Recent */}
          <div className="flex flex-col border-0 border-b border-neutral-800 py-3 mt-1 mb-1">
            {/* creer un component pour ce bouton: */}
            <button
              type="button"
              className="flex justify-between h-8 items-center hover:bg-neutral-800"
              onClick={() => openMenu("recent")}
            >
              <span className="text-xs tracking-widest px-4 text-neutral-400">
                RECENT
              </span>
              <span className="mr-6">
                <MdExpandLess
                  className={
                    recent
                      ? "w-5 h-5 text-neutral-300 rotate-180"
                      : "w-5 h-5 text-neutral-300"
                  }
                />
              </span>
            </button>

            {/* Recent items */}
            <div className={recent ? "block" : "hidden"}>
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
              onClick={() => openMenu("topics")}
            >
              <span className="text-xs tracking-widest px-4 text-neutral-400">
                TOPICS
              </span>
              <span className="mr-6">
                <MdExpandLess
                  className={
                    topics
                      ? "w-5 h-5 text-neutral-300 rotate-180"
                      : "w-5 h-5 text-neutral-300"
                  }
                />
              </span>
            </button>

            {/* Topics items */}
            <div className={topics ? "block" : "hidden"}>
              {DUMMY_SUBCAT &&
                DUMMY_SUBCAT.map((item) => (
                  <NavSubMenu
                    text={item.text}
                    name={item.name}
                    key={item.name + "-" + item.id}
                    icon={item.icon}
                    customFunc={() => openMenuTopics(item.name)}
                    state={useMenuTopics((state) => state[item.name])}
                  />
                ))}
            </div>
          </div>

          {/* Ressources category */}
          <div className="flex flex-col  py-3 mt-1 mb-2">
            <button
              type="button"
              className="flex justify-between h-8 items-center hover:bg-neutral-800"
              onClick={() => openMenu("resources")}
            >
              <span className="text-xs tracking-widest px-4 text-neutral-400">
                RESOURCES
              </span>
              <span className="mr-6">
                <MdExpandLess
                  className={
                    resources
                      ? "w-5 h-5 text-neutral-300 rotate-180"
                      : "w-5 h-5 text-neutral-300"
                  }
                />
              </span>
            </button>
            {/* Resources items */}
            <div className={resources ? "block" : "hidden"}>
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
      {headerMenu && <MobileMenuModal />}
    </>
  );
}
