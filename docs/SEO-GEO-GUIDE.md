# SEO & GEO 实战指南
> 步衡智研 AI Lab - 2026年4月

---

## 一、先搞清楚概念

### SEO（Search Engine Optimization）- 传统搜索引擎优化
让网站在 Google、百度、Bing 等搜索引擎中排名更高。

**核心要素：**
- 关键词优化（标题、描述、正文）
- 网站结构（URL、内链、sitemap）
- 页面体验（加载速度、移动端适配、Core Web Vitals）
- 内容质量（E-E-A-T：经验、专业性、权威性、可信度）
- 外链建设（高质量网站指向你的链接）

### GEO（Generative Engine Optimization）- AI 时代的新玩法
让网站内容被 AI 模型（ChatGPT、Perplexity、Google SGE、Claude）引用和推荐。

**为什么重要？**
- 2025年数据显示，30%+ 的搜索已经变成 AI 直接回答
- 用户不再点击链接，而是直接看 AI 总结
- 被AI引用 = 免费品牌曝光 + 权威背书

---

## 二、GEO vs SEO 关键区别

| 维度 | SEO | GEO |
|------|-----|-----|
| 目标 | 点击率 | 引用率 |
| 内容形式 | 关键词堆砌有效 | 结构化、权威性内容优先 |
| 技术要求 | sitemap、meta标签 | Schema.org、结构化数据 |
| 评估指标 | 排名、流量 | AI提及频率、引用准确度 |
| 见效周期 | 3-6个月 | 1-3个月（AI更新快） |

---

## 三、GEO 实战策略

### 1. 内容结构化（AI 最喜欢）
```html
<!-- 用 Schema.org 标记内容 -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "跌倒后老人行动困难的康复方法",
  "author": {
    "@type": "Person",
    "name": "步衡智研"
  },
  "datePublished": "2026-04-02",
  "description": "基于真实案例总结的康复经验..."
}
</script>
```

### 2. 写 AI 容易理解的内容
- 用清晰的问答格式（Q&A）
- 每个段落一个核心观点
- 数据和事实要具体（AI 喜欢可验证的信息）
- 多用列表、表格、步骤说明

### 3. 建立 E-E-A-T 信号
- **经验**：分享真实案例（你的跌倒康复案例库！）
- **专业性**：引用研究、数据支持
- **权威性**：与其他权威网站互链
- **可信度**：联系方式、作者介绍、引用来源

### 4. 让 AI 容易抓取
- 网站加载速度快（<3秒）
- 清晰的导航结构
- robots.txt 允许爬虫
- 定期更新内容（AI 会优先抓取活跃网站）

---

## 四、技术实现清单

### 网站基础
- [ ] 使用 Next.js（SSG/SSR，AI 爬虫友好）
- [ ] 配置 sitemap.xml
- [ ] 配置 robots.txt
- [ ] 添加 Google Search Console
- [ ] 配置 Google Analytics 4

### SEO 优化
- [ ] 每页唯一 title（<60字符）
- [ ] 每页唯一 description（<160字符）
- [ ] H1-H6 结构清晰
- [ ] 图片 alt 属性
- [ ] 内链相关文章

### GEO 优化
- [ ] Schema.org 结构化数据
- [ ] FAQ 页面（问答格式）
- [ ] 作者署名和简介
- [ ] 发布日期和更新日期
- [ ] 引用来源链接

---

## 五、工具推荐

### SEO 工具
- **Ahrefs**：关键词研究、外链分析
- **Google Search Console**：索引状态、搜索表现
- **Screaming Frog**：网站爬取审计
- **PageSpeed Insights**：性能检测

### GEO 工具（2026年新工具）
- **Perplexity Publisher**：提交网站给 Perplexity AI
- **ChatGPT Browse**：测试 ChatGPT 能否找到你的内容
- **Brandwatch**：追踪品牌在 AI 回答中的提及
- **BrightEdge GEO**：AI 引用分析

---

## 六、步衡智研的 SEO/GEO 策略

### 内容规划
1. **案例库页面**：每个案例一个详情页，标记 Schema.org
2. **FAQ 页面**：常见康复问题，问答格式
3. **研究报告**：定期发布行业观察，建立权威性
4. **工具页面**：康复评估工具，增加用户停留时间

### 技术路线
- Next.js + Tailwind CSS（快速、SEO友好）
- Vercel 部署（自动 HTTPS、全球 CDN）
- 每2周发布新内容（保持活跃度）

---

## 七、学习资源

### 入门（第1周）
- Google SEO Starter Guide
- Schema.org 官方文档
- "SEO 2026" 书籍更新版

### 进阶（第2-3周）
- Google Search Central YouTube
- Ahrefs 博客
- Perplexity Publisher 指南

### 实战（第4周）
- 搭建网站
- 发布3-5篇文章
- 提交到搜索引擎和 AI 平台

---

## 八、我们下一步

1. 初始化 Next.js 项目
2. 配置 SEO 插件
3. 设计页面结构
4. 开始写第一批内容

准备好了吗？开干！🚀
