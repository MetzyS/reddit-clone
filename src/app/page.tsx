"use client";
export default function Home() {
  return (
    <div className="mt-8 px-4">
      <div className="hidden w-full h-12 bg-red-400 lg:block">bannière</div>
      <div className="w-full flex">
        <div className="bg-red-600 w-full">content</div>
        <aside className="hidden lg:block bg-red-900">side</aside>
      </div>
    </div>
  );
}
