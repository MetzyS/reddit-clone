import { FiShare } from "react-icons/fi";
export const ShareButton = () => {
  return (
    <div className="flex bg-neutral-800 rounded-full py-2 px-3 items-center hover:bg-neutral-700 gap-1 cursor-pointer">
      <button className="w-full h-full rounded-full hover:bg-neutral-700">
        <FiShare className="w-4 h-4 xl:w-5 xl:h-5" />
      </button>
    </div>
  );
};
