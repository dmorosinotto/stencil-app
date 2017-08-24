exports.config = {
  bundles: [
    { components: ['home-page'] },
    { components: ['main-page', 'sub-page'] },
    { components: ['my-name', 'todo-list', 'toggle-it'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
