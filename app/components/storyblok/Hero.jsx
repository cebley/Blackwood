import { storyblokEditable } from "@storyblok/react";

const Hero = ({ blok }) => {
  const { _uid, headline, intro, image, bottom_text } = blok;
  return (
    <div {...storyblokEditable(blok)} key={_uid}>
      Hero
    </div>
  );
};

export default Hero;
