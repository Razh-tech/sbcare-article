import { config } from "@/config";
import {
  buildWispClient,
  type GetPostResult,
  type GetPostsResult,
  type GetRelatedPostsResult,
  type GetTagsResult,
} from "@wisp-cms/client";
import { fallbackCategories, fallbackPosts } from "@/lib/fallbackData";

export const wisp = buildWispClient({
  blogId: config.blogId,
});

type GetPostsParams = Parameters<typeof wisp.getPosts>[0];

const safeGetPosts = async (params?: GetPostsParams): Promise<GetPostsResult> => {
  try {
    const result = await wisp.getPosts(params || { limit: 6 });
    if (result?.posts?.length) return result;
  } catch {
    // fall through to fallback data
  }

  const limit = params?.limit === "all" ? fallbackPosts.length : params?.limit ?? 6;
  const posts = fallbackPosts.slice(0, typeof limit === "number" ? limit : fallbackPosts.length);

  return {
    posts,
    pagination: {
      page: 1,
      totalPages: 1,
      totalPosts: posts.length,
      prevPage: null,
      nextPage: null,
      limit,
    },
  };
};

const safeGetTags = async (): Promise<GetTagsResult> => {
  try {
    const result = await wisp.getTags();
    if (result?.tags?.length) return result;
  } catch {
    // fall through to fallback data
  }

  return {
    tags: fallbackCategories,
    pagination: {
      page: 1,
      limit: fallbackCategories.length,
      totalPages: 1,
      totalTags: fallbackCategories.length,
      prevPage: null,
      nextPage: null,
    },
  };
};

const safeGetPost = async (slug: string): Promise<GetPostResult> => {
  try {
    const result = await wisp.getPost(slug);
    if (result?.post) return result;
  } catch {
    // fall through to fallback data
  }

  const post = fallbackPosts.find((item) => item.slug === slug) || fallbackPosts[0];
  return {
    post: {
      id: post.id,
      createdAt: post.createdAt,
      teamId: post.teamId,
      description: post.description,
      title: post.title,
      content: post.content,
      slug: post.slug,
      image: post.image,
      metadata: null,
      authorId: post.authorId,
      updatedAt: post.updatedAt,
      publishedAt: post.publishedAt,
      tags: post.tags,
      author: {
        name: post.author.name,
        image: post.author.image,
      },
    },
  };
};

const safeGetRelatedPosts = async ({
  slug,
  limit = 4,
}: {
  slug: string;
  limit?: number;
}): Promise<GetRelatedPostsResult> => {
  try {
    const result = await wisp.getRelatedPosts({ slug, limit });
    if (result?.posts?.length) return result;
  } catch {
    // fall through to fallback data
  }

  const posts = fallbackPosts.filter((item) => item.slug !== slug).slice(0, limit);
  return {
    posts: posts.map((post) => ({
      id: post.id,
      createdAt: post.createdAt,
      teamId: post.teamId,
      description: post.description,
      title: post.title,
      slug: post.slug,
      image: post.image,
      authorId: post.authorId,
      updatedAt: post.updatedAt,
      publishedAt: post.publishedAt,
      distance: 1,
    })),
  };
};

export const wispSafe = {
  getPosts: safeGetPosts,
  getTags: safeGetTags,
  getPost: safeGetPost,
  getRelatedPosts: safeGetRelatedPosts,
};

export type { GetPostsResult, GetPostResult };
