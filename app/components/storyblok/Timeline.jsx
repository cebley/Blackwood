import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import { motion } from "framer-motion";
import { slideInUp } from "~/utils/motion-variants";

const Timeline = ({ blok }) => {
  const { _uid, tech, app, year, bgGrey } = blok;
  return (
    <div
      {...storyblokEditable(blok)}
      key={_uid}
      className={`${
        bgGrey && "bg-light2 "
      }pt-[50px] md:pt-[60px] pb-[30px] md:pb-[42px]`}
    >
      <motion.div
        variants={slideInUp}
        initial="hidden"
        whileInView="visible"
        transition={{
          duration: 1.5,
        }}
        className="center-container lg:flex items-center max-w-[800px]"
      >
        <div
          dangerouslySetInnerHTML={{ __html: year }}
          className="text-[43px] lg:text-3xl uppercase lg:pr-[170px] mb-10 md:mb-[70px] lg:mb-0 lg:min-w-[404px]"
        />
        <div className="content [&>h5]:text-black space-y-5">
          <div>
            <h5 className="mb-3 text-sm text-black">Technology</h5>
            <div className="prose">{render(tech)}</div>
          </div>
          <div>
            <h5 className="mb-3 text-sm text-black"> Application</h5>
            <div className="prose">{render(app)}</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Timeline;
