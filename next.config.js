require('dotenv').config();
const withFonts = require('nextjs-fonts');
const webpack = require('webpack');
const categories = require('./_ressources/categories.json');

const waitFor = ms => new Promise(r => setTimeout(r, ms));

module.exports = withFonts({
  webpack: config => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));
    return config;
  },
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' },
      '/a-propos': { page: '/a-propos' },
      '/vie-privee': { page: '/vie-privee' },
      '/nouvelle-ressource': { page: '/nouvelle-ressource' },
      '/mentions-legales': { page: '/mentions-legales' },
      '/contact': { page: '/contact' },
      '/404': { page: '/404' },
    };

    // const resources = await fetchResources();
    const categoriesArray = Object.keys(categories);
    for (let i = 0; i < categoriesArray.length; i++) {
      const categ = categories[categoriesArray[i]];

      await waitFor(100); // waits 5 sec between each call for Airtable limitation
      //await waitFor(5000); // waits 5 sec between each call for Airtable limitation
      paths[`/${categ.path}`] = {
        page: '/[category]',
        query: { category: categ.path },
      };
    }

    // could create a sitemap here with the paths

    return paths;
  },
});
