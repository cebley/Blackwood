import { StoryblokComponent } from "@storyblok/react";

const MenuColumns = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <div key={item._uid}>
          <h3 className="!text-white text-base font-normal capitalize mb-3 ">
            {item.headline}
          </h3>
          <nav className="footer-menu">
            <ul role="menu">
              {item.footer_nav.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
              ))}
            </ul>
          </nav>
          nav
        </div>
      ))}
    </div>
  );
};

export default MenuColumns;
