import { useLoaderData } from "@remix-run/react";
import TopMenu from "./TopMenu";
import SlideMenu from "./SlideMenu";
import Logo from "~/components/Logo";
import Headroom from "react-headroom";

const Header = () => {
  const { headerNav, logo } = useLoaderData();

  return (
    // <Headroom>
    <header className="bg-black w-full">
      <div className="flex items-center center-container justify-between  py-5  md:py-10">
        <Logo logo={logo} />
        <TopMenu navItems={headerNav} className="hidden lg:flex" />
        <SlideMenu navItems={headerNav} className="lg:hidden" />
      </div>
    </header>
    // </Headroom>
  );
};

export default Header;
