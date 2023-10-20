"use client";
import { DUMMY_POSTS } from "@/data/DUMMY_DATA";
import { SortBar } from "@/components/UI/SortBar";
import { PostPreview } from "@/components/post/PostPreview";

export default function Home() {
  return (
    <div className="mt-8">
      {/* Bannière */}
      <div className="hidden w-full h-12 bg-red-400 lg:block">bannière</div>
      <div className="w-full flex">
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
                likes={post.likes}
                comments={post.comments}
                tags={post.tags}
              />
            ))}
        </div>

        {/* Side */}
        <aside className="hidden lg:block bg-red-900">side</aside>
      </div>
    </div>
  );
}
