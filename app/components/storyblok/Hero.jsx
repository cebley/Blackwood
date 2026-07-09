import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import { motion } from "framer-motion";
import { slideInUp, slideInDown } from "~/utils/motion-variants";
import PageLights from "~/inline-svgs/PageLights";
import Breadcrumbs from "~/components/Breadcrumbs";

const Hero = ({ blok }) => {
  const { _uid, headline, intro, smaller, noLights, noOblique } = blok;

  return (
    <div {...storyblokEditable(blok)} key={_uid} className="hero">
      {!noLights && (
        // Circuit board shown via CSS opacity (no scroll-triggered fade), so it
        // is visible on load and never reads as a plain-black header.
        <div className="lights">
          <PageLights />
        </div>
      )}
      <div className="hero-container">
        <div className="page-intro">
          <motion.div
            variants={slideInDown}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
            }}
          >
            <Breadcrumbs location="hero" />
          </motion.div>

          <div
            className={`intro-container ${
              smaller && "!max-w-[710px] mx-auto"
            } `}
          >
            <motion.h1
              variants={slideInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
              }}
            >
              {headline}
            </motion.h1>
            <motion.div
              variants={slideInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                delay: 0.5,
              }}
              className={`max-w-full prose text-white page-intro  `}
            >
              {render(intro)}
            </motion.div>
          </div>
        </div>
      </div>
      {!noOblique && <div className="triangle"></div>}
    </div>
  );
};

export default Hero;
