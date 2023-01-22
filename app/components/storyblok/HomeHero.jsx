import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import { motion } from "framer-motion";

import { slideInRight, slideInLeft, slideInUp } from "~/utils/motion-variants";

const HomeHero = ({ blok }) => {
  const { _uid, headline, text, title, small_title } = blok;

  return (
    <div {...storyblokEditable(blok)} key={_uid} className="bg-black">
      <div className="text-white center-container">
        <div className="pt-[15%] pl-6 lg:pl-12">
          <motion.img
            variants={slideInUp}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 1.5,
            }}
            src="images/logo-small.svg"
            alt="blackwood logo"
            className="mb-6"
          />
          <motion.div
            variants={slideInUp}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 1,
              delay: 1,
            }}
            dangerouslySetInnerHTML={{ __html: headline }}
            className="text-2xl font-normal lg:text-3xl leading-[1.1] pb-[100px] md:pb-[150px] lg:pb-[250px]"
          />
          <motion.div
            variants={slideInUp}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 1,
              delay: 1.5,
            }}
            className="max-w-[500px] mx-auto"
          >
            <div className="text-sm font-bold tracking-wide uppercase">
              {small_title}
            </div>
            <h1>{title}</h1>
            <div className="prose text-white">{render(text)}</div>
          </motion.div>
        </div>
      </div>
      <img
        src="images/white-mask.svg"
        className="mask object-cover h-[443px] w-full -mt-[220px]"
        alt=""
      />
    </div>
  );
};

export default HomeHero;
