/* eslint-disable no-undef */
const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#3ab44d", "@link-color": "black" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
