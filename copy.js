/* eslint-env node */

const fs = require('fs');

const parentPackageDetails = JSON.parse(fs.readFileSync('./node_modules/fill-in-file/package.json', 'utf-8'));

const infoTemplate = `/*

  !!! copied file !!!

  version: ${parentPackageDetails.version}
  npm: https://www.npmjs.com/package/fill-in-file
  github: https://github.com/prakashchokalingam/fill-in-file

*/

`;

let content = fs.readFileSync('./node_modules/fill-in-file/bundle/index.js', 'utf8');
fs.writeFileSync('./addon-test-support/index.js', `${infoTemplate}${content}`);
