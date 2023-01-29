import { storyblokEditable } from "@storyblok/react";
const ServiceItem = ({ blok }) => {
  const { _uid, title, subtitle } = blok;
  return (
    <div {...storyblokEditable(blok)} key={_uid} className="item-wrapper pb-5">
      <div
        className="title text-[16px] lg:text-base font-semibold leading-normal uppercase"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div
        className="subtitle text-[16px]"
        dangerouslySetInnerHTML={{ __html: subtitle }}
      />
    </div>
  );
};

export default ServiceItem;
