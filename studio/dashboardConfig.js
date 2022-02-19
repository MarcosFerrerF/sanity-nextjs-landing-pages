export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '6210670efbd1b845e9e91796',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ourqhhj8',
                  apiId: 'b3f7b0f5-13d5-4d5b-b494-4780499688fc'
                },
                {
                  buildHookId: '6210670ec302d44633f1cdb0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-oc8rxqzv',
                  apiId: '267df712-7e53-45d5-8a70-e6f2ef189531'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MarcosFerrerF/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-oc8rxqzv.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
