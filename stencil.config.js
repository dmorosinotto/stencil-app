exports.config = {
  bundles: [
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
