import * as React from "react";

const TriangleMask = (props) => (
  <svg
    width={1920}
    height={230}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M1920 230H0L1920 0v230Z" fill="#fff" />
  </svg>
);

export default TriangleMask;
