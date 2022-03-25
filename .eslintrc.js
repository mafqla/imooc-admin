module.exports = {

  // 表示当前为根目录， ESlint规则被限制在此目录下
  root: true,

  // env 表示启用ESLint 检测的环境，在此处指定为node环境
  env: {
    node: true
  },

  // ESLint 中基础配置需要继承的配置
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],

  // 解析器
  parserOptions: {
    parser: 'babel-eslint'
  },

  // 需要修改的启用规则及其各自级别

  /**
   * 错误级别分为三种:
   * “off"或”0“ - 关闭规则
   * “warn”或”1“ - 开启规则， 使用警告级别的错误: warn (不会导致程序退出)
   * “error”或”2“ - 开启规则，使用错误级别的错误：error (会导致程序退出)
  */
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': "off"
  }
}
