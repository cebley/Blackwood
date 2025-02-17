import { Link, useMatches } from "@remix-run/react";

const Breadcrumbs = ({ type = "page", location = "page" }) => {
  let matches = useMatches();

  const terms = matches[1]?.pathname?.split("/").filter((term) => term !== "");

  const sep = <span className="bc-sep"> {">"} </span>;
  const displaySep = (i) => i !== terms.length - 1 && sep;
  const activeLink = (i) => i === terms.length - 1 && "active";
  const link = (i) => i === terms.length - 2 && type === "member";

  return (
    <div
      className={`center-container breadcrumbs z-10 ${
        location === "hero" && "dark-bg"
      }`}
    >
      <div className="flex items-center">
        <Link prefetch="intent" to="/">
          Home
        </Link>
        {sep}
        {terms?.map((term, i) => (
          <>
            {link(i) ? (
              <Link
                key={i}
                prefetch="intent"
                className={` ${activeLink(i)} `}
                to={`/about-us/leadership`}
              >
                {term.replace(/-/g, " ")}
              </Link>
            ) : (
              <span key={i} className={` ${activeLink(i)} `}>
                {term.replace(/-/g, " ")}
              </span>
            )}
            {displaySep(i)}
          </>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumbs;
