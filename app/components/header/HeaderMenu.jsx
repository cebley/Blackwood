import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const HeaderMenu = ({ navItems }) => {
  return (
    <div className="justify-end hidden md:flex">
      <nav className="menu" aria-label="main">
        <ul role="menu">
          {navItems.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default HeaderMenu;
