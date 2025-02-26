const path = require(`path`);

module.exports = {
  pathPrefix: "/irmin.org",
  siteMetadata: {
    title: "Irmin",
    description: "",
    twitterUsername: "@tarides_",
  },
  plugins: [
    `gatsby-plugin-pnpm`,
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data/tutorial/`,
        name: `tutorial`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 680,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: { shell: "shell-session", ocamlskip: "ocaml" },
              showLineNumbers: false,
              noInlineHighlight: true,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Ubuntu Mono`, `Titillium Web:400,600,700`],
      },
    },
  ],
};
