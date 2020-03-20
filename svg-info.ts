const fs = require('fs-extra');

/*
 * Add a note at the top of icons.interface.ts
 */
const filePath = './projects/canopy/src/lib/icon/icons.interface.ts';

const data = fs.readFileSync(filePath); // read file content into data
const fd = fs.openSync(filePath, 'w+');
const buffer = Buffer.from(
  `// NOTE: this file is created automatically by \`svg-to-ts\`.
// For more information check: https://github.com/kreuzerk/svg-to-ts.

`
);

fs.writeSync(fd, buffer, 0, buffer.length, 0); // write new data
fs.writeSync(fd, data, 0, data.length, buffer.length); // append old data

fs.close(fd);
