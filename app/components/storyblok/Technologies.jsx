import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Technologies = ({ blok }) => {
  const { _uid, logos, columns, blackwoodLogo } = blok;
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
      {blackwoodLogo && (
        <div className="card flipCard blackwood">
          <div className="flipper">
            <div className="front boxes flex">
              <img src="/images/logo-black.svg" alt="logo" />
            </div>
            <div className="back boxes flex">
              <img src="/images/logo-small.svg" alt="logo" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Technologies;
