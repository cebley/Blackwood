import { useLoaderData, useMatches } from "@remix-run/react";
import {
  useStoryblokState,
  StoryblokComponent,
  getStoryblokApi,
} from "@storyblok/react";

export const loader = async ({ params }) => {
  let slug = params["*"] ?? "leadership";
  const sbApi = getStoryblokApi();

  const { data } = await sbApi.get(`cdn/stories/about-us/leadership/${slug}`, {
    version: "draft",
  });
  const { data: members } = await sbApi.get(`cdn/stories`, {
    version: "draft",
    starts_with: "leadership/",
    per_page: 100,
    is_startpage: false,
  });
  return {
    story: data.story,
    members: members.stories,
  };
};

const LeadershipPages = () => {
  const data = useLoaderData();
  const story = useStoryblokState(data.story);
  console.log("matches", useMatches());
  return <StoryblokComponent blok={story.content} />;
};

export default LeadershipPages;