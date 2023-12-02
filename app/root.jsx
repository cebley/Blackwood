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
  BottomBoxes,
  BottomBoxItem,
  PracticeArea,
  Technologies,
  LogoItem,
  Services,
  ServiceItem,
  ImageText,
  Timeline,
  TwoCols,
  StretchedImage,
  Contracts,
  ContractItem,
  Forms,
} from "./components/storyblok";
import Layout from "./components/Layout";
import styles from "./styles/app.css";
import { invariantResponse } from "./utils/invariantResponse";
import { GeneralErrorBoundary } from "./components/GeneralErrorBoundary";

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
  "bottom-boxes": BottomBoxes,
  "bottom-box-item": BottomBoxItem,
  "practice-area": PracticeArea,
  technologies: Technologies,
  "logo-item": LogoItem,
  services: Services,
  "service-item": ServiceItem,
  "image-text": ImageText,
  timeline: Timeline,
  "two-cols": TwoCols,
  "stretched-image": StretchedImage,
  contracts: Contracts,
  "contract-item": ContractItem,
  forms: Forms,
};
storyblokInit({
  accessToken,
  use: [apiPlugin],
  components,
});

export const loader = async () => {
  invariantResponse(
    accessToken,
    "You need to provide an access token to interact with Storyblok API.",
    {
      status: 401,
    }
  );
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

export const meta = () => {
  return [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
    { title: "blackwood" },
  ];
};

const Document = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body
        className={`${
          process.env.NODE_ENV === "development" && "debug-screens"
        }`}
      >
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

export default function App() {
  const { env } = useLoaderData();
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.env = ${JSON.stringify(accessToken)}`,
        }}
      />
    </Document>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export function ErrorBoundary() {
  return (
    <Document>
      <div className="flex-1">
        <GeneralErrorBoundary
          statusHandlers={{
            401: (e) => (
              <div className="container h-full max-w-2xl p-10 mx-auto mt-20 text-2xl font-bold text-center text-white rounded-lg bg-primary">
                You need to provide an access token to interact with Storyblok
                API.
              </div>
            ),
          }}
        />
      </div>
    </Document>
  );
}
