export default {
  widgets: [
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
                  buildHookId: '5f9052d1e080f40d30eebc24',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-dm2ncs4e',
                  apiId: 'ae4dbddf-b9a2-4a42-a32b-6bdba3e7f9a9'
                },
                {
                  buildHookId: '5f9052d2e080f40fe0eeba2b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-be7fwib7',
                  apiId: '6a4c29ef-d6f8-4345-b61e-5e97aa7028f9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dereksaffe/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-be7fwib7.netlify.app', category: 'apps'}
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
