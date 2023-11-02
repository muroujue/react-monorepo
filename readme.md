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
