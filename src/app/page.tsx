"use client";
import { DUMMY_POSTS } from "@/data/DUMMY_DATA";
import { SortBar } from "@/components/UI/SortBar";

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
              <article
                key={"post-" + post.id}
                className="border-0 border-b border-neutral-800 hover:bg-neutral-800 active:bg-neutral-700 px-4 py-4"
              >
                <div className="flex justify-between text-xs w-full">
                  <div className="flex gap-4">
                    {/* subreddit */}
                    <div className="flex gap-2">
                      <a href={post.subredditpath} className="flex gap-1">
                        <span>i</span>
                        <span>r/{post.subreddit}</span>
                      </a>
                    </div>

                    {/* time */}
                    <span>{post.date?.toLocaleDateString()}</span>
                  </div>

                  {/* boutons join + menu */}
                  <div className="flex gap-2">
                    <button type="button">Join</button>
                    <button type="button">...</button>
                  </div>
                </div>
                {/* titre */}
                <div>
                  <a href={post.path} className="font-bold text-lg">
                    {post.title}
                  </a>
                </div>
                {/* boutons likes/commentaires/partager */}
                <div className="flex gap-3">
                  <button type="button">{post.likes}</button>
                  <button type="button">{post.comments}</button>
                  <button type="button">x</button>
                </div>
              </article>
            ))}
        </div>

        {/* Side */}
        <aside className="hidden lg:block bg-red-900">side</aside>
      </div>
    </div>
  );
}
