import { NavButton } from "@/components/UI/NavButton";
import { MdExpandLess } from "react-icons/md";
import { useNavButtonMenu } from "@/app/store/useNavButtons";

export const SortBar = () => {
  const { openNavButtonMenu, closeNavButtonMenu } = useNavButtonMenu();
  return (
    <div className="flex justify-between my-3">
      <div>
        <NavButton
          className="flex items-center w-full text-left text-xs h-10 px-4"
          icon={MdExpandLess}
          iconClass={"h-5 w-5 mr-3 order-1"}
          text={"Hot"}
          customFunc={() => openNavButtonMenu("type")}
        />
      </div>
      <div>
        <NavButton
          className="flex items-center w-full text-left text-xs h-10 px-4"
          icon={MdExpandLess}
          iconClass={"h-5 w-5 mr-3 order-1"}
          text={"France"}
          customFunc={() => openNavButtonMenu("country")}
        />
      </div>
      <div></div>
      <div>
        <NavButton
          className="flex items-center w-full text-left text-xs h-10 px-4"
          icon={MdExpandLess}
          iconClass={"h-5 w-5 mr-3 order-1"}
          text={""}
          customFunc={() => openNavButtonMenu("sort")}
        />
      </div>
    </div>
  );
};
