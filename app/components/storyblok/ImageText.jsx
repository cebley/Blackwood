import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const ImageText = ({ blok }) => {
  const { _uid, text, image, title } = blok;
  return (
    <div
      {...storyblokEditable(blok)}
      key={_uid}
      className="flex flex-wrap lg:flex-nowrap [&>div]:w-full [&>div]:lg:w-1/2 bg-black"
    >
      <img
        src={image.filename}
        alt={image.alt}
        className="object-cover h-[400px] lg:h-auto w-full lg:w-[43%]"
      />

      <div className="pt-5 sm:pt-[70px] pb-[25px] sm:pb-[50px] px-[30px] sm:px-[50px] lg:px-[70px] xl:px[100px]">
        <div className="w-full lg:w-[57%] bg-black">
          <h2 dangerouslySetInnerHTML={{ __html: title }} className="mb-4" />
        </div>
        <div className="prose text-white ">{render(text)}</div>
      </div>
    </div>
  );
};

export default ImageText;
