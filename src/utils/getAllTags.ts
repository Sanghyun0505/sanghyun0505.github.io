import { getCollection } from "astro:content";
import type { MDXInstance } from "astro";
import { addHypensToSlug, getRidOfHypensToSlug } from "./slug";

interface Post {
  title: string;
  description: string;
  pubDate: Date;
  heroImage: string | null;
  categories: string[];
  tags: string[];
  authors: string[];
}

interface PostMDXInstance extends MDXInstance<Post> {
  data: Post;
}

export const getAllTags = (posts: PostMDXInstance[] = []) => {
  const allTags = new Set<string>();
  posts.forEach((post) => {
    post.data?.tags?.map((tag: string) => allTags.add(tag.toLowerCase()));
  });
  return [...allTags];
};

export const getTaxonomy = async (collection: "blog", name: keyof Post) => {
  const singlePages = await getCollection(collection);
  const taxonomyPages = singlePages.map((page) => page.data[name]);

  let taxonomies = [];

  for (let i = 0; i < taxonomyPages.length; i++) {
    const categoryArray = taxonomyPages[i];

    if (Array.isArray(categoryArray)) {
      for (let j = 0; j < categoryArray.length; j++) {
        taxonomies.push({
          name: categoryArray[j],
          slug: addHypensToSlug(categoryArray[j]),
        });
      }
    }
  }

  const taxonomy = [...new Set(taxonomies)];

  return taxonomy;
};

interface PageData {
  id: string;
  data: {
    draft?: boolean;
    [key: string]: any;
  };
}

export const getSinglePage = async (collection: any) => {
  const allPage = (await getCollection(collection)) as PageData[];
  const removeIndex = allPage.filter((data) => data.id.match(/^(?!-)/));
  const removeDrafts = removeIndex.filter((data) => !data.data.draft);

  return removeDrafts;
};

export const taxonomyFilter = (posts: any[], name: string, key: any) => {
  return posts.filter((post) =>
    post.data[name]
      .map((name: string) => getRidOfHypensToSlug(name))
      .includes(getRidOfHypensToSlug(key))
  );
};
