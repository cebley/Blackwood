import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const Content = ({ blok }) => {
  const { _uid, text } = blok;
  return (
    <>
      <h1 className="text-red-500 uppercase leading-heading text-3xl">hello</h1>
      <div
        {...storyblokEditable(blok)}
        key={_uid}
        className="prose center-container"
      >
        {render(text)}
      </div>
    </>
  );
};

export default Content;
