/**
 * Joe Wei (魏源) Academic Performance Tracker
 * Data Structure - Easy to update each semester
 * 
 * 如何更新:
 * 1. 在 SEMESTERS 数组中添加新学期数据
 * 2. 在 HIGHLIGHTS 中添加注意事项
 * 3. 在 COMMENTS 中添加老师评语
 * 4. 保存后 git push 即可自动更新
 */

const STUDENT = {
  name_en: "Joe Wei",
  name_cn: "魏源",
  class: "Pre-2",
  school: "宏文学校 / 光华美高",
  grade: "9th Grade",
  target: "University Admission Academic Portfolio",
  lastUpdated: "2026-06-21"
};

const SUBJECTS = [
  { id: "eal",           name: "EAL",                    category: "language",     icon: "🌐" },
  { id: "social",        name: "Intro to Social Studies", category: "humanities",  icon: "📚" },
  { id: "geography",     name: "Intro to Geography",      category: "humanities",  icon: "🌍" },
  { id: "psychology",    name: "Intro to Psychology",     category: "humanities",  icon: "🧠" },
  { id: "algebra2",      name: "Algebra 2",               category: "science",     icon: "📐" },
  { id: "physics",       name: "Intro to Physics",        category: "science",     icon: "⚛️" },
  { id: "chemistry",     name: "Intro to Chemistry",      category: "science",     icon: "🧪" },
  { id: "biology",       name: "Intro to Biology",        category: "science",     icon: "🧬" },
  { id: "art",           name: "Art",                     category: "elective",    icon: "🎨" },
  { id: "pe",            name: "PE",                      category: "elective",    icon: "⚽" }
];

const CATEGORIES = {
  language:   { label: "语言",     color: "#3B82F6", bg: "#EFF6FF" },
  humanities: { label: "人文社科",  color: "#8B5CF6", bg: "#F5F3FF" },
  science:    { label: "理科",     color: "#10B981", bg: "#ECFDF5" },
  elective:   { label: "选修/体育", color: "#F59E0B", bg: "#FFFBEB" }
};

const SEMESTERS = [
  {
    id: "sem1_mid",
    label: "上学期期中",
    shortLabel: "期中①",
    term: "mid",
    year: "2024-2025",
    semester: 1,
    overall_gpa: 3.48,
    date: "2024年11月",
    scores: {
      eal:        { gpa: 85.4,  attendance: 100, participation: 97.5, homework: 89.5,  exam: 75.8 },
      social:     { gpa: 79.3,  attendance: 100, participation: 88,   homework: 88.4,  exam: 67.6 },
      geography:  { gpa: 88.6,  attendance: 100, participation: null, homework: null,  exam: null },
      psychology: { gpa: 88.5,  attendance: 100, participation: null, homework: null,  exam: null },
      algebra2:   { gpa: 89.4,  attendance: 100, participation: null, homework: null,  exam: null },
      physics:    { gpa: 98.5,  attendance: 100, participation: null, homework: null,  exam: null },
      chemistry:  { gpa: 92.2,  attendance: 100, participation: null, homework: null,  exam: null },
      biology:    { gpa: 87.3,  attendance: 100, participation: null, homework: null,  exam: null },
      art:        { gpa: 94.3,  attendance: 100, participation: null, homework: null,  exam: null },
      pe:         { gpa: 96.1,  attendance: 100, participation: null, homework: null,  exam: null }
    }
  },
  {
    id: "sem1_final",
    label: "上学期期末",
    shortLabel: "期末①",
    term: "final",
    year: "2024-2025",
    semester: 1,
    overall_gpa: 3.77,
    date: "2025年1月",
    scores: {
      eal:        { gpa: 90.0,  attendance: 100, participation: 96,   homework: 92.3,  exam: 84.2 },
      social:     { gpa: 89.9,  attendance: 98.6, participation: 93.5, homework: 89.2,  exam: 86.5 },
      geography:  { gpa: 93.1,  attendance: 100, participation: 82.5, homework: 97.6,  exam: 92.5 },
      psychology: { gpa: 95.6,  attendance: 100, participation: 100,  homework: 90.5,  exam: 95.0 },
      algebra2:   { gpa: 95.7,  attendance: 100, participation: null, homework: null,  exam: null },
      physics:    { gpa: 94.0,  attendance: 100, participation: null, homework: null,  exam: null },
      chemistry:  { gpa: 93.8,  attendance: 100, participation: null, homework: null,  exam: null },
      biology:    { gpa: 91.5,  attendance: 100, participation: null, homework: null,  exam: null },
      art:        { gpa: 90.3,  attendance: 100, participation: null, homework: null,  exam: null },
      pe:         { gpa: 88.0,  attendance: null, participation: null, homework: null,  exam: null }
    }
  },
  {
    id: "sem2_mid",
    label: "下学期期中",
    shortLabel: "期中②",
    term: "mid",
    year: "2024-2025",
    semester: 2,
    overall_gpa: 3.91,
    date: "2025年4月",
    scores: {
      eal:        { gpa: 88.8,  attendance: 100, participation: 99.5, homework: 94.7,  exam: 79.8 },
      social:     { gpa: 91.4,  attendance: 100, participation: 88,   homework: 84.5,  exam: 92.6 },
      geography:  { gpa: 95.5,  attendance: 100, participation: 82.5, homework: 95.6,  exam: 98 },
      psychology: { gpa: 99.0,  attendance: 100,   participation: 94,   homework: 99.3,  exam: 100 },
      algebra2:   { gpa: 92.9,  attendance: 100, participation: 90.5, homework: 96.6,  exam: 90 },
      physics:    { gpa: 93.4,  attendance: 100, participation: 97,   homework: 99.2,  exam: 88 },
      chemistry:  { gpa: 95.8,  attendance: 100, participation: 97.5, homework: 98.6,  exam: 93 },
      biology:    { gpa: 92.5,  attendance: 100, participation: 93,   homework: 98.9,  exam: 87.5 },
      art:        { gpa: 91.2,  attendance: 100, participation: 90,   homework: 89.3,  exam: null },
      pe:         { gpa: 97,   attendance: 100, participation: 95,   homework: null,  exam: null }
    }
  },
  {
    id: "sem2_final",
    label: "下学期期末",
    shortLabel: "期末②",
    term: "final",
    year: "2024-2025",
    semester: 2,
    overall_gpa: 3.91,
    date: "2025年6月",
    scores: {
      eal:        { gpa: 88.1,  attendance: 100, participation: 98,   homework: 93.2,  exam: 79.6 },
      social:     { gpa: 91.3,  attendance: 97.9, participation: 93,   homework: 82.1,  exam: 92.4 },
      geography:  { gpa: 92.3,  attendance: 100, participation: 95,   homework: 100,   exam: 86 },
      psychology: { gpa: 95.6,  attendance: 100, participation: 95,   homework: 91.5,  exam: 96 },
      algebra2:   { gpa: 97.0,  attendance: 100, participation: 94,   homework: 99.3,  exam: 96 },
      physics:    { gpa: 94.9,  attendance: 100, participation: 99,   homework: 100,   exam: 90 },
      chemistry:  { gpa: 91.2,  attendance: 100, participation: 97,   homework: 98,    exam: 84 },
      biology:    { gpa: 93.8,  attendance: 100, participation: 90,   homework: 100,   exam: 90.5 },
      art:        { gpa: 93.6,  attendance: 100, participation: 91,   homework: 93.5,  exam: 98.1 },
      pe:         { gpa: 98.9,  attendance: 100, participation: 100,  homework: null,  exam: null }
    }
  }
];

