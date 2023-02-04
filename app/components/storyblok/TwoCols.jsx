import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import clsx from "clsx";

const TwoCols = ({ blok }) => {
  const { _uid, title, col1, col2, page } = blok;
  return (
    <div
      {...storyblokEditable(blok)}
      key={_uid}
      className={clsx("two-cols", {
        history: page === "history",
        benefits: page === "benefits",
      })}
    >
      {title && (
        <h2 dangerouslySetInnerHTML={{ __html: title }} className="title" />
      )}
      <div className={clsx(`cols-container `)}>
        {col1 && <div className="prose col col1">{render(col1)}</div>}
        {col2 && <div className="prose col col2">{render(col2)}</div>}
      </div>
    </div>
  );
};

export default TwoCols;
