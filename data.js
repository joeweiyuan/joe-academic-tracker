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
  class: "10年级 2班",
  school: "光剑美高（Guanghua Cambridge）",
  grade: "10th Grade",
  target: "University Admission Academic Portfolio",
  lastUpdated: "2026-11-16"
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
  { id: "pe",            name: "PE",                      category: "elective",    icon: "⚽" },
  /* ===== 2026-2027 光剑美高 10 年级 ===== */
  { id: "apcalc",        name: "AP Calculus AB",          category: "science",     icon: "∫" },
  { id: "apmicro",       name: "AP Microeconomics",       category: "humanities",  icon: "💹" },
  { id: "pachem",        name: "Pre-AP Chemistry",        category: "science",     icon: "🧪" },
  { id: "pabio",         name: "Pre-AP Biology",          category: "science",     icon: "🧬" },
  { id: "paenglish",     name: "Pre-AP English 1",        category: "language",    icon: "📖" },
  { id: "worldhistory",  name: "World History",           category: "humanities",  icon: "🏛️" },
  { id: "spanish",       name: "Spanish",                 category: "language",    icon: "🇪🇸" }
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
  },
  /* ===== 光剑美高 10 年级 · 2026-2027 第一学期期中 ===== */
  {
    id: "sem_2026s1_mid",
    label: "十年级上学期期中",
    shortLabel: "十上·期中",
    term: "mid",
    year: "2026-2027",
    semester: 1,
    school: "光剑美高",
    overall_gpa: 3.73,
    overall_pct: 88.19,
    gpa_note: "学校官方「阶段GPA / Periodic GPA」= 3.73（按学分加权：艺术 0.5 学分、体育 0.25 学分，其余 8 门各 1 学分，总 8.75 学分）。百分制 10 科平均 88.19。",
    date: "2026年11月",
    official: true,
    scores: {
      apcalc:       { gpa: 73.1,  gpa4: 3.00, credit: 1,    attendance: 100, participation: 95,   homework: 91.7, exam: 51.0 },
      apmicro:      { gpa: 85.6,  gpa4: 4.25, credit: 1,    attendance: 98,  participation: 90,   homework: 91.8, exam: 78.0 },
      worldhistory: { gpa: 84.2,  gpa4: 3.08, credit: 1,    attendance: 100, participation: 96.5, homework: 91.3, exam: 73.0 },
      paenglish:    { gpa: 88.7,  gpa4: 4.05, credit: 1,    attendance: 100, participation: 90,   homework: 95.9, exam: 82.0 },
      pabio:        { gpa: 89.7,  gpa4: 4.17, credit: 1,    attendance: 100, participation: 92.5, homework: 96.8, exam: 83.0 },
      psychology:   { gpa: 90.5,  gpa4: 3.78, credit: 1,    attendance: 100, participation: 91.5, homework: 96.3, exam: 85.0 },
      spanish:      { gpa: 85.3,  gpa4: 3.16, credit: 1,    attendance: 100, participation: 99.2, homework: 88.8, exam: 75.4 },
      pachem:       { gpa: 89.5,  gpa4: 4.17, credit: 1,    attendance: 100, participation: 98.5, homework: 73.4, exam: 90.0 },
      art:          { gpa: 95.3,  gpa4: 4.00, credit: 0.5,  attendance: 100, participation: 94,   homework: 94.7, exam: null },
      pe:           { gpa: 100.0, gpa4: 4.00, credit: 0.25, attendance: 100, participation: 100,  homework: null, exam: null }
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
      "🌟 跨入光华剑桥前的最后一份成绩单，以GPA 3.91完美收官宏文时光"
    ]
  },
  sem_2026s1_mid: {
    stars: [
      "🎓 转入光剑美高 10 年级后的第一份官方成绩单：阶段 GPA **3.73**（学分加权，8.75 学分）",
      "🏆 体育 4.00（0.25 学分）/ 艺术 4.00（0.5 学分）/ 化学 4.17 / 生物 4.17 —— 四科达 4.0 以上",
      "📈 AP 微观经济 4.25 是全科最高绩点；英语 4.05 稳定达标",
      "💬 老师普遍认可态度与执行力：体育老师称「高度专注力与责任感」，英语老师称「strong understanding」"
    ],
    warnings: [
      "🔴 AP 微积分 AB：73.1 分 / **3.00** 绩点，是全科唯一拖后腿的核心课；考试仅 51 分",
      "⚠️ 心理学 90.5 分只换算 3.78 —— 说明该校换算表并非线性，90 分不等于稳 4.0",
      "⚠️ 世界史 84.2 / 3.08；西班牙语 85.3 / 3.16 —— 两门人文社科是次级风险",
      "⚠️ 多位老师共同指出同一问题：**课堂专注度与主动性不足**（微观经济、生物、心理三位老师都提到）"
    ],
    suggestions: [
      "🔴 最高优先：AP 微积分 AB —— 老师原话「基础公式熟练度不够 + 解题步骤不规范」，与断层诊断卷的方向完全一致",
      "🟡 课堂参与：三位老师独立提到专注度问题，这不是学科问题，是课堂习惯问题",
      "🟢 化学/生物/艺术/体育保持；化学只需补「公式代入与单位换算」的细心度",
      "📌 口径说明：本页 GPA 3.73 为学校官方「阶段GPA」，按学分加权（艺术 0.5、体育 0.25、其余 8 门各 1）"
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
  },

  sem_2026s1_mid: {
    apcalc: "魏源同学，本次考试的结果可能没有达到你的预期，但请千万别灰心，这只是一次阶段性检测，暴露问题恰恰是进步的开始。从卷面来看，你的主要问题集中在两个方面：一是基础公式的熟练度不够，比如在求平均变化率和处理复合函数时，对公式的套用还不准确；二是解题步骤不够规范，比如在证明题和求极值点的时候，思路有些混乱，甚至有些地方自己写了又划掉，说明对概念的理解还不够笃定。建议你接下来先放慢节奏，不要急于做难题，把课本上的例题和课后基础练习彻底吃透，特别是要把求导的四则运算和链式法则练熟。",
    apmicro: "在微观经济的学习上，整体能跟上基本进度，作业也能稳定提交，态度是端正的。目前知识点基本都接触了，但掌握得还不够扎实，尤其是难点知识点，做题的时候容易出错。你上课的时候偏被动，很少主动参与课堂互动，专注力还有待提升。作业质量比较波动。接下来可以试着调整一下学习节奏，每天固定花一点时间复习当天的知识点；上课的时候尽量集中注意力，跟着老师的思路走，有不懂的及时问。",
    worldhistory: "You have achieved a good overall result. Your poster project was excellent, most homework assignments received full credit, and your first quiz result was excellent. However, one homework assignment has no credit recorded, and your midterm result was lower. Be more consistent about completing assignments and reviewing across all topics. In extended writing, use specific historical evidence to support both your reasons and your response to an opposing argument.",
    paenglish: "Hi Joe, Thank you for all your efforts. You have demonstrated a strong understanding of in-class materials. In the future, I would encourage you to challenge yourself to read increasingly complex texts as your proficiency improves. Remember that reading regularly is one of the most effective ways to improve your language proficiency.",
    pabio: "上课的状态还要再专注一些，很多时候本来不应该漏掉知识点的，要放更多精力在学习上，精益求精，继续加油哦！",
    psychology: "你在本阶段展现出扎实的学业基础与良好的学习执行力，作业完成质量不错、完成度稳定。若能在课堂专注力与主动参与度上进一步提升，持续调动内在学习热情，将有助于你更充分地释放认知潜力，迈向更具深度与韧性的学习状态。",
    spanish: "Joe, your consistent dedication and thoughtful engagement have truly set a strong foundation for your academic growth. Your participation reflects curiosity and confidence, and your commitment to completing assignments shows growing responsibility and self-discipline. While your homework scores indicate room to deepen consistency and attention to detail, your outstanding midterm performance highlights your solid understanding and ability to apply knowledge effectively. Keep refining your study habits—especially in organizing and reviewing work before submission.",
    pachem: "本阶段化学学习取得了不错的成果，对原子结构、同位素及物质的定量关系掌握较好，在相关计算中也展现出一定优势。不过，部分题目仍因不够细心而失分。建议平时加强练习，尤其注意公式运用、数据代入和单位换算等细节。",
    art: "课堂整体状态不错，偶尔需要注意纪律。版画作业完成良好，运刀比较熟练、线条连贯，画面组织还可以再推敲，作品会更完整更讲究。",
    pe: "魏源，你在本阶段的学习中展现出高度的专注力与责任感：课堂全程投入，各项练习均能高质量完成；出勤全勤，课堂表现持续稳定且积极；期中评估亦全面体现了你扎实的积累与稳定的发挥。你的体能水平稳步提升，动作规范性也在不断精进。"
  }
};
