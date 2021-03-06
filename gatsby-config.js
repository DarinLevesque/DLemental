require("dotenv").config();
let siteMetadata = {
    title: `Darin Levesque`,
    capitalizeTitleOnHome: true,
    logo: `/images/logo.png`,
    icon: `/images/DL.png`,
    titleImage: `/images/moss.jpg`,
    introTag: `Business Intelligence Engineer`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Proin ac consequat arcu.`,
    author: `@DarinLevesque`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: true,
    switchTheme: true,
    navLinks: [
        {
            name: "HOME",
            url: "/"
        },
        {
            name: "ABOUT",
            url: "/about"
        },
        {
            name: "BLOG",
            url: "/blog"
        },
        {
            name: "PORTFOLIO",
            url: "/portfolio"
        },
        {
            name: "CONTACT",
            url: "/contact"
        }
    ],
    footerLinks: [
        {
            name: "PRIVACY POLICY",
            url: "/privacy-policy"
        },
        {
            name: "GitHub",
            url: "https://github.com/darinlevesque"
        }
    ],
    social: [
        {
            name: "Facebook",
            icon: "/images/Facebook.svg",
            url: "https://www.facebook.com/darinlevesque"
        },
        {
            name: "Twitter",
            icon: "/images/Twitter.svg",
            url: "https://twitter.com/darinlevesque"
        },
        {
            name: "Instagram",
            icon: "/images/Instagram.svg",
            url: "#"
        },
        {
            name: "Youtube",
            icon: "/images/Youtube.svg",
            url: "#"
        }
    ],
    contact: {
        /* Leave the below value completely empty (no space either) if you don't want a contact form. */
        api_url: "./test.json",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Proin ac consequat arcu.`,
        mail: "darin@darinlevesque.com",
        phone: "603-326-8667",
        address: "Washington D.C. Region \nUnited States"
    }
};

module.exports = {
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-netlify`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    "gatsby-remark-copy-linked-files",
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1280
                        }
                    }
                ]
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `contents`,
                path: `${__dirname}/contents/`
            }
        },
        {
            resolve: `gatsby-plugin-less`,
            options: {
                strictMath: true
            }
        },
        {
            resolve: `gatsby-plugin-tawk`,
            options: {
                tawkId: process.env.TAWK_ID
                // get this from the tawk script widget
            }
        },
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                printRejected: true // Print removed selectors and processed file names
                // develop: true, // Enable while using `gatsby develop`
                // tailwind: true, // Enable tailwindcss support
                // whitelist: ['whitelist'], // Don't remove this selector
                // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
                // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
            }
        }
        // ,
        // {
        //     resolve: 'gatsby-theme-pocket',
        //     options: {
        //         pocketAccessToken: process.env.MY_ACCESS_TOKEN,
        //         weeksOfHistory: 52,
        //         tagFilter: false,
        //         searchFilter: false,
        //         pageTitle: 'What am I reading?',
        //         pageDescription: 'These are articles that I have read, or saved to read',
        //         seoTitle: 'Darins reading list',
        //         seoDescription: 'A Gatsby theme that adds your pocket app articles to your gatsby website',
        //         seoKeywords: ['gatsby', 'react', 'pocket', 'gatsby-theme', 'gatsby-plugin', 'articles'],
        //         siteUrl: 'https://www.darinlevesque.com/',
        //         customUrl: 'readings'
        //     }
        // }
    ]
};
