import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import { motion } from "framer-motion";
import { slideInUp } from "~/utils/motion-variants";

const Content = ({ blok }) => {
  const { _uid, text, large, buttons } = blok;
  console.log(blok);
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
        <div className="flex justify-around mb-20 center-container">
          <a
            href="https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=fffc11a4-15e2-4352-9bb1-740f6990775a&ccId=19000101_000001&lang=en_US&selectedMenuKey=CurrentOpenings"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            See current CurrentOpenings
          </a>
          <a
            href="https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=fffc11a4-15e2-4352-9bb1-740f6990775a&ccId=19000101_000001&lang=en_US&selectedMenuKey=CurrentOpenings"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Create a talent profile
          </a>
        </div>
      )}
    </>
  );
};

export default Content;
