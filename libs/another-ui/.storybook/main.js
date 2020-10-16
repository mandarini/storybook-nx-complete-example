const rootMain = require('../../../.storybook/main');

// Use the following syntax to add addons!
// rootMain.addons.push('');
rootMain.stories.push(...['../src/lib/**/*.stories.mdx', '../src/lib/**/*.stories.@(js|jsx|ts|tsx)'])

rootMain.refs = {
    'jkafhskjd': {
      title: "kajsdf sdjkfh",
      url: "http://localhost:4400"
    },
    'reactstories': {
      title: "the react stories",
      url: "http://localhost:4402"
    }
}

module.exports = rootMain;