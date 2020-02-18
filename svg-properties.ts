const fs = require('fs-extra');

/*
 * The following code replaces the ID and the xlink:href of the SVG before adding it to the registry.
 * This is a workaround to handle a bug where all the SVG icons created in sketch and icomoon
 * have the same ID causing multiple SVGs on a page to link to that same ID and displaying an
 * incorrect icon.
 */
const filePath = './projects/canopy/src/lib/icon/icons.interface.ts';
const regex = RegExp('.svg$');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    return console.error(err);
  }

  let id = 0;
  let xlink = 0;

  const result = data
    .replace(/id="\w+"/g, () => `id="lg-icon-${id++}"`)
    .replace(/xlink:href="#\w+"/g, () => `xlink:href="#lg-icon-${xlink++}"`);

  fs.outputFileSync(filePath, result);
});

const data = fs.readFileSync(filePath); // read file content into data
const fd = fs.openSync(filePath, 'w+');
const buffer = new Buffer(
  `// NOTE: this file is created automatically by \`svg-to-ts\`.
// For more information check: https://github.com/kreuzerk/svg-to-ts.

`
);

fs.writeSync(fd, buffer, 0, buffer.length, 0); // write new data
fs.writeSync(fd, data, 0, data.length, buffer.length); // append old data

fs.close(fd);
