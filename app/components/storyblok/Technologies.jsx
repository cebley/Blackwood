import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Technologies = ({ blok }) => {
  const { _uid, logos, columns } = blok;
  console.log("logos", logos);
  return (
    <div
      {...storyblokEditable(blok)}
      key={_uid}
      className={`cols-${columns} logos`}
    >
      {logos?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Technologies;
