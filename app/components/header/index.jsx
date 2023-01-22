import { useLoaderData } from "@remix-run/react";
import TopMenu from "./TopMenu";
import SlideMenu from "./SlideMenu";
import Logo from "~/components/Logo";
import Headroom from "react-headroom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Header = () => {
  const { headerNav, logo } = useLoaderData();
  const control = useAnimation();
  const [ref, inView] = useInView();

  const slideInRight = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  const slideInLeft = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 100 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    // <Headroom>
    <header className="w-full bg-black">
      <div className="flex items-center justify-between py-5 center-container md:py-10">
        <motion.div
          ref={ref}
          variants={slideInRight}
          initial="hidden"
          animate={control}
          transition={{
            duration: 1.5,
          }}
        >
          <Logo logo={logo} />
        </motion.div>
        <motion.div
          ref={ref}
          variants={slideInLeft}
          initial="hidden"
          animate={control}
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
