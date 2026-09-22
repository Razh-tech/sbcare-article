export const dynamic = "force-dynamic";
export const revalidate = 360; // 1 hour

import type { MetadataRoute } from "next";
import urlJoin from "url-join";
import { wispSafe } from "../lib/wisp";
import { config } from "@/config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postsResult = await wispSafe.getPosts({
    limit: "all",
  });
  const tagsResult = await wispSafe.getTags();
  return [
    {
      url: config.baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: urlJoin(config.baseUrl, "category"),
      lastModified: new Date(),
      priority: 0.7,
    },
    ...postsResult.posts.map((post) => {
      return {
        url: urlJoin(config.baseUrl, "post", post.slug),
        lastModified: new Date(post.updatedAt),
        priority: 0.8,
      };
    }),
    ...tagsResult.tags.map((tag) => {
      return {
        url: urlJoin(config.baseUrl, "category", tag.name),
        lastModified: new Date(),
        priority: 0.5,
      };
    }),
  ];
}
