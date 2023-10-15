import { useMenu } from "@/app/store/useMenu";
import { NavItem } from "../UI/NavItem";
import { BiLogIn, BiShoppingBag } from "react-icons/bi";
import { MdOutlineAdsClick } from "react-icons/md";

export const MobileMenuModal = () => {
  const { openMenu, closeMenu } = useMenu();
  return (
    <>
      <div
        className="bg-black opacity-30 h-full w-full fixed z-10"
        onClick={() => {
          closeMenu("headerMenu");
          closeMenu("menu");
        }}
      ></div>
      <div className="fixed bottom-0 h-36 w-full bg-neutral-900 rounded-tl-xl rounded-tr-xl z-20">
        <ul className="pt-2">
          <NavItem
            icon={BiLogIn}
            btnClass="font-semibold hover:bg-neutral-800 active:bg-neutral-700"
            text="Log In / Sign Up"
            iconClass="w-6 h-6 mr-4"
          />
          <NavItem
            icon={MdOutlineAdsClick}
            btnClass="font-semibold hover:bg-neutral-800 active:bg-neutral-700"
            text="Advertise on Reddit"
            iconClass="w-6 h-6 mr-4"
          />
          <NavItem
            icon={BiShoppingBag}
            btnClass="font-semibold hover:bg-neutral-800 active:bg-neutral-700"
            text="Shop Collectible Avatars"
            iconClass="w-6 h-6 mr-4"
          />
        </ul>
      </div>
    </>
  );
};
