import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import { motion } from "framer-motion";
import { slideInUp } from "~/utils/motion-variants";

const Content = ({ blok }) => {
  const { _uid, text, large, buttons } = blok;

  return (
    <>
      <motion.div
        variants={slideInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
        }}
        {...storyblokEditable(blok)}
        key={_uid}
        className={`prose center-container content-block py-10 ${
          large ? " max-w-[1150px]" : "!max-w-[800px]"
        }`}
      >
        {render(text)}
      </motion.div>
      {buttons && (
        <motion.div
          variants={slideInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-wrap justify-around gap-5 mb-20 center-container"
        >
          <a
            href="https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=fffc11a4-15e2-4352-9bb1-740f6990775a&ccId=19000101_000001&lang=en_US&selectedMenuKey=CurrentOpenings"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-[330px] mb-5 btn md:mb-0 "
          >
            See current CurrentOpenings
          </a>
          <a
            href="https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=fffc11a4-15e2-4352-9bb1-740f6990775a&ccId=19000101_000001&lang=en_US&selectedMenuKey=CurrentOpenings"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-[330px] btn"
          >
            Create a talent profile
          </a>
        </motion.div>
      )}
    </>
  );
};

export default Content;
