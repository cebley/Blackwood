import { storyblokEditable } from "@storyblok/react";
import { Link } from "@remix-run/react";
//TODO make the overlay work and correct teh sizes of boxes on responsive and space on the side
const BottomBoxItem = ({ blok }) => {
  const { title, description, image, link } = blok;
  return (
    <div
      {...storyblokEditable(blok)}
      key={blok._uid}
      className=" relative grow-1 shrink-1 basis-auto lg:flex-1 -mb-16 group"
    >
      <Link to={link}>
        <img
          src={`${image?.filename}`}
          alt={image?.alt}
          className="object-cover min-h-[363px]"
        />
        <div className="box-content max-w-[310px] pt-[200px] pb-[30px] px-[35px] text-xs leading-[1.4] absolute inset-0 [&>a]:text-white">
          <h3 className="uppercase text-white mb-3">{title}</h3>
          <div className="box-over opacity-0 group-hover:opacity-100 transition duration-500">
            <div className="text-white font-bold max-w-[240px]">
              {description}
            </div>
            <div>
              <img
                src="/images/logo-small-white.svg"
                alt="logo"
                className="absolute right-[35px] bottom-[60px]"
              />
            </div>
          </div>
        </div>
        <div className="box-overlay absolute inset-0 w-full h-full opacity-0 group-hover:opacity-50 z-[-1]  transition duration-500 bg-primary"></div>
      </Link>
    </div>
  );
};

export default BottomBoxItem;
