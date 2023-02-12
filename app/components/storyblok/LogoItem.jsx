import { storyblokEditable } from "@storyblok/react";
import { motion } from "framer-motion";
import { slideInUp } from "~/utils/motion-variants";

const LogoItem = ({ blok }) => {
  const { _uid, title, image, link } = blok;
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
      className={`card ${image && "flipCard"}`}
    >
      <div className="flipper">
        <div className="flex front boxes">
          {image ? (
            <img src={image.filename} alt={image.alt} />
          ) : (
            <h3 dangerouslySetInnerHTML={{ __html: title }} />
          )}
        </div>
        {image && (
          <div className="flex back boxes">
            <a href={link.cached_url} target="_blank" rel="noopener noreferrer">
              <h3 dangerouslySetInnerHTML={{ __html: title }} />
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default LogoItem;
