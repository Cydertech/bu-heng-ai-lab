// 案例数据类型
export interface Case {
  id: string;
  title: string;
  summary: string;
  patientAge: number;
  patientGender: '男' | '女';
  fallDate: string;
  fallLocation: string; // 跌倒地点
  injuryType: string; // 伤情类型
  currentStatus: string; // 当前状态
  mainDifficulty: string; // 主要困难
  needs: string[]; // 康复需求
  aiAnalysis?: string; // AI 分析总结
  createdAt: string;
}

// 示例案例数据（后续可接入数据库）
export const cases: Case[] = [
  {
    id: 'case-001',
    title: '张阿姨 - 浴室跌倒后行动不便',
    summary: '72岁女性，浴室滑倒后右髋部疼痛，行走困难已3个月',
    patientAge: 72,
    patientGender: '女',
    fallDate: '2025-12-15',
    fallLocation: '家中浴室',
    injuryType: '右股骨颈骨折（已手术）',
    currentStatus: '术后3个月，可扶拐短距离行走',
    mainDifficulty: '上下楼梯困难，无法独立洗澡',
    needs: [
      '下肢力量训练指导',
      '居家无障碍改造建议',
      '防跌倒辅助器具',
      '日常生活能力恢复训练',
    ],
    aiAnalysis: '患者术后恢复良好，但居家环境存在多处跌倒风险点。建议优先解决浴室安全改造，同时进行针对性下肢肌力训练。',
    createdAt: '2026-03-20',
  },
  {
    id: 'case-002',
    title: '李大爷 - 菜市场摔倒后行动受限',
    summary: '78岁男性，菜市场买菜时被绊倒，左膝关节疼痛加重',
    patientAge: 78,
    patientGender: '男',
    fallDate: '2026-01-10',
    fallLocation: '菜市场地面湿滑处',
    injuryType: '左膝软组织损伤，原有骨关节炎加重',
    currentStatus: '行走疼痛明显，活动范围下降',
    mainDifficulty: '长距离行走困难，无法独立买菜',
    needs: [
      '膝关节保护训练',
      '疼痛管理方案',
      '助行器具选择建议',
      '外出活动策略调整',
    ],
    aiAnalysis: '患者为高龄骨关节炎患者，跌倒后症状加重。需综合考虑疼痛控制、关节保护与功能维持的平衡。',
    createdAt: '2026-03-25',
  },
  {
    id: 'case-003',
    title: '王奶奶 - 夜间起床上厕所摔倒',
    summary: '68岁女性，夜间起床时头晕跌倒，左侧肢体乏力',
    patientAge: 68,
    patientGender: '女',
    fallDate: '2026-02-28',
    fallLocation: '卧室',
    injuryType: '脑卒中后遗症（左侧偏瘫）',
    currentStatus: '住院康复中，左侧肢体肌力III级',
    mainDifficulty: '左侧肢体活动受限，日常生活需辅助',
    needs: [
      '偏瘫康复训练方案',
      '居家环境适应改造',
      '照护者培训',
      '辅助器具配置',
    ],
    aiAnalysis: '脑卒中后康复关键期，需抓紧前3-6个月黄金恢复期。建议制定综合康复计划，同时做好居家环境准备。',
    createdAt: '2026-04-01',
  },
];

// 获取所有案例
export function getAllCases(): Case[] {
  return cases;
}

// 根据 ID 获取单个案例
export function getCaseById(id: string): Case | undefined {
  return cases.find((c) => c.id === id);
}
