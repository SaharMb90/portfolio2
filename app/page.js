'use client';

import { useEffect, useRef, useState } from 'react';

const LINKS = {
  github: 'https://github.com/SaharMb90',
  linkedin: 'https://www.linkedin.com/in/sahar-mirzabaki',
  email: 'mirzabakisahar@gmail.com',
};

const REPOS = [
  'https://github.com/SaharMb90/Dissertation',
  'https://github.com/SaharMb90/expectation-aware-adaptation',
  'https://github.com/SaharMb90/AI-Coursework-for-my-MSc-Artificial-Intelligence-Module',
  'https://github.com/SaharMb90/Cognitive_Synchronization_System_Extension',
];

const T = {
  en: {
    nav: { projects: 'Projects', experience: 'Experience', contact: 'Contact' },
    status: 'Based in Tehran — open to remote roles & funded PhDs',
    name: ['Machine learning', 'that reads the world', 'and acts on it.'],
    ledePre: "I'm Sahar — a machine-learning engineer building ",
    ledeEm: 'closed-loop systems',
    ledePost: ' that take live sensor data, decide, and respond in real operational settings.',
    place:
      'My focus is anomaly detection, adaptive control, and human-in-the-loop decisions — kept interpretable and reliable enough to run in the field.',
    browse: 'Browse projects',
    email: 'Email me',
    secProjects: 'Selected projects',
    viewCode: 'View code',
    projects: [
      {
        title: 'Smart Aquarium — closed-loop IoT + ML',
        kicker: 'MSc dissertation, Liverpool Hope University',
        desc:
          'An end-to-end pipeline where live sensor readings drive automated corrective actions, using ML to keep harmful substances down inside a closed ecosystem — sensing, real-time data, and control working as one loop.',
        chips: ['Python', 'IoT sensors', 'real-time control', 'ML'],
      },
      {
        title: 'Expectation-aware adaptation',
        kicker: 'Self-adaptive system demonstrator',
        desc:
          'A prototype that adjusts its own behaviour as runtime conditions change, exploring how a system stays reliable under uncertainty — the core idea behind trustworthy, adaptive AI.',
        chips: ['self-adaptation', 'feedback loops', 'reliability'],
      },
      {
        title: 'Credit-score prediction',
        kicker: 'MSc Artificial Intelligence module',
        desc:
          'Supervised models for credit-risk classification, from feature engineering through training to a proper evaluation of what the model actually gets right.',
        chips: ['scikit-learn', 'feature engineering', 'evaluation'],
      },
      {
        title: 'Cognitive Synchronization System',
        kicker: 'Browser extension — human-in-the-loop prototype',
        desc:
          'Reads passive interaction and response patterns to help a user hold their focus — a small, practical take on keeping a person inside the loop.',
        chips: ['JavaScript', 'behavioural signals', 'HITL'],
      },
    ],
    secExperience: 'Experience',
    exp: [
      {
        role: 'Data Analyst & Software Engineer — HiltIran',
        meta: 'Tehran · IoT / GPS platform · Aug 2025 – Jun 2026',
        points: [
          "Built internal ML-based data-scoring and evaluation tooling for operational records, powering the team's data-analysis workflows.",
          'Integrated live Teltonika GPS/IoT fleet data into operational dashboards and designed 8+ validated API request forms across frontend and backend.',
          "Shipped the company's MVP ordering platform for concrete orders and lab workflows — 20+ components in Next.js / React Native.",
        ],
      },
      {
        role: 'Programming Intern — Risidio',
        meta: 'London, UK · Jan – Feb 2025',
        points: [
          'Used LangSmith to analyse 50+ user comments and pull trend signals out of cryptocurrency text (applied NLP).',
          'Built a React/Redux NFT shop and explored blockchain / Web3 application patterns.',
        ],
      },
      {
        role: 'Frontend / Software Engineer — earlier roles',
        meta: 'Ferdowsi Cloud Co. · Khebregan-Asr-Ertebat, Mashhad · 2018 – 2021',
        points: [
          'Delivered 15+ dashboards and client projects in React, Next.js and TypeScript, building reusable component libraries and interfaces.',
        ],
      },
    ],
    secToolkit: 'Toolkit',
    skills: [
      { label: 'machine learning', tags: ['PyTorch', 'TensorFlow', 'scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'] },
      { label: 'nlp & ai tooling', tags: ['LangSmith', 'spaCy', 'NLTK', 'NLP.js'] },
      { label: 'languages', tags: ['Python', 'JavaScript', 'TypeScript', 'PHP'] },
      { label: 'data & infra', tags: ['PostgreSQL', 'MySQL', 'Firebase', 'Docker'] },
      { label: 'web', tags: ['React', 'Next.js', 'Vue.js', 'Tailwind'] },
    ],
    secEducation: 'Education',
    edu: [
      { deg: 'MSc, Advanced Computer Science', sch: 'Liverpool Hope University, UK · 2025', grade: 'Merit' },
      { deg: 'BE, Computer Software Engineering', sch: 'Azad University, Mashhad · 2023', grade: 'First class · GPA 18.69 / 20' },
    ],
    contactH: "Let's build something that runs in the real world.",
    contactP:
      "I'm looking for applied-ML and research-oriented roles — remote or relocating — and funded PhD positions. The fastest way to reach me is email.",
    footer: 'Sahar Mirzabaki · Tehran',
  },

  fa: {
    nav: { projects: 'پروژه‌ها', experience: 'تجربه', contact: 'تماس' },
    status: 'ساکن تهران — پذیرای موقعیت‌های دورکاری و دکترای فاندشده',
    name: ['یادگیری ماشینی', 'که جهان را می‌خواند', 'و بر آن اثر می‌گذارد.'],
    ledePre: 'من سحرم — مهندس یادگیری ماشین که ',
    ledeEm: 'سیستم‌های حلقه‌بسته',
    ledePost:
      ' می‌سازد؛ سیستم‌هایی که دادهٔ زندهٔ سنسور را می‌گیرند، تصمیم می‌گیرند و در محیط عملیاتی واقعی واکنش نشان می‌دهند.',
    place:
      'تمرکزم روی تشخیص ناهنجاری، کنترل تطبیقی و تصمیم‌گیری با حضور انسان در حلقه است — به‌قدری تفسیرپذیر و قابل‌اتکا که در میدان واقعی کار کند.',
    browse: 'دیدن پروژه‌ها',
    email: 'ایمیل بزن',
    secProjects: 'پروژه‌های منتخب',
    viewCode: 'کد',
    projects: [
      {
        title: 'آکواریوم هوشمند — IoT و ML حلقه‌بسته',
        kicker: 'پایان‌نامهٔ کارشناسی ارشد، دانشگاه Liverpool Hope',
        desc:
          'یک خط لولهٔ سرتاسری که در آن دادهٔ زندهٔ سنسور، اقدام اصلاحیِ خودکار را هدایت می‌کند و با ML مواد مضر را در یک اکوسیستم بسته پایین نگه می‌دارد — حس‌گری، دادهٔ بلادرنگ و کنترل، همه در یک حلقه.',
        chips: ['Python', 'سنسور IoT', 'کنترل بلادرنگ', 'ML'],
      },
      {
        title: 'تطبیق آگاه از انتظار',
        kicker: 'نمونهٔ نمایشیِ سیستم خودتطبیق',
        desc:
          'نمونه‌ای که رفتار خود را با تغییر شرایط اجرا تنظیم می‌کند و بررسی می‌کند که یک سیستم چطور زیر بار عدم‌قطعیت قابل‌اتکا می‌ماند — ایدهٔ اصلیِ پشت هوش مصنوعیِ تطبیقی و قابل‌اعتماد.',
        chips: ['خودتطبیقی', 'حلقهٔ بازخورد', 'قابلیت اتکا'],
      },
      {
        title: 'پیش‌بینی امتیاز اعتباری',
        kicker: 'درس هوش مصنوعیِ کارشناسی ارشد',
        desc:
          'مدل‌های نظارت‌شده برای طبقه‌بندی ریسک اعتباری؛ از مهندسی ویژگی تا آموزش و ارزیابیِ درست از این‌که مدل واقعاً چه چیزی را درست پیش‌بینی می‌کند.',
        chips: ['scikit-learn', 'مهندسی ویژگی', 'ارزیابی'],
      },
      {
        title: 'سیستم هم‌گام‌سازی شناختی',
        kicker: 'افزونهٔ مرورگر — نمونهٔ انسان در حلقه',
        desc:
          'الگوهای تعامل و پاسخِ کاربر را به‌صورت غیرفعال می‌خواند تا به حفظ تمرکز کمک کند — نگاهی کوچک و کاربردی به نگه‌داشتنِ انسان درون حلقه.',
        chips: ['JavaScript', 'سیگنال رفتاری', 'HITL'],
      },
    ],
    secExperience: 'تجربه',
    exp: [
      {
        role: 'تحلیل‌گر داده و مهندس نرم‌افزار — HiltIran',
        meta: 'تهران · پلتفرم IoT/GPS · Aug 2025 – Jun 2026',
        points: [
          'ساخت ابزار داخلیِ مبتنی بر ML برای امتیازدهی و ارزیابی دادهٔ عملیاتی که جریان‌های تحلیل دادهٔ تیم را تغذیه می‌کرد.',
          'یکپارچه‌سازیِ دادهٔ زندهٔ ناوگان از دستگاه‌های Teltonika GPS/IoT در داشبوردهای عملیاتی و طراحی بیش از ۸ فرم درخواست API با اعتبارسنجی، در سمت فرانت و بک.',
          'توسعهٔ پلتفرم MVP سفارش‌گیریِ شرکت برای سفارش بتن و فرآیندهای آزمایشگاه — بیش از ۲۰ کامپوننت با Next.js / React Native.',
        ],
      },
      {
        role: 'کارآموز برنامه‌نویسی — Risidio',
        meta: 'لندن، بریتانیا · Jan – Feb 2025',
        points: [
          'استفاده از LangSmith برای تحلیل بیش از ۵۰ نظر کاربر و استخراج سیگنال‌های روند از متن حوزهٔ ارز دیجیتال (NLP کاربردی).',
          'ساخت فروشگاه NFT با React/Redux و بررسی الگوهای کاربردیِ بلاک‌چین / Web3.',
        ],
      },
      {
        role: 'مهندس فرانت‌اند / نرم‌افزار — نقش‌های پیشین',
        meta: 'شرکت ابری فردوسی · خبرگان‌عصرارتباط، مشهد · 2018 – 2021',
        points: [
          'تحویل بیش از ۱۵ داشبورد و پروژهٔ مشتری با React، Next.js و TypeScript و ساخت کتابخانهٔ کامپوننت‌های قابل‌استفادهٔ مجدد.',
        ],
      },
    ],
    secToolkit: 'جعبه‌ابزار',
    skills: [
      { label: 'یادگیری ماشین', tags: ['PyTorch', 'TensorFlow', 'scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'] },
      { label: 'NLP و ابزار هوش مصنوعی', tags: ['LangSmith', 'spaCy', 'NLTK', 'NLP.js'] },
      { label: 'زبان‌ها', tags: ['Python', 'JavaScript', 'TypeScript', 'PHP'] },
      { label: 'داده و زیرساخت', tags: ['PostgreSQL', 'MySQL', 'Firebase', 'Docker'] },
      { label: 'وب', tags: ['React', 'Next.js', 'Vue.js', 'Tailwind'] },
    ],
    secEducation: 'تحصیلات',
    edu: [
      { deg: 'کارشناسی ارشد، علوم کامپیوتر پیشرفته', sch: 'دانشگاه Liverpool Hope، بریتانیا · 2025', grade: 'درجهٔ Merit' },
      { deg: 'کارشناسی، مهندسی نرم‌افزار کامپیوتر', sch: 'دانشگاه آزاد، مشهد · 2023', grade: 'ممتاز · معدل ۱۸٫۶۹ از ۲۰' },
    ],
    contactH: 'بیا چیزی بسازیم که در دنیای واقعی کار کند.',
    contactP:
      'دنبال نقش‌های ML کاربردی و پژوهش‌محور هستم — دورکاری یا با جابه‌جایی — و موقعیت‌های دکترای فاندشده. سریع‌ترین راه ارتباط، ایمیل است.',
    footer: 'سحر میرزابکی · تهران',
  },
};

