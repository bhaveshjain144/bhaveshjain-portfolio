// module.exports = {
//     reactStrictMode: true
// }
const withImages = require('next-images');

module.exports = withImages({
  esModule: true,
  fileExtensions: ['Png', 'PNG', 'jpg', 'jpeg', 'png', 'gif', 'ico', 'svg', 'pdf'], // Add 'pdf' to the list of file extensions
});
