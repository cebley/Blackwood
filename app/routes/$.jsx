import { useLoaderData } from "@remix-run/react";

import {
  getStoryblokApi,
  useStoryblokState,
  StoryblokComponent,
} from "@storyblok/react";
import { GeneralErrorBoundary } from "~/components/GeneralErrorBoundary";
import { NotFoundPage } from "~/components/NotFoundPage";
import { invariantResponse } from "~/utils/invariantResponse";

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
    version: "draft",
  };

  const sbApi = getStoryblokApi();

  let { data } = await sbApi.get(`cdn/stories/${slug}`, sbParams).catch((e) => {
    console.log("e", e);
    return { data: null };
  });
  invariantResponse(data, `there is no page with slug ${slug}`, {
    status: 404,
  });

  return {
    story: data.story,
  };
};

export function ErrorBoundary() {
  return (
    <GeneralErrorBoundary
      statusHandlers={{
        404: () => <NotFoundPage />,
      }}
    />
  );
}
