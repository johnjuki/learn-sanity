import React from "react";
import { cachedClient } from "@/sanity/lib/client";
import { postPathsQuery, postQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "@sanity/client";
import Post from "@/app/_components/post";

export async function generateStaticParams() {
  return await cachedClient(postPathsQuery);
}

export default async function Page({ params }: { params: any }) {
  const post = await cachedClient<SanityDocument>(postQuery, params);
  return <Post post={post} />;
}
