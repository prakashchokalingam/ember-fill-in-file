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

// files needs to be copied
let files = [
  {
    src: './node_modules/fill-in-file/index.js',
    dest: './addon-test-support/index.js'
  },
  {
    src: './node_modules/fill-in-file/lib/index.js',
    dest: './addon-test-support/lib/index.js'
  }
];

files.forEach((file) => {
  let content = fs.readFileSync(file.src, 'utf8');
  fs.writeFileSync(file.dest, `${infoTemplate}${content}`);
});