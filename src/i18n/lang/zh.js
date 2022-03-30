export default {
  login: {
    title: '用户登录',
    loginBtn: '登录',
    usernameRule: '用户名为必填项',
    passwordRule: '密码不能少于6位',
    desc: `
    测试权限账号：<br />
    提供三种权限账号：<br />
    1. 超级管理员账号： super-admin <br />
    2. 管理员账号：admin <br />
    3. 测试可配置账号：test <br />
    密码统一为：123456 <br />
    <br />
    导入用户账号：<br />
    可使用导入的用户名登录 <br />
    密码统一为：123456  <br />
    <b>注意：导入用户区分中英文库！！！！</b>
    `
  },
  route: {
    profile: '个人中心',
    user: '用户',
    excelImport: 'Excel导入',
    userManage: '员工管理',
    userInfo: '员工信息',
    roleList: '角色列表',
    permissionList: '权限列表',
    article: '文章',
    articleRanking: '文章排名',
    articleCreate: '创建文章',
    articleDetail: '文章详情',
    articleEditor: '文章编辑'
  },
  toast: {
    switchLangSuccess: '切换语言成功'
  },
  tagsView: {
    refresh: '刷新',
    closeRight: '关闭右侧',
    closeOther: '关闭其他'
  },
  theme: {
    themeColorChange: '主题色更换',
    themeChange: '主题更换'
  },
  universal: {
    confirm: '确定',
    cancel: '取消'
  },
  navBar: {
    themeChange: '主题修改',
    headerSearch: '页面搜索',
    screenfull: '全屏替换',
    lang: '国际化',
    guide: '功能引导',
    home: '首页',
    course: '课程主页',
    logout: '退出登录'
  },
  guide: {
    close: '关闭',
    next: '下一个',
    prev: '上一个',
    guideTitle: '引导',
    guideDesc: '打开引导功能',
    hamburgerTitle: '汉堡按钮',
    hamburgerDesc: '打开和关闭左侧菜单',
    breadcrumbTitle: '面包屑',
    breadcrumbDesc: '指示当前页面位置',
    searchTitle: '搜索',
    searchDesc: '页面链接搜索',
    fullTitle: '全屏',
    fullDesc: '页面显示切换',
    themeTitle: '主题',
    themeDesc: '更换项目主题',
    langTitle: '国际化',
    langDesc: '语言切换',
    tagTitle: '标签',
    tagDesc: '已打开页面标签',
    sidebarTitle: '菜单',
    sidebarDesc: '项目功能菜单'
  },
  profile: {
    muted: '《vue3 改写 vue-element-admin，实现后台前端综合解决方案》项目演示',
    introduce: '介绍',
    projectIntroduction: '项目介绍',
    projectFunction: '项目功能',
    feature: '功能',
    chapter: '章节',
    author: '作者',
    name: 'Sunday',
    job: '一个前端开发程序猿',
    Introduction:
      '高级技术专家，曾就职于国内一线互联网公司，统筹过的多个大型项目用户数已过千万级。致力于研究大前端技术，多次受邀参加国内前端技术分享会，如：2018 年 Google 中国技术分享会。'
  },
  userInfo: {
    print: '打印',
    title: '员工信息',
    name: '姓名',
    sex: '性别',
    nation: '民族',
    mobile: '手机号',
    province: '居住地',
    date: '入职时间',
    remark: '备注',
    address: '联系地址',
    experience: '经历',
    major: '专业',
    glory: '荣耀',
    foot: '签字：___________日期:___________'
  },
  uploadExcel: {
    upload: '点击上传',
    drop: '将文件拖到此处'
  },
  excel: {
    importExcel: 'excel 导入',
    exportExcel: 'excel 导出',
    exportZip: 'zip 导出',
    name: '姓名',
    mobile: '联系方式',
    avatar: '头像',
    role: '角色',
    openTime: '开通时间',
    action: '操作',
    show: '查看',
    showRole: '角色',
    defaultRole: '员工',
    remove: '删除',
    removeSuccess: '删除成功',
    title: '导出为 excel',
    placeholder: 'excel 文件名称',
    defaultName: '员工管理表',
    close: '取 消',
    confirm: '导 出',
    importSuccess: ' 条员工数据导入成功',
    dialogTitle1: '确定要删除用户 ',
    dialogTitle2: ' 吗？',
    roleDialogTitle: '配置角色'
  },
  role: {
    buttonTxt: '新增角色',
    index: '序号',
    name: '名称',
    desc: '描述',
    action: '操作',
    assignPermissions: '分配权限',
    removeRole: '删除角色',
    dialogTitle: '新增角色',
    dialogRole: '角色名称',
    dialogDesc: '角色描述',
    updateRoleSuccess: '用户角色更新成功'
  },
  permission: {
    name: '权限名称',
    mark: '权限标识',
    desc: '权限描述'
  },
  article: {
    ranking: '排名',
    title: '标题',
    author: '作者',
    publicDate: '发布时间',
    desc: '内容简介',
    action: '操作',
    dynamicTitle: '动态展示',
    show: '查看',
    remove: '删除',
    edit: '编辑',
    dialogTitle1: '确定要删除文章 ',
    dialogTitle2: ' 吗？',
    removeSuccess: '文章删除成功',
    titlePlaceholder: '请输入文章标题',
    markdown: 'markdown',
    richText: '富文本',
    commit: '提交',
    createSuccess: '文章创建成功',
    editorSuccess: '文章修改成功',
    sortSuccess: '文章排名修改成功'
  }
}
