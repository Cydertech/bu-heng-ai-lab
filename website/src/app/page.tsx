import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* 导航栏 */}
      <nav className="w-full border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-slate-900">
            步衡智研
          </Link>
          <div className="flex gap-6 text-sm text-slate-600">
            <Link href="/cases" className="hover:text-slate-900 transition">案例库</Link>
            <Link href="/research" className="hover:text-slate-900 transition">研究</Link>
            <Link href="/about" className="hover:text-slate-900 transition">关于</Link>
            <Link href="/contact" className="hover:text-slate-900 transition">联系</Link>
          </div>
        </div>
      </nav>

      {/* Hero 区域 */}
      <main className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            用 AI 理解康复需求
            <br />
            <span className="text-blue-600">积累真实数据资产</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            专注于跌倒后老人行动困难与下肢康复需求研究，
            用 AI 技术整理真实案例，为未来康复产品积累第一批数据资产。
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/cases" 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
            >
              查看案例库
            </Link>
            <Link 
              href="/about" 
              className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg font-medium hover:border-slate-400 transition"
            >
              了解更多
            </Link>
          </div>
        </div>

        {/* 核心价值 */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">真实案例库</h3>
            <p className="text-slate-600 text-sm">
              收集整理跌倒后行动困难的真实案例，形成结构化需求数据库。
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">AI 驱动分析</h3>
            <p className="text-slate-600 text-sm">
              用 AI 技术辅助访谈总结、需求提炼、报告生成，提升研究效率。
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">产品导向</h3>
            <p className="text-slate-600 text-sm">
              数据积累为未来康复产品服务，从真实需求出发设计解决方案。
            </p>
          </div>
        </div>

        {/* 数据统计 */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 mb-20">
          <h2 className="text-2xl font-bold mb-6 text-center">研究进展</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400">0</div>
              <div className="text-sm text-slate-400">真实案例</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400">0</div>
              <div className="text-sm text-slate-400">需求记录</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">0</div>
              <div className="text-sm text-slate-400">研究报告</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400">30</div>
              <div className="text-sm text-slate-400">天学习计划</div>
            </div>
          </div>
        </div>

        {/* 学习计划 */}
        <div className="border border-slate-200 rounded-xl p-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">30天 AI 学习计划</h2>
          <p className="text-slate-600 mb-4">
            边学 AI，边积累数据。30天后达成以下目标：
          </p>
          <ul className="space-y-2 text-slate-700">
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              10-20 个真实案例记录
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              一份结构化需求表
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              "跌倒后行动困难需求观察"小报告
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              AI 辅助写邮件和总结访谈的流程
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              可持续的 AI 学习方向
            </li>
          </ul>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="border-t border-slate-200 py-8 mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-500 text-sm">
          <p>© 2026 步衡智研 AI Lab. 用 AI 让康复研究更高效。</p>
        </div>
      </footer>
    </div>
  );
}
