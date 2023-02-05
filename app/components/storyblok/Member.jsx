import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import Breadcrumbs from "~/components/Breadcrumbs";

const Member = ({ blok }) => {
  const { _uid, title, text, image, role } = blok;
  return (
    <div {...storyblokEditable(blok)} key={_uid}>
      <Breadcrumbs type="member" />
      <div className="center-container lg:flex pt-9 md:pt-[70px] px-0">
        <div className="image lg:w-[35%] h-auto md:pb-5 pr-[50px]">
          <img
            src={`${image.filename}/m/780x780`}
            alt={image.alt}
            className="h-auto shadow-members"
          />
          <h1 className="text-[22px] mt-6 mb-0">{title}</h1>
          <div className="uppercase role">{role}</div>
        </div>
        <div className="prose content lg:w-[63%]">{render(text)}</div>
      </div>
    </div>
  );
};

export default Member;
