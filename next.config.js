// module.exports = {
//     reactStrictMode: true
// }

import withImages from 'next/image'

module.exports = withImages({
  reactStrictMode: true,
  swcMinify: true,
  esModule: false ,
  // fileExtensions: ['png', 'jpg', 'jpeg', 'gif', 'ico', 'svg', 'pdf'],
});