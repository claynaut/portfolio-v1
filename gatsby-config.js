module.exports = {
  siteMetadata: {
    title: `J.S. Pescasio`,
    siteUrl: `https://jspescasio.dev`,
    description: `J.S. Pescasio (also known as claynaut) is an artist and developer based in Southern California.`,
    author: `J.S. Pescasio`,
    twitterUsername: `@claynaut`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `J.S. Pescasio | Portfolio`,
        short_name: `J.S. Pescasio`,
        start_url: `/`,
        background_color: `#da532c`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
};
