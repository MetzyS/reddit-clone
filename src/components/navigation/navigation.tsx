"use client";

import { NavCategoryButton } from "../UI/NavCategoryButton";

import { NavItem } from "../UI/NavItem";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { MdExpandLess } from "react-icons/md";
import { MobileMenuModal } from "../modal/MobileMenuModal";
import { useMenu } from "@/app/store/useMenu";
import { NavSubMenu } from "../UI/NavSubMenu";
import {
  DUMMY_RECENT_ITEMS,
  DUMMY_SUBCAT_TOPICS,
  DUMMY_SUBCAT_TOPICS_LINKS,
  DUMMY_SUBCAT_RESOURCES,
  DUMMY_CATEGORIES,
} from "@/data/DUMMY_DATA";
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
          className="bg-black opacity-70 h-full w-full fixed z-10"
          onClick={() => {
            closeMenu("menu");
            closeMenu("headerMenu");
          }}
        ></div>
      )}
      <nav
        className={`fixed h-screen z-20 flex mt-12 border-0 border-t border-neutral-800 ${
          menu ? "w-72" : "w-0"
        } bg-neutral-900 h-full pr-1 overflow-x-hidden hover:overflow-y-scroll`}
      >
        <ul className="w-full pr-1">
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
            <NavCategoryButton
              text="test"
              state={true}
              customFunc={() => openMenu("recent")}
            />
            {/* <button
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
            </button> */}

            {/* Recent items */}
            <div className={recent ? "block" : "hidden"}>
              {DUMMY_RECENT_ITEMS &&
                DUMMY_RECENT_ITEMS.map((item) => (
                  <NavItem
                    path={item.path}
                    image={item.image}
                    btnClass="hover:bg-neutral-800"
                    imageWidth={item.imageWidth}
                    text={item.text}
                  />
                ))}
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
            <ul className={topics ? "block" : "hidden"}>
              {DUMMY_SUBCAT_TOPICS &&
                DUMMY_SUBCAT_TOPICS.map((item, index) => (
                  <NavSubMenu
                    text={item.text}
                    name={item.name}
                    key={item.name + "-" + item.id}
                    icon={item.icon}
                    customFunc={() => openMenuTopics(item.name)}
                    state={useMenuTopics((state) => state[item.name])}
                  >
                    {DUMMY_SUBCAT_TOPICS_LINKS[index] &&
                      DUMMY_SUBCAT_TOPICS_LINKS[index].map((link: any) => (
                        <a
                          href={link.path}
                          className="flex items-center ml-8 pl-4 h-10 border-0 border-l  border-neutral-700 hover:bg-neutral-800 hover:border-neutral-400 active:bg-neutral-700"
                          key={link.name + "-" + link.id}
                        >
                          <span className="text-sm">{link.text}</span>
                        </a>
                      ))}
                  </NavSubMenu>
                ))}
              <li>
                <button
                  type="button"
                  className="text-xs font-semibold ml-4 mt-2 py-2 px-3 hover:bg-neutral-800 active:bg-neutral-700 rounded-full"
                >
                  See more
                </button>
              </li>
            </ul>
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
            <div className={resources ? "block mb-6" : "hidden"}>
              {DUMMY_SUBCAT_RESOURCES &&
                DUMMY_SUBCAT_RESOURCES.map((item) => (
                  <NavItem
                    icon={item.icon}
                    text={item.text}
                    btnClass="hover:bg-neutral-800 active:bg-neutral-700"
                  />
                ))}
              <button
                type="button"
                className="text-xs font-semibold ml-4 mb-12 mt-2 py-2 px-3 hover:bg-neutral-800 active:bg-neutral-700 rounded-full"
              >
                See more
              </button>
            </div>
          </div>
        </ul>
      </nav>
      {headerMenu && <MobileMenuModal />}
    </>
  );
}
