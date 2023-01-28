import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Breadcrumbs from "~/components/Breadcrumbs";

const Page = ({ blok }) => {
  const hasHero = blok?.body?.find((blok) => blok.component === "hero");
  return (
    <main {...storyblokEditable(blok)} key={blok._uid}>
      {!hasHero && <Breadcrumbs />}
      {blok.body?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};

export default Page;
