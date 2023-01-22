import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import { motion } from "framer-motion";
import { slideInUp } from "~/utils/motion-variants";
import TriangleMask from "~/inline-svgs/TriangleMask";
import PageLeds from "~/inline-svgs/PageLeds";

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
        className="center-container max-w-[986px] pt-[100px] pb-[90px] md:pt-[100px] md:pb-[180px] lg:pb-[300px]"
      >
        <h1>{headline}</h1>
        <div className="text-white ">{render(intro)}</div>

        {image && (
          <div className="flex justify-center mt-[143px]">
            <img src={image.filename} alt="" />
          </div>
        )}
        {bottom_text && (
          <div
            dangerouslySetInnerHTML={{ __html: bottom_text }}
            className="text-white"
          />
        )}
      </motion.div>

      {!noOblique && (
        <TriangleMask className="absolute object-cover h-[300px] w-full bottom-0 md:bottom-[-20px] lg:bottom-[-70px]" />
      )}
      {!noLights && (
        <motion.div
          variants={slideInUp}
          initial="hidden"
          whileInView={{ y: 0, opacity: 0.7 }}
          transition={{ duration: 1.5, delay: 2 }}
          className="absolute w-full h-[300px] pointer-events-none bottom-5 -md:bottom-5 -lg:bottom-[70px] z-0"
        >
          <PageLeds />
        </motion.div>
      )}
    </div>
  );
};

export default Hero;
