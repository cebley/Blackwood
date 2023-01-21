import { useLoaderData } from "@remix-run/react";
import Logo from "../Logo";
import MenuColumns from "./MenuColumns";
const Footer = () => {
  const { email, phone, address, twitter, linkedin, footerMenu, logo } =
    useLoaderData();
  console.log("footerMenu", footerMenu);

  const menuCol1 = footerMenu.slice(0, 2);

  const menuCol2 = footerMenu.slice(2, 4);
  return (
    <footer className="bg-black pb-12 pt-8">
      <div className="center-container">
        <div className="md:flex justify-between flex-nowrap border-b border-white md:pb-14">
          <div>
            <Logo logo={logo} />
          </div>
          <div>
            <MenuColumns data={menuCol1} />
          </div>
          <div>
            <MenuColumns data={menuCol2} />
          </div>
          <div></div>
        </div>
        <div className="sub-footer"></div>
      </div>
    </footer>
  );
};

export default Footer;
