import { StoryblokComponent } from "@storyblok/react";

const MobileMenu = ({ navItems, ...props }) => {
  return (
    <div {...props}>
      <nav className="mobile-menu mb-16" aria-label="main">
        <ul role="menu" className="">
          {navItems.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
