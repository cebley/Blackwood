import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import { motion } from "framer-motion";
import { slideInUp } from "~/utils/motion-variants";

const Content = ({ blok }) => {
  const { _uid, text } = blok;
  return (
    <motion.div
      variants={slideInUp}
      initial="hidden"
      whileInView="visible"
      transition={{
        duration: 1.5,
      }}
      {...storyblokEditable(blok)}
      key={_uid}
      className="prose center-container content-block"
    >
      {render(text)}
    </motion.div>
  );
};

export default Content;
