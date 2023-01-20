import { NavLink } from "@remix-run/react";
import { storyblokEditable } from "@storyblok/react";

const MenuItem = ({ blok, classes }) => {
  const { label, link, _uid } = blok;
  const styles =
    "uppercase text-xs font-bold text-white tracking-widest border-t-2 border-white hover:border-primary pt-[9px] px-2";

  return (
    <>
      {link.linktype === "story" ? (
        <NavLink
          key={_uid}
          to={`/${link.cached_url}`}
          {...storyblokEditable(blok)}
          className={`menu-item ${styles} `}
        >
          {label}
        </NavLink>
      ) : (
        <a
          href={link.url}
          target={link.target}
          {...storyblokEditable(blok)}
          className={`menu-item ${styles} `}
        >
          {label}
        </a>
      )}
    </>
  );
};

export default MenuItem;
