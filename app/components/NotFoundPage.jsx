import { Link } from "react-router";
// import img404 from "~/assets/404.png";

export const NotFoundPage = () => {
  return (
    <div className="w-full h-full mx-auto text-center ">
      <h1 className="text-black">This page doesn't exist</h1>
      <div className="flex justify-center mx-auto px-10 py-5 text-2xl font-bold border-8 border-double border-primary max-w-[150px]">
        404
      </div>

      <Link
        prefetch="intent"
        to="/"
        className="block mt-10 text-black underline "
      >
        Back to home
      </Link>
    </div>
  );
};