/* 上学期综合GPA (期中40% + 期末60%) */
const SEMESTER_COMPOSITE = {
  sem1: {
    label: "上学期综合",
    scores: {
      eal:        +(0.4*85.4  + 0.6*90.0).toFixed(1),
      social:     +(0.4*79.3  + 0.6*89.9).toFixed(1),
      geography:  +(0.4*88.6  + 0.6*93.1).toFixed(1),
      psychology: +(0.4*88.5  + 0.6*95.6).toFixed(1),
      algebra2:   +(0.4*89.4  + 0.6*95.7).toFixed(1),
      physics:    +(0.4*98.5  + 0.6*94.0).toFixed(1),
      chemistry:  +(0.4*92.2  + 0.6*93.8).toFixed(1),
      biology:    +(0.4*87.3  + 0.6*91.5).toFixed(1),
      art:        +(0.4*94.3  + 0.6*90.3).toFixed(1),
      pe:         +(0.4*96.1  + 0.6*88.0).toFixed(1)
    },
    overall_gpa: 3.77
  },
  sem2: {
    label: "下学期综合",
    scores: {
      eal:        +(0.4*88.8  + 0.6*88.1).toFixed(1),
      social:     +(0.4*91.4  + 0.6*91.3).toFixed(1),
      geography:  +(0.4*95.5  + 0.6*92.3).toFixed(1),
      psychology: +(0.4*99.0  + 0.6*95.6).toFixed(1),
      algebra2:   +(0.4*92.9  + 0.6*97.0).toFixed(1),
      physics:    +(0.4*93.4  + 0.6*94.9).toFixed(1),
      chemistry:  +(0.4*95.8  + 0.6*91.2).toFixed(1),
      biology:    +(0.4*92.5  + 0.6*93.8).toFixed(1),
      art:        +(0.4*91.2  + 0.6*93.6).toFixed(1),
      pe:         +(0.4*97.0  + 0.6*98.9).toFixed(1)
    },
    overall_gpa: 3.91
  }
};

