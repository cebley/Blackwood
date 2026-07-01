import { Link } from "react-router";

const Logo = ({ logo, ...props }) => {
  return (
    <Link prefetch="intent" to="/" {...props}>
      <img
        src={logo.filename}
        alt="blackwood logo"
        className="h-9 w-auto max-w-[260px]"
      />
    </Link>
  );
};

export default Logo;
