import { useLoaderData } from "@remix-run/react";

import {
  getStoryblokApi,
  useStoryblokState,
  StoryblokComponent,
} from "@storyblok/react";

export default function RootPage() {
  let { story } = useLoaderData();
  story = useStoryblokState(story);

  return (
    <>
      <StoryblokComponent blok={story.content} />
    </>
  );
}

export const loader = async ({ params }) => {
  let slug = params["*"] ?? "home";

  let sbParams = {
    version: process.env.IS_PREVIEW ? "draft" : "published",
  };

  const sbApi = getStoryblokApi();

  let { data } = await sbApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    story: data.story,
  };
};
