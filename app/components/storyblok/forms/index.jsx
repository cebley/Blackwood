import { storyblokEditable } from "@storyblok/react";

const Forms = ({ blok }) => {
  const { _uid, text, title, type } = blok;
  return (
    <div {...storyblokEditable(blok)} key={_uid}>
      Forms
    </div>
  );
};

export default Forms;
