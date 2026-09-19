/* lachlanchen.github.io — language switch (EN / 中文), theme toggle, GitHub stars. No dependencies. */
(function () {
  'use strict';

  // ---------------------------------------------------------------- i18n
  const I18N = {
    en: {
      'nav.about': 'About', 'nav.publications': 'Publications', 'nav.projects': 'Projects', 'nav.cv': 'CV',
      'foot.copy': '© 2026 Lachlan Chen. Hosted on GitHub Pages.',
      'foot.source': 'Source', 'foot.cv': 'CV (PDF)',

      // ---- about
      'about.title_html': 'Lachlan <b>Chen</b> <span class="muted" style="font-size:.55em;font-weight:400">陈荣周（苗） · Rongzhou Chen</span>',
      'about.desc': 'PhD candidate in neuromorphic imaging at HKU · Founder & CEO, LazyingArt LLC · Co-founder & COO, LightMind Tech Ltd',
      'about.motto': 'Quad tango muto.',
      'about.p1': 'I build local-first tools that turn difficult books, research and media into things people can inspect, learn from and reuse. On the research side I work on neuromorphic (event-camera) and hyperspectral imaging at the Imaging Systems Lab of the University of Hong Kong, with papers in Optica and Nature Communications (accepted) and a US patent application on event-camera broadcasting.',
      'about.p2': 'I like owning a problem end to end: choosing the sensors and optics, wiring synchronized capture and motion control, and writing the algorithms that turn events and pixels into decisions. Before the PhD I headed the algorithm department of a medical-imaging startup, and before that I studied precision medicine at Tsinghua and applied chemistry at Sichuan University.',
      'about.p3': 'Through LazyingArt I ship open-source software, multilingual learning tools and fixed-scope engineering sprints; through LightMind Tech we build AI wearables and machine-vision systems for robotics and medical devices.',
      'about.focus': 'Focus',
      'about.focus1_b': 'The Art of Lazying', 'about.focus1': 'build less, unlock more life',
      'about.focus2_b': 'Automation systems', 'about.focus2': 'for creator and research workflows',
      'about.focus3_b': 'Multilingual speech & learning tools', 'about.focus3': 'pronunciation, pocket books, knowledge cards',
      'about.focus4_b': 'Imaging, optics & embodied AI', 'about.focus4': 'event cameras, hyperspectral, wearables, robots',
      'about.news': 'Highlights',
      'about.n1': 'Neuromorphic high-throughput imaging via transport-induced differential sensing accepted at Nature Communications (C. Wang et al.).',
      'about.n2': 'Self-calibrated neuromorphic hyperspectral derivative imaging published in Optica 13(4); pipeline released as OpenHI.',
      'about.n3': 'US patent application US 2026/0052281 A1 (event-camera broadcasting system) published.',
      'about.n4': 'Co-founded LightMind Tech Ltd in Hong Kong: AI wearables and machine vision.',
      'about.n5': 'Eigen-component analysis, a quantum-theory-inspired linear model, presented at IEEE ISCAS 2025.',
      'about.companies': 'Companies',
      'about.c1_meta': 'USA · Founder & CEO',
      'about.c1': 'The Art of Lazying: build less, unlock more life. Local-first AI tools for creators and researchers: EchoMind, LazyEdit, Local Knowledge Terminal, PaperAgent, LazyRemote, and fixed-scope engineering sprints.',
      'about.c2_meta': 'Hong Kong · est. Sep 2025 · Co-founder & COO',
      'about.c2': 'AI wearables, automation hardware and software, machine vision and laboratory automation. Companion software for AI glasses is in test; machine-vision modules are built for robotics and medical devices.',
      'about.support': 'Support',
      'about.support_p': 'If the open-source tools or lecture archives have helped you, a coffee keeps the servers and the e-ink cards running. Thank you. Build less. Live more.',
      'about.wechat': 'WeChat Pay', 'about.alipay': 'Alipay',

      // ---- publications
      'pub.title_html': '<b>Publications</b>',
      'pub.desc': 'Journal and conference papers, preprints, and patents. Full list on Google Scholar.',
      'pub.patents': 'Patents & invention disclosures',
      'pub.note': 'Publications and patents are listed in English in both language versions.',

      // ---- projects
      'proj.title_html': '<b>Projects</b>',
      'proj.desc': 'Open-source tools and hardware I build and maintain. Most are local-first: they run on your own machine, keep your data private and cite their sources.',
      'proj.all': 'All', 'proj.imaging': 'Imaging & optics', 'proj.ai': 'AI tools', 'proj.learning': 'Learning & language', 'proj.hardware': 'Hardware & wearables', 'proj.media': 'Media & publishing', 'proj.infra': 'Infrastructure',
      'proj.repo': 'Repository', 'proj.live': 'Live', 'proj.paper': 'Paper',
      'p.openhi': 'Self-calibrated neuromorphic hyperspectral imaging: an event camera plus diffractive, wavelength-swept illumination gives a spectral derivative without a spectrometer. Optica 2026; end-to-end pipeline with hardware control.',
      'p.lkt': 'Private, book-grounded intelligence on your own hardware. Turns a personal book collection into cited multilingual knowledge cards; runs Qwen3-4B on a Raspberry Pi 5.',
      'p.wordscard': 'Raspberry Pi + e-ink vocabulary cards with IPA, furigana, pinyin and Arabic hints; CSV workflow, AI enrichment and HTTP control.',
      'p.lazyedit': 'Local-first AI video workflow: transcribe, translate, burn subtitles, caption keyframes, generate metadata and publish.',
      'p.landn': 'Evidence-aware pronunciation coach for L vs N in English, Mandarin and Cantonese. Same curriculum as PWA, iOS, Android and watchOS.',
      'p.lexicon': 'A 3D browser for a real lexical knowledge graph: roots, forms, meanings and translations produced by Local Knowledge Terminal.',
      'p.musia': 'AI song localization: stem separation, lyric transcription, beat and chord estimation toward singable multilingual re-singing.',
      'p.susskind': 'Community-maintained transcripts, notes, TeX sources and PDFs for Leonard Susskind\'s Theoretical Minimum lectures, built with Video2Book.',
      'p.polyglot': 'Pocket-size interlinear books for language learning: ruby, pinyin and grammar colouring, with a public shelf of Chinese classics (LinguaLeaf).',
      'p.lazyremote': 'Self-hosted SSH and noVNC access to your own computers through an open-source relay core, with a UU-Remote-on-Ubuntu bridge.',
      'p.paperagent': 'Local-first web workspace for academic writing: edit LaTeX and code in the browser, run Python/R, compile and preview with logs.',
      'p.ideasglass': 'Open AI glasses: ESP32 capture, FastAPI backend and a live PWA dashboard for transcription and photos.',
      'p.lightmind': 'AI-powered memory-enhancement wearable combining low-cost hardware, neuromorphic optical encryption and multimodal AI.',
      'p.localvideogen': 'Local video-generation operating layer for a dual-RTX-4090 workstation: loopback-only studio web app, checksum-gated models, T2V/I2V presets.',
      'p.aginti': 'Agentic AI exploration: AutoAppDev, AutoNovelWriter, LazyingArtBot, OrganoidAgent and LabCanvas under one umbrella.',
      'p.autopublish': 'Script-first browser automation that distributes short video to Chinese and international platforms from a local watcher or queue.',
      'p.microquant': 'MetaTrader 5 research dashboard: OHLC ingestion, PostgreSQL history, STL analysis and review-first signals.',
      'p.lazytravel': 'Trilingual (ZH/JA/EN) pocket travel books and website rendered from one aligned editorial JSON source.',
      'p.sync': 'Synchronized frame-camera and event-camera capture (Hikrobot + EVK/DAVIS) with a unified GUI, plus CNC motion and lighting orchestration.',

      // ---- cv
      'cv.title_html': '<b>Curriculum vitae</b>',
      'cv.desc': 'One page, English or Chinese. The web version below mirrors the PDF.',
      'cv.dl_en': 'Download CV (English PDF)', 'cv.dl_zh': 'Download CV (中文 PDF)',
      'cv.general': 'General information',
      'cv.name': 'Full name', 'cv.name_v': 'Lachlan Chen (陈荣周（苗）, Rongzhou Chen)',
      'cv.location': 'Location', 'cv.location_v': 'Hong Kong SAR',
      'cv.email': 'Email', 'cv.phone': 'Phone', 'cv.web': 'Web',
      'cv.languages': 'Languages',
      'cv.l_zh': 'Chinese', 'cv.l_en': 'English', 'cv.l_yue': 'Cantonese', 'cv.l_ja': 'Japanese', 'cv.l_vi': 'Vietnamese',
      'cv.experience': 'Experience',
      'cv.e1_when': '2025 – present', 'cv.e1_b': 'Founder & CEO, LazyingArt LLC · Co-founder & COO, LightMind Tech Ltd', 'cv.e1_where': 'USA / Hong Kong', 'cv.e1_p': 'AI wearables, automation hardware & software, machine vision, laboratory automation.',
      'cv.e2_when': '2021 – 2023', 'cv.e2_b': 'Algorithm Engineer / Head of Algorithm Department', 'cv.e2_where': 'JifuTek, Hangzhou', 'cv.e2_p': '2D/3D cell and organoid segmentation and drug-efficacy analysis; 4 patents filed.',
      'cv.e3_when': 'Aug – Dec 2019', 'cv.e3_b': 'STEM Tour & STEAM Design', 'cv.e3_where': 'Tsinghua University & UNICEF, Yunnan', 'cv.e3_p': 'Led hands-on chemistry, physics, biology, robotics and drone experiments.',
      'cv.e4_when': '2014 – 2018', 'cv.e4_b': 'Financial Planner', 'cv.e4_where': 'China Securities, Luzhou', 'cv.e4_p': 'Investment advisory analytics and client data analysis.',
      'cv.education': 'Education',
      'cv.d1_when': '2023 – present', 'cv.d1_b': 'PhD, Electrical & Electronic Engineering', 'cv.d1_where': 'The University of Hong Kong', 'cv.d1_p': 'Imaging Systems Lab: neuromorphic, hyperspectral and lensless imaging.',
      'cv.d2_when': '2018 – 2021', 'cv.d2_b': 'Master, Precision Medicine & Public Health', 'cv.d2_where': 'Tsinghua University', 'cv.d2_p': 'Organ-on-a-chip design, biomedical image analysis, Bayesian inference.',
      'cv.d3_when': '2009 – 2014', 'cv.d3_b': 'Bachelor, Applied Chemistry', 'cv.d3_where': 'Sichuan University', 'cv.d3_p': 'Cyclo[6]aramide macrocycle synthesis in Prof. Lihua Yuan\'s group.',
      'cv.strengths': 'Strengths',
      'cv.hw': 'Hardware',
      'cv.hw1': 'Neuromorphic & industrial imaging: event cameras (EVK, DAVIS), machine-vision cameras, multi-sensor sync',
      'cv.hw2': 'Optical & spectral system design: hyperspectral, lensless, diffractive',
      'cv.hw3': 'Edge-device development, PCB design, 3D modelling, CNC motion control',
      'cv.sw': 'Software',
      'cv.sw1': 'Python, PyTorch, C/C++, R, Stan', 'cv.sw2': 'Real-time capture, streaming & inference pipelines', 'cv.sw3': 'Full-stack web & mobile apps; Linux, embedded', 'cv.sw4': 'Reproducible open-source builds',
      'cv.algo': 'Algorithms',
      'cv.al1': 'Physics-informed deep learning', 'cv.al2': 'Computational imaging & inverse problems', 'cv.al3': '2D/3D detection, segmentation & tracking', 'cv.al4': 'Bayesian & quantum-inspired machine learning',
      'cv.oss': 'Open source',
      'cv.pubs': 'Publications & patents',
      'cv.pubs_p': '11 papers and preprints, 8 patents and invention disclosures. See the',
      'cv.pubs_link': 'publications page',
      'cv.preview': 'PDF preview',
      'cv.interests': 'Interests', 'cv.interests_v': 'Meditation · Running · Guitar · Reading · Calligraphy',
    },
    zh: {
      'nav.about': '关于', 'nav.publications': '论文', 'nav.projects': '项目', 'nav.cv': '简历',
      'foot.copy': '© 2026 陈荣周 Lachlan Chen · 托管于 GitHub Pages',
      'foot.source': '源码', 'foot.cv': '简历 (PDF)',

      'about.title_html': '陈荣周（苗） <b>Lachlan Chen</b> <span class="muted" style="font-size:.55em;font-weight:400">Rongzhou Chen</span>',
      'about.desc': '香港大学神经形态成像方向博士研究生 · LazyingArt LLC 创始人 & CEO · LightMind Tech Ltd 联合创始人 & COO',
      'about.motto': 'Quad tango muto.',
      'about.p1': '我做本地优先（local-first）的工具，把难读的书、研究和媒体变成可以检视、学习和复用的东西。研究方面，我在香港大学影像系统实验室从事神经形态（事件相机）与高光谱成像，论文发表于 Optica 与 Nature Communications（已接收），并有一项事件相机直播系统的美国专利申请。',
      'about.p2': '我喜欢把一个问题从头到尾做完：选传感器与光学元件，搭同步采集与运动控制，再写把事件和像素变成决策的算法。博士之前，我在一家医学影像初创公司负责算法部门；更早在清华大学读精准医学，在四川大学读应用化学。',
      'about.p3': '通过 LazyingArt，我发布开源软件、多语言学习工具和固定范围的工程冲刺；通过 LightMind Tech，我们为机器人和医疗设备打造 AI 智能穿戴与机器视觉系统。',
      'about.focus': '关注方向',
      'about.focus1_b': '懒人艺术 The Art of Lazying', 'about.focus1': '少造一点，多活一点',
      'about.focus2_b': '自动化系统', 'about.focus2': '面向创作者与研究工作流',
      'about.focus3_b': '多语言语音与学习工具', 'about.focus3': '发音、口袋书、知识卡片',
      'about.focus4_b': '成像、光学与具身智能', 'about.focus4': '事件相机、高光谱、可穿戴、机器人',
      'about.news': '近况',
      'about.n1': '《Neuromorphic high-throughput imaging via transport-induced differential sensing》被 Nature Communications 接收（王楚天等）。',
      'about.n2': '《Self-calibrated neuromorphic hyperspectral derivative imaging》发表于 Optica 13(4)；流水线开源为 OpenHI。',
      'about.n3': '美国专利申请 US 2026/0052281 A1（事件相机直播系统）公开。',
      'about.n4': '在香港联合创立 LightMind Tech Ltd：AI 智能穿戴与机器视觉。',
      'about.n5': '量子理论启发的线性模型 Eigen-component analysis 在 IEEE ISCAS 2025 发表。',
      'about.companies': '公司',
      'about.c1_meta': '美国 · 创始人 & CEO',
      'about.c1': '懒人艺术：少造一点，多活一点。面向创作者与研究者的本地优先 AI 工具：EchoMind、LazyEdit、Local Knowledge Terminal、PaperAgent、LazyRemote，以及固定范围的工程冲刺服务。',
      'about.c2_meta': '香港 · 2025 年 9 月成立 · 联合创始人 & COO',
      'about.c2': 'AI 智能穿戴、自动化软硬件、机器视觉与自动化实验室。AI 眼镜配套软件正在测试；机器视觉模块面向机器人与医疗设备。',
      'about.support': '支持',
      'about.support_p': '如果这些开源工具或讲座档案对你有帮助，一杯咖啡就能让服务器和墨水屏单词卡继续运转。谢谢。Build less. Live more.',
      'about.wechat': '微信支付', 'about.alipay': '支付宝',

      'pub.title_html': '<b>论文发表</b>',
      'pub.desc': '期刊与会议论文、预印本与专利。完整列表见 Google Scholar。',
      'pub.patents': '专利与发明披露',
      'pub.note': '论文与专利在两种语言版本中均以英文显示。',

      'proj.title_html': '<b>项目</b>',
      'proj.desc': '我构建并维护的开源工具与硬件。大多是本地优先：在你自己的机器上运行、保护数据隐私、并给出引用来源。',
      'proj.all': '全部', 'proj.imaging': '成像与光学', 'proj.ai': 'AI 工具', 'proj.learning': '学习与语言', 'proj.hardware': '硬件与可穿戴', 'proj.media': '媒体与出版', 'proj.infra': '基础设施',
      'proj.repo': '仓库', 'proj.live': '在线', 'proj.paper': '论文',
      'p.openhi': '自校准神经形态高光谱成像：事件相机加上衍射式波长扫描照明，无需光谱仪即可得到光谱导数。Optica 2026；含硬件控制的端到端流水线。',
      'p.lkt': '在自己的硬件上运行的、以书为依据的私有知识引擎。把个人藏书变成带引用的多语言知识卡片；在树莓派 5 上运行 Qwen3-4B。',
      'p.wordscard': '树莓派 + 墨水屏单词卡：国际音标、假名、拼音与阿拉伯语提示；CSV 工作流、AI 补充与 HTTP 控制。',
      'p.lazyedit': '本地优先的 AI 视频工作流：转录、翻译、压制字幕、关键帧描述、生成元数据并发布。',
      'p.landn': '英语、普通话与粤语中 L/N 发音的循证式教练。同一套课程覆盖 PWA、iOS、Android 与 watchOS。',
      'p.lexicon': '真实词汇知识图谱的 3D 浏览器：词根、词形、释义与翻译，由 Local Knowledge Terminal 生成。',
      'p.musia': 'AI 歌曲本地化：分轨、歌词转录、节拍与和弦估计，迈向可唱的多语言翻唱。',
      'p.susskind': 'Leonard Susskind《理论最小值》系列讲座的社区维护转录、笔记、TeX 源码与 PDF，由 Video2Book 生成。',
      'p.polyglot': '语言学习用口袋对照读本：注音、拼音与语法着色，并有一个公开的中国经典书架（LinguaLeaf）。',
      'p.lazyremote': '通过开源中继核心自托管地 SSH / noVNC 访问自己的电脑，附带 UU 远程 Ubuntu 桥接。',
      'p.paperagent': '本地优先的学术写作工作台：在浏览器中编辑 LaTeX 与代码，运行 Python/R，编译并带日志预览。',
      'p.ideasglass': '开放式 AI 眼镜：ESP32 采集、FastAPI 后端与实时 PWA 面板，用于转录和拍照。',
      'p.lightmind': 'AI 记忆增强可穿戴设备：低成本硬件、神经形态光学加密与多模态 AI。',
      'p.localvideogen': '面向双 RTX 4090 工作站的本地视频生成操作层：仅回环访问的工作室网页、校验和门控模型、T2V/I2V 预设。',
      'p.aginti': '智能体探索：AutoAppDev、AutoNovelWriter、LazyingArtBot、OrganoidAgent 与 LabCanvas 的集合。',
      'p.autopublish': '脚本优先的浏览器自动化，从本地监听器或队列把短视频分发到国内外平台。',
      'p.microquant': 'MetaTrader 5 研究看板：OHLC 采集、PostgreSQL 历史、STL 分析与以复核为先的信号。',
      'p.lazytravel': '中日英三语口袋旅行书与网站，从同一份对齐的编辑 JSON 源渲染。',
      'p.sync': '帧相机与事件相机同步采集（Hikrobot + EVK/DAVIS）及统一 GUI，配合 CNC 运动与照明编排。',

      'cv.title_html': '<b>个人简历</b>',
      'cv.desc': '一页，英文或中文。下方网页版与 PDF 内容一致。',
      'cv.dl_en': '下载简历（英文 PDF）', 'cv.dl_zh': '下载简历（中文 PDF）',
      'cv.general': '基本信息',
      'cv.name': '姓名', 'cv.name_v': '陈荣周（苗） Lachlan Chen (Rongzhou Chen)',
      'cv.location': '所在地', 'cv.location_v': '中国香港',
      'cv.email': '邮箱', 'cv.phone': '电话', 'cv.web': '网站',
      'cv.languages': '语言',
      'cv.l_zh': '中文', 'cv.l_en': '英语', 'cv.l_yue': '粤语', 'cv.l_ja': '日语', 'cv.l_vi': '越南语',
      'cv.experience': '工作经历',
      'cv.e1_when': '2025 – 至今', 'cv.e1_b': 'LazyingArt LLC 创始人 & CEO · LightMind Tech Ltd 联合创始人 & COO', 'cv.e1_where': '美国 / 香港', 'cv.e1_p': 'AI 智能穿戴、自动化软硬件、机器视觉、自动化实验室。',
      'cv.e2_when': '2021 – 2023', 'cv.e2_b': '算法工程师 / 算法部门主管', 'cv.e2_where': '济扶科技（JifuTek），杭州', 'cv.e2_p': '细胞 / 类器官影像的 2D/3D 分割与药效分析；申请专利 4 项。',
      'cv.e3_when': '2019 年 8–12 月', 'cv.e3_b': 'STEM Tour & STEAM Design', 'cv.e3_where': '清华大学 & 联合国儿童基金会，云南', 'cv.e3_p': '带领学生开展化学、物理、生物、机器人与无人机实践实验。',
      'cv.e4_when': '2014 – 2018', 'cv.e4_b': '理财规划师', 'cv.e4_where': '中信建投证券，泸州', 'cv.e4_p': '投资顾问分析与客户数据分析。',
      'cv.education': '教育经历',
      'cv.d1_when': '2023 – 至今', 'cv.d1_b': '电机电子工程 博士', 'cv.d1_where': '香港大学', 'cv.d1_p': '影像系统实验室：神经形态、高光谱与无透镜成像。',
      'cv.d2_when': '2018 – 2021', 'cv.d2_b': '精准医学与公共健康 硕士', 'cv.d2_where': '清华大学', 'cv.d2_p': '器官芯片设计、生物医学图像分析、贝叶斯推理。',
      'cv.d3_when': '2009 – 2014', 'cv.d3_b': '应用化学 学士', 'cv.d3_where': '四川大学', 'cv.d3_p': '超分子化学：环[6]芳酰胺大环的合成（袁立华教授课题组）。',
      'cv.strengths': '核心能力',
      'cv.hw': '硬件',
      'cv.hw1': '神经形态与工业成像：事件相机 (EVK, DAVIS)、机器视觉相机、多传感器同步',
      'cv.hw2': '光学与光谱系统设计：高光谱、无透镜、衍射成像',
      'cv.hw3': '边缘设备开发、PCB 设计、3D 建模、CNC 运动控制',
      'cv.sw': '软件',
      'cv.sw1': 'Python, PyTorch, C/C++, R, Stan', 'cv.sw2': '实时采集、流式传输与推理流水线', 'cv.sw3': '全栈 Web 与移动端应用；Linux、嵌入式', 'cv.sw4': '可复现的开源工程实践',
      'cv.algo': '算法',
      'cv.al1': '物理驱动深度学习', 'cv.al2': '计算成像与逆问题', 'cv.al3': '2D/3D 检测、分割与跟踪', 'cv.al4': '贝叶斯推断与量子启发机器学习',
      'cv.oss': '开源项目',
      'cv.pubs': '论文与专利',
      'cv.pubs_p': '11 篇论文与预印本，8 项专利与发明披露。详见',
      'cv.pubs_link': '论文页面',
      'cv.preview': 'PDF 预览',
      'cv.interests': '兴趣爱好', 'cv.interests_v': '冥想 · 跑步 · 吉他 · 阅读 · 书法',
    },
  };

  const LANGS = ['en', 'zh'];
  function detectLang() {
    const q = new URLSearchParams(location.search).get('lang');
    if (q && LANGS.includes(q)) return q;
    try { const s = localStorage.getItem('lang'); if (s && LANGS.includes(s)) return s; } catch (e) {}
    return (navigator.language || 'en').toLowerCase().startsWith('zh') ? 'zh' : 'en';
  }
  function applyLang(lang) {
    const dict = I18N[lang] || I18N.en;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = dict[key] !== undefined ? dict[key] : I18N.en[key];
      if (val === undefined) return;
      if (key.endsWith('_html')) el.innerHTML = val; else el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      // data-i18n-attr="title:cv.dl_en" etc.
      el.getAttribute('data-i18n-attr').split(';').forEach(pair => {
        const [attr, key] = pair.split(':');
        const val = dict[key] || I18N.en[key];
        if (val) el.setAttribute(attr, val);
      });
    });
    document.querySelectorAll('.lang-select').forEach(s => { s.value = lang; });
    // swap the embedded CV preview to the matching PDF
    document.querySelectorAll('[data-pdf-en]').forEach(f => {
      const src = f.getAttribute(lang === 'zh' ? 'data-pdf-zh' : 'data-pdf-en');
      if (src && f.getAttribute('src') !== src) f.setAttribute('src', src);
    });
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  // ---------------------------------------------------------------- theme
  function applyTheme(t) {
    if (t) document.documentElement.setAttribute('data-theme', t); else document.documentElement.removeAttribute('data-theme');
    document.querySelectorAll('.theme-btn').forEach(b => { b.textContent = (t || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')) === 'dark' ? '☀' : '☾'; });
    try { if (t) localStorage.setItem('theme', t); else localStorage.removeItem('theme'); } catch (e) {}
  }

  // ---------------------------------------------------------------- GitHub stars
  function loadStars() {
    const els = document.querySelectorAll('[data-repo]');
    if (!els.length) return;
    let cache = {};
    try { cache = JSON.parse(localStorage.getItem('gh-stars') || '{}'); } catch (e) {}
    const fresh = Date.now() - (cache._t || 0) < 6 * 3600 * 1000;
    els.forEach(el => {
      const repo = el.getAttribute('data-repo');
      const show = n => { if (typeof n === 'number') el.textContent = n > 0 ? '★ ' + n : ''; };
      if (fresh && cache[repo] !== undefined) { show(cache[repo]); return; }
      fetch('https://api.github.com/repos/' + repo).then(r => r.ok ? r.json() : null).then(j => {
        if (!j) return;
        cache[repo] = j.stargazers_count; cache._t = Date.now();
        try { localStorage.setItem('gh-stars', JSON.stringify(cache)); } catch (e) {}
        show(j.stargazers_count);
      }).catch(() => {});
    });
  }

  // ---------------------------------------------------------------- project filters
  function initFilters() {
    const bar = document.querySelector('.filters');
    if (!bar) return;
    bar.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      bar.querySelectorAll('button').forEach(x => x.classList.toggle('active', x === b));
      const f = b.getAttribute('data-filter');
      document.querySelectorAll('.grid .card').forEach(c => {
        const cats = (c.getAttribute('data-cat') || '').split(' ');
        c.classList.toggle('hidden', !(f === 'all' || cats.includes(f)));
      });
    });
  }

  // ---------------------------------------------------------------- boot
  document.addEventListener('DOMContentLoaded', () => {
    applyLang(detectLang());
    let theme = null; try { theme = localStorage.getItem('theme'); } catch (e) {}
    applyTheme(theme);
    document.querySelectorAll('.lang-select').forEach(s => s.addEventListener('change', () => applyLang(s.value)));
    document.querySelectorAll('.theme-btn').forEach(b => b.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      applyTheme(cur === 'dark' ? 'light' : 'dark');
    }));
    const tog = document.querySelector('.nav-toggle');
    if (tog) tog.addEventListener('click', () => document.querySelector('.nav-links').classList.toggle('open'));
    // active nav link
    const here = location.pathname.replace(/\/index\.html$/, '/').replace(/\.html$/, '');
    document.querySelectorAll('.nav-links a').forEach(a => {
      const href = a.getAttribute('href').replace(/\.html$/, '').replace(/^\.\//, '/');
      const norm = here.endsWith('/') ? here + 'index' : here;
      if ((href === '/' || href === '/index') && (here === '/' || here.endsWith('/index'))) a.classList.add('active');
      else if (href !== '/' && norm.endsWith(href.replace(/^\//, ''))) a.classList.add('active');
    });
    initFilters();
    loadStars();
  });
})();
