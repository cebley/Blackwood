import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import { motion } from "framer-motion";
import { slideInUp } from "~/utils/motion-variants";
import PageLights from "~/inline-svgs/PageLights";
import Breadcrumbs from "~/components/Breadcrumbs";

const Hero = ({ blok }) => {
  const { _uid, headline, intro, smaller, noLights, noOblique } = blok;
  //TODO: fix triangle and lights on small and very big screens
  return (
    <div
      {...storyblokEditable(blok)}
      key={_uid}
      className="relative overflow-hidden bg-black"
    >
      <Breadcrumbs />
      <div
        variants={slideInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1.5, delay: 0.5 }}
        className={`container  ${
          smaller ? "!max-w-[710px]" : "!max-w-[986px]"
        } mx-auto pt-[100px] pb-[180px] md:pb-[180px] md:pt-[100px]`}
      >
        <h1>{headline}</h1>
        <div className="text-white prose max-w-full ">{render(intro)}</div>
      </div>

      {!noOblique && <div className="triangle"></div>}
      {!noLights && (
        <div
          variants={slideInUp}
          initial="hidden"
          whileInView={{ y: -30, opacity: 0.7 }}
          transition={{ duration: 1.5, delay: 2 }}
          className="page-lights absolute w-full h-[300px] pointer-events-none bottom-5 -md:bottom-5 lg:bottom-[-70px] z-0 "
        >
          <PageLights />
        </div>
      )}
    </div>
  );
};

export default Hero;
