"use client";
import { DUMMY_POSTS } from "@/data/DUMMY_DATA";
import { SortBar } from "@/components/UI/SortBar";
import { PostPreview } from "@/components/post/PostPreview";

export default function Home() {
  return (
    <div className="mt-8 xl:max-w-[1440px] xl:mx-auto lg:grid lg:grid-cols-12 lg:gap-x-8 px-5">
      {/* Bannière */}
      <div className="hidden w-full h-12 bg-red-400 lg:block lg:row-start-1 lg:col-span-full xl:col-start-4">
        bannière
      </div>
      <div className="w-full flex relative lg:col-span-8 xl:col-start-4 xl:col-end-10 lg:row-start-2">
        {/* Content */}
        <div className="flex flex-col w-full">
          {/* Sort bar*/}
          <SortBar />
          {/* Posts */}
          {DUMMY_POSTS &&
            DUMMY_POSTS.map((post) => (
              // top bar post
              <PostPreview
                key={"post-" + post.id}
                id={post.id}
                subredditpath={post.subredditpath}
                subredditIcon={post.subredditIcon}
                subreddit={post.subreddit}
                date={post.date}
                path={post.path}
                title={post.title}
                upvotes={post.upvotes}
                comments={post.comments}
                tags={post.tags}
                flags={post.flags}
              />
            ))}
        </div>
      </div>
      {/* Side */}
      <aside className="hidden lg:block lg:sticky top-0  w-full h-12 xl:col-start-10 xl:col-end-13 bg-red-900 lg:row-start-2 xl:row-start-2 lg:col-start-9 lg:col-end-13">
        side
      </aside>
    </div>
  );
}
