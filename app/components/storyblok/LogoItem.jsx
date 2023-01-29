import { storyblokEditable } from "@storyblok/react";

const LogoItem = ({ blok }) => {
  const { _uid, title, image, link } = blok;
  return (
    <div
      {...storyblokEditable(blok)}
      key={_uid}
      className={`card ${image && "flipCard"}`}
    >
      <div className="flipper">
        <div className="front boxes flex">
          {image ? (
            <img src={image.filename} alt={image.alt} />
          ) : (
            <h3 dangerouslySetInnerHTML={{ __html: title }} />
          )}
        </div>
        {image && (
          <div className="flex back boxes">
            <a href={link.cached_url} target="_blank" rel="noopener noreferrer">
              <h3 dangerouslySetInnerHTML={{ __html: title }} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default LogoItem;
