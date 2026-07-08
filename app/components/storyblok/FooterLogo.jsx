import { storyblokEditable } from "@storyblok/react";

export const FooterLogo = ({ blok }) => {
  const { double_width, logo, link, _uid, double_height } = blok;
  const width = double_width ? 250 : double_height ? 80 : 125;
  // double_width badges (the ISO certifications) sit two-per-row, side by side;
  // any other badge takes its own full-width row above them.
  const wrapperWidth = double_width ? "w-[calc(50%-0.375rem)]" : "w-full";
  const imgClass = double_width ? "w-full" : "";

  return (
    <div
      {...storyblokEditable(blok)}
      key={_uid}
      className={`flex flex-col items-center justify-center ${wrapperWidth} `}
    >
      {link?.cached_url ? (
        <a href={link?.cached_url} target="_blank" rel="noopener noreferrer">
          <img
            className={imgClass}
            src={`${logo.filename}/m/${width}x0`}
            alt={logo.altText}
          />
        </a>
      ) : (
        <img
          className={imgClass}
          src={`${logo.filename}/m/${width}x0`}
          alt={logo.altText}
        />
      )}
    </div>
  );
};
