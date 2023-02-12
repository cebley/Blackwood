import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Breadcrumbs from "~/components/Breadcrumbs";
import Leadership from "~/components/Leadership";
import { motion } from "framer-motion";
import { slideInUp, slideInDown } from "~/utils/motion-variants";

const Page = ({ blok }) => {
  const hasHero = blok?.body?.find((blok) => blok.component === "hero");
  const { noBreadcrumbs, leadershipPage, copyright, bgBlack } = blok;

  return (
    <div
      {...storyblokEditable(blok)}
      key={blok._uid}
      className={`${bgBlack && "bg-black -mb-16"}`}
    >
      {!hasHero && !noBreadcrumbs && (
        <motion.div
          variants={slideInDown}
          initial="hidden"
          whileInView="visible"
          transition={{
            duration: 1.5,
          }}
        >
          <Breadcrumbs />
        </motion.div>
      )}
      {blok.body?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
      {leadershipPage && <Leadership />}
      {copyright && (
        <motion.div
          variants={slideInUp}
          initial="hidden"
          whileInView="visible"
          transition={{
            duration: 1.5,
          }}
          className="text-xs font-bold tracking-wider text-center uppercase"
        >
          &copy;Copyright {new Date().getFullYear()}
        </motion.div>
      )}
    </div>
  );
};

export default Page;
