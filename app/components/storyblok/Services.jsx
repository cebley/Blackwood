import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Services = ({ blok }) => {
  const { _uid, items, itemsCol2, title, greyBg } = blok;
  return (
    <div
      {...storyblokEditable(blok)}
      key={_uid}
      className={`services py-[50px] lg:py-[100px] ${greyBg && "bg-light2"} ${
        itemsCol2 && "twoCols [>.title]:lg:pr-[340px]"
      }}`}
    >
      <div className="center-container lg:flex justify-start">
        <div className="title lg:pr-[110px] lg:w-[350px]">
          <h2
            dangerouslySetInnerHTML={{ __html: title }}
            className="sublinedTitle pb-5 lg:pb-0"
          />
        </div>
        {items && (
          <div className="col1">
            {items?.map((nestedBlok) => (
              <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
          </div>
        )}
        {itemsCol2 && (
          <div className="col2 lg:pl-[100px]">
            {itemsCol2?.map((nestedBlok) => (
              <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
