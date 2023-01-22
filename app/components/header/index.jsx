import { useLoaderData } from "@remix-run/react";
import TopMenu from "./TopMenu";
import SlideMenu from "./SlideMenu";
import Logo from "~/components/Logo";
import Headroom from "react-headroom";
import { motion } from "framer-motion";

const Header = () => {
  const { headerNav, logo } = useLoaderData();

  return (
    // <Headroom>
    <header className="bg-black w-full">
      <div className="flex items-center center-container justify-between  py-5  md:py-10">
        <motion.div
          animate={{
            x: 0,
            opacity: 1,
          }}
          initial={{ x: -100, opacity: 0 }}
          transition={{
            duration: 1.5,
          }}
        >
          <Logo logo={logo} />
        </motion.div>
        <TopMenu navItems={headerNav} className="hidden lg:flex" />
        <SlideMenu navItems={headerNav} className="lg:hidden" />
      </div>
    </header>
    // </Headroom>
  );
};

export default Header;
