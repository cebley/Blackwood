import { storyblokEditable } from "@storyblok/react";

const TitleText = ({ blok }) => {
  const { _uid, title, text, horizontal } = blok;
  const hStyles =
    "lg:flex justify-between !max-w-[1070px] py-[60px] md:py-[120px] border-b border-gray-200 last:border-b-0";
  const vStyles = "font-semibold py-10 mb:py-16 max-w-[910px]";
  return (
    <div
      {...storyblokEditable(blok)}
      key={_uid}
      className={`mx-auto px-10 md:px-7 ${horizontal ? hStyles : vStyles} `}
    >
      <h2
        className={`sublinedTitle ${
          horizontal ? `mb-5 lg:mb-0` : `mb-5 lg:mb-10`
        } `}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div
        className={`prose ${
          horizontal
            ? "max-w-[750px] lg:pl-[60px]"
            : "text-l [&>span]:text-primary"
        }`}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
};

export default TitleText;