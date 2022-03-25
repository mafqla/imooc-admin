module.exports = {
  // 继承规则
  extends: ['@commitlint/config-conventional'],
  // 定义规则
  roles: {
    // type的类型定义
    'type-enum': [
      // 提交类型
      // 当前验证错误的级别
      2,
      // 在什么情况可以验证
      'always',
      // 泛型内容
      [
        'feat', // 新功能
        'fix', // 修复
        'docs', // 文档变更
        'style', // 代码格式(不影响代码运行的变动)
        'refactor', // 重构代码
        'perf', // 性能优化
        'test', // 测试
        'chore', // 构建过程或辅助工具的变动
        'revert', // 回滚
        'build' // 打包
      ]
    ],
    // subject大小写不做校验
    'subject-case': [0]
  }
}
