module.exports = {
  siteMetadata: {
    title: `rjrowland`,
    author: {
      name: `Randal Rowland`,
      summary: `A collection of thoughts from a programmer`,
    },
    description: `A collection of thoughts from Randal Rowland`,
    siteUrl: `https://rjrowland.netlify.app/`,
    menuLinks: [
      { name: `Thoughts`, link: `/thoughts` },
      { name: `Tips`, link: `/tips` },
    ],
    social: {
      twitter: "RJRowland",
      github: "RJRowland93",
    },
    socialLinks: [
      { name: "GitHub", url: `https://github.com/RJRowland93` },
      { name: "Linkedin", url: `https://linkedin.com/in/randalrowland` },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/thoughts`,
        name: `thoughts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/tips`,
        name: `tips`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-180043144-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `rjrowland`,
        short_name: `rjrowland`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
