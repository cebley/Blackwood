import { storyblokEditable } from "@storyblok/react";
import { Link } from "@remix-run/react";
const BottomBoxItem = ({ blok }) => {
  const { title, description, image, link } = blok;
  console.log("link", link);
  return (
    <div
      {...storyblokEditable(blok)}
      key={blok._uid}
      className="relative -mb-16 grow-1 shrink-1 basis-auto lg:flex-1 group"
    >
      <Link to={`/${link}`}>
        <div className="absolute inset-0 w-full h-full transition duration-500 opacity-0 box-overlay group-hover:opacity-50 bg-primary"></div>
        <div className="w-full">
          <img
            src={`${image?.filename}`}
            alt={image?.alt}
            className="object-cover h-[363px] w-full"
          />
        </div>
        <div className="box-content max-w-[310px] pt-[200px] pb-[30px] px-[35px] text-xs leading-[1.4] absolute inset-0 [&>a]:text-white">
          <h3 className="mb-3 text-white uppercase">{title}</h3>
          <div className="transition duration-500 opacity-0 box-over group-hover:opacity-100">
            <div className="text-white font-bold max-w-[240px]">
              {description}
            </div>

            <img
              src="/images/logo-small-white.svg"
              alt="logo"
              className="absolute right-[35px] bottom-[60px]"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BottomBoxItem;
