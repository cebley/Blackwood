import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const BottomBoxes = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      key={blok._uid}
      className="bottom-boxes min-[1000px]:flex text-white [&>a]:text-white"
    >
      {blok.items?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default BottomBoxes;
