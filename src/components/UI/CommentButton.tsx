import { BiComment } from "react-icons/bi";
export const CommentButton = (props: { comments: number }) => {
  return (
    <div className="flex bg-neutral-800 rounded-full py-2 px-3 items-center hover:bg-neutral-700 gap-1 cursor-pointer">
      <button className="w-full h-full rounded-full hover:bg-neutral-700">
        <BiComment className="w-4 h-4 xl:w-5 xl:h-5" />
      </button>
      <span className="text-xs">{props.comments}</span>
    </div>
  );
};
