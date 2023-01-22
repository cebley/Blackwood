import { useLoaderData, Link } from "@remix-run/react";
import Logo from "../Logo";
import MenuColumns from "./MenuColumns";
import FooterContact from "./FooterContact";
import FooterSocial from "./FooterSocial";

const Footer = () => {
  const { email, phone, fax, address, twitter, linkedin, footerMenu, logo } =
    useLoaderData();

  const menuCol1 = footerMenu.slice(0, 2);

  const menuCol2 = footerMenu.slice(2, 4);
  return (
    <footer className="bg-black pb-12 pt-8">
      <div className="center-container">
        <div className="lg:flex justify-between flex-nowrap border-b border-white md:pb-14">
          <div>
            <Logo logo={logo} />
          </div>
          <div>
            <MenuColumns data={menuCol1} />
          </div>
          <div>
            <MenuColumns data={menuCol2} />
          </div>
          <div>
            <FooterContact
              email={email}
              phone={phone}
              fax={fax}
              address={address}
            />
            <FooterSocial twitter={twitter} linkedin={linkedin} />
          </div>
        </div>
        <div className="sub-footer">
          <div className="flex justify-center text-white pt-8 space-x-4 [&>a]:text-white hover:[&>a]:text-primary ">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
