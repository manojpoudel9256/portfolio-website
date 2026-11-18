(function () {
    const I18N = {
        en: {
            ueKicker: "Real-time 3D", ueTitle: "Built in Unreal Engine",
            ueSub: "From playable moments to industrial workflows — a closer look at my real-time 3D projects.",
            ueHover: "Hover to preview · Click to explore", ueTap: "Tap play to explore", ueDuration: "16 sec preview",
            ueDartsType: "01 / Interactive gameplay", ueWarehouseType: "02 / Industrial simulation",
            ueDartsName: "Darts Game", ueWarehouseName: "Warehouse Simulation",
            ueDartsDesc: "A third-person darts game: aim, throw, and follow the score across five rounds.",
            ueWarehouseDesc: "An automated warehouse with storage racks, conveyors, and robots, from carton infeed to storage.",
            ueDartsAlt: "Darts game cover: a metallic character facing a dartboard in warm cinematic light",
            ueWarehouseAlt: "Warehouse simulation cover: an architectural cutaway with carton racks, conveyors and robotic equipment",
            ueFull: "Full video on LinkedIn", ueError: "Preview unavailable.", ueOpen: "Open video directly",
            navHome: "Home", navWork: "Work", navAbout: "About", navContact: "Contact",
            navCertifications: "Certifications", navGoals: "Goals", navUnreal: "Unreal", navBlender: "Blender", menuBlender: "Blender Work",
            navMenu: "Menu", skipLink: "Skip to content",
            menuOpen: "Open menu", menuClose: "Close menu", menuRole: "Software Engineer",
            menuExplore: "Explore the portfolio", menuWork: "Selected work", menuUnreal: "Unreal Engine",
            menuLanguage: "Language", menuLocation: "Tokyo, Japan",
            heroViewProjects: "View projects", heroContactMe: "Contact me", heroEyebrow: "Manoj Poudel · Tokyo", heroFocus: "Focus",
            heroIntro: "I build real-time 3D, simulation and web tools for <strong>mobility and robotics</strong>, from Unreal Engine scenes to the tools my team uses every day.",
            heroExp1: "Unreal Engine", heroExp2: "Blender", heroExp3: "3D Simulation", heroExp4: "Web Development",
            workSubtitle: "A curated selection of products and digital experiences designed to solve real problems with clarity and elegance.",
            filterAll: "All",
            workKicker: "Portfolio", workTitle2: "Selected Work", workViewAll: "View all projects",
            workViewProject: "View project",
            filterWebShort: "Web", filterApps: "Apps", filterUiux: "UI/UX",
            pjEverestName: "Everest Travel Experience",
            pjEverestShort: "A premium travel website for curated Himalayan adventures and expeditions.",
            pjBudgetName: "Budget Tracker / 家計簿",
            pjBudgetShort: "A calm, bilingual budget book for life in Japan, with receipt scanning and an on-device money assistant.",
            pjSalaryName: "Salary Tracker App",
            pjSalaryShort: "A bilingual salary & remittance tracker with payslip scanning and an AI money assistant.",
            pjAnalyzerName: "GLB Insight",
            pjAnalyzerShort: "An internal tool I built at work to inspect any .glb 3D model — polygon counts, texture sizes and an exportable PDF report.",
            pjForgeName: "GLB Forge",
            pjForgeShort: "An internal tool I built to shrink heavy 3D models — cutting polygon counts and texture sizes so they import into Unreal Engine without crashing.",
            fgKicker: "Future Goals", fgTitle: "What I’m Building Toward",
            fgIntro: "Web development and 3D simulation sparked my curiosity about how software understands and interacts with the world. Next, I want to build toward robotics, digital twins, and AI-powered applications.",
            fgArtAlt: "Animated line diagram: a robot arm and its digital twin moving in sync, both reporting to a dashboard that also draws on ROS 2 and a RAG knowledge search.",
            fgArtCaption: "System sketch · How the four goals connect",
            fg1Title: "Build a Foundation in Robotics",
            fg1Topics: "ROS 2 · Sensors · Robot Communication",
            fg1Desc: "Learning how robots share data, read sensors, and coordinate actions through small, practical ROS 2 experiments.",
            fg2Title: "Explore Simulation & Digital Twins",
            fg2Topics: "NVIDIA Isaac Sim · Digital Twins · Physical AI",
            fg2Desc: "Testing robot behaviour in NVIDIA Isaac Sim and learning how digital twins stay in sync with real systems.",
            fg3Title: "Build Useful AI-Powered Web Experiences",
            fg3Topics: "RAG · Knowledge Search · Evaluation",
            fg3Desc: "Web apps that ground AI answers in the right documents, and checking that those answers are accurate and well supported.",
            fg4Title: "Connect Web, AI & Robotics",
            fg4Topics: "Interactive Dashboards · Simulation Data · Connected Systems",
            fg4Desc: "Clear dashboards that make robotics and simulation data easy to understand, from monitoring a workspace to comparing experiments.",
            aboutTitle: "About Me",
            expKicker: "Career", expTitle: "Experience",
            xpOrg: "Industrial Software & DX Company · Tokyo",
            xpRole: "Software Developer — Mobility, Robotics & 3D Simulation",
            xpYears: "Apr 2026 — Present",
            xp1When: "Apr–Jun 2026", xp1Title: "Unreal Engine & Blender Foundations",
            xp1Desc: "Built foundational skills in Unreal Engine and Blender, learning low-poly 3D modeling and the Blender-to-Unreal workflow for real-time simulation.",
            xp2When: "Jul–Sep 2026", xp2Title: "Project Contributions & Internal Tools",
            xp2Desc: "Contributed to a real company project by creating 3D models in Blender. Developed local GLB inspection and optimization tools using JavaScript, Three.js, and Node.js, and continue refining automation and simulation workflows with Python, C++, Blueprint, and AI-assisted development.",
            xp3When: "Sep 30, 2026", xp3Title: "Industrial DX Expo 2026",
            xp3Desc: "Represented the company at Tokyo Big Sight, demonstrating software and digital transformation solutions. Answered visitor questions and strengthened Japanese business communication and presentation skills.",
            xp4When: "Oct 2026", xp4Title: "Integration Testing & Quality Assurance", xp5When: "Oct 28, 2026", xp5Title: "Built the Team’s AI Integration-Test Skill", xp5Desc: "My team leader asked me to turn that workflow into a reusable Claude skill, so anyone — including new team members — can produce the same quality of report for version 3 and other software. From my full test conversation and several rounds of testing and fixes, I built <strong>ai-integration-test</strong>: it prepares the test files and workbook, explains each test ID step by step, checks screenshot, video and log evidence, fills in the record sheet, runs a quality check, and drafts short updates for Teams and Jira. I validated it in a fresh session on sample software, and my leader was impressed with the result.", xpMilestone: "Milestone",
            xp4Desc: "Ran integration tests on version 2 of our internal enterprise software and documented every case in Excel, with screenshot evidence and clear, plain-language steps. My team leader chose my report as the best of the four testers’, including one from a colleague with 15+ years of experience. I worked with AI as a partner: I operated the software and captured every screenshot myself, and the AI held the test context and helped me write each result clearly, one test at a time.",
            xpTech: "Blueprint · C++ · Python · Blender · Three.js · AI Workflows · Claude Skills",
            certTitle: "Licenses & Certifications",
            cert4Mon: "Aug", cert4Year: "2026", cert4Title: "Networking Basics",
            cert4Issuer: "Cisco · Networking Academy",
            cert4Desc: "Successfully completed the Networking Basics course from Cisco Networking Academy, covering network communication, IPv4/IPv6 addressing, network media, and application layer services.",
            cert4Skills: "Application Layer Services · IPv4 Addresses · Network Media · Network Types",
            lcKicker: "Japanese · English", lcTitle: "Language Credentials",
            lcSub: "Professional language qualifications that strengthen my ability to work, collaborate, and communicate in Japan and global environments.",
            lcNote: "A strong complement to my technical expertise",
            lcJpCat: "Japanese Proficiency",
            lcJpDesc: "Highest level of the Japanese-Language Proficiency Test. Demonstrates advanced Japanese comprehension for professional, technical, and workplace communication in Japan.",
            lcLblLevel: "Level", lcLblCert: "Certification", lcLblTestDate: "Test Date", lcLblCefr: "CEFR",
            lcLblTotal: "Total Score", lcLblListen: "Listening", lcLblRead: "Reading",
            lcJpLevelSub: "(Highest Level)", lcJpScoreSub: "(Passed)", lcJpCefrSub: "(JLPT official guide)", lcJpCertV: "Japanese-Language Proficiency Test", lcJpTestV: "July 05, 2026",
            lcEnCat: "English Communication",
            lcEnDesc: "Recognized English communication benchmark for reading and listening skills in professional and global settings.",
            lcEnTestV: "May 18, 2025",
            lcLblIssued: "Issued", lcEnIssuedV: "Jun 03, 2025", lcLblOverall: "Overall",
            lcEnPerfTitle: "Section Performance",
            lcEnLisSub: "465 / 495 · 89th percentile · above average",
            lcEnReadSub: "380 / 495 · 76th percentile · above average",
            lcEnOverSub: "845 / 990 · CEFR B2 · Independent user",
            lcJpCapTitle: "Proven Capabilities",
            lcJpCap1: "Business-level Japanese for professional and technical work",
            lcJpCap2: "Reads and understands complex documents and specifications",
            lcJpCap3: "Communicates confidently in meetings and with clients",
            certKicker: "Credentials",
            certSub: "Ongoing professional learning and industry-recognized certifications that strengthen my expertise and commitment to growth.",
            certVerifyNote: "All credentials are verified<br>and issued by recognized providers.",
            certIdLabel: "Credential ID", certView: "View Credential", certVerified: "Verified",
            certFoot: "Credential links open in a new tab and may require sign-in.",
            cert1Mon: "Jul", cert1Year: "2026", cert2Mon: "Jul", cert2Year: "2026", cert3Mon: "Mar", cert3Year: "2024",
            cert1Title: "AWS Knowledge: Amazon Q Developer Fundamentals — Training Badge",
            cert1Issuer: "Amazon Web Services (AWS)",
            cert1Desc: "Strengthened my understanding of Amazon Q Developer, AI-assisted software development, and AWS developer tools.",
            cert1Skills: "Amazon Q · Amazon Web Services · AI-Assisted Development",
            cert2Title: "Generative AI Essentials: Using LLMs to Work with Data",
            cert2Issuer: "IBM · SkillsBuild",
            cert2Desc: "Completed the IBM SkillsBuild program on Generative AI and Large Language Models (LLMs), validating my knowledge of AI and applied LLM workflows.",
            cert2Skills: "Artificial Intelligence · Large Language Models · Generative AI",
            cert3Title: "Oracle Certified Java Programmer, Bronze SE",
            cert3Issuer: "Oracle · Java SE",
            cert3Desc: "Entry-level Oracle certification validating fundamental Java programming and object-oriented concepts.",
            cert3Skills: "Java · Web Design", certCertified: "Certified",
            eduKicker: "Academic background", eduTitle: "Education",
            edu1School: "Hokkaido Cyber Creator Professional Training College",
            edu1PhotoAlt: "Classroom at Hokkaido Cyber Creator Professional Training College",
            edu1Title: "IT Department",
            edu1Desc: "Specialized in Network, Cloud, and Cybersecurity. Comprehensive web development curriculum including Java, HTML/CSS, JS, PHP, and Linux.",
            edu2School: "Hokkaido Japanese Language Academy Sapporo Main Campus",
            edu2PhotoAlt: "Graduation at Hokkaido Japanese Language Academy Sapporo Main Campus",
            edu2Title: "Japanese Language",
            edu2Desc: "Achieved JLPT N3 certification. Deep focus on Japanese corporate culture, business manners, and volunteer leadership.",
            viewPhoto: "View photo",
            footVersion: "Version", footLocalTime: "Tokyo Time",
            footFollow: "Follow me",
            conEyebrow: "Open to conversations",
            conSecKicker: "Contact", conHeadline: "Let's work together",
            conSubtitle: "Hiring for robotics, simulation, or real-time 3D? I'd love to hear about the role and the team.",
            conKicker: "Where I can help",
            conBlurb: "Real-time 3D and simulation in Unreal Engine, Blender assets for logistics scenes, and web tools that make 3D data easier to work with — in Japanese or English.",
            formTitle: "Send a message", formSubtitle: "I'll get back to you as soon as possible.",
            formName: "Name", formEmail: "Email", formMsg: "Message", formTopic: "What's it about",
            topicJob: "Job opportunity", topic3d: "3D / simulation project",
            topicCollab: "Collaboration", topicElse: "Just saying hi",
            phName: "Your name", phEmail: "you@example.com", phMsg: "Tell me about the role or project",
            formSend: "Send message", formSending: "Sending…",
            formOk: "Thank you! Your message has been sent — I'll get back to you soon.",
            formErr: "Something went wrong. Please try again, or email me directly."
        },
        ja: {
            ueKicker: "リアルタイム3D", ueTitle: "Unreal Engine 制作実績",
            ueSub: "ゲームプレイから産業シミュレーションまで。リアルタイム3Dで制作したプロジェクトをご紹介します。",
            ueHover: "ホバーでプレビュー · クリックで再生", ueTap: "タップしてデモを再生", ueDuration: "16秒のプレビュー",
            ueDartsType: "01 / ゲーム開発", ueWarehouseType: "02 / 産業シミュレーション",
            ueDartsName: "ダーツゲーム", ueWarehouseName: "倉庫シミュレーション",
            ueDartsDesc: "三人称視点のダーツゲーム。的を狙って投げ、全5ラウンドのスコアを競います。",
            ueWarehouseDesc: "棚・コンベヤー・ロボットを備えた自動倉庫。カートンの投入から格納までを再現しました。",
            ueDartsAlt: "ダーツゲームのカバー：暖かな光の中でダーツボードに向かう金属製のキャラクター",
            ueWarehouseAlt: "倉庫シミュレーションのカバー：棚、コンベヤー、ロボット設備のある倉庫の立体図",
            ueFull: "LinkedInでフル動画を見る", ueError: "プレビューを再生できません。", ueOpen: "動画を直接開く",
            navHome: "ホーム", navWork: "実績", navAbout: "プロフィール", navContact: "お問い合わせ",
            navCertifications: "資格・認定", navGoals: "今後の目標", navUnreal: "Unreal", navBlender: "Blender", menuBlender: "Blender 制作",
            navMenu: "メニュー", skipLink: "本文へスキップ",
            menuOpen: "メニューを開く", menuClose: "メニューを閉じる", menuRole: "ソフトウェアエンジニア",
            menuExplore: "ポートフォリオ", menuWork: "制作実績", menuUnreal: "Unreal Engine",
            menuLanguage: "言語", menuLocation: "日本・東京",
            heroViewProjects: "プロジェクトを見る", heroContactMe: "お問い合わせ", heroEyebrow: "Manoj Poudel · 東京", heroFocus: "専門分野",
            heroIntro: "<strong>モビリティとロボティクス</strong>のための、リアルタイム3D・シミュレーション・Webツールを開発しています。Unreal Engine のシーンから、チームが毎日使うツールまで。",
            heroExp1: "Unreal Engine", heroExp2: "Blender", heroExp3: "3Dシミュレーション", heroExp4: "Web開発",
            workSubtitle: "現実の課題を、明快さとエレガンスで解決するために設計したプロダクトとデジタル体験の厳選集です。",
            filterAll: "すべて",
            workKicker: "ポートフォリオ", workTitle2: "代表的な実績", workViewAll: "すべてのプロジェクトを見る",
            workViewProject: "プロジェクトを見る",
            filterWebShort: "Web", filterApps: "アプリ", filterUiux: "UI/UX",
            pjEverestName: "エベレスト・トラベル体験",
            pjEverestShort: "厳選されたヒマラヤの冒険と遠征のためのプレミアムな旅行ウェブサイト。",
            pjBudgetName: "家計簿 / Budget Tracker",
            pjBudgetShort: "レシートのスキャンと端末内で計算するアシスタントを備えた、日本の暮らしのためのバイリンガル家計簿。",
            pjSalaryName: "給料トラッカーアプリ",
            pjSalaryShort: "給与明細のスキャンとAIアシスタントを備えた、バイリンガルの給料・送金管理アプリ。",
            pjAnalyzerName: "GLB モデル解析ツール",
            pjAnalyzerShort: "3Dモデルの詳細（ポリゴン数・テクスチャサイズ）を解析し、PDFで書き出せる、私が社内向けに開発したツール。",
            pjForgeName: "GLB モデル最適化ツール",
            pjForgeShort: "ポリゴン数とテクスチャを削減し、重い3DモデルもUEに安全に取り込めるようにする、私が社内向けに開発したツール。",
            fgKicker: "今後の目標", fgTitle: "これから目指すこと",
            fgIntro: "Web開発と3Dシミュレーションの経験から、ソフトウェアが世界をどう理解し関わるのかに興味を持つようになりました。次はロボティクス、デジタルツイン、AIを活用したアプリケーションに取り組みたいと考えています。",
            fgArtAlt: "ロボットアームとそのデジタルツインが同期して動き、ROS 2とRAGによる知識検索とともにダッシュボードへデータを送るアニメーション線画。",
            fgArtCaption: "システム概念図 · 4つの目標のつながり",
            fg1Title: "ロボティクスの基礎を築く",
            fg1Topics: "ROS 2 · センサー · ロボット間通信",
            fg1Desc: "小さな実践的な実験を通じてROS 2を学び、ロボットがデータを共有し、センサーを読み取り、動作を連携させる仕組みを理解します。",
            fg2Title: "シミュレーションとデジタルツインを探求する",
            fg2Topics: "NVIDIA Isaac Sim · デジタルツイン · フィジカルAI",
            fg2Desc: "NVIDIA Isaac Simでロボットの動作を検証し、デジタルツインを実システムと同期させる仕組みを学びます。",
            fg3Title: "役立つAI搭載Webアプリを作る",
            fg3Topics: "RAG · ナレッジ検索 · 評価",
            fg3Desc: "関連文書に基づいてAIが回答するWebアプリを作り、その回答が正確で根拠のあるものかを評価します。",
            fg4Title: "Web・AI・ロボティクスをつなぐ",
            fg4Topics: "対話型ダッシュボード · シミュレーションデータ · システム連携",
            fg4Desc: "作業空間の監視から実験結果の比較まで、ロボティクスやシミュレーションのデータを分かりやすく見せるダッシュボードを作ります。",
            aboutTitle: "プロフィール",
            expKicker: "キャリア", expTitle: "職歴",
            xpOrg: "産業向けソフトウェア・DX企業 · 東京",
            xpRole: "ソフトウェア開発者 — モビリティ、ロボティクス＆3Dシミュレーション",
            xpYears: "2026年4月 — 現在",
            xp1When: "2026年4月〜6月", xp1Title: "Unreal Engine と Blender の基礎習得",
            xp1Desc: "Unreal Engine と Blender の基礎スキルを習得し、ローポリ3Dモデリングと、リアルタイムシミュレーション向けの Blender から Unreal への制作フローを学びました。",
            xp2When: "2026年7月〜9月", xp2Title: "プロジェクトへの貢献と社内ツール開発",
            xp2Desc: "Blender で3Dモデルを制作し、実際の社内プロジェクトに貢献しました。JavaScript、Three.js、Node.js を用いて、ローカルで動作する GLB 解析・最適化ツールを開発しました。Python、C++、Blueprint、AIを活用した開発により、自動化とシミュレーションのワークフロー改善を継続しています。",
            xp3When: "2026年9月30日", xp3Title: "Industrial DX Expo 2026 出展対応",
            xp3Desc: "東京ビッグサイトの展示会で、会社のソフトウェアやDXソリューションを紹介・実演。来場者の質問に対応し、日本語での技術説明やビジネスコミュニケーションの経験を積みました。",
            xp4When: "2026年10月", xp4Title: "結合テスト・品質保証", xp5When: "2026年10月28日", xp5Title: "チーム向け AI 結合テストスキルを開発", xp5Desc: "チームリーダーから、このワークフローを再利用できる Claude スキルにしてほしいと依頼されました。新しいメンバーを含めて誰でも、バージョン3や他のソフトウェアのテストで同じ品質のレポートを作れるようにするためです。テスト全体の会話をもとに、テストと修正を何度も重ねて<strong>ai-integration-test</strong> スキルを作成しました。テストファイルと記録用ブックの準備、テストIDごとの手順説明、スクリーンショット・動画・ログによるエビデンスの確認、記録シートの記入、品質チェック、Teams / Jira 向けの短い報告文の作成までを行います。新しいセッションでサンプルソフトウェアを使って検証し、リーダーからも高く評価されました。", xpMilestone: "マイルストーン",
            xp4Desc: "社内の業務システム（バージョン2）の結合テストを担当し、すべてのテストケースをスクリーンショットのエビデンスとわかりやすい手順説明付きで Excel にまとめました。テスト担当4名のうち、経験15年以上の先輩社員のものも含めて、私のレポートがチームリーダーから最も良いと評価されました。AI をパートナーとして活用し、ソフトウェアの操作とスクリーンショットの取得はすべて自分で行い、AI にはテストの文脈を共有して、1件ずつ結果を明確に記述しました。",
            xpTech: "Blueprint · C++ · Python · Blender · Three.js · AI Workflows · Claude Skills",
            certTitle: "資格・認定",
            cert4Mon: "8月", cert4Year: "2026", cert4Title: "Networking Basics",
            cert4Issuer: "Cisco · Networking Academy",
            cert4Desc: "Cisco Networking Academy の Networking Basics コースを修了。ネットワーク通信、IPv4/IPv6 アドレッシング、ネットワークメディア、アプリケーション層サービスなどを学びました。",
            cert4Skills: "Application Layer Services · IPv4 Addresses · Network Media · Network Types",
            lcKicker: "日本語・英語", lcTitle: "語学の資格",
            lcSub: "日本および世界の環境で働き、協働し、コミュニケーションする力を高める、実務レベルの語学資格です。",
            lcNote: "技術力を支える大きな強みです",
            lcJpCat: "日本語能力",
            lcJpDesc: "日本語能力試験の最上位レベル。ビジネス・技術・職場でのコミュニケーションに求められる高度な日本語の理解力を証明します。",
            lcLblLevel: "レベル", lcLblCert: "認定", lcLblTestDate: "受験日", lcLblCefr: "CEFR",
            lcLblTotal: "合計スコア", lcLblListen: "リスニング", lcLblRead: "リーディング",
            lcJpLevelSub: "（最上位レベル）", lcJpScoreSub: "（合格）", lcJpCefrSub: "（JLPT公式の目安）", lcJpCertV: "日本語能力試験", lcJpTestV: "2026年7月5日",
            lcEnCat: "英語コミュニケーション",
            lcEnDesc: "プロフェッショナルおよびグローバルな場面での、リーディング・リスニング力を示す、国際的に認知された英語コミュニケーションの指標です。",
            lcEnTestV: "2025年5月18日",
            lcLblIssued: "発行日", lcEnIssuedV: "2025年6月3日", lcLblOverall: "総合",
            lcEnPerfTitle: "セクション別スコア",
            lcEnLisSub: "465 / 495 ・ 上位11%（89パーセンタイル）・ 平均以上",
            lcEnReadSub: "380 / 495 ・ 上位24%（76パーセンタイル）・ 平均以上",
            lcEnOverSub: "845 / 990 ・ CEFR B2 ・ 自立した言語使用者",
            lcJpCapTitle: "N1 が証明する能力",
            lcJpCap1: "業務・技術分野で通用するビジネスレベルの日本語",
            lcJpCap2: "複雑な文書や仕様書を読み、正確に理解できる",
            lcJpCap3: "会議や顧客とのやり取りで自信を持って対応できる",
            certKicker: "クレデンシャル",
            certSub: "専門性の向上と成長への姿勢を支える、継続的な学習と業界公認の認定資格です。",
            certVerifyNote: "すべての資格は認証済みで<br>信頼できる発行元によるものです。",
            certIdLabel: "認証ID", certView: "資格を見る", certVerified: "認証済み",
            certFoot: "資格のリンクは新しいタブで開き、サインインが必要な場合があります。",
            cert1Mon: "7月", cert1Year: "2026", cert2Mon: "7月", cert2Year: "2026", cert3Mon: "3月", cert3Year: "2024",
            cert1Title: "AWS Knowledge: Amazon Q Developer Fundamentals — Training Badge",
            cert1Issuer: "Amazon Web Services (AWS)",
            cert1Desc: "Amazon Q Developer、AIを活用したソフトウェア開発、AWSの開発者ツールへの理解を深めました。",
            cert1Skills: "Amazon Q · Amazon Web Services · AI活用開発",
            cert2Title: "Generative AI Essentials: Using LLMs to Work with Data",
            cert2Issuer: "IBM · SkillsBuild",
            cert2Desc: "IBM SkillsBuild の生成AI・大規模言語モデル（LLM）プログラムを修了し、AIと実践的なLLMワークフローの知識を証明しました。",
            cert2Skills: "人工知能 · 大規模言語モデル · 生成AI",
            cert3Title: "Oracle Certified Java Programmer, Bronze SE",
            cert3Issuer: "Oracle · Java SE",
            cert3Desc: "Javaプログラミングとオブジェクト指向の基礎を証明する、エントリーレベルのOracle認定資格です。",
            cert3Skills: "Java · Web デザイン", certCertified: "認定済み",
            eduKicker: "学びの歩み", eduTitle: "学歴",
            edu1School: "専門学校北海道サイバークリエイターズ大学校",
            edu1PhotoAlt: "専門学校北海道サイバークリエイターズ大学校の教室",
            edu1Title: "IT学科",
            edu1Desc: "ネットワーク・クラウド・サイバーセキュリティを専攻。Java、HTML/CSS、JS、PHP、Linux など幅広いWeb開発カリキュラムを修了。",
            edu2School: "北海道日本語学院札幌本校",
            edu2PhotoAlt: "北海道日本語学院札幌本校の卒業式",
            edu2Title: "日本語学科",
            edu2Desc: "JLPT N3 を取得。日本の企業文化・ビジネスマナー、そしてボランティアでのリーダーシップに注力。",
            viewPhoto: "写真を見る",
            footVersion: "バージョン", footLocalTime: "東京時間",
            footFollow: "フォロー",
            conEyebrow: "お気軽にご連絡ください",
            conSecKicker: "お問い合わせ", conHeadline: "一緒に働きましょう",
            conSubtitle: "ロボティクス、シミュレーション、リアルタイム3Dの分野で人材をお探しですか？ポジションやチームについてぜひお聞かせください。",
            conKicker: "お役に立てること",
            conBlurb: "Unreal Engine によるリアルタイム3D・シミュレーション、物流シーン向けの Blender アセット制作、3Dデータを扱いやすくするWebツール開発。日本語・英語のどちらでも対応できます。",
            formTitle: "メッセージを送る", formSubtitle: "できるだけ早くご返信します。",
            formName: "お名前", formEmail: "メール", formMsg: "メッセージ", formTopic: "ご相談の内容",
            topicJob: "採用・求人について", topic3d: "3D・シミュレーション案件",
            topicCollab: "コラボレーション", topicElse: "ご挨拶・その他",
            phName: "お名前", phEmail: "you@example.com", phMsg: "ポジションやプロジェクトについてお聞かせください",
            formSend: "送信する", formSending: "送信中…",
            formOk: "ありがとうございます！メッセージを送信しました。追ってご連絡します。",
            formErr: "エラーが発生しました。もう一度お試しいただくか、直接メールでご連絡ください。"
        }
    };

    function applyLang(l) {
        const t = I18N[l] || I18N.en;
        document.documentElement.lang = (l === "ja") ? "ja" : "en";
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const v = t[el.dataset.i18n]; if (v != null) el.textContent = v;
        });
        document.querySelectorAll("[data-i18n-html]").forEach(el => {
            const v = t[el.dataset.i18nHtml]; if (v != null) el.innerHTML = v;
        });
        document.querySelectorAll("[data-i18n-ph]").forEach(el => {
            const v = t[el.dataset.i18nPh]; if (v != null) el.placeholder = v;
        });
        document.querySelectorAll("[data-i18n-alt]").forEach(el => {
            const v = t[el.dataset.i18nAlt]; if (v != null) el.alt = v;
        });
        document.querySelectorAll("[data-i18n-aria]").forEach(el => {
            const v = t[el.dataset.i18nAria]; if (v != null) el.setAttribute('aria-label', v);
        });
        // toggle button shows the language you'll switch TO
        const other = (l === "ja")
            ? { flag: "🇬🇧", label: "English" }
            : { flag: "🇯🇵", label: "日本語" };
        ["langFlag", "langFlagM"].forEach(id => { const e = document.getElementById(id); if (e) e.textContent = other.flag; });
        ["langLabel", "langLabelM"].forEach(id => { const e = document.getElementById(id); if (e) e.textContent = other.label; });
        // highlight the active flag in the two-flag switch
        document.querySelectorAll(".lang-flag-btn, .menu-language-option").forEach(b => {
            const on = b.dataset.lang === l;
            b.classList.toggle("active", on);
            b.setAttribute("aria-pressed", on ? "true" : "false");
        });
        window.__lang = l;
        try { localStorage.setItem("pp_lang", l); } catch (e) { }
        if (window.__refreshProjModal) window.__refreshProjModal();
        window.dispatchEvent(new Event('portfolio:languagechange'));
    }

    window.toggleLang = function () {
        applyLang(window.__lang === "ja" ? "en" : "ja");
    };

    window.setLang = function (l) {
        if (l === "en" || l === "ja") applyLang(l);
    };

    // boot: ?lang= param wins, then saved preference, else English
    let start = "en";
    try { const s = localStorage.getItem("pp_lang"); if (s === "ja" || s === "en") start = s; } catch (e) { }
    const q = new URLSearchParams(location.search).get("lang");
    if (q === "ja" || q === "en") start = q;
    applyLang(start);

    // scroll-spy: highlight the active pill link
    const links = Array.from(document.querySelectorAll(".np-link[data-nav]"));
    function setActive(id) {
        links.forEach(a => {
            const active = a.getAttribute("href") === "#" + id;
            a.classList.toggle("active", active);
            if (active) a.setAttribute("aria-current", "location");
            else a.removeAttribute("aria-current");
        });
    }
    setActive("home");
    const secs = links
        .map(a => document.getElementById(a.getAttribute("href").slice(1)))
        .filter(Boolean);
    if (secs.length) {
        // The active link is the last section (in page order) whose top has
        // passed the middle of the screen, so the highlight only ever moves
        // forward as you scroll down (Certifications sits inside About and
        // About's remaining padding must not take the highlight back).
        let queued = false;
        const update = () => {
            queued = false;
            const mid = innerHeight * .5;
            const active = secs.filter(section => section.getBoundingClientRect().top <= mid).pop();
            setActive(active ? active.id : "home");
        };
        const queue = () => { if (!queued) { queued = true; requestAnimationFrame(update); } };
        addEventListener("scroll", queue, { passive: true });
        addEventListener("resize", queue, { passive: true });
        update();
    }

    // ===== Contact form — Formspree AJAX (no page redirect) =====
    const form = document.getElementById("contactForm");
    if (form) {
        const statusEl = document.getElementById("cfStatus");
        const btn = form.querySelector(".cf-submit");
        const btnLabel = form.querySelector(".cf-submit-label");
        // topic pills → hidden input (stable English value for the email)
        const topicInput = document.getElementById("cfTopic");
        form.querySelectorAll(".cf-topic").forEach(pill => {
            pill.addEventListener("click", () => {
                form.querySelectorAll(".cf-topic").forEach(p => { p.classList.toggle("active", p === pill); p.setAttribute("aria-pressed", p === pill ? "true" : "false"); });
                if (topicInput) topicInput.value = pill.dataset.topic || "";
            });
        });
        function showStatus(msg, cls) {
            clearTimeout(window.__cfHide);
            statusEl.style.opacity = "1";
            statusEl.textContent = msg;
            statusEl.className = "cf-status " + cls;
            // auto-dismiss after a few seconds (fade out, then clear)
            window.__cfHide = setTimeout(() => {
                statusEl.style.opacity = "0";
                setTimeout(() => {
                    statusEl.textContent = "";
                    statusEl.className = "cf-status";
                    statusEl.style.opacity = "";
                }, 450);
            }, 4000);
        }
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            const t = I18N[window.__lang] || I18N.en;
            clearTimeout(window.__cfHide);
            statusEl.textContent = ""; statusEl.className = "cf-status"; statusEl.style.opacity = "1";
            const orig = btnLabel.textContent;
            btn.disabled = true; btnLabel.textContent = t.formSending;
            try {
                const res = await fetch(form.action, {
                    method: "POST",
                    body: new FormData(form),
                    headers: { "Accept": "application/json" }
                });
                if (res.ok) {
                    form.reset();
                    showStatus(t.formOk, "ok");
                } else {
                    showStatus(t.formErr, "err");
                }
            } catch (err) {
                showStatus(t.formErr, "err");
            } finally {
                btn.disabled = false; btnLabel.textContent = orig;
            }
        });
    }
})();
