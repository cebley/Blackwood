import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const PracticeArea = ({ blok }) => {
  const { _uid, text, title, image, reverseLayout } = blok;

  return (
    <div
      {...storyblokEditable(blok)}
      key={_uid}
      className={`lg:flex justify-between items-center py-[30px] md:py-10 lg:py-[75px] mx-auto max-w-[900px] px-6 lg:px-0 ${
        reverseLayout && "flex-row-reverse"
      }`}
    >
      <div
        className={`content max-w-[680px] pr-0 lg:pr-[80px] ${
          reverseLayout && "px-0 lg:pl-[80px]"
        }`}
      >
        <h2
          dangerouslySetInnerHTML={{ __html: title }}
          className="text-black mb-3"
        />
        <div className="description">{render(text)}</div>
      </div>
      <div className="icon pt-10 lg:pt-0">
        <img src={`${image?.filename}`} alt={image?.alt} />
      </div>
    </div>
  );
};

export default PracticeArea;
