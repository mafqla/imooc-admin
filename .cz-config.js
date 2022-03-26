module.exports = {
  //  可选类型
  types: [
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
    customScope: '选择你的修改范围(可选):',
    subject: '请简要描述提交(必填):',
    body: '请输入详细内容(可选):',
    footer: '请输入要关闭的issue(可选):',
    confirmCommit: '确认提交？(y/n)'
  },
  // 跳过问题
  skipQuestions: ['body', 'footer'],
  // subject文字长度默认72
  subjectLimit: 72
}

// module.exports = {
//   types: [
//     { value: 'feat', name: 'feat:     A new feature' },
//     { value: 'fix', name: 'fix:      A bug fix' },
//     { value: 'docs', name: 'docs:     Documentation only changes' },
//     {
//       value: 'style',
//       name:
//         'style:    Changes that do not affect the meaning of the code\n            (white-space, formatting, missing semi-colons, etc)',
//     },
//     {
//       value: 'refactor',
//       name: 'refactor: A code change that neither fixes a bug nor adds a feature',
//     },
//     {
//       value: 'perf',
//       name: 'perf:     A code change that improves performance',
//     },
//     { value: 'test', name: 'test:     Adding missing tests' },
//     {
//       value: 'chore',
//       name:
//         'chore:    Changes to the build process or auxiliary tools\n            and libraries such as documentation generation',
//     },
//     { value: 'revert', name: 'revert:   Revert to a commit' },
//     { value: 'WIP', name: 'WIP:      Work in progress' },
//   ],

//   scopes: [{ name: 'accounts' }, { name: 'admin' }, { name: 'exampleScope' }, { name: 'changeMe' }],

//   allowTicketNumber: false,
//   isTicketNumberRequired: false,
//   ticketNumberPrefix: 'TICKET-',
//   ticketNumberRegExp: '\\d{1,5}',

//   // it needs to match the value for field type. Eg.: 'fix'
//   /*
//   scopeOverrides: {
//     fix: [
//       {name: 'merge'},
//       {name: 'style'},
//       {name: 'e2eTest'},
//       {name: 'unitTest'}
//     ]
//   },
//   */
//   // override the messages, defaults are as follows
//   messages: {
//     type: "Select the type of change that you're committing:",
//     scope: '\nDenote the SCOPE of this change (optional):',
//     // used if allowCustomScopes is true
//     customScope: 'Denote the SCOPE of this change:',
//     subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
//     body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
//     breaking: 'List any BREAKING CHANGES (optional):\n',
//     footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
//     confirmCommit: 'Are you sure you want to proceed with the commit above?',
//   },

//   allowCustomScopes: true,
//   allowBreakingChanges: ['feat', 'fix'],
//   // skip any questions you want
//   skipQuestions: ['body'],

//   // limit subject length
//   subjectLimit: 100,
//   // breaklineChar: '|', // It is supported for fields body and footer.
//   // footerPrefix : 'ISSUES CLOSED:'
//   // askForBreakingChangeFirst : true, // default is false
// };
