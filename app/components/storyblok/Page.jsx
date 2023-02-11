import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Breadcrumbs from "~/components/Breadcrumbs";
import Leadership from "~/components/Leadership";

const Page = ({ blok }) => {
  const hasHero = blok?.body?.find((blok) => blok.component === "hero");
  const { noBreadcrumbs, leadershipPage, copyright, bgBlack } = blok;
  console.log("leadershipPage", leadershipPage);
  return (
    <div
      {...storyblokEditable(blok)}
      key={blok._uid}
      className={`${bgBlack && "bg-black -mb-16"}`}
    >
      {!hasHero && !noBreadcrumbs && <Breadcrumbs />}
      {blok.body?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
      {leadershipPage && <Leadership />}
      {copyright && (
        <div className="text-xs font-bold tracking-wider text-center uppercase">
          &copy;Copyright {new Date().getFullYear()}
        </div>
      )}
    </div>
  );
};

export default Page;
