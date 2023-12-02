import { Link } from "@remix-run/react";

const Logo = ({ logo, ...props }) => {
  return (
    <Link prefetch="intent" to="/" {...props}>
      <img src={logo.filename} alt="blackwood logo" />
    </Link>
  );
};

export default Logo;
