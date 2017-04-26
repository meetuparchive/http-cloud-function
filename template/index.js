var yaml = require('js-yaml');
var fs = require('fs');

var secrets = yaml.safeLoad(fs.readFileSync('secrets.yaml', 'utf8'))

exports.{{ FUNCTION_NAME }} = function (req, res) {
  res.send('func');
};
