module.exports = {
  siteMetadata: {
    title: "Vim Fundamentals",
    subtitle: "Making vim approachable!",
    description:
      "This is a survey of vim, how it works, and how to become a sensai of vimfu.",
    keywords: [
      "Vim",
      "Awesome",
      "Coconut Oil",
      "ThePrimeagen"
    ]
  },
  pathPrefix: "/vim-fundamentals-2", // if you're using GitHub Pages, put the name of the repo here with a leading slash
  plugins: [
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/course-website/lessons`,
        name: "markdown-pages"
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: true,
              sizeByPixelDensity: false
            }
          }
        ]
      }
    }
  ]
};
