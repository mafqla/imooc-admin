module.exports = {
  //  可选类型
  type: [
    { value: 'feat', name: 'feat: 新功能' },
    { value: 'fix', name: 'fix: 修复' },
    { value: 'docs', name: 'docs: 文档变更' },
    { value: 'style', name: 'style: 代码格式(不影响代码运行的变动)' },
    { value: 'refactor', name: 'refactor: 重构代码' },
    { value: 'perf', name: 'perf: 性能优化' },
    { value: 'test', name: 'test: 测试' },
    { value: 'chore', name: 'chore: 构建过程或辅助工具的变动' },
    { value: 'revert', name: 'revert: 回滚' },
    { value: 'build', name: 'build: 打包' }
  ],
  // 消息步骤
  messages: {
    type: '选择你的提交类型:',
    CustomScope: '选择你的修改范围(可选):',
    subject: '请输入提交的主题',
    body: '请输入详细内容',
    footer: '请输入要关闭的issue(可选):',
    confirmCommit: '确认提交？(y/n)'
  },
  // 跳过问题
  skipQuestions: ['body', 'footer'],
  // subject文字长度默认72
  subjectLimit: 72
}
