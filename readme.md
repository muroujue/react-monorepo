# Canvas Frontend Readme

# 目录结构

| 目录名称 | 项目描述         | 端口  | 依赖关系                 |
| -------- | ---------------- | ----- | ------------------------ |
| common   | 多个项目的公用库 | ----  | 无依赖                   |
| platform | 主平台           | 20080 | 依赖 @mcomponents/common |
| sidecar  | 补充应用         | 20060 | 依赖 @mcomponents/common |

<br>

# 如何安装 启动 部署

**如果后续需要使用 `lerna` 指令，需要全局安装 `npm i lerna -g`**

## 项目准备

### 安装包

- `yarn install` 安装所有项目及根目录的包，并提升所有项目中的公用包

### 加入环境变量.env

- platform sidecar 下各有一份.env.sample 文件，拷贝一份重命名为.env
- .env 配置的是 api 的请求地址，只在开发环境中使用到，可以根据开发情况进行修改

## 项目启动

### dev 环境下启动项目

- `yarn dev-all` 一键启动所有项目的开发环境服务 包括 platform / sidecar / common
- `yarn dev-platform` 启动 platform 项目
- `yarn dev-sidecar` 启动 sidecar 项目

### 其他指令

- `yarn build-all` 打包所有项目的静态文件
- `yarn clean` 删除所有的 node_modules

### 1、React Table 复选框问题

> 目前项目中用的是 React table v7 版本,组件支持复选框，但是不支持对某行 disabled,解决方法参考：https://github.com/TanStack/table/issues/2988。 或者升级 React table V8 版本，该版本已经包含有该功能

## 微前端动态远程加载模块

> 1、在 pivat_sidecar 项目中封装组件,并在项目中 webpack.base.js 中导出该模块 ( 使用 export default 导出模块 )

> 2、在 pivat_platform 中的页面内引入动态导入组件(路径：pivat_platform/src/remote),该组件有三个必传属性，其他属性会作为参数带入远程组件内。

> 3、添加中英文翻译的方法：引入 Intl.tsx 组件(路径： pivat_sidecar/src/helper)，对该封装的组件外部包装一层，其中 lang 属性为必传属性
