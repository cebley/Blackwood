import { storyblokEditable } from "@storyblok/react";

export const FooterLogo = ({ blok }) => {
  const { double_sized, logo, link, _uid } = blok;
  const width = double_sized ? 250 : 125;
  return (
    <div
      {...storyblokEditable(blok)}
      key={_uid}
      className="flex flex-col justify-center"
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
