import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Contracts = ({ blok }) => {
  const { _uid, title, description, items, twoCols } = blok;
  return (
    <div
      {...storyblokEditable(blok)}
      key={_uid}
      className="contract center-container"
    >
      <div className="description">
        <div className="desc-content">
          <h2 dangerouslySetInnerHTML={{ __html: title }} />
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
      <div className={`items ${twoCols && "twoCols"}`}>
        {items?.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </div>
  );
};

export default Contracts;
