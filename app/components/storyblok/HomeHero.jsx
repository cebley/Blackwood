import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const HomeHero = ({ blok }) => {
  const { _uid, headline, text, title, small_title } = blok;

  return (
    <div {...storyblokEditable(blok)} key={_uid} className="bg-black">
      <div className="center-container text-white">
        <div className="pt-[15%] pl-6 lg:pl-12">
          <img
            src="images/logo-small.svg"
            alt="blackwood logo"
            className="mb-6"
          />
          <div
            dangerouslySetInnerHTML={{ __html: headline }}
            className="text-2xl font-normal lg:text-3xl leading-[1.1] pb-[100px] md:pb-[150px] lg:pb-[250px]"
          />
          <div className="max-w-[500px] mx-auto">
            <div className="uppercase font-bold text-sm tracking-wide">
              {small_title}
            </div>
            <h1>{title}</h1>
            <div className="prose text-white">{render(text)}</div>
          </div>
        </div>
      </div>
      <img
        src="images/white-mask.svg"
        className="mask object-cover h-[443px] w-full -mt-[220px]"
        alt=""
      />
    </div>
  );
};

export default HomeHero;
