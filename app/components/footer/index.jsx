import { useLoaderData, Link } from "@remix-run/react";
import Logo from "../Logo";
import MenuColumns from "./MenuColumns";
import FooterContact from "./FooterContact";
import FooterSocial from "./FooterSocial";
import { motion } from "framer-motion";
import { slideInUp } from "~/utils/motion-variants";

const Footer = () => {
  const { email, phone, fax, address, twitter, linkedin, footerMenu, logo } =
    useLoaderData();

  const menuCol1 = footerMenu.slice(0, 2);

  const menuCol2 = footerMenu.slice(2, 4);
  return (
    <footer className="pt-8 pb-12 bg-black">
      <div className="center-container">
        <div className="justify-between border-b border-white lg:flex flex-nowrap md:pb-14">
          <motion.div
            variants={slideInUp}
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
            variants={slideInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              delay: 0.5,
            }}
          >
            <MenuColumns data={menuCol1} />
          </motion.div>
          <motion.div
            variants={slideInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              delay: 1,
            }}
          >
            <MenuColumns data={menuCol2} />
          </motion.div>
          <motion.div
            variants={slideInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              delay: 1.5,
            }}
          >
            <FooterContact
              email={email}
              phone={phone}
              fax={fax}
              address={address}
            />
            <FooterSocial twitter={twitter} linkedin={linkedin} />
          </motion.div>
        </div>
        <motion.div
          variants={slideInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
          }}
          className="sub-footer"
        >
          <div className="flex justify-center text-white pt-8 space-x-4 [&>a]:text-white hover:[&>a]:text-primary ">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
