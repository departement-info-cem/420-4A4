// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import { themes } from "prism-react-renderer";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const siteConfig = require("./config");

const lightCodeTheme = themes.vsLight;
const darkCodeTheme = themes.vsDark;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: siteConfig.nom,
  tagline: siteConfig.description,
  url: "https://info.cegepmontpetit.ca/",
  baseUrl: `/${siteConfig.nomUrl}/`,
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",

  organizationName: "departement-info-cem",
  projectName: siteConfig.nomUrl,
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          editUrl: `https://github.com/departement-info-cem/${siteConfig.nomUrl}/tree/main/web`,
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  plugins: [require.resolve("./plugins/docs-metadata")],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: siteConfig.nom,
        logo: {
          alt: "Logo CEM",
          src: "img/logo.svg",
        },
        items: [
          // cette partie est commentée car je ne veux pas rajouter de contenu de cours et de TP
          // pour l'instant sur le site Web.
          /*
          {
            type: "doc",
            docId: "cours/rencontre1.1",
            position: "left",
            label: "Cours",
          },
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "tp",
            label: "Travaux Pratiques",
          },
          */
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "python",
            label: "Python",
          },
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "colab",
            label: "Colab",
          },
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "numpykeras",
            label: "NumPy / Keras",
          },
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "googlecloud",
            label: "Cloud",
          },
          {
            label: "SN1 (Programmation)",
            href: `https://info.cegepmontpetit.ca/420-SN1/`,
            position: "right",
          },
          {
            label: "4A3 (Projet scientifique)",
            href: `https://info.cegepmontpetit.ca/360-4A3/`,
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Sources",
            items: [
              {
                label: "GitHub",
                href: `https://github.com/departement-info-cem/${siteConfig.nomUrl}`,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}. ${siteConfig.nom
          }. CÉGEP Édouard-Montpetit.`,
      },
      // Décommenter et remplir pour activer l'indexation des pages par le moteur de recherche local
      // algolia: {
      //   appId: '',
      //   apiKey: '',
      //   indexName: '',
      //   contextualSearch: true,
      //   searchPagePath: 'search',
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["python"],
      },
      metadata: [
        {
          name: "keywords",
          content: `${siteConfig.nom}, ${siteConfig.description}, 
          4A4, 420-4A4, cem, sciences de la nature, réseaux de neurones, informatique, IA, 
          intelligence artificielle, deep learning, programmation, python, cegep, édouard-montpetit,
          edouard-montpetit, édouard montpetit, edouard montpetit`,
        },
        {
            name: "description",
            content: siteConfig.description,
        },
        {
            property: "og:title",
            content: siteConfig.nom,
        },
        {
            property: "og:description",
            content: siteConfig.description,
        },
        {
            property: "og:type",
            content: "website",
        },
        {
            property: "og:image",
            content: "https://info.cegepmontpetit.ca/420-4A4/img/logo.svg"
        },
        {
            property: "og:url",
            content: "https://info.cegepmontpetit.ca/420-4A4/"
        }
      ],
    }),
};

module.exports = config;
