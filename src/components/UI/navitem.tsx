import { NavButton } from "./navbutton";
import Image from "next/image";
export const NavItem = (props: {
  text?: string;
  iconClass?: string;
  btnClass?: string;
  icon?: React.ElementType;
  main?: boolean;
  image?: string;
  imageWidth?: number;
}) => {
  let bgMain = props.main ? "bg-neutral-800" : "";
  let image = props.image ? props.image : "";
  let width = props.imageWidth ? props.imageWidth : 0;

  return (
    <li className={props.btnClass + " " + bgMain}>
      <a href="" className="flex items-center gap-4 h-10 px-6">
        {props.image && (
          <Image src={image} width={width} alt="" className="cursor-pointer" />
        )}
        <NavButton
          className="flex items-center w-full text-left h-full text-sm"
          icon={props.icon}
          iconClass={"h-5 w-5 mr-3 " + props.iconClass}
          text={props.text}
        />
      </a>
    </li>
  );
};
