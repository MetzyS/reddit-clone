import { MdExpandLess } from "react-icons/md";

export const NavCategoryButton = (props: {
  text: string;
  state: any;
  customFunc?: () => void;
}) => {
  return (
    <button
      type="button"
      className="flex justify-between h-8 items-center hover:bg-neutral-800"
      onClick={props.customFunc}
    >
      <span className="text-xs tracking-widest px-4 text-neutral-400">
        {props.text.toUpperCase()}
      </span>
      <span className="mr-6">
        <MdExpandLess
          className={
            props.state
              ? "w-5 h-5 text-neutral-300 rotate-180"
              : "w-5 h-5 text-neutral-300"
          }
        />
      </span>
    </button>
  );
};
