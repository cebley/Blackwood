import { Link } from "@remix-run/react";

const Logo = ({ logo, ...props }) => {
  return (
    <Link to="/" {...props}>
      <img src={logo.filename} alt="blackwood logo" />
    </Link>
  );
};

export default Logo;
