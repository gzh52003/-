/* 扩展webpack配置 */

const { override, addDecoratorsLegacy, addWebpackAlias, fixBabelImports } = require('customize-cra');
const path = require('path');

module.exports = override(
  
  //支持装饰器
  addDecoratorsLegacy(),

  //支持定义路径别名（路径简写）
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),   //此时@代表src目录路径
    '#': path.resolve(__dirname, 'src/components'),
    '~': path.resolve(__dirname, 'src/views')
  }),

  //UI框架按需加载
  fixBabelImports('import', {
    "libraryName": "antd-mobile",      //按需引入antd-mobile UI框架
    "libraryDirectory": "es",
    "style": "css"
  })
); 