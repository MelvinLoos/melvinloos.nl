module.exports = {
  siteName: 'MelvinLoos.nl',
  siteDescription: 'All about me, Melvin Loos',
  siteUrl: 'https://www.melvinloos.nl',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'BlogPost',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
        },
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000,
        exclude: ['/success/'],
        config: {
          '/blog/*': {
            changefreq: 'weekly',
            priority: 0.5
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-webpack-size',
      options: {
        development: true,
        writeFile: true
      }
    },
    {
      use: "gridsome-plugin-disqus"
    }
  ],
  transformers: {
    remark: {
      plugins: [
        // Add remark-mermaid plugin
        ['gridsome-plugin-remark-mermaid', {
          theme: 'dark',
          viewport: {
            width: 600,
            height: 600
          }
        }],
        ['@noxify/gridsome-remark-classes', {
          blockquote: 'blockquote pl-4 bg-light'
        }]
      ],
      config: {
        commonmark: true
      }
    }
  },
  css: {
    loaderOptions: {
      scss: {
      }
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080
  }
}
