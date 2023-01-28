import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const TitleText = ({ blok }) => {
  const { _uid, title, text, horizontal } = blok;
  const hStyles =
    "lg:flex justify-between max-w-[1070px] py-[60px] md:py-[120px] border-b border-gray-200 last:border-b-0";
  const vStyles = "";
  return (
    <div
      {...storyblokEditable(blok)}
      key={_uid}
      className={`center-container ${horizontal ? hStyles : vStyles} `}
    >
      <h2
        className="sublinedTitle"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className={`prose ${horizontal && "max-w-[750px] lg:pl-[60px]"}`}>
        {render(text)}
      </div>
    </div>
  );
};

export default TitleText;
