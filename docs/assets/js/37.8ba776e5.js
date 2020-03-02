(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{240:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"权限管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#权限管理"}},[t._v("#")]),t._v(" 权限管理")]),t._v(" "),s("p",[t._v("RBAC权限管理模块")]),t._v(" "),s("h2",{attrs:{id:"运行示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行示例"}},[t._v("#")]),t._v(" 运行示例")]),t._v(" "),s("p",[t._v("d2-crud-plus-example中提供权限管理模块，位于"),s("code",[t._v("/src/business/modules/permission")]),t._v("下")]),t._v(" "),s("h3",{attrs:{id:"_1-启动后端【java】"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-启动后端【java】"}},[t._v("#")]),t._v(" 1.启动后端【java】")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/greper/d2-crud-plus-server",target:"_blank",rel:"noopener noreferrer"}},[t._v("d2-crud-plus-server"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"_1-1克隆项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1克隆项目"}},[t._v("#")]),t._v(" 1.1克隆项目")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git clone https://github.com/greper/d2-crud-plus-server.git\n# 导入idea或eclipse\n")])])]),s("h4",{attrs:{id:"_1-2导入sql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2导入sql"}},[t._v("#")]),t._v(" 1.2导入sql")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("创建数据库`d2p_pm`\n将`./sql/d2p_pm.sql` 导入数据库\n")])])]),s("h4",{attrs:{id:"_1-3修改数据库连接配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3修改数据库连接配置"}},[t._v("#")]),t._v(" 1.3修改数据库连接配置")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ./api-service/src/main/resources/application.xml")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("datasource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" root\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" root\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" jdbc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("mysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3306/d2p_pm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?")]),t._v("characterEncoding=utf8"),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("&zeroDateTimeBehavior")]),t._v("=convertToNull"),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("&useSSL")]),t._v("=false"),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("&serverTimezone")]),t._v("=Asia/Shanghai"),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("&allowMultiQueries")]),t._v("=true\n")])])]),s("h4",{attrs:{id:"_1-4-启动api-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-启动api-server"}},[t._v("#")]),t._v(" 1.4 启动api-server")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("run ApiServerApplication\n")])])]),s("h3",{attrs:{id:"_2-启动d2-crud-plus-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-启动d2-crud-plus-example"}},[t._v("#")]),t._v(" 2.启动d2-crud-plus-example")]),t._v(" "),s("p",[t._v("开启权限模块")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("/packages/d2-crud-plus-example#  npm run dev:pm\n\n# 或者\n# 修改.env.development文件：VUE_APP_PM_ENABLED=true\n/packages/d2-crud-plus-example#  npm run dev\n")])])]),s("h3",{attrs:{id:"_2-查看效果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-查看效果"}},[t._v("#")]),t._v(" 2.查看效果")]),t._v(" "),s("ul",[s("li",[t._v("登录 admin/admin 可以查看全部菜单，拥有全部功能")]),t._v(" "),s("li",[t._v("登录 test/123456 只能查看资源和角色管理菜单，无法看到用户管理菜单")]),t._v(" "),s("li",[t._v("登录 readonly/123456 只能查看，不能编辑")]),t._v(" "),s("li",[t._v("登录 authz/123456 只能查看与授权，不能编辑")])]),t._v(" "),s("p",[t._v("系统默认数据不允许修改，如需体验，请自行添加数据进行测试")]),t._v(" "),s("h2",{attrs:{id:"_2-按钮权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-按钮权限"}},[t._v("#")]),t._v(" 2 按钮权限")]),t._v(" "),s("h3",{attrs:{id:"_2-1-directive控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-directive控制"}},[t._v("#")]),t._v(" 2.1 directive控制")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("el-button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-permission")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("permission:role:add'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("添加角色"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("el-button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-2-代码控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-代码控制"}},[t._v("#")]),t._v(" 2.2 代码控制")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("created")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasPermissions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'permission:role:add'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"您拥有添加权限"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);