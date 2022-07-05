// .commitlintrc.js
/** @type {import('cz-git').UserConfig} */
module.exports = {
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
  },
  prompt: {
    alias: { fd: "docs: fix typos" },
    messages: {
      type: "选择要提交的更改类型：",
      scope: "表示该变更的范围 (可选):",
      customScope: "请输入变更的范围:",
      subject: "请输入本次改动的简单描述:\n",
      body: '请输入本次改动的详细描述（可选）。用“|”换行:\n',
      breaking: '列出任何不兼容更改（可选）。使用“|”换行:\n',
      footerPrefixsSelect: "通过此更改选择更改列表的问题类型 (可选):",
      customFooterPrefixs: "输入问题前缀(Input ISSUES prefix):",
      footer: "请输入备注(通常是 BREAKING CHANGE 或修复的 bug 的链接):\n",
      confirmCommit: "是否确实要继续执行上述提交？"
    },
    types: [
      { value: "feat", name: "feat:     新功能", emoji: ":sparkles:" },
      { value: "fix", name: "fix:      修复Bug", emoji: ":bug:" },
      { value: "docs", name: "docs:     仅包含文档修改", emoji: ":memo:" },
      { value: "style", name: "style:    不影响代码逻辑的更改", emoji: ":lipstick:" },
      { value: "refactor", name: "refactor: 重构,既不修复错误也不添加功能的代码更改", emoji: ":recycle:" },
      { value: "perf", name: "perf:     提高性能的更改", emoji: ":zap:" },
      { value: "test", name: "test:     添加/修改测试代码", emoji: ":white_check_mark:" },
      { value: "build", name: "build:    构建工具/外部依赖包或版本号修改", emoji: ":package:" },
      { value: "ci", name: "ci:       对CI配置文件和脚本的更改", emoji: ":ferris_wheel:" },
      { value: "chore", name: "chore:    杂项", emoji: ":hammer:" },
      { value: "revert", name: "revert:   撤销某次提交", emoji: ":rewind:" }
    ],
    useEmoji: false,
    emojiAlign: "center",
    themeColorCode: "",
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: "bottom",
    customScopesAlias: "自定义",
    emptyScopesAlias: "无",
    upperCaseSubject: false,
    markBreakingChangeMode: false,
    allowBreakingChanges: [],
    breaklineNumber: 100,
    breaklineChar: "|",
    skipQuestions: [],
    issuePrefixs: [{ value: "closed", name: "closed:   ISSUES has been processed" }],
    customIssuePrefixsAlign: "top",
    emptyIssuePrefixsAlias: "跳过",
    customIssuePrefixsAlias: "自定义",
    allowCustomIssuePrefixs: true,
    allowEmptyIssuePrefixs: true,
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: "",
    defaultIssues: "",
    defaultScope: "",
    defaultSubject: ""
  }
};
