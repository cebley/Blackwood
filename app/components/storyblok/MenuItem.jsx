import { NavLink } from "@remix-run/react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Collapse from "~/components/ui-components/Collapse";

const MenuItem = ({ blok }) => {
  const { label, link, location, sub_menu, _uid, isSubmenu } = blok;

  const hasSubmenu = sub_menu && sub_menu.length > 0;

  return (
    <>
      {link.linktype === "story" ? (
        <li
          {...storyblokEditable(blok)}
          key={_uid}
          className={`menu-item ${
            location === "header" ? "in-header" : "in-footer"
          } ${isSubmenu !== true ? "not-sub-menu" : "is-sub-menu"} `}
        >
          {link.cached_url !== "" ? (
            <NavLink to={`/${link.cached_url}`}>{label}</NavLink>
          ) : (
            <div {...storyblokEditable(blok)} key={_uid}>
              {hasSubmenu ? (
                <Collapse trigger={label} className="font-semibold text-white ">
                  <ul className="sub-menu max-w-[180px]">
                    {sub_menu.map((nestedBlok) => (
                      <StoryblokComponent
                        blok={nestedBlok}
                        key={nestedBlok._uid}
                      />
                    ))}
                  </ul>
                </Collapse>
              ) : (
                { label }
              )}
            </div>
          )}
        </li>
      ) : (
        <li className={`menu-item`} key={_uid} {...storyblokEditable(blok)}>
          <a href={link.url} target={link.target} className="text-white">
            {label}
          </a>
        </li>
      )}
    </>
  );
};

export default MenuItem;
