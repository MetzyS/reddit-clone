import { BiSolidError } from "react-icons/bi";
import { DefaultButton } from "../UI/DefaultButton";
import { BsThreeDots } from "react-icons/bs";
import Image, { StaticImageData } from "next/image";
import { FlagButton } from "../UI/FlagButton";
import { UpvoteButton } from "../UI/UpvoteButton";
import { CommentButton } from "../UI/CommentButton";
import { ShareButton } from "../UI/ShareButton";
export const PostPreview = (props: {
  id: number;
  subredditpath: string;
  subreddit: string;
  subredditIcon?: StaticImageData;
  date: any;
  path: string;
  title: string;
  upvotes: number;
  comments: number;
  tags: string[];
  flags: number[];
  image?: string;
}) => {
  let image = props.subredditIcon ? props.subredditIcon : "";
  // let width = props.image ? 20 : 0;
  // let height = props.image ? 20 : 0;
  return (
    <article className="border-0 border-b border-neutral-800 hover:bg-neutral-800 active:bg-neutral-700 px-4 py-4">
      <div className="flex text-xs w-full">
        <div className="flex">
          {/* subreddit */}
          <div className="flex gap-2 items-center">
            <a href={props.subredditpath} className="flex gap-1 items-center">
              <Image
                src={image}
                alt={""}
                width={25}
                height={25}
                className="mr-1 rounded-full"
              ></Image>
              <span className="font-semibold text-neutral-300">
                r/{props.subreddit}
              </span>
            </a>
          </div>

          {/* time */}
          <span className="flex text-neutral-600 items-center">
            &nbsp; &#8226; {props.date?.toLocaleDateString()}
          </span>
        </div>

        {/* boutons join + menu */}
        <div className="flex gap-2 ml-auto items-center">
          <DefaultButton
            text="Join"
            className="font-semibold px-3 py-1 bg-blue-800 rounded-full hover:bg-blue-600 text-xs"
          />
          <DefaultButton
            className="font-semibold px-2 py-1 rounded-full hover:bg-neutral-700"
            icon={BsThreeDots}
          />
        </div>
      </div>
      {/* tags */}
      {props.tags &&
        props.tags.map((tag, index) => (
          <div className="flex gap-1" key={"tag-" + index}>
            <BiSolidError />
            <span className="text-xs uppercase font-semibold">{tag}</span>
          </div>
        ))}
      {/* titre */}
      <div className="flex items-start flex-col lg:items-center lg:flex-row gap-2">
        <a href={props.path} className="font-bold text-lg">
          {props.title}
        </a>
        {props.flags &&
          props.flags.map((flag, index) => (
            <FlagButton flag={flag} index={index} key={"flag-" + index} />
          ))}
      </div>
      {/* boutons likes/commentaires/partager */}
      <div className="flex gap-3 text-xs font-semibold">
        <UpvoteButton upvotes={props.upvotes} />
        <CommentButton comments={props.comments} />
        <ShareButton />
      </div>
    </article>
  );
};
