export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec7b48b9cce676ebf1f3401',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-c6eznwz2',
                  apiId: '9252f1e6-e2cb-44c5-8475-035256b77d25'
                },
                {
                  buildHookId: '5ec7b48bfbfdbe94b7c0f065',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-8c8pdp73',
                  apiId: 'f1f9f3dc-9f7b-40ee-8deb-a9435ccf4127'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/liweihan/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-8c8pdp73.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
