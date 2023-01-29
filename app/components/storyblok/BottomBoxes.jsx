import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const BottomBoxes = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      key={blok._uid}
      className="flex flex-wrap text-white [&>a]:text-white"
    >
      {blok.items?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default BottomBoxes;
