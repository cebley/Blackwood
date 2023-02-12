import { StoryblokComponent } from "@storyblok/react";

const MobileMenu = ({ navItems, ...props }) => {
  return (
    <div {...props}>
      <nav className="mb-16 mobile-menu" aria-label="main">
        <ul role="menu" className="">
          {navItems.map((nestedBlok) => (
            <StoryblokComponent
              blok={nestedBlok}
              key={nestedBlok._uid}
              mobile
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
