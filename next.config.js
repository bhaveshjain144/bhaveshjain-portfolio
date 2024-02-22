// module.exports = {
//     reactStrictMode: true
// }

const withImages = require('next/image')

module.exports = withImages({
  reactStrictMode:true,
  swcMinify:true,
  esModule:true ,
  // fileExtensions: ['png', 'jpg', 'jpeg', 'gif', 'ico', 'svg', 'pdf'],
});