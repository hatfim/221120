const path = require("path");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty'
    }
  });
}
