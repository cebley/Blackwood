import { StoryblokComponent } from "@storyblok/react";

const TopMenu = ({ navItems, ...props }) => {
  return (
    <div {...props}>
      <nav className="menu" aria-label="main">
        <ul role="menu" className="flex">
          {navItems.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TopMenu;
