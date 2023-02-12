import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { motion } from "framer-motion";
import { slideInUp } from "~/utils/motion-variants";

const Services = ({ blok }) => {
  const { _uid, items, itemsCol2, title, greyBg } = blok;
  return (
    <div
      {...storyblokEditable(blok)}
      key={_uid}
      className={`services py-[50px] lg:py-[100px] ${greyBg && "bg-light2"} ${
        itemsCol2 && "twoCols [>.title]:lg:pr-[340px]"
      }}`}
    >
      <div className="justify-start center-container lg:flex">
        <motion.div
          variants={slideInUp}
          initial="hidden"
          whileInView="visible"
          transition={{
            duration: 1.5,
          }}
          className="title lg:pr-[110px] lg:w-[350px]"
        >
          <h2
            dangerouslySetInnerHTML={{ __html: title }}
            className="pb-5 sublinedTitle lg:pb-0"
          />
        </motion.div>
        {items && (
          <motion.div
            variants={slideInUp}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 1.5,
              delay: 0.5,
            }}
            className="col1"
          >
            {items?.map((nestedBlok) => (
              <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
          </motion.div>
        )}
        {itemsCol2 && (
          <motion.div
            variants={slideInUp}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 1.5,
              delay: 1,
            }}
            className="col2 lg:pl-[100px]"
          >
            {itemsCol2?.map((nestedBlok) => (
              <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Services;
