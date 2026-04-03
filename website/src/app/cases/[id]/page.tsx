import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllCases, getCaseById } from '@/lib/cases';

// 生成静态路径
export function generateStaticParams() {
  const cases = getAllCases();
  return cases.map((c) => ({
    id: c.id,
  }));
}

// 生成动态元数据
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const caseItem = getCaseById(id);
  
  if (!caseItem) {
    return { title: '案例未找到' };
  }
  
  return {
    title: caseItem.title,
    description: caseItem.summary,
  };
}

export default async function CaseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const caseItem = getCaseById(id);
  
  if (!caseItem) {
    notFound();
  }

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
        {/* 返回链接 */}
        <Link 
          href="/cases" 
          className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700 mb-6"
        >
          ← 返回案例库
        </Link>

        {/* 案例标题 */}
        <h1 className="text-3xl font-bold text-slate-900 mb-4">{caseItem.title}</h1>
        <p className="text-lg text-slate-600 mb-8">{caseItem.summary}</p>

        {/* 基本信息卡片 */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">基本信息</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-slate-500">患者年龄：</span>
              <span className="text-slate-900 font-medium">{caseItem.patientAge}岁</span>
            </div>
            <div>
              <span className="text-slate-500">性别：</span>
              <span className="text-slate-900 font-medium">{caseItem.patientGender}</span>
            </div>
            <div>
              <span className="text-slate-500">跌倒日期：</span>
              <span className="text-slate-900 font-medium">{caseItem.fallDate}</span>
            </div>
            <div>
              <span className="text-slate-500">跌倒地点：</span>
              <span className="text-slate-900 font-medium">{caseItem.fallLocation}</span>
            </div>
            <div className="md:col-span-2">
              <span className="text-slate-500">伤情类型：</span>
              <span className="text-red-600 font-medium">{caseItem.injuryType}</span>
            </div>
          </div>
        </div>

        {/* 当前状态 */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">当前状态</h2>
          <p className="text-slate-700 mb-4">{caseItem.currentStatus}</p>
          <div>
            <span className="text-slate-500 text-sm">主要困难：</span>
            <p className="text-slate-900 mt-1">{caseItem.mainDifficulty}</p>
          </div>
        </div>

        {/* 康复需求 */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            康复需求 
            <span className="text-sm font-normal text-slate-500">（{caseItem.needs.length}项）</span>
          </h2>
          <ul className="space-y-3">
            {caseItem.needs.map((need, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium shrink-0">
                  {index + 1}
                </span>
                <span className="text-slate-700">{need}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* AI 分析 */}
        {caseItem.aiAnalysis && (
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🤖</span>
              <h2 className="text-lg font-semibold text-slate-900">AI 分析总结</h2>
            </div>
            <p className="text-slate-700 leading-relaxed">{caseItem.aiAnalysis}</p>
          </div>
        )}

        {/* 元数据 */}
        <div className="text-sm text-slate-400 text-right">
          创建时间：{caseItem.createdAt}
        </div>
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
