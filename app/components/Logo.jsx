import { Link } from "react-router";

const Logo = ({ logo, ...props }) => {
  return (
    <Link prefetch="intent" to="/" {...props}>
      <img src={logo.filename} alt="blackwood logo" />
    </Link>
  );
};

export default Logo;
