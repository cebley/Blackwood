import { storyblokEditable } from "@storyblok/react";

export const FooterLogo = ({ blok }) => {
  const { double_width, logo, link, _uid, double_height } = blok;
  const width = double_width ? 250 : double_height ? 80 : 125;

  return (
    <div
      {...storyblokEditable(blok)}
      key={_uid}
      className={`flex flex-col items-center justify-center ${
        double_width ? "w-[250px]" : "w-[125px]"
      } `}
    >
      {link ? (
        <a href={link?.cached_url} target="_blank" rel="noopener noreferrer">
          <img src={`${logo.filename}/m/${width}x0`} alt={logo.altText} />
        </a>
      ) : (
        <img src={`${logo.filename}/m/${width}x0`} alt={logo.altText} />
      )}
    </div>
  );
};
