import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { storyblokInit, apiPlugin, getStoryblokApi } from "@storyblok/react";

import {
  Content,
  Page,
  MenuItem,
  HomeHero,
  Hero,
  Member,
  TitleText,
} from "./components/storyblok";
import Layout from "./components/Layout";
import styles from "./styles/app.css";

const isServer = typeof window === "undefined";

//We need to check if we are on the server or client to get the correct env variable
const accessToken = isServer
  ? process.env.STORYBLOK_PREVIEW_TOKEN
  : window.env.STORYBLOK_PREVIEW_TOKEN;

const components = {
  page: Page,
  content: Content,
  "nav-item": MenuItem,
  hero: Hero,
  "home-hero": HomeHero,
  member: Member,
  "title-text": TitleText,
};
storyblokInit({
  accessToken,
  use: [apiPlugin],
  components,
});

export const loader = async () => {
  const sbApi = getStoryblokApi();
  const {
    data: {
      story: { content: config },
    },
  } = await sbApi.get(`cdn/stories/config`, {
    version: "draft",
    resolve_links: "url",
  });
  return json({
    env: {
      STORYBLOK_PREVIEW_TOKEN: process.env.STORYBLOK_PREVIEW_TOKEN,
    },
    logo: config.logo,
    email: config.email,
    phone: config.phone,
    fax: config.fax,
    address: config.address,
    twitter: config.twitter,
    linkedin: config.linkedin,
    headerNav: config["header_nav"],
    footerMenu: config["footer_menus"],
  });
};

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  const { env } = useLoaderData();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="debug-screens">
        <Layout>
          <Outlet />
        </Layout>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.env = ${JSON.stringify(env)}`,
          }}
        />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
