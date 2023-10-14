import { NavItem } from "../UI/NavItem";
import { BiLogIn } from "react-icons/bi";
import { MdOutlineAdsClick } from "react-icons/md";

export const MobileMenuModal = () => {
  return (
    <div className="fixed bottom-0 h-36 w-full bg-slate-900 rounded-tl-xl rounded-tr-xl">
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
          icon={BiLogIn}
          btnClass="font-semibold hover:bg-neutral-800 active:bg-neutral-700"
          text="Shop Collectible Avatars"
          iconClass="w-6 h-6 mr-4"
        />
      </ul>
    </div>
  );
};
