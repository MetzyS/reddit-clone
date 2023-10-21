"use client";

import { NavCategoryButton } from "../UI/NavCategoryButton";
import { NavItem } from "../UI/NavItem";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
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
          className="bg-black opacity-70 h-full w-full fixed z-10 lg:hidden"
          onClick={() => {
            closeMenu("menu");
            closeMenu("headerMenu");
          }}
        ></div>
      )}
      <nav
        className={`fixed h-screen z-20 flex mt-4 lg:mt-7 border-0 border-t border-neutral-800 ${
          menu ? "w-64" : "hidden w-0"
        } bg-neutral-900 h-full pr-1 overflow-x-hidden hover:overflow-y-scroll xl:block xl:w-64 xl:border-r border-r-neutral-800`}
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

          {/* Mobile Nav Catégories */}
          {DUMMY_CATEGORIES &&
            DUMMY_CATEGORIES.map((item, index) => (
              <div
                className="flex flex-col border-0 border-b border-neutral-800 py-3 mt-1 mb-1"
                key={"nav-cat-container-" + index}
              >
                <NavCategoryButton
                  text={item.text}
                  state={useMenu((state) => state[item.statename])}
                  customFunc={() => openMenu(item.statename)}
                  key={"nav-cat-" + index}
                />

                {/* Map pour la catégorie "recent" */}
                {item.statename == "recent" && (
                  <div className={recent ? "block" : "hidden"}>
                    {DUMMY_RECENT_ITEMS &&
                      DUMMY_RECENT_ITEMS.map((item, index) => (
                        <NavItem
                          path={item.path}
                          image={item.image}
                          btnClass="hover:bg-neutral-800"
                          imageWidth={item.imageWidth}
                          text={item.text}
                          key={"nav-subcat-recent-" + index}
                        />
                      ))}
                  </div>
                )}

                {/* Map pour la catégorie "topics" */}
                {item.statename == "topics" && (
                  <ul className={topics ? "block" : "hidden"}>
                    {DUMMY_SUBCAT_TOPICS &&
                      DUMMY_SUBCAT_TOPICS.map((item, index) => (
                        <NavSubMenu
                          text={item.text}
                          name={item.name}
                          key={"nav-subcat-topics-" + index}
                          icon={item.icon}
                          customFunc={() => openMenuTopics(item.name)}
                          state={useMenuTopics((state) => state[item.name])}
                        >
                          {DUMMY_SUBCAT_TOPICS_LINKS[index] &&
                            DUMMY_SUBCAT_TOPICS_LINKS[index].map(
                              (link: any) => (
                                <a
                                  href={link.path}
                                  className="flex items-center ml-8 pl-4 h-10 border-0 border-l  border-neutral-700 hover:bg-neutral-800 hover:border-neutral-400 active:bg-neutral-700"
                                  key={link.name + "-" + index}
                                >
                                  <span
                                    className="text-sm"
                                    key={"nav-topic-link-" + index}
                                  >
                                    {link.text}
                                  </span>
                                </a>
                              )
                            )}
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
                )}

                {/* Map pour la catégorie "resources" */}
                {item.statename == "resources" && (
                  <div className={resources ? "block mb-6" : "hidden"}>
                    {DUMMY_SUBCAT_RESOURCES &&
                      DUMMY_SUBCAT_RESOURCES.map((item, index) => (
                        <NavItem
                          icon={item.icon}
                          text={item.text}
                          btnClass="hover:bg-neutral-800 active:bg-neutral-700"
                          key={"nav-subcat-resources-" + index}
                        />
                      ))}
                    <button
                      type="button"
                      className="text-xs font-semibold ml-4 mb-12 mt-2 py-2 px-3 hover:bg-neutral-800 active:bg-neutral-700 rounded-full"
                    >
                      See more
                    </button>
                  </div>
                )}
              </div>
            ))}
        </ul>
      </nav>
      {headerMenu && <MobileMenuModal />}
    </>
  );
}
