import { cachedClient } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";
import Posts from "@/app/_components/posts";

export default async function Home() {
  const posts = await cachedClient(postsQuery);

  return (
    <main className="flex justify-center">
      <Posts posts={posts} />
    </main>
  );
}
