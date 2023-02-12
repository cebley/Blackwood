import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import { motion } from "framer-motion";
import { slideInUp } from "~/utils/motion-variants";

const PracticeArea = ({ blok }) => {
  const { _uid, text, title, image, reverseLayout } = blok;

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
      className={`lg:flex justify-between items-center py-[30px] md:py-10 lg:py-[75px] mx-auto max-w-[900px] px-6 lg:px-0 ${
        reverseLayout && "flex-row-reverse"
      }`}
    >
      <div
        className={`content max-w-[680px] pr-0 lg:pr-[80px] ${
          reverseLayout && "px-0 lg:pl-[80px]"
        }`}
      >
        <h2
          dangerouslySetInnerHTML={{ __html: title }}
          className="mb-3 text-black"
        />
        <div className="description">{render(text)}</div>
      </div>
      <div className="pt-10 icon lg:pt-0">
        <img src={`${image?.filename}`} alt={image?.alt} />
      </div>
    </motion.div>
  );
};

export default PracticeArea;
