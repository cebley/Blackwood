import { useEffect } from "react";
import { useLoaderData } from "@remix-run/react";
import TopMenu from "./TopMenu";
import SlideMenu from "./SlideMenu";
import Logo from "~/components/Logo";
import Headroom from "react-headroom";
import { motion } from "framer-motion";

import { slideInRight, slideInLeft } from "~/utils/motion-variants";

const Header = () => {
  const { headerNav, logo } = useLoaderData();

  return (
    // <Headroom>
    <header className="w-full bg-black">
      <div className="flex items-center justify-between py-5 center-container md:py-10">
        <motion.div
          variants={slideInRight}
          whileInView="visible"
          transition={{
            duration: 1.5,
          }}
        >
          <Logo logo={logo} />
        </motion.div>
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          transition={{
            duration: 1.5,
          }}
        >
          <TopMenu navItems={headerNav} className="hidden lg:flex" />
        </motion.div>
        <SlideMenu navItems={headerNav} className="lg:hidden" />
      </div>
    </header>
    // </Headroom>
  );
};

export default Header;
