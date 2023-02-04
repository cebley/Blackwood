import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Breadcrumbs from "~/components/Breadcrumbs";

const Page = ({ blok }) => {
  const hasHero = blok?.body?.find((blok) => blok.component === "hero");
  const { noBreadcrumbs, leadershipPage } = blok;
  return (
    <div {...storyblokEditable(blok)} key={blok._uid}>
      {!hasHero && !noBreadcrumbs && <Breadcrumbs />}
      {blok.body?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Page;
