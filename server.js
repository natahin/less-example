var less = require('less');

less.render('.class { width: (100px + 50px) }', function (e, output) {
  console.log(output.css);
});