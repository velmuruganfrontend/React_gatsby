module.exports = {
    siteMetadata: {
        title: 'Frontend Developer',
        author: 'Velmurugan' 
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-contentful',
            options: {  
                spaceId: "u43ctj9xdgv0",
                accessToken: "1Xi77xyEETRyldusQ41pzwlEzWiIJRe-6mN5ivxIrms",
                host : "cdn.contentful.com", 
                downloadLocal : false,
                forceFullSync: false
            }
        },
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-relative-images',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 750,
                            linkImagesToOriginal: false
                        }
                    }
                ]
            }
        }
    ]
}
