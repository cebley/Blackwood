import { Link } from "@remix-run/react";

const Logo = ({ logo }) => {
  return (
    <Link to="/">
      <img src={logo.filename} alt="blackwood logo" />
    </Link>
  );
};

export default Logo;
