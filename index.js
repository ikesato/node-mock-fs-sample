const mock = require('mock-fs');
const fs = require('fs');

mock({
  'path/to/fake/dir/a.txt': "hello world"
});


console.log(fs.readFileSync('path/to/fake/dir/a.txt').toString());
console.log(fs.readFileSync('path/to/fake/dir/a.txt').toString());

fs.writeFileSync('path/to/fake/dir/a.txt', "hoge");
console.log(fs.readFileSync('path/to/fake/dir/a.txt').toString());
console.log(fs.readFileSync('path/to/fake/dir/a.txt').toString());

mock({
  'path/to/fake/dir/a.txt': "hello world2"
});
console.log(fs.readFileSync('path/to/fake/dir/a.txt').toString());
console.log(fs.readFileSync('path/to/fake/dir/a.txt').toString());

mock.restore();
console.log(fs.readFileSync('path/to/fake/dir/a.txt').toString()); // cause Error: ENOENT
