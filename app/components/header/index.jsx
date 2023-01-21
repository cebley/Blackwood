import { useLoaderData } from "@remix-run/react";
import TopMenu from "./TopMenu";
import SlideMenu from "./SlideMenu";
import Logo from "~/components/Logo";
import Headroom from "react-headroom";

const Header = () => {
  const { headerNav, logo } = useLoaderData();
  // console.log(headerNav);
  return (
    <Headroom>
      <header className="bg-black">
        <div className="flex items-center justify-between p-5 center-container md:p-10">
          {/* TODO: fix overflow due to justify-between */}
          <Logo logo={logo} />
          <TopMenu navItems={headerNav} className="hidden lg:flex" />
          <SlideMenu navItems={headerNav} className="lg:hidden" />
        </div>
      </header>
    </Headroom>
  );
};

export default Header;
