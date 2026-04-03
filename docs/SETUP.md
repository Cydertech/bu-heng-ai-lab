# 开发环境配置总结
> 2026-04-02 | 步衡智研 AI Lab

---

## ✅ 已安装工具

| 工具 | 版本 | 用途 |
|------|------|------|
| Node.js | v25.9.0 | JavaScript 运行时 |
| pnpm | v10.33.0 | 包管理器（比 npm 快） |
| Git | v2.50.1 | 版本控制 |
| Python 3 | v3.9.6 | 脚本/AI 工具支持 |
| Homebrew | v5.1.3 | Mac 包管理器 |

---

## 📁 项目结构

```
~/projects/bu-heng-ai-lab/
├── docs/
│   └── SEO-GEO-GUIDE.md      # SEO/GEO 实战指南
├── website/                   # Next.js 网站项目
│   ├── src/app/
│   │   ├── layout.tsx        # 全局布局 + SEO meta
│   │   ├── page.tsx          # 首页
│   │   ├── sitemap.ts       # SEO sitemap
│   │   └── robots.ts        # SEO robots + AI 爬虫规则
│   ├── package.json
│   └── ...
└── README.md
```

---

## 🚀 常用命令

```bash
# 进入项目
cd ~/projects/bu-heng-ai-lab/website

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 启动生产服务器
pnpm start

# 代码检查
pnpm lint
```

---

## 🔧 下一步待装

- [ ] VS Code 或 Cursor（代码编辑器）
- [ ] Docker（容器化部署）
- [ ] Vercel CLI（一键部署）
- [ ] 数据库（如需存储案例数据）

---

## 📚 学习路径

### Week 1: 基础
- [x] 开发环境搭建
- [ ] Next.js 基础教程
- [ ] React 组件理解
- [ ] Tailwind CSS 实践

### Week 2: SEO/GEO
- [ ] 提交网站到 Google Search Console
- [ ] 添加 Google Analytics
- [ ] 创建第一个案例页面
- [ ] 测试 Schema.org 标记

### Week 3: 内容
- [ ] 完成 5 个案例记录
- [ ] 写第一篇研究笔记
- [ ] 设计案例数据结构

### Week 4: 部署
- [ ] 部署到 Vercel
- [ ] 绑定自定义域名
- [ ] 监控 SEO 表现

---

一起加油！💪
