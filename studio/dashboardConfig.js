export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5fb2981324607d08334a94e8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-s1gkgd9z',
                  apiId: '2c1fbb55-e29e-4f4a-949c-e76afb9fe0a6'
                },
                {
                  buildHookId: '5fb29813dd98770da70f237c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-y9nmec2y',
                  apiId: '842e477a-e36a-4c97-8dbf-b6202e69bebf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/liesto/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-y9nmec2y.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