/* 每学期注意事项与亮点 */
const HIGHLIGHTS = {
  sem1_mid: {
    stars: [
      "🏆 物理成绩突出，98.5分位居各科之首",
      "👏 全科出勤率100%，学习态度端正",
      "🌟 Art表现优异，94.3分展现艺术天赋"
    ],
    warnings: [
      "⚠️ 社科Exam仅67.6分，是全科最低，需加强考试技巧",
      "⚠️ EAL Exam 75.8分偏低，英语考试能力待提升",
      "⚠️ 社科整体79.3分，为各科GPA最低"
    ],
    suggestions: [
      "建议加强社科和EAL的考试复习方法",
      "保持物理和Art的优秀表现",
      "EAL写作和口语表现优秀，但需转化到考试成绩"
    ]
  },
  sem1_final: {
    stars: [
      "🚀 社科飞跃进步！79.3→89.9，提升10.6分",
      "🏆 心理学95.6分跃升全科第一",
      "📈 代数2达到95.7分，理科潜力显现",
      "📊 整体GPA从3.48提升到3.77"
    ],
    warnings: [
      "⚠️ 物理从98.5降至94.0，回落4.5分",
      "⚠️ Art从94.3降至90.3，下降4分",
      "⚠️ PE从96.1暴跌至88.0，降幅8.1分"
    ],
    suggestions: [
      "物理需要找回状态，建议排查是否因课程难度增加",
      "Art和PE属于非核心科目，保持即可",
      "继续保持社科和人文的上升势头"
    ]
  },
  sem2_mid: {
    stars: [
      "🏆🏆 心理学99.0分，接近满分！出勤100+参与94+作业99.3+考试100，全科最均衡",
      "🚀 社科91.4分，vs上学期期末提升1.5分，vs上学期期中累计+12.1分",
      "📈 整体GPA达到3.91，vs上学期期末+0.14，持续上升",
      "🌟 地理95.5分，三阶段稳步攀升",
      "🧪 化学95.8分，持续走高",
      "📚 人文社科全面崛起，成为最大亮点"
    ],
    warnings: [
      "⚠️ 物理持续下滑：98.5→94.0→93.4，累计-5.1分",
      "⚠️ 代数2波动回落：95.7→92.9（-2.8），需稳住",
      "⚠️ EAL Exam仅79.8分，考试依然是短板",
      "⚠️ Art整体下行：94.3→90.3→91.2（-3.1），课堂表现和作业是主要失分项"
    ],
    suggestions: [
      "🔴 紧急：物理需重点关注，建议与老师沟通找原因",
      "🟡 代数2需巩固，避免继续下滑",
      "🟢 心理学保持现有学习方法，社科需提升课堂表现和作业质量",
      "🔵 EAL需重点突破考试技巧，课堂表现已非常优秀"
    ]
  },
  sem2_final: {
    stars: [
      "🚀🚀 代数2强势反弹！92.9→97.0（+4.1），期末考试96分，理科根基稳固",
      "🏆 PE 98.9分创历史新高！出勤100+参与100，完美收官",
      "📈 Art触底反弹：91.2→93.6（+2.4），期末考试98.1分惊艳全场",
      "⚛️ 物理止跌回升：93.4→94.9（+1.5），终于逆转三连跌",
      "🧬 生物稳步上升：92.5→93.8（+1.3），新科目适应良好",
      "📊 整体GPA稳居3.91，整学年保持高水准"
    ],
    warnings: [
      "⚠️ 化学大幅回落：95.8→91.2（-4.6），期末考试84分，下半学期状态明显下滑",
      "⚠️ 地理下滑：95.5→92.3（-3.2），期末考试86分，需关注",
      "⚠️ 心理学回落：99.0→95.6（-3.4），虽仍属高分但降幅不小",
      "⚠️ EAL Exam持续低迷：79.8→79.6，考试能力仍是最大短板"
    ],
    suggestions: [
      "🔴 紧急：化学期末84分值得警惕，暑期需预习或补习",
      "🔴 EAL考试能力依然是全局最大短板，暑期托福集训重点突破",
      "🟡 地理和心理需在暑假调整学习方法",
      "🟢 Algebra 2和物理的反转证明Joe有能力改善弱势科目",
      "🌟 跨入光华美高前的最后一份成绩单，以GPA 3.91完美收官宏文时光"
    ]
  }
};

const COMMENTS = {
  sem1_mid: {
    eal: "You have demonstrated exceptional dedication and talent in your English studies this term. Your writing and speaking skills have stood out, reflecting both your creativity and deep understanding of the language. The results you achieved highlight your strong potential and consistent effort.",
    social: "Joe is a positive optimistic student. He has shown satisfactory achievement in Social Studies 9A. Strengths include Europe & Latin/Mesoamerica Units, CER paragraphs, and 5WH events. Recommendations to improve test study habits."
  },
  sem2_mid: {
    eal: "You have demonstrated exceptional dedication and talent in your English studies. Your writing and speaking skills have stood out, reflecting both your creativity and deep understanding of the language.",
    social: "Continued growth demonstrated across all assessment areas. Strong performance in analytical writing and historical reasoning."
  }
};
