import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.jsx"),
  route("about-us/leadership/*", "routes/about-us.leadership.$.jsx"),
  route("*", "routes/$.jsx"),
];
