import { useLoaderData } from "@remix-run/react";
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
    starts_with: "about-us/leadership/",
    per_page: 100,
    sort_by: "position:desc",
    is_startpage: false,
  });
  const activeMembers = members.stories.filter(
    (member) => !member.content.hidden
  );
  return {
    story: data.story,
    members: activeMembers,
  };
};

const LeadershipPages = () => {
  const data = useLoaderData();
  const story = useStoryblokState(data.story);

  return <StoryblokComponent blok={story.content} />;
};

export default LeadershipPages;