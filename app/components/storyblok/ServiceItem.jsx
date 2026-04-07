import { storyblokEditable } from "@storyblok/react";
import { sanitize } from "~/utils/sanitize";
const ServiceItem = ({ blok }) => {
  const { _uid, title, subtitle } = blok;
  return (
    <div {...storyblokEditable(blok)} key={_uid} className="item-wrapper pb-5">
      <div
        className="title text-[16px] lg:text-base font-semibold leading-normal uppercase"
        dangerouslySetInnerHTML={sanitize(title)}
      />
      <div
        className="subtitle text-[16px]"
        dangerouslySetInnerHTML={sanitize(subtitle)}
      />
    </div>
  );
};

export default ServiceItem;
