/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    plugins: [`gatsby-plugin-sass`],
    output: {
        filename: 'my-first-webpack.bundle.js'
    },
    module: {
        rules: [
            {test: /\.txt$/, use: 'raw-loader'}
        ]
    }
}
