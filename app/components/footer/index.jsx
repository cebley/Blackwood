import { useLoaderData, Link } from "@remix-run/react";
import Logo from "../Logo";
import MenuColumns from "./MenuColumns";
import FooterContact from "./FooterContact";
import FooterSocial from "./FooterSocial";
import { motion } from "framer-motion";
import { slideInUp } from "~/utils/motion-variants";
import { StoryblokComponent } from "@storyblok/react";

const Footer = () => {
  const {
    email,
    phone,
    fax,
    address,
    twitter,
    linkedin,
    footerMenu,
    logo,
    isoLogo,
    footerLogos,
  } = useLoaderData();
  console.log("footerLogos", footerLogos);

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
            className="flex flex-col items-center space-x-5 space-y-5 lg:mt-3 lg:space-y-0"
          >
            <Logo logo={logo} />
            {/* <div className="flex flex-col justify-center h-full">
              <img src={`${isoLogo.filename}/m/250x0`} alt={isoLogo.altText} />
            </div> */}
            <div className="flex flex-wrap max-w-[300px] space-x-3 space-y-3">
              {footerLogos.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
              ))}
            </div>
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
            <Link prefetch="intent" to="/privacy-policy">
              Privacy Policy
            </Link>
            <Link prefetch="intent" to="/terms">
              Terms
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
