import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const ContractItem = ({ blok }) => {
  const { _uid, title, text } = blok;
  return (
    <div {...storyblokEditable(blok)} key={_uid} className="item">
      <div dangerouslySetInnerHTML={{ __html: title }} className="title" />
      {text && <div className="prose content">{render(text)}</div>}
    </div>
  );
};

export default ContractItem;
