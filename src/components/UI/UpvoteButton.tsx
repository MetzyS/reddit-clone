import { BiUpvote } from "react-icons/bi";
export const UpvoteButton = (props: { upvotes: number }) => {
  return (
    <div className="flex bg-neutral-800 rounded-full p-1 items-center">
      <button className="w-full h-full rounded-full hover:bg-neutral-700 p-1 group">
        <BiUpvote className="w-4 h-4 xl:w-5 xl:h-5 group-hover:fill-green-600" />
      </button>
      <span className="text-xs cursor-default">{props.upvotes}</span>
      <button className="w-full h-full rounded-full hover:bg-neutral-700 p-1 group">
        <BiUpvote className="w-4 h-4 xl:w-5 xl:h-5 rotate-180 group-hover:fill-red-700" />
      </button>
    </div>
  );
};
