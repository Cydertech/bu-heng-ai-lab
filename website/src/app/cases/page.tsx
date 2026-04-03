import Link from 'next/link';
import { getAllCases } from '@/lib/cases';

export const metadata = {
  title: '案例库',
  description: '跌倒后老人行动困难真实案例记录，结构化康复需求数据库',
};

export default function CasesPage() {
  const cases = getAllCases();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* 导航栏 */}
      <nav className="w-full border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-slate-900">
            步衡智研
          </Link>
          <div className="flex gap-6 text-sm text-slate-600">
            <Link href="/cases" className="text-blue-600 font-medium">案例库</Link>
            <Link href="/research" className="hover:text-slate-900 transition">研究</Link>
            <Link href="/about" className="hover:text-slate-900 transition">关于</Link>
            <Link href="/contact" className="hover:text-slate-900 transition">联系</Link>
          </div>
        </div>
      </nav>

      {/* 主内容 */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* 页面标题 */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">案例库</h1>
          <p className="text-slate-600">
            收集整理跌倒后行动困难的真实案例，形成结构化需求数据库。
            每个案例都经过 AI 辅助分析，提炼关键康复需求。
          </p>
        </div>

        {/* 统计卡片 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white border border-slate-200 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{cases.length}</div>
            <div className="text-sm text-slate-500">收录案例</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-600">
              {cases.reduce((sum, c) => sum + c.needs.length, 0)}
            </div>
            <div className="text-sm text-slate-500">需求记录</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">
              {new Set(cases.map(c => c.injuryType)).size}
            </div>
            <div className="text-sm text-slate-500">伤情类型</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">
              {Math.round(cases.reduce((sum, c) => sum + c.patientAge, 0) / cases.length)}
            </div>
            <div className="text-sm text-slate-500">平均年龄</div>
          </div>
        </div>

        {/* 案例列表 */}
        <div className="space-y-6">
          {cases.map((caseItem) => (
            <Link
              key={caseItem.id}
              href={`/cases/${caseItem.id}`}
              className="block bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition"
            >
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-lg font-semibold text-slate-900">{caseItem.title}</h2>
                <span className="text-xs text-slate-400">{caseItem.createdAt}</span>
              </div>
              
              <p className="text-slate-600 mb-4">{caseItem.summary}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">
                  {caseItem.patientAge}岁 {caseItem.patientGender}
                </span>
                <span className="px-2 py-1 bg-red-50 text-red-600 text-xs rounded">
                  {caseItem.injuryType}
                </span>
                <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded">
                  {caseItem.fallLocation}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-sm text-slate-500">
                  <span className="text-blue-600">{caseItem.needs.length}</span> 项康复需求
                </div>
                <span className="text-blue-600 text-sm font-medium">查看详情 →</span>
              </div>
            </Link>
          ))}
        </div>

        {/* 空状态提示 */}
        {cases.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">📭</div>
            <p className="text-slate-500">暂无案例，开始记录第一个案例吧！</p>
          </div>
        )}
      </main>

      {/* 页脚 */}
      <footer className="border-t border-slate-200 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-500 text-sm">
          <p>© 2026 步衡智研 AI Lab. 用 AI 让康复研究更高效。</p>
        </div>
      </footer>
    </div>
  );
}
