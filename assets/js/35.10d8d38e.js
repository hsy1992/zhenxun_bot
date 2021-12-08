(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{582:function(s,t,e){"use strict";e.r(t);var a=e(8),l=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[s._v("一个关系型数据库，占用比mysql小小小小多了..."),e("br"),s._v("\n目前来看postgresql版本似乎对真寻没有太大影响（指9.0以上），不会影响正常使用")])]),e("h1",{attrs:{id:"开始安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开始安装"}},[s._v("#")]),s._v(" 开始安装")]),s._v(" "),e("h2",{attrs:{id:"windows"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[s._v("#")]),s._v(" Windows")]),s._v(" "),e("ol",[e("li",[s._v("在"),e("a",{attrs:{href:"https://www.enterprisedb.com/downloads/postgres-postgresql-downloads",target:"_blank",rel:"noopener noreferrer"}},[s._v("Postgresql下载页面"),e("OutboundLink")],1),s._v("下载对应系统的Postgresql安装程序")]),s._v(" "),e("li",[s._v("选择安装路径，一路next，中途会让你设置以下postgres用户的密码")]),s._v(" "),e("li",[s._v("在安装目录下找到pgAdmin，使用pgAdmin连接数据库，创建连接，新建数据库即可")])]),s._v(" "),e("h2",{attrs:{id:"linux-以ubuntu为例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux-以ubuntu为例"}},[s._v("#")]),s._v(" Linux (以Ubuntu为例)")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("安装Postgresql")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v(" sudo apt update\n sudo apt install postgresql postgresql-contrib\n")])])])]),s._v(" "),e("li",[e("p",[s._v("创建数据库和用户")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v(" sudo su - postgres  # 切换用户\n psql\n       #  用户名↓                # 密码↓\n CREATE USER uname WITH PASSWORD 'zhenxun';      # 创建用户\n         # 数据库名称↓       所有者↓\n CREATE DATABASE testdb OWNER uname;             # 创建数据库\n")])])])]),s._v(" "),e("li",[e("p",[s._v("编辑数据库配置文件（路径请已自己的为准）")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("打开数据库配置文件")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("  vim /etc/postgresql/12/main/postgresql.conf\n")])])])]),s._v(" "),e("li",[e("p",[s._v("找到 "),e("code",[s._v("listen_addresses: '*'")]),s._v(" 取消前面的 "),e("code",[s._v("#")]),s._v(" 注释，使用:wq保存退出")])])]),s._v(" "),e("blockquote",[e("p",[s._v("建议公网ip同时修改 Port")])]),s._v(" "),e("ul",[e("li",[e("p",[s._v("打开 "),e("strong",[s._v("pg_hba.conf")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("  vim /etc/postgresql/12/main/pg_hba.conf\n")])])])]),s._v(" "),e("li",[e("p",[s._v("在最下添加或修改后，使用:wq保存退出")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("  # 允许任意用户从任意机器上以密码方式访问数据库\n  host    all             all             0.0.0.0/0               md5\n")])])])])])]),s._v(" "),e("li",[e("p",[s._v("重启数据库")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v(" sudo systemctl restart postgresql\n")])])])])])])}),[],!1,null,null,null);t.default=l.exports}}]);