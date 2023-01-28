import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import Breadcrumbs from "~/components/Breadcrumbs";

const Member = ({ blok }) => {
  const { _uid, title, text, image, role } = blok;
  return (
    <div {...storyblokEditable(blok)} key={_uid}>
      <Breadcrumbs />
      <h1>{title}</h1>
    </div>
  );
};

export default Member;
