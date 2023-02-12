import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { motion } from "framer-motion";
import { slideInUp } from "~/utils/motion-variants";

const Contracts = ({ blok }) => {
  const { _uid, title, description, items, twoCols } = blok;
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
      className="contract center-container"
    >
      <div className="description">
        <div className="desc-content">
          <h2 dangerouslySetInnerHTML={{ __html: title }} />
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
      <div className={`items ${twoCols && "twoCols"}`}>
        {items?.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </motion.div>
  );
};

export default Contracts;
