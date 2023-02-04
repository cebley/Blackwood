import { useParams, Link, useMatches } from "@remix-run/react";

const Breadcrumbs = () => {
  let params = useParams();
  // console.log("matches", useMatches());
  // console.log(params["*"]);
  const terms = params["*"]?.split("/");
  const sep = <span className="bc-sep"> > </span>;
  const displaySep = (i) => i !== terms.length - 1 && sep;
  const activeLink = (i) => i === terms.length - 1 && "active";

  return (
    <div className="center-container">
      <div className="flex">
        <Link to="/">Home</Link>
        <span className="text-white bc-sep"> > </span>
        {terms?.map((term, i) => (
          <>
            <Link
              key={i}
              className={` ${activeLink(i)} `}
              to={`/${params["*"]}`}
            >
              {term.replace(/-/g, " ")}
            </Link>
            {displaySep(i)}
          </>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumbs;