export default function Page() {
  const [lang, setLang] = useState('en');
  const canvasRef = useRef(null);
  const t = T[lang];
  const rtl = lang === 'fa';
  const year = new Date().getFullYear();

  // smooth scroll that clears the sticky nav
  function goTo(e, id) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const y = el.getBoundingClientRect().top + window.pageYOffset - 72;
    window.scrollTo({ top: Math.max(0, y), behavior: reduce ? 'auto' : 'smooth' });
  }

  // live signal waveform
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0, t0 = 0, raf = 0;

    const css = getComputedStyle(document.documentElement);
    const neon = (css.getPropertyValue('--neon').trim()) || '#b026ff';
    const neon2 = (css.getPropertyValue('--neon-2').trim()) || '#39ff5e';

    function resize() {
      const r = canvas.getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize);

    function wave(x, phase) {
      const mid = h / 2;
      const settle = 0.35 + 0.65 * (1 - x / w);
      return mid +
        Math.sin(x * 0.06 + phase * 2.1) * 6 * settle +
        Math.sin(x * 0.021 - phase * 1.3) * 18 * settle +
        Math.sin(x * 0.011 + phase * 0.6) * 10 * settle;
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = 'rgba(255,255,255,0.06)';
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(0, h / 2); ctx.lineTo(w, h / 2); ctx.stroke();

      const passes = [{ a: 0.30, lw: 8, blur: 22 }, { a: 1, lw: 2, blur: 6 }];
      for (let p = 0; p < passes.length; p++) {
        ctx.globalAlpha = passes[p].a;
        ctx.strokeStyle = neon;
        ctx.lineWidth = passes[p].lw;
        ctx.shadowColor = neon;
        ctx.shadowBlur = passes[p].blur;
        ctx.beginPath();
        for (let x = 0; x <= w; x += 3) {
          const y = wave(x, t0);
          if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      ctx.globalAlpha = 1; ctx.shadowBlur = 0;

      const hx = (t0 * 70) % w;
      const hy = wave(hx, t0);
      ctx.fillStyle = neon2;
      ctx.shadowColor = neon2; ctx.shadowBlur = 16;
      ctx.beginPath(); ctx.arc(hx, hy, 4, 0, Math.PI * 2); ctx.fill();
      ctx.shadowBlur = 0;

      t0 += 0.02;
      if (!reduce) raf = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className={'app' + (rtl ? ' rtl' : '')} dir={rtl ? 'rtl' : 'ltr'}>
      <nav className="nav">
        <div className="wrap nav-inner">
          <a className="brand" href="#top" onClick={(e) => goTo(e, 'top')}>
            Sahar <b>Mirzabaki</b>
          </a>
          <div className="nav-links">
            <a onClick={(e) => goTo(e, 'projects')}>{t.nav.projects}</a>
            <a onClick={(e) => goTo(e, 'experience')}>{t.nav.experience}</a>
            <a onClick={(e) => goTo(e, 'contact')}>{t.nav.contact}</a>
            <a className="gh" href={LINKS.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <span className="lang lang-wrap" role="group" aria-label="language">
              <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>EN</button>
              <button className={lang === 'fa' ? 'on' : ''} onClick={() => setLang('fa')}>فا</button>
            </span>
          </div>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="wrap">
          <span className="status"><span className="dot" />{t.status}</span>
          <h1 className="name">
            {t.name.map((line, i) => (
              <span key={i}>{line}{i < t.name.length - 1 ? <br /> : null}</span>
            ))}
          </h1>
          <p className="lede">{t.ledePre}<span className="em">{t.ledeEm}</span>{t.ledePost}</p>
          <p className="place">{t.place}</p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#projects" onClick={(e) => goTo(e, 'projects')}>{t.browse}</a>
            <a className="btn btn-ghost" href={'mailto:' + LINKS.email}>{t.email}</a>
          </div>

          <div className="signal" aria-hidden="true">
            <canvas ref={canvasRef} />
            <span className="axis l">sensor.in</span>
            <span className="axis r">control.out</span>
          </div>
        </div>
      </header>

      <section className="section" id="projects">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-idx">01</span>
            <h2>{t.secProjects}</h2>
            <span className="sec-line" />
          </div>
          <div className="log">
            {t.projects.map((p, i) => (
              <article className="entry" key={i}>
                <div className="node">S-0{i + 1}</div>
                <div>
                  <h3>{p.title}</h3>
                  <p className="kicker">{p.kicker}</p>
                  <p className="desc">{p.desc}</p>
                  <div className="chips">
                    {p.chips.map((c, j) => <span className="chip" key={j}>{c}</span>)}
                  </div>
                </div>
                <a className="repo" href={REPOS[i]} target="_blank" rel="noopener noreferrer">{t.viewCode}</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="experience">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-idx">02</span>
            <h2>{t.secExperience}</h2>
            <span className="sec-line" />
          </div>
          <div className="timeline">
            {t.exp.map((x, i) => (
              <div className="tl-item" key={i}>
                <p className="role">{x.role}</p>
                <p className="meta">{x.meta}</p>
                <ul>{x.points.map((pt, j) => <li key={j}>{pt}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-idx">03</span>
            <h2>{t.secToolkit}</h2>
            <span className="sec-line" />
          </div>
          <div className="skill-grid">
            {t.skills.map((s, i) => (
              <div className="skill-block" key={i}>
                <h4>{s.label}</h4>
                <div className="tags">{s.tags.map((tg, j) => <span className="tag" key={j}>{tg}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="education">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-idx">04</span>
            <h2>{t.secEducation}</h2>
            <span className="sec-line" />
          </div>
          <div className="edu">
            {t.edu.map((e, i) => (
              <div className="edu-card" key={i}>
                <p className="deg">{e.deg}</p>
                <p className="sch">{e.sch}</p>
                <p className="grade">{e.grade}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="wrap">
          <div className="contact-inner">
            <h2>{t.contactH}</h2>
            <p>{t.contactP}</p>
            <div className="links">
              <a className="mail" href={'mailto:' + LINKS.email}>{LINKS.email}</a>
              <a href={LINKS.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap foot-inner">
          <span>{t.footer}</span>
          <span>{year}</span>
        </div>
      </footer>
    </div>
  );
}
