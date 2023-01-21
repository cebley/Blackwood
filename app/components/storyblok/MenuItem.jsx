import { NavLink } from "@remix-run/react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import useMatchMedia from "react-use-match-media";

const MenuItem = ({ blok }) => {
  const { label, link, location, sub_menu, _uid, isSubmenu } = blok;
  const isLg = useMatchMedia("(min-width: 1024px)");

  const hasSubmenu = sub_menu && sub_menu.length > 0;

  return (
    <>
      {link.linktype === "story" ? (
        <li
          className={`menu-item ${
            location === "header" ? "in-header" : "in-footer"
          } ${isLg ? "large" : "small"} ${
            isSubmenu !== true && "not-sub-menu"
          } `}
        >
          <NavLink
            key={_uid}
            to={`/${link.cached_url}`}
            {...storyblokEditable(blok)}
          >
            {label}
          </NavLink>
          {hasSubmenu && (
            <ul className="sub-menu">
              {sub_menu.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
              ))}
            </ul>
          )}
        </li>
      ) : (
        <li className={`menu-item`}>
          <a
            href={link.url}
            target={link.target}
            {...storyblokEditable(blok)}
            className="text-white"
          >
            {label}
          </a>
        </li>
      )}
    </>
  );
};

export default MenuItem;
