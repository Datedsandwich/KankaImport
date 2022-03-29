const fs = require('fs');
const path = require('path')



const jsonsInDir = fs.readdirSync('').filter(file => path.extname(file) === '.json');

jsonsInDir.forEach(file => {
  const fileData = fs.readFileSync(path.join('./sw_lbi/categories', file));
  const json = JSON.parse(fileData.toString());
});