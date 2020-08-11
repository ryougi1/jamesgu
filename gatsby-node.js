/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 *
 * Code in the file gatsby-node.js is run once in the process of building your site. You can use it to create pages dynamically, add nodes in GraphQL, or respond to events during the build lifecycle. To use the Gatsby Node APIs, create a file named gatsby-node.js in the root of your site. Export any of the APIs you wish to use in this file.
 */
const path = require("path")

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@config": path.resolve(__dirname, "src/config"),
        "@fonts": path.resolve(__dirname, "src/fonts"),
        "@images": path.resolve(__dirname, "src/images"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@styles": path.resolve(__dirname, "src/styles"),
        "@utils": path.resolve(__dirname, "src/utils"),
      },
    },
  })
}
