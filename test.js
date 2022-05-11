const fs = require('fs-extra');

const things = fs.readdirSync('./sb-build', { withFileTypes: true }).map(({ name }) => name);

for (const item of things) {
  exec.exec(`./sb-build/${item}`, './docs/');
}
