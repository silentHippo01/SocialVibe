const path = require('path');

module.exports = (...segments) => path.resolve(__dirname, '..', '..', ...segments);

//функция которая выходит в корень директории 