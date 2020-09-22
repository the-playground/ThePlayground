const path = require(`path`);

require(`dotenv`).config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    plugins: [
        /**
         * @link https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/
         */ `gatsby-plugin-sharp`,

        /**
         * @link https://www.gatsbyjs.org/packages/gatsby-transformer-sharp
         */
        `gatsby-transformer-sharp`,

        /**
         * @link https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/
         */
        `gatsby-plugin-react-helmet`,

        /**
         * @link https://www.gatsbyjs.org/packages/gatsby-plugin-typescript
         */
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                // Add any options here
            },
        },

        /**
         * @link https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/
         */
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `The Nerve Theatre`,
                short_name: `Nerve`,
                start_url: `/`,
                background_color: `#0C1E31`,
                theme_color: `#F25C05`,
                display: `standalone`,
                icon: 'static/icons/nerve-site-icon.png',
            },
        },

        /**
         * Implement the babel module resolver for a really nice global import syntax
         *
         * @link https://www.gatsbyjs.org/packages/gatsby-plugin-module-resolver
         */
        {
            resolve: 'gatsby-plugin-module-resolver',
            options: {
                root: './src', // <- will be used as a root dir
                aliases: {
                    '@assets': './assets',
                    '@context': './__context__', // <- will become ./src/__context__
                    '@components': './components',
                    '@hooks': './__hooks__',
                    '@lib': './__lib__',
                    '@screens': './screens',
                    '@templates': './templates',
                    '@themes': './__themes__',
                    '@tokens': './__tokens__',
                    '@type': './__types__',
                },
            },
        },

        /**
         * Styled Components support
         *
         * @link https://www.gatsbyjs.org/packages/gatsby-plugin-styled-components/
         */
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                // Add any options here
            },
        },
        /**
         * Query data from our CMS
         *
         * @link https://www.gatsbyjs.org/packages/gatsby-source-prismic
         */
        {
            resolve: 'gatsby-source-prismic',
            options: {
                /**
                 * The name of your prismic.io repository. This is required.
                 */
                repositoryName: 'thenerveweb',

                /**
                 * An API access token to your prismic.io repository. This is required.
                 */
                accessToken: process.env.PRISMIC_ACCESS_TOKEN,

                /**
                 * Provide an object of Prismic custom type JSON schemas to load into
                 * Gatsby. This is required.
                 */
                schemas: {
                    // Global site config/data schemas
                    'site_config': require('./src/__schemas__/site_config.json'), // eslint-disable-line global-require, prettier/prettier
                    header: require('./src/__schemas__/header.json'), // eslint-disable-line global-require, prettier/prettier
                    footer: require('./src/__schemas__/footer.json'), // eslint-disable-line global-require, prettier/prettier

                    // Repeatable type schemas
                    season: require('./src/__schemas__/season.json'), // eslint-disable-line global-require, prettier/prettier
                    show: require('./src/__schemas__/show.json'), // eslint-disable-line global-require, prettier/prettier

                    // Single type schemas
                    'about_page': require('./src/__schemas__/about_page.json'), // eslint-disable-line global-require, prettier/prettier
                    'archive_page': require('./src/__schemas__/archive_page.json'), // eslint-disable-line global-require, prettier/prettier
                    'audition_page': require('./src/__schemas__/audition_page.json'), // eslint-disable-line global-require, prettier/prettier
                    'contact_page': require('./src/__schemas__/contact_page.json'), // eslint-disable-line global-require, prettier/prettier
                    'home_page': require('./src/__schemas__/home_page.json'), // eslint-disable-line global-require, prettier/prettier
                    'legal_page': require('./src/__schemas__/legal_page.json'), // eslint-disable-line global-require, prettier/prettier
                    'privacy_page': require('./src/__schemas__/privacy_page.json'), // eslint-disable-line global-require, prettier/prettier
                    'support_us_page': require('./src/__schemas__/support_us_page.json'), // eslint-disable-line global-require, prettier/prettier
                    'terms_page': require('./src/__schemas__/terms_page.json'), // eslint-disable-line global-require, prettier/prettier
                },

                /**
                 * Set a default language when fetching documents. The default value is
                 * '*' which will fetch all languages.
                 *
                 * @link https://prismic.io/docs/javascript/query-the-api/query-by-language
                 */
                lang: 'en-us',

                /**
                 * Set a function to determine if images are downloaded locally and made
                 * available for gatsby-transformer-sharp for use with gatsby-image.
                 * The document node, field key (i.e. API ID), and field value are
                 * provided to the function, as seen below. This allows you to use
                 * different logic for each field if necessary.
                 *
                 * This defaults to always return false.
                 */
                shouldDownloadImage: ({ key }) => {
                    // For any field that includes the word "hero", we are going to process locally to
                    // open up expanded image loading capabilities as per the `gatsby-source-prismic` docs.
                    return !!key.includes('hero');
                },

                /**
                 * Provide a default set of Imgix image transformations applied to
                 * Imgix-backed gatsby-image fields. These options will override the
                 * defaults set by Prismic.
                 * https://docs.imgix.com/apis/url
                 */

                imageImgixParams: {
                    q: 90,
                },

                /**
                 * Provide a default set of Imgix image transformations applied to
                 * the placeholder images of Imgix-backed gatsby-image fields. These
                 * parameters will be applied over those provided in the above
                 * `imageImgixParams` option.
                 *
                 * @link https://docs.imgix.com/apis/url
                 */
                imagePlaceholderImgixParams: {
                    w: 50,
                    blur: 100,
                },
            },
        },

        /**
         * Robots.txt Handler
         *
         * ! Remember to change production policy to `allow` when we launch
         *
         * @link https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt/
         */
        {
            resolve: `gatsby-plugin-robots-txt`,
            options: {
                host: `https://nervetheatre.org`,
                sitemap: `https://nervetheatre.org/sitemap.xml`,
                env: {
                    development: {
                        policy: [{ userAgent: `*`, disallow: [`/`] }],
                    },
                    production: {
                        policy: [{ userAgent: `*`, disallow: `/` }],
                    },
                },
            },
        },
    ],
};
