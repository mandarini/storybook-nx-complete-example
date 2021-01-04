const rootMain = require('../../../.storybook/main');

// Use the following syntax to add addons!
// rootMain.addons.push('');
rootMain.stories.push(...['../src/lib/**/*.stories.mdx', '../src/lib/**/*.stories.@(js|jsx|ts|tsx)'])

rootMain.refs = {
  'ui-react': {
    title: "UI React Stories",
    url: "http://localhost:4402" // For local projects, please run these Storybooks BEFORE running the main Storybook.
  }
}

module.exports = rootMain;
