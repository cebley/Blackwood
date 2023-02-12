import { storyblokEditable } from "@storyblok/react";

const StretchedImage = ({ blok }) => {
  const { _uid, image, bottom } = blok;

  return (
    <div
      {...storyblokEditable(blok)}
      key={_uid}
      className={`${bottom && "-mb-16"}`}
    >
      <img
        src={`${image.filename}/m/`}
        alt={image.alt}
        className={`object-cover w-full h-[480px] 2xl:h-[650px] }`}
      />
    </div>
  );
};

export default StretchedImage;
