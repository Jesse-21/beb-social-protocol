// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "BEBverse 1.0 Protocol",
  tagline:
    "The BEBverse 1.0 Protocol allows developers to build on top of BEBverse Super NFTs (dimensions). In the future, BEBverse 2.0 will allow the option of self-hosting with a significantly reduced graphql set for progressive decentralization.",
  url: "https://docs.beb.xyz",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "bebverse", // Usually your GitHub org/user name.
  projectName: "protocol", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/bebverse/protocol",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/bebverse/protocol",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "BEBverse 1.0",
        logo: {
          alt: "Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentation",
          },
          {
            href: "https://github.com/bebverse/protocol",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Protocol",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Social",
            items: [
              {
                label: "BEBverse",
                href: "https://beb.xyz",
              },
              {
                label: "Register a BEBverse Dimension",
                href: "https://beb.domains",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/bebverse",
              },
            ],
          },
        ],
      },
      metadata: [
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:image",
          content: "https://beb.domains/og-image800x419.jpeg",
        },
      ],

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
