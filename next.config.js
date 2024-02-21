// module.exports = {
//     reactStrictMode: true
// }

import withImages from 'next/image'

module.exports = withImages({
  esModule: false ,
  fileExtensions: ['png', 'jpg', 'jpeg', 'gif', 'ico', 'svg', 'pdf'], // Add 'pdf' to the list of file extensions
});


