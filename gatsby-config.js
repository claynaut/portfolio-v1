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
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/favicon.ico`,
      },
    },
  ],
};
