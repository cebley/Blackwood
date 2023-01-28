import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import { motion } from "framer-motion";
import { slideInUp } from "~/utils/motion-variants";
import TriangleMask from "~/inline-svgs/TriangleMask";
import PageLights from "~/inline-svgs/PageLights";

const Hero = ({ blok }) => {
  const { _uid, headline, intro, image, bottom_text, noLights, noOblique } =
    blok;
  //TODO: fix triangle and lights on small and very big screens
  return (
    <div
      {...storyblokEditable(blok)}
      key={_uid}
      className="relative overflow-hidden bg-black"
    >
      <motion.div
        variants={slideInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1.5, delay: 0.5 }}
        className="center-container max-w-[986px] pt-[100px] pb-[50px] md:pt-[100px] "
      >
        <h1>{headline}</h1>
        <div className="text-white ">{render(intro)}</div>
      </motion.div>

      {!noOblique && (
        <TriangleMask className="absolute object-cover h-[400px] w-full bottom-0 " />
      )}
      {!noLights && (
        <motion.div
          variants={slideInUp}
          initial="hidden"
          whileInView={{ y: -30, opacity: 0.7 }}
          transition={{ duration: 1.5, delay: 2 }}
          className="page-lights "
        >
          <PageLights />
        </motion.div>
      )}
    </div>
  );
};

export default Hero;
