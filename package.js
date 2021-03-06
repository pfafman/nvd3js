Package.describe({
  name: "pfafman:nvd3",
  summary: 'Nvd3.org charts with Meteor, updated version.',
  version: "1.8.1_2",
  git: "https://github.com/pfafman/meteor-nvd3.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@1.0");
  api.use('d3js:d3@3.5.5', 'client');

  api.add_files('lib/nv.d3.js', 'client');
  api.add_files('lib/nv.d3.css', 'client');
});