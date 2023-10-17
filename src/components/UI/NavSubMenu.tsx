import { MdExpandLess } from "react-icons/md";
export const NavSubMenu = (
  props: {
    name: string;
    text: string;
    className?: string;
    icon: React.ElementType;
    iconClass?: string;
    customFunc: () => void;
    state: any;
    children?: React.ReactNode;
  }
  // { children }: { children?: React.ReactNode }
) => {
  return (
    <div className="flex flex-col">
      <li className="flex items-center gap-4 h-10 px-4 hover:bg-neutral-800 active:bg-neutral-700 text-sm">
        <button
          type="button"
          className={
            "flex justify-between items-center h-10 px-2 relative w-full " +
            props?.className
          }
          onClick={props.customFunc}
        >
          <span className="flex items-center gap-4">
            {props.icon && (
              <props.icon className={"w-6 h-6 " + props.iconClass} />
            )}
            {props.text}
          </span>
          <MdExpandLess
            className={`w-5 h-5 text-neutral-300 ${
              props.state ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </li>
      <ul className={`${props.state ? "flex flex-col" : "hidden"}`}>
        {props.children}
      </ul>
    </div>
  );
};
