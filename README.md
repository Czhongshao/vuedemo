# 🎮 Steam 数据可视化分析前端界面 · VueDemo

> 一个基于 **Vue 3 + ECharts** 打造的 Steam 游戏数据可视化平台，助你快速洞察玩家偏好与市场趋势。

![License](https://img.shields.io/badge/license-MIT-green)
![Vue3](https://img.shields.io/badge/vue-3.x-brightgreen)
![ECharts](https://img.shields.io/badge/echarts-visualization-blue)

---

## 📸 项目预览

> 可视化图表如热度趋势、发行年份分布、分类比例、地区偏好等

---

## 🧠 项目简介

本项目是Steam游戏数据可视化平台的前端部分，结合后端 API，实现对 Steam 游戏大数据的图形化展示，帮助用户更直观理解数据内涵。

---

## 🛠️ 技术栈

| 技术       | 用途         |
|------------|--------------|
| Vue 3      | 前端框架     |
| Vite       | 构建工具     |
| ECharts    | 数据可视化   |
| Axios      | 数据请求     |
| Pinia      | 状态管理     |

---

## 🔍 功能亮点

- 🎯 多维度数据分析（如评分、价格、时间趋势）
- 📊 多类型图表展示（柱状图、折线图、饼图等）
- 🎨 深色 / 浅色主题切换
- 🧩 模块化组件结构
- ⚡ 极速构建 & 响应式体验

---

## 📦 项目安装

### 1. 克隆项目

```bash
git clone https://github.com/Czhongshao/vuedemo.git
cd vuedemo
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动开发服务器

```bash
npm run dev
```

### 4. 构建生产环境

```bash
npm run build
```

---

## 📁 目录结构

```bash
vuedemo/
├── public/               # 公共资源
├── src/
│   ├── assets/           # 图片/样式等静态资源
│   ├── components/       # Vue 组件
│   ├── views/            # 页面视图
│   ├── store/            # Pinia 状态管理
│   ├── router/           # 路由配置
│   ├── api/              # 后端接口封装
│   ├── App.vue           # 主应用组件
│   └── main.js           # 应用入口文件
├── vite.config.js        # Vite 配置
└── README.md
```

---

## 🌐 接口说明

> 可根据需要填写具体接口路径与参数，例如：

- `GET /api/games` - 获取所有游戏信息
- `GET /api/trend` - 获取热度趋势数据

---

## 💡 TODO

- [ ] 增加游戏对比分析模块
- [ ] 接入Steam实时数据接口
- [ ] 增加用户收藏/筛选功能
- [ ] 响应式移动端适配

---

## 🤝 贡献指南

欢迎提交 PR 或 Issue 一起完善该项目！

```bash
# Fork 本仓库
# 创建新分支
git checkout -b feature/xxx

# 提交更改
git commit -m "add: 新功能 xxx"

# 推送到分支
git push origin feature/xxx
```

---

## 📄 License

本项目采用 [MIT License](./LICENSE)。

---

## 📬 联系方式

如有疑问或建议，欢迎联系：

- GitHub: [@your-username](https://github.com/Czhongshao)
- Email: [3067982179@qq.com](mailto:3067982179@qq.com)
