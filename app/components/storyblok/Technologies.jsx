import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { motion } from "framer-motion";
import { slideInUp } from "~/utils/motion-variants";

const Technologies = ({ blok }) => {
  const { _uid, logos, columns, blackwoodLogo } = blok;

  return (
    <div
      {...storyblokEditable(blok)}
      key={_uid}
      className={`cols-${columns} logos`}
    >
      {logos?.map((nestedBlok) => (
        <StoryblokComponent
          blok={nestedBlok}
          key={nestedBlok._uid}
          columns={columns}
        />
      ))}
      {blackwoodLogo && (
        <motion.div
          variants={slideInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
          }}
          className="card flipCard blackwood"
        >
          <div className="flipper">
            <div className="flex front boxes">
              <img src="/images/logo-black.svg" alt="logo" />
            </div>
            <div className="flex back boxes">
              <img src="/images/logo-small.svg" alt="logo" />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Technologies;
