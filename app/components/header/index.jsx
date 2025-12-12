import { useLoaderData } from "react-router";
import TopMenu from "./TopMenu";
import SlideMenu from "./SlideMenu";
import Logo from "~/components/Logo";
import Headroom from "react-headroom";
import ClientOnly from "~/components/ClientOnly";
import { motion } from "framer-motion";

import { slideInRight, slideInLeft } from "~/utils/motion-variants";

const HeaderContent = ({ logo, headerNav }) => (
  <header className="w-full bg-black">
    <div className="flex items-center justify-between py-5 center-container md:py-10">
      <motion.div
        variants={slideInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
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
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
        }}
      >
        <TopMenu navItems={headerNav} className="hidden lg:flex" />
      </motion.div>
      <SlideMenu navItems={headerNav} className="lg:hidden" />
    </div>
  </header>
);

const Header = () => {
  const { headerNav, logo } = useLoaderData();

  return (
    <ClientOnly fallback={<HeaderContent logo={logo} headerNav={headerNav} />}>
      <Headroom>
        <HeaderContent logo={logo} headerNav={headerNav} />
      </Headroom>
    </ClientOnly>
  );
};

export default Header;
