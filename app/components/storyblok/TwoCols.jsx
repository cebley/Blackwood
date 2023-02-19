import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import clsx from "clsx";
import { motion } from "framer-motion";
import { slideInUp } from "~/utils/motion-variants";

const TwoCols = ({ blok }) => {
  const { _uid, title, col1, col2, page } = blok;
  return (
    <div
      {...storyblokEditable(blok)}
      key={_uid}
      className={clsx("two-cols", {
        history: page === "history",
        benefits: page === "benefits",
      })}
    >
      {title && (
        <motion.h2
          variants={slideInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
          }}
          dangerouslySetInnerHTML={{ __html: title }}
          className="title"
        />
      )}
      <motion.div
        variants={slideInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
        }}
        className={clsx(`cols-container `)}
      >
        {col1 && <div className="prose col col1">{render(col1)}</div>}
        {col2 && <div className="prose col col2">{render(col2)}</div>}
      </motion.div>
    </div>
  );
};

export default TwoCols;
