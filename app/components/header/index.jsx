import { useLoaderData } from "@remix-run/react";
import HeaderMenu from "./HeaderMenu";
import Logo from "~/components/Logo";
import Headroom from "react-headroom";

const Header = () => {
  const { headerNav, logo } = useLoaderData();
  console.log(headerNav);
  return (
    <Headroom>
      <header className="bg-black">
        <div className="flex items-center justify-between p-5 center-container md:p-10">
          <Logo logo={logo} />
          <HeaderMenu navItems={headerNav} />
        </div>
      </header>
    </Headroom>
  );
};

export default Header;
