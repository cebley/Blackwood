import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const Content = ({ blok }) => {
  const { _uid, text } = blok;
  return (
    <div>
      <h1>Hello</h1>
      <div {...storyblokEditable(blok)} key={_uid} className="prose">
        {render(text)}
      </div>
    </div>
  );
};

export default Content;
