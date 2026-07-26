/* ==========================================================================
   The AI Engineer Roadmap — data layer
   Every resource here was verified live on 27 July 2026.
   ========================================================================== */

const F = 'free', P = 'paid';

const ROADMAP = [
{
  id: 0, title: 'Programming Foundations', hours: [60, 90], icon: '⌨',
  tagline: 'You cannot skip this. Everything sits on it.',
  why: 'Rushing here costs you double later. Every phase after this assumes you can write, test, package and version code without thinking about it.',
  skipTest: [
    'Difference between a list and a tuple — and when does it matter for a dict key?',
    'Write a decorator that times a function.',
    'What does <code>git rebase</code> do that <code>git merge</code> doesn\'t?',
    'Explain a virtual environment to someone who has never used one. Why does it exist?',
    'Write a SQL query using a window function to rank rows within a group.',
    'Difference between <code>is</code> and <code>==</code> in Python?'
  ],
  skipRule: 'Got 4+? Skim the modules you are shaky on. Fewer? Do the whole phase.',
  modules: [
    {
      id: '0.1', title: 'Python from zero', hours: [25, 35],
      topics: 'Syntax · data structures · functions · files · exceptions · OOP basics · unit tests',
      resources: [
        { t: F, n: 'Harvard CS50P — Introduction to Programming with Python', u: 'https://cs50.harvard.edu/python/', d: 'Full course free, no signup. Auto-graded problem sets that are genuinely hard — that is the whole value.' },
        { t: F, n: 'CS50P on YouTube (complete)', u: 'https://www.youtube.com/playlist?list=PLhQjrBD2T382_R182iC2gNZI9HzWFMC_8', d: 'Same lectures, no platform account needed.' },
        { t: F, n: 'Python for Everybody (Dr. Chuck)', u: 'https://www.py4e.com/', d: 'Gentler ramp. Site, textbook and exercises all free.' },
        { t: F, n: 'Automate the Boring Stuff with Python', u: 'https://automatetheboringstuff.com/', d: 'Free to read online in full. Keep it open as a lookup reference.' }
      ],
      verdict: F,
      verdictText: '<b>CS50P, free.</b> Do not pay for a beginner Python course in 2026. Python for Everybody is the better pick if CS50P demoralises you in week one — not a lesser course, just a gentler slope.',
      build: 'A CLI tool that reads a CSV of your expenses and prints a monthly summary. Standard library only — this forces file I/O, dicts, error handling and string formatting.'
    },
    {
      id: '0.2', title: 'Command line & Git', hours: [8, 12],
      topics: 'Shell · scripting · Git internals · branching · rebase · reflog · GitHub flow',
      resources: [
        { t: F, n: 'MIT Missing Semester', u: 'https://missing.csail.mit.edu/', d: 'Lectures 1, 2, 3, 5, 6. Everything universities skip.' },
        { t: F, n: 'Learn Git Branching', u: 'https://learngitbranching.js.org/', d: 'Visual and interactive. The single highest-return hour in Phase 0.' },
        { t: F, n: 'Pro Git book', u: 'https://git-scm.com/book/en/v2', d: 'Chapters 1–3 and 7.1–7.3 only. The rest is reference.' }
      ],
      verdict: F,
      verdictText: '<b>Free, all of it.</b> There is no paid Git course worth money. Missing Semester is better than anything sold.',
      build: 'Put your CLI tool on GitHub. Make a branch, break something, rebase, force push, then recover with <code>git reflog</code>. Breaking and recovering is the lesson.'
    },
    {
      id: '0.3', title: 'Environments & modern tooling', hours: [5, 8],
      topics: 'uv · virtual environments · pyproject.toml · ruff · packaging',
      resources: [
        { t: F, n: 'uv documentation', u: 'https://docs.astral.sh/uv/', d: 'The modern Python package manager. Read Getting Started + Guides.' },
        { t: F, n: 'Ruff documentation', u: 'https://docs.astral.sh/ruff/', d: 'Linting and formatting. Ten minutes to set up, saves you forever.' },
        { t: F, n: 'Python Packaging User Guide', u: 'https://packaging.python.org/en/latest/tutorials/packaging-projects/', d: 'Just the "Packaging Python Projects" tutorial.' }
      ],
      verdict: F,
      verdictText: '<b>Free. Use <code>uv</code>.</b> The 2026 default is uv + ruff + pyproject.toml. Learn conda only if your team already uses it. Do not learn poetry, pipenv or virtualenvwrapper from scratch — that is legacy knowledge.',
      build: 'Convert your CLI tool into an installable package with a <code>pyproject.toml</code>. Run it with <code>uvx</code>.'
    },
    {
      id: '0.4', title: 'Python for real work', hours: [15, 25],
      topics: 'OOP and when not to use it · dataclasses · Pydantic · type hints & mypy · custom exceptions · context managers · generators · pytest · logging · asyncio',
      resources: [
        { t: F, n: 'Real Python — OOP', u: 'https://realpython.com/python3-object-oriented-programming/', d: 'Plus their type checking, async IO and pytest guides.' },
        { t: F, n: 'Pydantic documentation', u: 'https://docs.pydantic.dev/latest/', d: 'Concepts section. You will use this constantly in Phases 6–9 — learning it now is a real head start.' },
        { t: F, n: 'ArjanCodes (YouTube)', u: 'https://www.youtube.com/@ArjanCodes', d: 'The best free resource on writing Python that is not embarrassing.' },
        { t: P, n: 'Fluent Python, 2nd ed. — Ramalho', u: 'https://www.oreilly.com/library/view/fluent-python-2nd/9781492056348/', d: '~$55. Read chapters 1, 5, 7–9, 17 only.', price: '~$55' }
      ],
      verdict: 'mixed',
      verdictText: '<b>Free is enough to start. Buy <i>Fluent Python</i> around month 4, not now.</b> It is the book that makes you good, but it lands properly only once you have written enough Python to have opinions. Buying it in week two means it sits unread.',
      build: 'Refactor your CLI tool: type hints, Pydantic config models, pytest at 80%+ coverage, structured logging. Your first piece of professional code.'
    },
    {
      id: '0.5', title: 'SQL', hours: [10, 15],
      topics: 'Joins · aggregation · CTEs · window functions · indexes · query performance',
      resources: [
        { t: F, n: 'SQLBolt', u: 'https://sqlbolt.com/', d: '18 interactive lessons. Finish it in an evening.' },
        { t: F, n: 'Mode SQL Tutorial', u: 'https://mode.com/sql-tutorial/', d: 'Do Intermediate + Advanced. Best free resource on window functions anywhere.' },
        { t: F, n: 'PostgreSQL Exercises', u: 'https://pgexercises.com/', d: 'The practice that makes it stick.' },
        { t: P, n: 'DataCamp SQL track', u: 'https://www.datacamp.com/tracks/sql-fundamentals', d: 'Adaptive, gated exercises.', price: '~$13–25/mo' }
      ],
      verdict: F,
      verdictText: '<b>Free — SQLBolt → Mode → PGExercises.</b> Mode\'s tutorial is written by analysts for analysts and is better on window functions, which is exactly what separates junior from senior SQL. Your Decision Science team runs on this; it is not a side skill.',
      build: 'Load a real dataset into local Postgres via Docker. Write 20 queries answering actual business questions. At least five must use window functions.'
    }
  ],
  done: 'You can go from empty folder to typed, tested, packaged, version-controlled Python project with a Postgres backend — no tutorial open.'
},

{
  id: 1, title: 'The Math You Actually Need', hours: [70, 100], icon: '∑',
  tagline: 'So you read papers instead of vibing.',
  why: 'The goal is not to become a mathematician. The goal is that when you see softmax(QKᵀ/√dₖ)V you read it instead of skipping it. Intuition first, then formalism, then code it — never formalism first.',
  skipTest: [
    'What does it mean geometrically for a matrix to have determinant zero?',
    'Why does the chain rule matter for neural networks?',
    'Difference between a probability and a likelihood?',
    'A p-value of 0.03 — what exactly is 0.03 the probability of?',
    'What does an eigenvector represent?',
    'Why do we divide by n−1 in sample variance?'
  ],
  skipRule: 'All six clean? Skip to Phase 2. Any hesitation on 3, 4 or 6 — do modules 1.3 and 1.4 at minimum. Those are where practitioners are quietly wrong most often.',
  modules: [
    {
      id: '1.1', title: 'Linear algebra', hours: [20, 28],
      topics: 'Vectors · matrices as transformations · determinants · eigenvectors · SVD · projections',
      resources: [
        { t: F, n: '3Blue1Brown — Essence of Linear Algebra', u: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab', d: '16 episodes, ~3 hours. Watch before anything else, twice. The best math education ever made for this purpose.' },
        { t: F, n: 'MIT 18.06 — Gilbert Strang', u: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/', d: 'Lectures 1–11, 14, 15, 21, 22, 29. Skip the rest unless enjoying it.' },
        { t: F, n: 'Mathematics for Machine Learning (free PDF)', u: 'https://mml-book.github.io/', d: 'Chapters 2, 3, 4. Your reference, not your reading.' },
        { t: P, n: 'Imperial College — Maths for ML: Linear Algebra', u: 'https://www.coursera.org/learn/linear-algebra-machine-learning', d: 'Coursera Plus $59/mo or $399/yr.', price: '$59/mo' }
      ],
      verdict: F,
      verdictText: '<b>Free — 3Blue1Brown + selected Strang + MML as reference.</b> The Imperial course teaches the same content behind a subscription. The only reason to pay is graded accountability; if that is what you need, one month of Coursera Plus timed to blitz it is defensible. Otherwise, don\'t.',
      build: 'Pure NumPy: matmul, transpose, determinant, then PCA on a real dataset computing eigenvectors of the covariance matrix yourself. Check against sklearn.'
    },
    {
      id: '1.2', title: 'Calculus', hours: [12, 18],
      topics: 'Derivatives · chain rule · partial derivatives · gradients · Jacobians',
      resources: [
        { t: F, n: '3Blue1Brown — Essence of Calculus', u: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr', d: 'Episodes 1–4 and 8 cover 90% of what matters.' },
        { t: F, n: 'Khan Academy — Multivariable Calculus', u: 'https://www.khanacademy.org/math/multivariable-calculus', d: 'Only "Derivatives of multivariable functions".' },
        { t: F, n: 'MML book, chapter 5 (Vector Calculus)', u: 'https://mml-book.github.io/', d: 'Reference.' }
      ],
      verdict: F,
      verdictText: '<b>Free, and keep it narrow.</b> The trap is doing a full calculus course. You need ~15 hours of calculus, ever, for this career. Karpathy\'s micrograd in Phase 4 will teach you more about the chain rule than any calculus course, because you implement it.',
      build: 'Gradient descent from scratch to fit a line to noisy data. Plot the loss curve. Then set the learning rate to 10 and watch it diverge — understanding why is the point.'
    },
    {
      id: '1.3', title: 'Probability', hours: [18, 26],
      topics: 'Random variables · distributions · Bayes · expectation & variance · joint/conditional/marginal · LLN & CLT',
      resources: [
        { t: F, n: 'Harvard Stat 110 — Joe Blitzstein (full lectures)', u: 'https://www.youtube.com/playlist?list=PL2SOU6wwxB0uwwH80KTQ6ht66KWxbzTIo', d: 'Lectures 1–12, 17–20, 23. Widely considered the best probability course anywhere. Course site: projects.iq.harvard.edu/stat110' },
        { t: F, n: 'Seeing Theory (Brown)', u: 'https://seeing-theory.brown.edu/', d: 'One hour of interactive visual probability before starting Stat 110.' },
        { t: F, n: 'Introduction to Probability (free PDF)', u: 'https://probabilitybook.net/', d: 'The Stat 110 textbook, free from the author.' }
      ],
      verdict: F,
      verdictText: '<b>Free. Stat 110 is not "the free option", it is the best option.</b> No paid probability course beats it. If it feels heavy, do Seeing Theory + StatQuest first and return after Phase 3 — but return.',
      build: 'Monte Carlo the Monty Hall problem. Then simulate a Bayesian A/B test: two conversion rates, compute P(B &gt; A). You will use this exact pattern on your team.'
    },
    {
      id: '1.4', title: 'Statistics & inference', hours: [20, 28],
      topics: 'Sampling distributions · CLT · confidence intervals · hypothesis testing · power · multiple comparisons · bootstrapping · MLE · Bayesian vs frequentist',
      resources: [
        { t: F, n: 'StatQuest — Statistics Fundamentals', u: 'https://www.youtube.com/@statquest', d: 'Genuinely excellent, extremely digestible, no gatekeeping.' },
        { t: F, n: 'Think Stats, 2nd ed. (free PDF)', u: 'https://greenteapress.com/thinkstats2/', d: 'Python-first statistics. Chapters 1–9.' },
        { t: F, n: 'Statistical Rethinking — McElreath lectures', u: 'https://xcelab.net/rm/', d: 'Full lecture series free on YouTube. The best statistical <i>thinking</i> course in existence.' },
        { t: P, n: 'Practical Statistics for Data Scientists, 2nd ed.', u: 'https://www.oreilly.com/library/view/practical-statistics-for/9781492072935/', d: '~350 pages, organised by "thing you will actually do".', price: '~$45' }
      ],
      verdict: 'mixed',
      verdictText: '<b>Free for the core. Buy <i>Practical Statistics for Data Scientists</i> — the one stats book worth owning.</b> It is what you grab when someone asks a question in a meeting. Watch McElreath in the background over months; his framing of causality will change how you think, and it costs nothing. <b>This module is what makes you credible on a Decision Science team.</b>',
      build: 'Public A/B dataset: compute effect size, CI and p-value by hand (scipy for arithmetic only). Bootstrap the same CI. Compute required n for 80% power. Write it up for a stakeholder — one paragraph, no jargon.'
    }
  ],
  done: 'You can read a statistical claim in a paper or a colleague\'s deck and immediately ask the right skeptical question.'
},

{
  id: 2, title: 'Data Science Core', hours: [80, 110], icon: '◫',
  tagline: 'Your team\'s native language.',
  why: 'You passed an EDA test, so parts of this are revision. Causal inference and experimentation almost certainly are not — and those are the two your team will care about most.',
  skipTest: [
    '<code>df.apply()</code> vs vectorised operations — when does the difference matter, and by how much?',
    'What is Simpson\'s paradox and how would you detect it in your data?',
    'Your A/B test is significant at p=0.04 after checking results daily for two weeks. What is wrong?',
    'Correlation vs association vs causation — a concrete example of each.',
    'What is a confounder, and name three ways to handle one.',
    'When is a time series "stationary" and why do you care?'
  ],
  modules: [
    {
      id: '2.1', title: 'NumPy, pandas & the data stack', hours: [15, 20],
      topics: 'Vectorisation · indexing · groupby · merges · method chaining · dtypes · Polars',
      resources: [
        { t: F, n: 'Kaggle Learn — Pandas & Data Cleaning', u: 'https://www.kaggle.com/learn/pandas', d: 'Short, hands-on, free.' },
        { t: F, n: 'Python Data Science Handbook (VanderPlas)', u: 'https://jakevdp.github.io/PythonDataScienceHandbook/', d: 'Free online in full. Chapters 2 and 3. Still the best pandas reference.' },
        { t: F, n: 'Effective Pandas — Matt Harrison', u: 'https://www.youtube.com/watch?v=zgbUk90aQ6A', d: 'One talk that changes how you write pandas. Method chaining, no inplace, proper dtypes.' },
        { t: F, n: 'Polars user guide', u: 'https://docs.pola.rs/', d: 'Worth 3 hours. Increasingly common, faster, cleaner API.' }
      ],
      verdict: F,
      verdictText: '<b>Free.</b> VanderPlas is free and remains the best. Do watch the Matt Harrison talk — it is the difference between writing pandas like a beginner and like someone who has shipped.',
      build: 'A genuinely messy public dataset — not Titanic, try a government open-data CSV. Clean it end to end in a single method chain. Document every decision and why.'
    },
    {
      id: '2.2', title: 'EDA & visualisation', hours: [10, 14],
      topics: 'Chart selection · colour · distributions · relationships · small multiples · narrative',
      resources: [
        { t: F, n: 'Fundamentals of Data Visualization (Wilke)', u: 'https://clauswilke.com/dataviz/', d: 'Free online in full. Chapters 1–6, 17, 19–22, 29.' },
        { t: F, n: 'Kaggle Learn — Data Visualization', u: 'https://www.kaggle.com/learn/data-visualization', d: 'Hands-on.' },
        { t: F, n: 'seaborn tutorial', u: 'https://seaborn.pydata.org/tutorial.html', d: 'Statistical plotting.' },
        { t: F, n: 'Storytelling with Data — blog', u: 'https://www.storytellingwithdata.com/blog', d: 'The blog covers most of the paid book.' }
      ],
      verdict: F,
      verdictText: '<b>Free. Wilke\'s book is free, better than the paid alternatives, and cited constantly.</b> On a Decision Science team chart literacy is a political skill as much as a technical one — the person whose slides are legible wins arguments.',
      build: 'Your cleaned dataset from 2.1 → a five-chart narrative answering one business question. Every chart must earn its place. Delete the ones that don\'t.'
    },
    {
      id: '2.3', title: 'Experimentation & A/B testing', hours: [15, 20],
      topics: 'Randomisation · sample size & power · guardrail metrics · peeking · CUPED · interference · switchbacks · SRM · novelty effects',
      resources: [
        { t: F, n: 'Kohavi\'s ExP papers & talks', u: 'https://exp-platform.com/', d: 'Read "Five Puzzling Outcomes Explained" and "Seven Rules of Thumb for Web Site Experimenters".' },
        { t: F, n: 'Evan Miller — How Not to Run an A/B Test', u: 'https://www.evanmiller.org/how-not-to-run-an-ab-test.html', d: 'The single best 10-minute read on peeking. Plus his sample-size tools.' },
        { t: F, n: 'Netflix Tech Blog — experimentation', u: 'https://netflixtechblog.com/tagged/experimentation', d: 'Real practice at scale, free.' },
        { t: P, n: 'Trustworthy Online Controlled Experiments — Kohavi, Tang & Xu', u: 'https://experimentguide.com/', d: 'Chapters 1–4, 17–19, 22.', price: '~$50' }
      ],
      verdict: P,
      verdictText: '<b>Buy the Kohavi book. One of the four things worth paying for.</b> Written by the people who built experimentation at Microsoft, LinkedIn, Google and Amazon. Nothing free is close on completeness. It will make you the person who catches the flaw in someone else\'s test design — exactly the reputation you want.',
      build: 'A reusable experiment analysis module: assignments + outcomes in, returns effect size, CI, p-value, achieved power and an SRM check. Add CUPED. Use it on real work.'
    },
    {
      id: '2.4', title: 'Causal inference', hours: [20, 28], flag: 'Highest leverage in this document',
      topics: 'Potential outcomes · DAGs · backdoor criterion · propensity matching · IPW · diff-in-diff · RDD · instrumental variables · synthetic control · uplift/CATE · double ML',
      resources: [
        { t: F, n: 'Causal Inference for the Brave and True', u: 'https://matheusfacure.github.io/python-causality-handbook/landing-page.html', d: 'Free online book, Python, genuinely delightful. Part I entirely, then Part II ML chapters. Start here.' },
        { t: F, n: 'Brady Neal — Introduction to Causal Inference', u: 'https://www.bradyneal.com/causal-inference-course', d: 'Free course + free book. More formal than Facure; they complement perfectly.' },
        { t: F, n: 'Causal Inference: The Mixtape', u: 'https://mixtape.scunning.com/', d: 'Free online. Strong on DiD, RDD and IV with real examples.' },
        { t: F, n: 'The Effect — Huntington-Klein', u: 'https://theeffectbook.net/', d: 'Free online. Excellent on research design intuition.' },
        { t: F, n: 'EconML & DoWhy', u: 'https://www.pywhy.org/dowhy/', d: 'Microsoft\'s causal ML libraries. Work the example notebooks.' }
      ],
      verdict: F,
      verdictText: '<b>Entirely free, and world-class.</b> Causal inference has an unusually generous open-access culture — four complete textbooks are free online. Facure first, then Brady Neal, then Mixtape. There is genuinely nothing to buy. <b>This is the module most AI engineers have never touched, and it is where business decisions actually get made or broken.</b>',
      build: 'An observational dataset. Draw the DAG. Estimate the treatment effect three ways — naive, propensity matching, double ML. Explain why the numbers differ. This one project makes you visibly useful.'
    },
    {
      id: '2.5', title: 'Time series & forecasting', hours: [12, 18],
      topics: 'Stationarity · decomposition · ETS · ARIMA · cross-validation for time · hierarchical forecasts · ML for forecasting',
      resources: [
        { t: F, n: 'Forecasting: Principles and Practice, 3rd ed.', u: 'https://otexts.com/fpp3/', d: 'Free online in full. The field standard. Chapters 1–9.' },
        { t: F, n: 'FPP — Python companion', u: 'https://otexts.com/fpppy/', d: 'Same concepts in Python.' },
        { t: F, n: 'Nixtla StatsForecast', u: 'https://nixtlaverse.nixtla.io/statsforecast/index.html', d: 'Modern, fast Python forecasting.' },
        { t: F, n: 'Kaggle Learn — Time Series', u: 'https://www.kaggle.com/learn/time-series', d: 'Practical feature engineering for time.' }
      ],
      verdict: F,
      verdictText: '<b>Free. Hyndman\'s book is the field standard and it is free.</b> Skip paid forecasting courses entirely. Note that in 2026 the practical default for many forecasting problems is still gradient boosting with good features, not deep learning — FPP3 teaches you enough to know when that is true.',
      build: 'Forecast something with real stakes. Compare a naive baseline, ETS/ARIMA and LightGBM with lag features. The baseline comparison is the lesson: most fancy models lose to a good baseline.'
    }
  ],
  done: 'You can take a business question, design the analysis, execute it, and defend the causal claim you are making.'
},

{
  id: 3, title: 'Classical Machine Learning', hours: [100, 130], icon: '◈',
  tagline: '70% of real "AI" work is still this.',
  why: 'Resist the urge to skip to LLMs. A large share of production AI value in 2026 is gradient boosting on tabular data, and knowing when <i>not</i> to use an LLM is a senior skill.',
  skipTest: [
    'Why does random forest reduce variance but not bias much?',
    'You have 99% accuracy on a fraud dataset. Why might that be terrible?',
    'What is target leakage? Give three ways it sneaks in.',
    'Explain bias–variance in terms of model capacity.',
    'When would you use L1 over L2 regularisation?',
    'What does XGBoost do differently from a plain GBM?'
  ],
  modules: [
    {
      id: '3.1', title: 'ML foundations & supervised learning', hours: [30, 40],
      topics: 'Linear & logistic regression · regularisation · kNN · SVM · Naive Bayes · the ML workflow',
      resources: [
        { t: F, n: 'Andrew Ng — Machine Learning Specialization (audit)', u: 'https://www.coursera.org/specializations/machine-learning-introduction', d: 'The canonical starting point. Audit is free per course; Coursera has tightened this, so check before assuming.' },
        { t: F, n: 'StatQuest ML playlist', u: 'https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF', d: 'Every classical algorithm, visually. Use whenever Ng\'s math loses you.' },
        { t: F, n: 'scikit-learn User Guide', u: 'https://scikit-learn.org/stable/user_guide.html', d: 'Sections 1, 3, 6. One of the best-written ML documents anywhere.' },
        { t: F, n: 'Google ML Crash Course', u: 'https://developers.google.com/machine-learning/crash-course', d: 'Free, updated, fast.' },
        { t: P, n: 'Hands-On Machine Learning, 3rd ed. — Géron', u: 'https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/', d: 'Released March 2026. Chapters 1–9 in this phase; 10+ belong to Phase 4.', price: '~$65' }
      ],
      verdict: 'mixed',
      verdictText: '<b>Free for the course (Ng, audited) + buy Géron. The second of the four things worth paying for.</b> Géron 3rd ed is current — it covers transformers and diffusion. You will reference it for years. If auditing Ng proves restricted, one month of Coursera Plus to blitz it is a reasonable ~$59; do not subscribe for a year.<br><br><b>On fast.ai:</b> free and excellent, but top-down — it belongs in Phase 4. Doing it before classical ML tends to produce people who can train models but cannot debug them.',
      build: 'End-to-end tabular project: proper splits, baseline, feature engineering, CV model selection, error analysis. Write up the error analysis — everyone skips it and it is the part that matters.'
    },
    {
      id: '3.2', title: 'Trees, ensembles & gradient boosting', hours: [15, 20],
      topics: 'Decision trees · bagging · random forests · AdaBoost · gradient boosting · XGBoost/LightGBM/CatBoost · tuning',
      resources: [
        { t: F, n: 'XGBoost — Introduction to Boosted Trees', u: 'https://xgboost.readthedocs.io/en/stable/tutorials/model.html', d: 'The clearest explanation of the algorithm anywhere.' },
        { t: F, n: 'LightGBM docs', u: 'https://lightgbm.readthedocs.io/', d: 'Features and Parameters Tuning pages.' },
        { t: F, n: 'CatBoost docs', u: 'https://catboost.ai/docs/', d: 'Its categorical handling is genuinely different.' },
        { t: F, n: 'StatQuest XGBoost series', u: 'https://www.youtube.com/playlist?list=PLblh5JKOoLUJjeXUvUE0maghNuY2_5fY6', d: 'Four videos, complete derivation, painless.' }
      ],
      verdict: F,
      verdictText: '<b>Free. Docs plus StatQuest is a complete education here.</b> No book or course explains boosting better than the XGBoost docs and Josh Starmer.',
      build: 'Enter a live Kaggle tabular competition. Not to win — to see where your baseline lands versus the leaderboard, then read the top public notebooks for what you did not think of.'
    },
    {
      id: '3.3', title: 'Unsupervised & dimensionality reduction', hours: [10, 14],
      topics: 'k-means and its failure modes · hierarchical · DBSCAN · GMM · PCA properly · t-SNE & UMAP · anomaly detection',
      resources: [
        { t: F, n: 'scikit-learn — Unsupervised learning', u: 'https://scikit-learn.org/stable/unsupervised_learning.html', d: 'Section 2 of the user guide.' },
        { t: F, n: 'Distill — How to Use t-SNE Effectively', u: 'https://distill.pub/2016/misread-tsne/', d: 'Interactive and important. Most people misread t-SNE plots.' },
        { t: F, n: 'How UMAP Works', u: 'https://umap-learn.readthedocs.io/en/latest/how_umap_works.html', d: 'The theory, readably.' }
      ],
      verdict: F,
      verdictText: '<b>Free.</b> Nothing paid beats the sklearn guide plus the Distill article.',
      build: 'Customer segmentation on real data. Defend your choice of k to an imaginary skeptical stakeholder. Then show what happens with k±3. Clustering is easy; justifying clustering is the skill.'
    },
    {
      id: '3.4', title: 'Evaluation & the ways you fool yourself', hours: [18, 24], flag: 'Most underrated module in Phase 3',
      topics: 'Train/val/test discipline · CV variants · time & group splits · target leakage · train-serve skew · imbalanced metrics · ROC vs PR · calibration · threshold as a business decision',
      resources: [
        { t: F, n: 'Google — Rules of Machine Learning', u: 'https://developers.google.com/machine-learning/guides/rules-of-ml', d: '43 rules from Google\'s practice. Read it twice — the most practically useful free document in ML.' },
        { t: F, n: 'scikit-learn — Model evaluation', u: 'https://scikit-learn.org/stable/modules/model_evaluation.html', d: 'Plus the probability calibration page.' },
        { t: F, n: 'Made With ML — Goku Mohandas', u: 'https://madewithml.com/', d: 'Free, production-focused.' }
      ],
      verdict: F,
      verdictText: '<b>Free. Read Google\'s Rules of ML today, even out of order.</b> Thirty minutes, and it changes how you approach every project in this document.',
      build: 'Deliberately build a leaky model — one that hits 0.99 AUC through leakage. Find the leak. Fix it. Document what the honest number was. Do this once and you will spot leakage forever.'
    },
    {
      id: '3.5', title: 'Feature engineering & interpretability', hours: [15, 20],
      topics: 'Encoding · scaling · interactions · target encoding · SHAP · LIME · PDPs · permutation importance',
      resources: [
        { t: F, n: 'Interpretable Machine Learning — Molnar', u: 'https://christophm.github.io/interpretable-ml-book/', d: 'Free online in full. Chapters 5, 6, 8, 9. The reference practitioners actually cite.' },
        { t: F, n: 'Feature Engineering A-Z', u: 'https://feaz-book.com/', d: 'Free online reference.' },
        { t: F, n: 'SHAP documentation', u: 'https://shap.readthedocs.io/en/latest/', d: 'Work the tabular examples.' }
      ],
      verdict: F,
      verdictText: '<b>Free. Molnar is free and is the reference.</b> Skip the paid feature-engineering books — the free resources have caught up. Interpretability matters more than usual on a Decision Science team, because your outputs feed human decisions and someone will ask "why did the model say that". Have an answer.',
      build: 'SHAP analysis on your best model from 3.1. Find one feature whose importance surprises you and investigate. Nine times out of ten you will discover a data problem — that is the point.'
    }
  ],
  done: 'You can be handed a tabular business problem and deliver a defensible, well-evaluated, explainable model without a tutorial.'
},

{
  id: 4, title: 'Deep Learning', hours: [90, 120], icon: '◉',
  tagline: 'The substrate under every LLM.',
  why: 'Now it gets fun, and now you will be glad you did the math. Module 4.1 is the single most important module in this entire document.',
  skipTest: [
    'Implement backpropagation for a two-layer MLP on paper. Can you?',
    'Why does batch normalisation help — and what is the debate about <i>why</i>?',
    'What is the vanishing gradient problem? Name three things that address it.',
    'In PyTorch, what does <code>loss.backward()</code> actually do to the computation graph?',
    'Why is Adam usually better than SGD, and when is it not?',
    'Difference between <code>model.eval()</code> and <code>torch.no_grad()</code>?'
  ],
  modules: [
    {
      id: '4.1', title: 'Neural networks from scratch', hours: [25, 35], flag: 'The most important module here',
      topics: 'micrograd · autograd from scratch · backprop by hand · MLPs · activations & gradients · BatchNorm · WaveNet',
      resources: [
        { t: F, n: 'Karpathy — Neural Networks: Zero to Hero', u: 'https://karpathy.ai/zero-to-hero.html', d: 'Do lectures 1–6 here (7 and 8 are Phase 5).' },
        { t: F, n: 'L1: building micrograd (2h25m)', u: 'https://youtu.be/VMj-3S1tku0', d: 'Backpropagation, spelled out.' },
        { t: F, n: 'L2: building makemore (1h57m)', u: 'https://youtu.be/PaCmpygFfXo', d: 'Language modelling, bigrams.' },
        { t: F, n: 'L3: makemore Part 2 — MLP (1h15m)', u: 'https://youtu.be/TCH_1BHY58I', d: 'Embeddings and MLPs.' },
        { t: F, n: 'L4: Activations, Gradients, BatchNorm (1h55m)', u: 'https://youtu.be/P6sfmUTpUmc', d: 'Why training works or doesn\'t.' },
        { t: F, n: 'L5: Becoming a Backprop Ninja (1h55m)', u: 'https://youtu.be/q8SA3rM6ckI', d: 'Brutal. Skippable on a first pass — but come back. It is a rite of passage.' },
        { t: F, n: 'L6: Building a WaveNet (56m)', u: 'https://youtu.be/t3YJ5hKiMQ0', d: 'Deeper architectures.' },
        { t: F, n: 'nn-zero-to-hero code', u: 'https://github.com/karpathy/nn-zero-to-hero', d: 'All notebooks.' },
        { t: F, n: 'Neural Networks and Deep Learning — Nielsen', u: 'http://neuralnetworksanddeeplearning.com/', d: 'Free book. Chapters 1–3 are the best prose explanation of backprop.' }
      ],
      verdict: F,
      verdictText: '<b>Free, and it is not close. Karpathy\'s course is the best deep learning education that exists at any price.</b> Type every line yourself. Do not watch passively, do not copy-paste — pause, try to write the next line, then compare.',
      build: 'Rebuild micrograd from scratch, from memory, a week after finishing lecture 1. Then makemore. If you can rebuild micrograd without notes, you understand backpropagation.'
    },
    {
      id: '4.2', title: 'PyTorch properly', hours: [15, 20],
      topics: 'Tensors · autograd · nn.Module · DataLoader · training loops · GPU · einops · saving/loading',
      resources: [
        { t: F, n: 'Official PyTorch tutorials', u: 'https://pytorch.org/tutorials/', d: 'Learn the Basics + PyTorch Recipes.' },
        { t: F, n: 'Learn PyTorch for Deep Learning — Bourke', u: 'https://www.learnpytorch.io/', d: 'Free book plus a 25-hour YouTube course. Extremely thorough.' },
        { t: F, n: 'Karpathy — A Recipe for Training Neural Networks', u: 'https://karpathy.github.io/2019/04/25/recipe/', d: 'Read before your first real training run. Saves weeks.' },
        { t: F, n: 'einops', u: 'https://einops.rocks/', d: 'Makes tensor manipulation readable. CS336 uses it throughout.' }
      ],
      verdict: F,
      verdictText: '<b>Free.</b> Learn PyTorch, not TensorFlow — in 2026 research and most of the LLM ecosystem is PyTorch. Learn TF only if a job requires it.',
      build: 'Reimplement your Phase 3 tabular model as a PyTorch net. Compare to gradient boosting. It will probably lose. Understanding <i>why</i> it loses on tabular data is worth more than the model.'
    },
    {
      id: '4.3', title: 'Training craft', hours: [15, 20],
      topics: 'Initialisation · SGD/momentum/Adam/AdamW · LR schedules & warmup · dropout, weight decay, early stopping · normalisation · gradient clipping · mixed precision · debugging runs',
      resources: [
        { t: F, n: 'Google — Deep Learning Tuning Playbook', u: 'https://github.com/google-research/tuning_playbook', d: 'From Google Brain researchers. Comprehensive and opinionated. Read it fully.' },
        { t: F, n: 'Weights & Biases courses', u: 'https://www.wandb.courses/', d: 'Experiment tracking, free for personal use.' },
        { t: F, n: 'Distill — Why Momentum Really Works', u: 'https://distill.pub/2017/momentum/', d: 'Interactive.' }
      ],
      verdict: F,
      verdictText: '<b>Free. The Tuning Playbook is the best resource on this topic and it costs nothing.</b> This module separates people who can run a training script from people who can fix one.',
      build: 'Take a model training badly on purpose — bad LR, no normalisation. Diagnose and fix it systematically, logging every experiment to W&B. Write up what you changed and what happened.'
    },
    {
      id: '4.4', title: 'Computer vision essentials', hours: [12, 18],
      topics: 'Convolutions · pooling · classic architectures · transfer learning · augmentation',
      resources: [
        { t: F, n: 'Stanford CS231n', u: 'https://cs231n.stanford.edu/', d: 'Notes are free and legendary. Focus on CNN and training sections.' },
        { t: F, n: 'fast.ai — Practical Deep Learning, Part 1', u: 'https://course.fast.ai/', d: 'Now is when fast.ai makes sense, after Karpathy. Lessons 1–5.' },
        { t: F, n: 'HF Computer Vision Course', u: 'https://huggingface.co/learn/computer-vision-course', d: 'Free and current.' }
      ],
      verdict: F,
      verdictText: '<b>Free. CS231n notes + fast.ai.</b> Keep this tight — you need CNN intuition and transfer learning, not a vision specialisation. Two weeks maximum.',
      build: 'Fine-tune a pretrained vision model on a dataset you assemble yourself. Photos from your phone are fine — the data collection is deliberately part of the exercise.'
    },
    {
      id: '4.5', title: 'Sequence models & the road to attention', hours: [12, 18],
      topics: 'RNNs · LSTMs · GRUs · seq2seq · the encoder-decoder bottleneck · why attention was invented',
      resources: [
        { t: F, n: 'Karpathy — Unreasonable Effectiveness of RNNs', u: 'https://karpathy.github.io/2015/05/21/rnn-effectiveness/', d: 'Historical but foundational.' },
        { t: F, n: 'Chris Olah — Understanding LSTMs', u: 'https://colah.github.io/posts/2015-08-Understanding-LSTMs/', d: 'The canonical explanation.' },
        { t: F, n: 'Dive into Deep Learning (d2l.ai)', u: 'https://d2l.ai/', d: 'Free, complete, interactive, PyTorch. Chapters 9 and 10.' }
      ],
      verdict: F,
      verdictText: '<b>Free, and deliberately short.</b> RNNs are largely historical. You are learning them to understand <i>why</i> transformers exist — the seq2seq bottleneck is the setup for attention, and attention is the whole ballgame.',
      build: 'Character-level RNN, then the same task with an LSTM. Observe where the plain RNN fails on long sequences.'
    }
  ],
  done: 'You can implement a neural network from scratch, train it competently in PyTorch, debug a failing run, and explain why attention was necessary.'
},

{
  id: 5, title: 'NLP → Transformers', hours: [70, 100], icon: '⌬',
  tagline: 'Where LLMs actually come from.',
  why: 'The bridge. This is where "AI engineer" starts meaning something specific. Module 5.2 is a gate — do not pass it until you can implement a transformer from memory.',
  skipTest: [
    'Why does self-attention scale by 1/√dₖ?',
    'Difference between BERT\'s and GPT\'s pretraining objectives?',
    'What is a KV cache and why does it exist?',
    'Why do transformers need positional encodings when RNNs don\'t?',
    'Difference between multi-head attention and grouped-query attention?',
    'Explain BPE. Why do LLMs struggle to count letters in a word?'
  ],
  modules: [
    {
      id: '5.1', title: 'Classical NLP & embeddings', hours: [12, 18],
      topics: 'Bag of words · TF-IDF · word2vec · GloVe · fastText · embedding spaces · cosine similarity · polysemy',
      resources: [
        { t: F, n: 'Speech and Language Processing, 3rd ed. — Jurafsky & Martin', u: 'https://web.stanford.edu/~jurafsky/slp3/', d: 'Free PDF, the field\'s standard textbook. Chapters 2, 6, 7.' },
        { t: F, n: 'Stanford CS224N', u: 'https://web.stanford.edu/class/cs224n/', d: 'Lectures free on YouTube. Lectures 1–3 for embeddings.' },
        { t: F, n: 'The Illustrated Word2Vec — Alammar', u: 'https://jalammar.github.io/illustrated-word2vec/', d: 'Visual and clear.' }
      ],
      verdict: F,
      verdictText: '<b>Free. Jurafsky & Martin is free and it is the textbook.</b> Keep this short — it is history that makes the present legible.',
      build: 'Train word2vec on a corpus you care about — your team\'s docs, a subreddit dump. Explore the space. Find the analogies. Find where it fails.'
    },
    {
      id: '5.2', title: 'The Transformer, understood completely', hours: [25, 35], flag: 'The gate — everything after assumes this',
      topics: 'Self-attention · scaled dot-product · multi-head · positional encoding · layer norm · residuals · encoder vs decoder · causal masking · KV cache',
      resources: [
        { t: F, n: 'Attention Is All You Need (the paper)', u: 'https://arxiv.org/abs/1706.03762', d: 'Eight pages. You will not understand it on the first read. That is expected.' },
        { t: F, n: 'The Illustrated Transformer — Alammar', u: 'https://jalammar.github.io/illustrated-transformer/', d: 'The best visual explanation ever written. Read before and after the paper.' },
        { t: F, n: 'Karpathy — Let\'s build GPT (1h56m)', u: 'https://www.youtube.com/watch?v=kCc8FmEb1nY', d: 'Build nanoGPT with him. Code along.' },
        { t: F, n: 'The Annotated Transformer — Harvard NLP', u: 'https://nlp.seas.harvard.edu/annotated-transformer/', d: 'The paper, line by line, with working code.' },
        { t: F, n: '3Blue1Brown — Attention, visually explained', u: 'https://www.youtube.com/watch?v=eMlx5fFNoYc', d: 'Plus chapters 5–7 of the neural network series.' },
        { t: F, n: 'nanoGPT', u: 'https://github.com/karpathy/nanoGPT', d: 'Minimal, readable GPT.' }
      ],
      verdict: F,
      verdictText: '<b>Free, overwhelmingly. This topic has the best free material of any topic in AI.</b> Sequence: Illustrated Transformer → Karpathy\'s Let\'s build GPT (code along) → the paper → Annotated Transformer → the paper again. That loop beats any paid course.',
      build: 'Implement a transformer from scratch in PyTorch, from memory, without looking at Karpathy\'s code. Multi-head attention, positional encoding, layer norm, residuals. Train it on a small corpus. <b>The most credible thing you can put on a CV at this stage.</b>'
    },
    {
      id: '5.3', title: 'Tokenization', hours: [8, 12],
      topics: 'BPE · WordPiece · SentencePiece · vocabulary size · special tokens · why tokenization causes weird bugs',
      resources: [
        { t: F, n: 'Karpathy — Let\'s build the GPT Tokenizer (2h13m)', u: 'https://youtu.be/zduSFxRajkE', d: 'BPE from scratch.' },
        { t: F, n: 'HF LLM Course — Tokenizers chapter', u: 'https://huggingface.co/learn/llm-course/chapter6/1', d: 'Practical.' },
        { t: F, n: 'Tiktokenizer', u: 'https://tiktokenizer.vercel.app/', d: 'Visualise how different models tokenize. Twenty minutes of play is genuinely illuminating.' }
      ],
      verdict: F,
      verdictText: '<b>Free.</b> Underrated — half the weird LLM failures you will debug are tokenization artifacts. Karpathy\'s lecture explains a class of production bugs you would otherwise spend years being confused by.',
      build: 'Implement BPE from scratch. Then take a prompt that behaves strangely and diagnose it via its tokenization.'
    },
    {
      id: '5.4', title: 'Model families & the Hugging Face ecosystem', hours: [20, 28],
      topics: 'BERT & encoders · GPT & decoders · T5 · when each is right · transformers, datasets, tokenizers, accelerate, PEFT · the Hub · model cards',
      resources: [
        { t: F, n: 'Hugging Face LLM Course', u: 'https://huggingface.co/learn/llm-course/', d: 'Free, official, excellent. Chapters 1–7. Your practical foundation for everything that follows.' },
        { t: F, n: 'The Illustrated BERT', u: 'https://jalammar.github.io/illustrated-bert/', d: 'Plus Illustrated GPT-2.' },
        { t: F, n: 'HF Transformers docs', u: 'https://huggingface.co/docs/transformers/index', d: 'Reference.' }
      ],
      verdict: F,
      verdictText: '<b>Free. The HF course is the industry-standard onboarding and it costs nothing.</b> Do all of it — the Hugging Face ecosystem is infrastructure you will use daily.',
      build: 'Fine-tune BERT for a classification task relevant to your team. Deploy behind a FastAPI endpoint. Measure latency. Now you have touched the full loop once.'
    }
  ],
  done: 'You can implement a transformer from memory and explain every architectural choice in it.'
},

{
  id: 6, title: 'Large Language Models', hours: [120, 160], icon: '◆',
  tagline: 'The core of your job.',
  why: 'This phase is long because it is the one that matters most. By the end you can take a business problem to a working, evaluated, cost-analysed LLM solution and defend every choice.',
  skipTest: [
    'What are scaling laws, and what did Chinchilla change?',
    'SFT vs RLHF vs DPO — when would you use each?',
    'What does temperature actually do to the logits? What about top-p?',
    'Why is LoRA memory-efficient? What is the rank hyperparameter doing?',
    'What is continuous batching and why does it matter for throughput?',
    'How would you evaluate a summarisation model without human labels?'
  ],
  modules: [
    {
      id: '6.1', title: 'Build an LLM from scratch', hours: [30, 40],
      topics: 'Architecture · data pipeline · pretraining loop · systems · the full stack, implemented',
      resources: [
        { t: F, n: 'Stanford CS336 — Language Modeling from Scratch (Spring 2026)', u: 'https://www.youtube.com/playlist?list=PLoROMvodv4rMqXOcazWaTUHhq-yembLCV', d: 'Hashimoto & Liang. The best LLM course in existence, free on YouTube.' },
        { t: F, n: 'CS336 course site & assignments', u: 'https://stanford-cs336.github.io/', d: 'Tokenization, architecture, training, data, scaling, inference, alignment — implementation-first.' },
        { t: F, n: 'LLMs-from-scratch code repo (Raschka)', u: 'https://github.com/rasbt/LLMs-from-scratch', d: 'Fully open even if you do not buy the book.' },
        { t: F, n: 'modded-nanogpt', u: 'https://github.com/KellerJordan/modded-nanogpt', d: 'A GPT-2 training speedrun repo. Reading its history is a masterclass.' },
        { t: P, n: 'Build a Large Language Model (From Scratch) — Raschka', u: 'https://www.manning.com/books/build-a-large-language-model-from-scratch', d: 'Chapters 1–7, complete.', price: '~$50' },
        { t: P, n: 'Hands-On Large Language Models — Alammar & Grootendorst', u: 'https://www.oreilly.com/library/view/hands-on-large-language/9781098150952/', d: 'Heavily illustrated, more applied.', price: '~$60' }
      ],
      verdict: 'mixed',
      verdictText: '<b>CS336 free (do it), and buy Raschka. The third of the four things worth paying for.</b> CS336 is graduate-level and assumes CS224N; if it is too fast, Raschka is the gentler path to the same place and the code repo is free to explore first. Ideally read Raschka while watching CS336 — same ground, different altitudes. Buy Alammar <i>instead</i> if you learn better from pictures than code.',
      build: 'Train a small language model from scratch on a corpus you assembled. It will be bad. Training it is the point. Write up your loss curves and what you would do with 100× the compute.'
    },
    {
      id: '6.2', title: 'Pretraining, data & scaling laws', hours: [10, 15],
      topics: 'Compute-optimal scaling · data quality & filtering · deduplication · curriculum · emergent abilities',
      resources: [
        { t: F, n: 'Chinchilla — Training Compute-Optimal LLMs', u: 'https://arxiv.org/abs/2203.15556', d: 'Changed how everyone allocates compute.' },
        { t: F, n: 'Kaplan et al. — Scaling Laws', u: 'https://arxiv.org/abs/2001.08361', d: 'The original.' },
        { t: F, n: 'The Llama 3 Herd of Models', u: 'https://arxiv.org/abs/2407.21783', d: 'The most detailed public account of how a frontier model gets built. Read it as a systems document.' },
        { t: F, n: 'FineWeb — how pretraining data is filtered', u: 'https://huggingface.co/spaces/HuggingFaceFW/blogpost-fineweb-v1', d: 'Genuinely eye-opening.' }
      ],
      verdict: F,
      verdictText: '<b>Free — papers and blog posts only.</b> No course covers this better than the primary sources. This is where your "one paper a week" habit starts paying off.',
      build: 'Write a one-page summary of the Llama 3 paper as if briefing your team: what they did, what surprised you, what you would steal.'
    },
    {
      id: '6.3', title: 'Prompt engineering, done seriously', hours: [12, 18],
      topics: 'Systematic construction · few-shot · chain-of-thought · self-consistency · ReAct · structured prompts · versioning · measuring prompts',
      resources: [
        { t: F, n: 'Anthropic Academy', u: 'https://anthropic.skilljar.com/', d: 'Free, launched March 2026. Do Prompt Engineering and Building with the Claude API.' },
        { t: F, n: 'Anthropic prompt engineering docs', u: 'https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview', d: 'Including the interactive tutorial. Best in class.' },
        { t: F, n: 'OpenAI prompt engineering guide', u: 'https://platform.openai.com/docs/guides/prompt-engineering', d: 'Six core strategies.' },
        { t: F, n: 'DAIR.AI Prompting Guide', u: 'https://www.promptingguide.ai/', d: 'Comprehensive, with source papers linked.' },
        { t: F, n: 'Chain-of-Thought paper', u: 'https://arxiv.org/abs/2201.11903', d: 'Plus Self-Consistency, ReAct, Tree of Thoughts.' }
      ],
      verdict: F,
      verdictText: '<b>Free, absolutely. Never pay for a prompt engineering course.</b> Anthropic\'s and OpenAI\'s own materials are the best available, free, and updated as the models change. Anything sold is a repackaging of these, already out of date.',
      build: 'A real task at work. Build a prompt. Then build an eval set of 20 examples and measure it. Then improve and measure again. <b>The measuring is the skill</b> — it is what makes you an engineer rather than a prompt hobbyist.'
    },
    {
      id: '6.4', title: 'Structured output & function calling', hours: [10, 14],
      topics: 'Tool/function calling · JSON mode · constrained generation · Pydantic validation · retry strategies',
      resources: [
        { t: F, n: 'Anthropic tool use docs', u: 'https://docs.claude.com/en/docs/agents-and-tools/tool-use/overview', d: 'The canonical reference.' },
        { t: F, n: 'OpenAI function calling', u: 'https://platform.openai.com/docs/guides/function-calling', d: 'Equivalent for OpenAI models.' },
        { t: F, n: 'Instructor', u: 'https://python.useinstructor.com/', d: 'Structured extraction with Pydantic. Docs double as a mini-course in the patterns.' },
        { t: F, n: 'Outlines', u: 'https://dottxt-ai.github.io/outlines/', d: 'Constrained generation — guaranteed valid JSON via grammars.' },
        { t: F, n: 'Pydantic AI', u: 'https://ai.pydantic.dev/', d: 'Type-safe agents, clean design.' }
      ],
      verdict: F,
      verdictText: '<b>Free.</b> This is where your Phase 0.4 Pydantic work pays off. Structured output is the plumbing of every production LLM system — invest here.',
      build: 'An extraction pipeline: unstructured documents in, validated Pydantic objects out, retry on validation failure, and a measured success rate.'
    },
    {
      id: '6.5', title: 'Fine-tuning & PEFT', hours: [20, 28],
      topics: 'Fine-tune vs prompt vs RAG · dataset construction · SFT · LoRA · QLoRA · quantization (GGUF/AWQ/GPTQ) · catastrophic forgetting',
      resources: [
        { t: F, n: 'Unsloth docs & free Colab notebooks', u: 'https://docs.unsloth.ai/', d: 'The fastest path from zero to a working fine-tune, on a free GPU.' },
        { t: F, n: 'HF PEFT docs', u: 'https://huggingface.co/docs/peft/index', d: 'Plus LLM Course chapter 11.' },
        { t: F, n: 'LoRA paper', u: 'https://arxiv.org/abs/2106.09685', d: 'And the QLoRA paper.' },
        { t: F, n: 'Axolotl', u: 'https://docs.axolotl.ai/', d: 'YAML-driven fine-tuning — what many teams actually use.' },
        { t: F, n: 'Raschka — practical LoRA tips', u: 'https://magazine.sebastianraschka.com/p/practical-tips-for-finetuning-llms', d: 'Hyperparameter guidance from real experiments.' },
        { t: F, n: 'HF smol course', u: 'https://huggingface.co/learn/smol-course/', d: 'Post-training on small models, modest hardware.' },
        { t: P, n: 'Compute: Colab Pro or rented GPU hours', u: 'https://colab.research.google.com/signup', d: 'Budget ~$10–50 so you actually run a fine-tune instead of reading about one.', price: '~$10–50' }
      ],
      verdict: 'mixed',
      verdictText: '<b>Free education — but spend on compute.</b> Unsloth\'s free notebooks plus HF docs are complete. The money goes to GPU time. <b>This is the compute line item from the four things worth paying for, and it is the highest return per dollar in the whole roadmap.</b>',
      build: 'Fine-tune a small open model (Llama 3.2 3B, Qwen 3B) on a task where the base model genuinely fails. Measure before and after on a held-out set. If you cannot show the improvement numerically, you have not finished.'
    },
    {
      id: '6.6', title: 'Alignment & post-training', hours: [15, 20],
      topics: 'RLHF · reward models · PPO · DPO · GRPO · RLVR · constitutional AI · why reasoning models work',
      resources: [
        { t: F, n: 'Nathan Lambert — The RLHF Book', u: 'https://rlhfbook.com/', d: 'Free online, actively maintained. The best single resource on this topic.' },
        { t: F, n: 'HuggingFace RLHF blog post', u: 'https://huggingface.co/blog/rlhf', d: 'The clearest intro.' },
        { t: F, n: 'InstructGPT paper', u: 'https://arxiv.org/abs/2203.02155', d: 'The paper that made ChatGPT possible.' },
        { t: F, n: 'DPO paper', u: 'https://arxiv.org/abs/2305.18290', d: 'Simpler than PPO, widely used now.' },
        { t: F, n: 'DeepSeek-R1 paper', u: 'https://arxiv.org/abs/2501.12948', d: 'GRPO and RL for reasoning. One of the most important papers of the last two years.' },
        { t: F, n: 'HF TRL library', u: 'https://huggingface.co/docs/trl/index', d: 'SFT, DPO and GRPO trainers.' }
      ],
      verdict: F,
      verdictText: '<b>Free. Lambert\'s RLHF Book is free and is the best resource on this topic.</b> Most engineers never do post-training themselves, but understanding it is what lets you reason about <i>why</i> models behave as they do. Read DeepSeek-R1 carefully — it is the clearest public window into how modern reasoning models are made.',
      build: 'Run DPO on a small model using TRL with a preference dataset. Even a toy run teaches you what the pipeline actually looks like.'
    },
    {
      id: '6.7', title: 'Inference, serving & optimization', hours: [12, 18],
      topics: 'KV caching · continuous batching · PagedAttention · speculative decoding · quantization · Flash Attention · throughput vs latency · cost per token · prompt caching',
      resources: [
        { t: F, n: 'vLLM documentation', u: 'https://docs.vllm.ai/', d: 'The standard open-source serving engine. Read the design docs, not just the quickstart.' },
        { t: F, n: 'PagedAttention / vLLM paper', u: 'https://arxiv.org/abs/2309.06180', d: 'Why vLLM is fast.' },
        { t: F, n: 'Flash Attention paper', u: 'https://arxiv.org/abs/2205.14135', d: 'IO-aware attention.' },
        { t: F, n: 'Ollama & llama.cpp', u: 'https://ollama.com/', d: 'Run a model on your own laptop. The intuition it builds is disproportionate.' },
        { t: F, n: 'Anthropic prompt caching docs', u: 'https://docs.claude.com/en/docs/build-with-claude/prompt-caching', d: 'An immediate, large cost lever on real systems.' }
      ],
      verdict: F,
      verdictText: '<b>Free — docs and papers.</b> Serving is where AI engineering meets systems engineering, and where a lot of people stop being able to keep up. Do not stop here — get genuinely strong, because few people are.',
      build: 'Serve an open model with vLLM. Load test it. Measure tokens/sec, time-to-first-token and cost per 1M tokens. Then tune batching and measure again.'
    },
    {
      id: '6.8', title: 'LLM evaluation', hours: [15, 20], flag: 'Most underrated skill in AI engineering',
      topics: 'Benchmarks and their limits · task-specific evals · golden datasets · LLM-as-judge and its biases · pairwise comparison · rubrics · regression testing · eval-driven development',
      resources: [
        { t: F, n: 'Hamel Husain — Your AI Product Needs Evals', u: 'https://hamel.dev/blog/posts/evals/', d: 'The best practical material on LLM evaluation anywhere. Free.' },
        { t: F, n: 'Eugene Yan — LLM evaluators', u: 'https://eugeneyan.com/writing/llm-evaluators/', d: 'Consistently excellent.' },
        { t: F, n: 'promptfoo', u: 'https://www.promptfoo.dev/docs/intro/', d: 'Open-source eval and red-teaming with great docs.' },
        { t: F, n: 'DeepEval', u: 'https://docs.confident-ai.com/', d: 'Pytest-style LLM evals.' },
        { t: F, n: 'DeepLearning.AI — Evaluating AI Agents', u: 'https://www.deeplearning.ai/courses/', d: 'Free short course.' },
        { t: P, n: 'AI Engineering — Chip Huyen', u: 'https://www.oreilly.com/library/view/ai-engineering/9781098166298/', d: 'Chapters 3 and 4 are the best written treatment of evaluation in print.', price: '~$60' }
      ],
      verdict: 'mixed',
      verdictText: '<b>Free for the core — Hamel Husain is better than anything paid — and buy Chip Huyen\'s book. The fourth of the four things worth paying for.</b> <i>AI Engineering</i> is the single best book for the job you are doing. Read chapters 1–4 now, the rest across Phases 7–9. It has been O\'Reilly\'s most-read book since release for a reason.',
      build: 'An eval suite for something already running at work. Golden set, automated scoring, CI integration. Then find a regression with it. <b>Walking into a meeting with "I built evals and found our change made X worse" is the fastest way to be taken seriously.</b>'
    }
  ],
  done: 'You can take a business problem to a working, evaluated, cost-analysed LLM solution and defend every choice.'
},

{
  id: 7, title: 'RAG', hours: [70, 90], icon: '⟐',
  tagline: 'The most-deployed LLM pattern in industry.',
  why: 'Also the one most people do badly. The single highest-ROI change in most RAG systems is adding a reranker — if you learn one thing here, learn that.',
  skipTest: [
    'Why does naive fixed-size chunking hurt retrieval quality? Name three better strategies.',
    'What does a reranker do that the embedding model didn\'t?',
    'What is hybrid search, and why does BM25 still matter in 2026?',
    'How do you evaluate retrieval separately from generation?',
    'What is HyDE and what problem does it solve?',
    'When is RAG the wrong answer? Name two alternatives.'
  ],
  modules: [
    {
      id: '7.1', title: 'Embeddings & vector search', hours: [12, 18],
      topics: 'Embedding model selection · MTEB · similarity metrics · HNSW & IVF · pgvector, Qdrant, Weaviate, Pinecone, Chroma · metadata filtering',
      resources: [
        { t: F, n: 'MTEB Leaderboard', u: 'https://huggingface.co/spaces/mteb/leaderboard', d: 'How to actually pick an embedding model.' },
        { t: F, n: 'Pinecone Learning Center', u: 'https://www.pinecone.io/learn/', d: 'Vendor-produced but the best free explainer on vector search and ANN algorithms.' },
        { t: F, n: 'pgvector', u: 'https://github.com/pgvector/pgvector', d: 'Start here. Most teams reach for a dedicated vector DB long before they need one.' },
        { t: F, n: 'Qdrant documentation', u: 'https://qdrant.tech/documentation/', d: 'When you outgrow Postgres.' },
        { t: F, n: 'Sentence Transformers', u: 'https://sbert.net/', d: 'The embedding workhorse.' }
      ],
      verdict: F,
      verdictText: '<b>Free.</b> Pinecone\'s learning center is excellent even if you never use their product. <b>Practical note: start with pgvector</b> — Postgres you already have.',
      build: 'Semantic search over your team\'s actual documentation using pgvector. Compare three embedding models on the same 30 real queries and pick one with data.'
    },
    {
      id: '7.2', title: 'Chunking, ingestion & parsing', hours: [10, 14],
      topics: 'Fixed vs recursive vs semantic vs structural chunking · size & overlap · PDF parsing · tables and images · metadata · contextual retrieval',
      resources: [
        { t: F, n: 'Anthropic — Contextual Retrieval', u: 'https://www.anthropic.com/news/contextual-retrieval', d: 'Substantially reduces retrieval failures, with code. One of the highest-value free reads in RAG.' },
        { t: F, n: 'Pinecone — Chunking strategies', u: 'https://www.pinecone.io/learn/chunking-strategies/', d: 'The tradeoffs, clearly.' },
        { t: F, n: 'Docling', u: 'https://docling-project.github.io/docling/', d: 'Document parsing that handles tables.' },
        { t: F, n: 'Unstructured', u: 'https://docs.unstructured.io/', d: 'Ingestion for messy real-world documents.' }
      ],
      verdict: F,
      verdictText: '<b>Free.</b> Read the Anthropic contextual retrieval post first — it will change your ingestion design before you build it badly.',
      build: 'Ingest a directory of real PDFs. Compare fixed-size, recursive and contextual chunking on the same query set. Measure, don\'t guess.'
    },
    {
      id: '7.3', title: 'Retrieval: sparse, dense, hybrid, reranking', hours: [12, 18],
      topics: 'BM25 · dense retrieval · reciprocal rank fusion · cross-encoder rerankers · query expansion & rewriting · multi-query · HyDE · self-query',
      resources: [
        { t: F, n: 'Practical BM25 — Elastic', u: 'https://www.elastic.co/blog/practical-bm25-part-2-the-bm25-algorithm-and-its-variables', d: 'Why the old algorithm survives.' },
        { t: F, n: 'Pinecone — Rerankers', u: 'https://www.pinecone.io/learn/series/rag/rerankers/', d: 'The highest-ROI change in most RAG systems.' },
        { t: F, n: 'HyDE paper', u: 'https://arxiv.org/abs/2212.10496', d: 'Hypothetical document embeddings.' },
        { t: F, n: 'DeepLearning.AI — Advanced Retrieval for AI with Chroma', u: 'https://www.deeplearning.ai/courses/', d: 'Free short course.' }
      ],
      verdict: F,
      verdictText: '<b>Free.</b> DeepLearning.AI\'s short courses are free, 1–2 hours each, and made with the vendors who built the tools. There is no reason to pay for RAG education.',
      build: 'Take your 7.1 search system. Add BM25, fuse results, add a reranker. Measure recall@k and MRR at every step. Show the curve.'
    },
    {
      id: '7.4', title: 'Advanced RAG & graph approaches', hours: [12, 18],
      topics: 'Agentic RAG · self-RAG · corrective RAG · multi-hop · RAPTOR · GraphRAG · multimodal RAG · long-context vs RAG',
      resources: [
        { t: F, n: 'LangGraph RAG tutorials', u: 'https://langchain-ai.github.io/langgraph/tutorials/rag/langgraph_adaptive_rag/', d: 'Adaptive, corrective and self-RAG in LangGraph. Directly relevant to your project — teaches advanced RAG and LangGraph simultaneously.' },
        { t: F, n: 'Microsoft GraphRAG', u: 'https://microsoft.github.io/graphrag/', d: 'Docs and paper.' },
        { t: F, n: 'RAPTOR paper', u: 'https://arxiv.org/abs/2401.18059', d: 'Hierarchical summarisation for retrieval.' },
        { t: F, n: 'Self-RAG paper', u: 'https://arxiv.org/abs/2310.11511', d: 'Plus Corrective RAG.' },
        { t: F, n: 'Neo4j GraphAcademy', u: 'https://graphacademy.neo4j.com/', d: 'Free courses on knowledge graphs with LLMs.' }
      ],
      verdict: F,
      verdictText: '<b>Free.</b> The LangGraph RAG tutorials are the sweet spot for you specifically.',
      build: 'Upgrade your RAG to adaptive: route queries to retrieval, web search or direct answer based on classification. Grade retrieved docs and re-retrieve on failure.'
    },
    {
      id: '7.5', title: 'RAG evaluation', hours: [12, 16],
      topics: 'recall@k, MRR, NDCG · faithfulness · groundedness · answer relevance · context precision/recall · synthetic eval sets · citation verification',
      resources: [
        { t: F, n: 'RAGAS documentation', u: 'https://docs.ragas.io/', d: 'The standard RAG eval framework.' },
        { t: F, n: 'TruLens', u: 'https://www.trulens.org/', d: 'The RAG triad: context relevance, groundedness, answer relevance.' },
        { t: F, n: 'Hamel Husain — Evals FAQ', u: 'https://hamel.dev/blog/posts/evals-faq/', d: 'Practical, opinionated, correct.' }
      ],
      verdict: F,
      verdictText: '<b>Free.</b> Combine RAGAS with your own golden set. <b>Automated RAG metrics are directional, not authoritative</b> — a hand-labelled set of 50 real user queries beats 5,000 synthetic ones. Say that in a meeting and watch expressions change.',
      build: 'A full RAG evaluation harness: separate retrieval and generation scores, a golden set built from real queries, and a CI check that fails on regression.'
    }
  ],
  done: 'You can build a RAG system, prove its quality numerically, and articulate precisely where it will fail.'
},

{
  id: 8, title: 'Agents & LangGraph', hours: [110, 150], icon: '◐',
  tagline: 'Your current project. Your differentiator.',
  why: 'This is where you go from "learning" to "the person who understands what we are building." Module 8.3 is your priority — consider doing it early, out of order, because your job needs it now.',
  skipTest: [
    'What is the ReAct loop? Where does it fail?',
    'In LangGraph: difference between state, a node, and a conditional edge?',
    'What is a checkpointer, and why does it enable human-in-the-loop?',
    'Why do multi-agent systems often perform worse than a single well-designed agent?',
    'Difference between MCP tools, resources and prompts?',
    'How do you stop an agent looping forever — and how do you evaluate one?'
  ],
  modules: [
    {
      id: '8.1', title: 'Agent fundamentals', hours: [12, 18],
      topics: 'What an agent actually is · the ReAct loop · tool calling as the primitive · planning vs reactive · reflection · when an agent is the wrong architecture',
      resources: [
        { t: F, n: 'Anthropic — Building Effective Agents', u: 'https://www.anthropic.com/engineering/building-effective-agents', d: 'Read this first, before any framework. The most clear-headed writing on agent design in existence — its argument that most "agent" problems are better solved by simple composable workflows will save you months.' },
        { t: F, n: 'Anthropic — Effective context engineering for agents', u: 'https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents', d: 'The successor skill to prompt engineering.' },
        { t: F, n: 'ReAct paper', u: 'https://arxiv.org/abs/2210.03629', d: 'Plus Reflexion.' },
        { t: F, n: 'Hugging Face Agents Course', u: 'https://huggingface.co/learn/agents-course/', d: 'Free and certified. ~8 hours, 4 modules — smolagents, LangGraph, LlamaIndex.' },
        { t: F, n: 'Chip Huyen — Agents', u: 'https://huyenchip.com/2025/01/07/agents.html', d: 'Long-form and excellent.' }
      ],
      verdict: F,
      verdictText: '<b>Free. The Anthropic engineering blog is the best agent material published anywhere.</b> Read "Building Effective Agents" before you write a line of LangGraph. Most agent failures are design failures, not framework failures.',
      build: 'Build a ReAct agent from scratch — no framework. A loop, a tool registry, a parser. ~150 lines. Then you will know exactly what LangGraph is doing for you.'
    },
    {
      id: '8.2', title: 'LangChain essentials', hours: [10, 15],
      topics: 'LCEL · runnables · chat models · tools · output parsers · document loaders',
      resources: [
        { t: F, n: 'LangChain docs', u: 'https://docs.langchain.com/oss/python/langchain/overview', d: 'The modern docs. Trust these over blog posts.' },
        { t: F, n: 'LangChain Academy — Introduction to LangChain', u: 'https://academy.langchain.com/', d: 'Free, official.' }
      ],
      verdict: F,
      verdictText: '<b>Free.</b> A caution: LangChain has churned its API significantly, so anything older than ~6 months may be wrong. Trust official docs over blog posts and over Udemy courses, which are frequently stale. Learn the abstractions you need and do not over-invest — the concepts transfer, the API does not.',
      build: 'Rebuild your 8.1 hand-rolled agent using LangChain. Note what got shorter and what got more opaque.'
    },
    {
      id: '8.3', title: 'LangGraph, properly', hours: [25, 35], flag: 'Your priority module — go deep',
      topics: 'Graphs, nodes, edges · state & reducers · conditional routing · cycles · checkpointers & persistence · human-in-the-loop & interrupts · streaming · subgraphs · time travel · Command · durability · deployment',
      resources: [
        { t: F, n: 'LangChain Academy — Introduction to LangGraph (Python)', u: 'https://academy.langchain.com/courses/intro-to-langgraph', d: 'Free, official. 6 modules, 55 lessons, ~6 hours: Introduction · State and Memory · UX and Human-in-the-Loop · Building Your Assistant · Long-Term Memory · Deployment. Do this one this month.' },
        { t: F, n: 'LangChain Academy — all courses', u: 'https://academy.langchain.com/collections', d: 'Also free: Deep Agents, Building Reliable Agents, Monitoring Production Agents, LangSmith Deployment.' },
        { t: F, n: 'LangGraph documentation', u: 'https://langchain-ai.github.io/langgraph/', d: 'Concepts section in full, then how-to guides as needed.' },
        { t: F, n: 'langchain-academy repo', u: 'https://github.com/langchain-ai/langchain-academy', d: 'All notebooks.' },
        { t: F, n: 'LangGraph — Workflows & Agents guide', u: 'https://docs.langchain.com/oss/python/langgraph/workflows-agents', d: 'The canonical build guide: routing, orchestrator-worker, evaluator-optimiser, agents.' }
      ],
      verdict: F,
      verdictText: '<b>Free, decisively. Do not buy a LangGraph course.</b> LangChain Academy is made by the people who write the framework, kept current with API changes, and free. Udemy LangGraph courses go stale within months because the API moves — paying for one is actively worse than free. The only thing worth money is a LangSmith account, and the free tier is generous.',
      build: '<b>Your flagship project.</b> A LangGraph agent for something real at work: persistent state via a checkpointer · at least one human-in-the-loop interrupt · conditional routing on tool results · streaming output · full LangSmith tracing · an eval suite. <b>Then present it to your team.</b> This project changes how they see you.'
    },
    {
      id: '8.4', title: 'Memory & context engineering', hours: [12, 18],
      topics: 'Short vs long-term memory · thread-scoped vs cross-thread · summarisation & compaction · semantic/episodic/procedural · context rot · the Store API',
      resources: [
        { t: F, n: 'LangGraph memory concepts', u: 'https://langchain-ai.github.io/langgraph/concepts/memory/', d: 'Plus the Long-Term Memory module in LangChain Academy.' },
        { t: F, n: 'Anthropic — Effective context engineering', u: 'https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents', d: 'The definitive practical piece.' },
        { t: F, n: 'HF Context Course', u: 'https://huggingface.co/learn/', d: 'Context engineering for code agents.' },
        { t: F, n: 'MemGPT / Letta paper', u: 'https://arxiv.org/abs/2310.08560', d: 'Memory hierarchies for agents.' },
        { t: F, n: 'Mem0', u: 'https://docs.mem0.ai/', d: 'A managed memory layer, useful to study.' }
      ],
      verdict: F,
      verdictText: '<b>Free.</b> Context engineering is arguably <i>the</i> skill of 2026 agent work — it has largely replaced prompt engineering as what determines whether a system works. The research is recent enough that blog posts and papers are ahead of any course.',
      build: 'Add long-term memory to your flagship agent: cross-thread user preferences via the Store API, plus conversation summarisation when context exceeds a threshold.'
    },
    {
      id: '8.5', title: 'Multi-agent systems', hours: [12, 18],
      topics: 'Supervisor · swarm/handoff · hierarchical teams · network · coordination cost · when one good agent beats five mediocre ones',
      resources: [
        { t: F, n: 'LangGraph multi-agent concepts', u: 'https://langchain-ai.github.io/langgraph/concepts/multi_agent/', d: 'Plus the supervisor and swarm libraries.' },
        { t: F, n: 'Anthropic — How we built our multi-agent research system', u: 'https://www.anthropic.com/engineering/multi-agent-research-system', d: 'A genuinely detailed production postmortem. Rare and valuable.' },
        { t: F, n: 'Cognition — Don\'t Build Multi-Agents', u: 'https://cognition.ai/blog/dont-build-multi-agents', d: 'The strongest counter-argument. Read alongside the Anthropic piece.' },
        { t: F, n: 'DeepLearning.AI — Multi AI Agent Systems with crewAI', u: 'https://www.deeplearning.ai/courses/', d: 'Free short course, useful for breadth.' }
      ],
      verdict: F,
      verdictText: '<b>Free.</b> The most valuable thing here is the disagreement — read both the Anthropic and Cognition pieces and form your own view. Holding both at once is what makes you sound senior.',
      build: 'Build the same task twice: once as a single agent with many tools, once as a supervisor with three sub-agents. Measure latency, cost and quality. Report which won and why.'
    },
    {
      id: '8.6', title: 'Model Context Protocol', hours: [12, 16],
      topics: 'Host/client/server architecture · tools, resources, prompts · transports (stdio, HTTP/SSE) · sampling · building servers and clients · security',
      resources: [
        { t: F, n: 'Anthropic Academy — Introduction to MCP', u: 'https://anthropic.skilljar.com/introduction-to-model-context-protocol', d: 'Free, official, hands-on with the Python SDK.' },
        { t: F, n: 'Anthropic Academy — MCP: Advanced Topics', u: 'https://anthropic.skilljar.com/model-context-protocol-advanced-topics', d: 'Sampling, notifications, transports, production patterns.' },
        { t: F, n: 'MCP specification & docs', u: 'https://modelcontextprotocol.io/', d: 'The source of truth.' },
        { t: F, n: 'MCP Python SDK', u: 'https://github.com/modelcontextprotocol/python-sdk', d: 'Reference implementation.' },
        { t: F, n: 'DeepLearning.AI — MCP with Anthropic', u: 'https://www.deeplearning.ai/short-courses/mcp-build-rich-context-ai-apps-with-anthropic/', d: 'Free short course.' }
      ],
      verdict: F,
      verdictText: '<b>Free and official. Never pay for MCP training.</b> Anthropic built the protocol and gives away the best course on it.',
      build: 'An MCP server exposing something your team uses — an internal API, a database, a document store. Connect it to Claude Desktop or your IDE. Small project, disproportionate visibility.'
    },
    {
      id: '8.7', title: 'Agent evaluation & observability', hours: [14, 18],
      topics: 'Trajectory vs final-answer evaluation · tool-call accuracy · step-level scoring · tracing · cost & latency per run · regression suites · debugging non-determinism',
      resources: [
        { t: F, n: 'LangSmith docs', u: 'https://docs.smith.langchain.com/', d: 'Generous free tier. Seamless with LangGraph.' },
        { t: F, n: 'LangChain Academy — Monitoring Production Agents', u: 'https://academy.langchain.com/', d: 'Free.' },
        { t: F, n: 'Langfuse', u: 'https://langfuse.com/docs', d: 'Open-source, self-hostable. The strongest vendor-independent alternative.' },
        { t: F, n: 'Arize Phoenix', u: 'https://arize.com/docs/phoenix', d: 'Open-source, OpenTelemetry-based, ML-grade rigour.' }
      ],
      verdict: F,
      verdictText: '<b>Free tiers are enough for learning; the paid decision belongs to your team, not you.</b> Learn LangSmith (you are on LangGraph) and learn Langfuse (open source — knowing the non-locked-in option makes you useful in architecture discussions). <b>Being the person who introduces tracing to a team that does not have it is a very fast way to become important.</b>',
      build: 'Instrument your flagship agent end to end. Build a trajectory eval set of 30 cases. Wire it into CI so a bad prompt change fails the build.'
    },
    {
      id: '8.8', title: 'The wider framework landscape', hours: [10, 14],
      topics: 'Comparative judgment across the ecosystem — timebox one day each, maximum',
      resources: [
        { t: F, n: 'OpenAI Agents SDK', u: 'https://openai.github.io/openai-agents-python/', d: 'Lightweight, minimal machinery.' },
        { t: F, n: 'Claude Agent SDK', u: 'https://docs.claude.com/en/api/agent-sdk/overview', d: 'Anthropic\'s agent harness.' },
        { t: F, n: 'Pydantic AI', u: 'https://ai.pydantic.dev/', d: 'Type-safe, clean.' },
        { t: F, n: 'CrewAI', u: 'https://docs.crewai.com/', d: 'Role-based multi-agent.' },
        { t: F, n: 'smolagents', u: 'https://huggingface.co/docs/smolagents/', d: 'Minimal, code-writing agents.' },
        { t: F, n: 'LlamaIndex Workflows', u: 'https://docs.llamaindex.ai/en/stable/module_guides/workflow/', d: 'Event-driven orchestration.' },
        { t: F, n: 'DSPy', u: 'https://dspy.ai/', d: 'Programmatic prompt optimisation. Genuinely different — worth a look.' }
      ],
      verdict: F,
      verdictText: '<b>Free, all of them. Build one small thing in two of these.</b> The goal is comparative judgment: being able to say "we use LangGraph because we need checkpointing and human-in-the-loop; if we just needed a simple tool loop, the OpenAI Agents SDK would be less machinery." That sentence is worth more in a design review than deep expertise in any single framework.',
      build: 'The same small agent, implemented in two non-LangGraph frameworks. Write a one-page comparison with a recommendation.'
    }
  ],
  done: 'You can design, build, evaluate and debug a production agent system — and argue convincingly about when not to build one.'
},

{
  id: 9, title: 'Production AI Engineering', hours: [100, 140], icon: '⬢',
  tagline: 'What makes you senior instead of clever.',
  why: 'Most people skip this phase. Do not. This is the difference between building demos and owning systems.',
  skipTest: [
    'How do you version a prompt in production and roll back a bad one?',
    'What is prompt injection, and why can\'t you fully fix it with prompting?',
    'How do you test a non-deterministic system in CI?',
    'What are your three biggest cost levers on an LLM application?',
    'Difference between drift in classical ML and drift in an LLM app?',
    'Design the failure path when your LLM provider has an outage.'
  ],
  modules: [
    {
      id: '9.1', title: 'Serving your application', hours: [14, 18],
      topics: 'FastAPI · streaming (SSE) · background tasks · dependency injection · Docker · Compose · 12-factor config',
      resources: [
        { t: F, n: 'FastAPI documentation', u: 'https://fastapi.tiangolo.com/', d: 'Tutorial and advanced user guide. The best-written framework docs in Python.' },
        { t: F, n: 'Docker — Get Started', u: 'https://docs.docker.com/get-started/', d: 'Plus Compose.' },
        { t: F, n: 'The Twelve-Factor App', u: 'https://12factor.net/', d: 'Thirty minutes, still the standard for config, logging and process design.' }
      ],
      verdict: F,
      verdictText: '<b>Free.</b> FastAPI + Docker is the default stack for AI services. Learn streaming properly — token-by-token streaming is a UX requirement, not a nice-to-have.',
      build: 'Wrap your Phase 8 agent in FastAPI with SSE streaming, health checks, structured logging and a Dockerfile. Deploy it somewhere real — Railway, Render, Fly.io and Modal all have usable free tiers.'
    },
    {
      id: '9.2', title: 'Security & guardrails', hours: [14, 18],
      topics: 'Direct & indirect prompt injection · jailbreaks · exfiltration via tools · the lethal trifecta · output validation · PII · sandboxing · least-privilege tools · red teaming',
      resources: [
        { t: F, n: 'OWASP Top 10 for LLM Applications', u: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/', d: 'The industry reference. Read it fully.' },
        { t: F, n: 'Simon Willison — prompt injection', u: 'https://simonwillison.net/tags/prompt-injection/', d: 'He coined the term and remains the clearest voice. His "lethal trifecta" framing is the most useful mental model available.' },
        { t: F, n: 'Anthropic — Mitigating jailbreaks & prompt injections', u: 'https://docs.claude.com/en/docs/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks', d: 'Practical mitigations.' },
        { t: F, n: 'NVIDIA NeMo Guardrails', u: 'https://docs.nvidia.com/nemo/guardrails/', d: 'Programmable rails.' },
        { t: F, n: 'DeepLearning.AI — Red Teaming LLM Applications', u: 'https://www.deeplearning.ai/courses/', d: 'Free short course.' }
      ],
      verdict: F,
      verdictText: '<b>Free.</b> This matters more the moment your agent gets tool access — and yours will. <b>Prompt injection is not fully solvable at the prompt layer.</b> Understanding that, and designing around it with least-privilege tools and human approval gates, is a genuinely senior position most people building agents in 2026 have not internalised.',
      build: 'Red team your own agent. Try to make it leak its system prompt, call a tool it shouldn\'t, or exfiltrate data via a poisoned document. Write up what worked, then fix it architecturally — not with a "please don\'t do that" instruction.'
    },
    {
      id: '9.3', title: 'Testing, CI & prompt management', hours: [12, 16],
      topics: 'Unit tests for deterministic parts · evals as tests · snapshot testing · prompt versioning · A/B testing prompts in prod · canary deploys · CI gates on regression',
      resources: [
        { t: F, n: 'promptfoo', u: 'https://www.promptfoo.dev/docs/intro/', d: 'Eval and red-team in CI. Excellent docs.' },
        { t: F, n: 'Hamel Husain — evals in CI', u: 'https://hamel.dev/blog/posts/evals/', d: 'How to make it real.' },
        { t: F, n: 'GitHub Actions', u: 'https://docs.github.com/en/actions/writing-workflows/quickstart', d: 'The CI you already have.' }
      ],
      verdict: F,
      verdictText: '<b>Free.</b> Wiring evals into CI is the concrete artifact that proves you understand production AI — and a thing you can contribute to your team\'s repo in your first months.',
      build: 'A GitHub Actions workflow that runs your eval suite on every PR and fails on regression beyond a threshold. Add prompt versioning with rollback.'
    },
    {
      id: '9.4', title: 'Cost, latency & reliability', hours: [12, 16],
      topics: 'Token accounting · prompt caching · model routing · semantic caching · batch APIs · streaming for perceived latency · timeouts & backoff · provider fallbacks · graceful degradation',
      resources: [
        { t: F, n: 'Anthropic prompt caching', u: 'https://docs.claude.com/en/docs/build-with-claude/prompt-caching', d: 'Plus batch processing. Each cuts costs dramatically on the right workloads.' },
        { t: F, n: 'LiteLLM', u: 'https://docs.litellm.ai/', d: 'Unified API across 100+ providers, with routing, fallbacks and budget controls. Extremely practical.' }
      ],
      verdict: F,
      verdictText: '<b>Free.</b> Cost engineering is where you visibly save your team money, which is the most legible form of value there is. Learn to produce a cost-per-request number for any system you build.',
      build: 'Add a caching layer, a model router and a fallback provider to your agent. Measure cost per request before and after. Put the number in a slide.'
    },
    {
      id: '9.5', title: 'MLOps & LLMOps', hours: [18, 24],
      topics: 'Experiment tracking · model registry · feature stores · data versioning · monitoring & drift · retraining triggers · CI/CD for ML',
      resources: [
        { t: F, n: 'MLOps Zoomcamp — DataTalks.Club', u: 'https://github.com/DataTalksClub/mlops-zoomcamp', d: 'Free, complete, project-based. The best free MLOps course in existence.' },
        { t: F, n: 'LLM Zoomcamp — DataTalks.Club', u: 'https://github.com/DataTalksClub/llm-zoomcamp', d: 'The LLM-focused sibling. Free.' },
        { t: F, n: 'Made With ML', u: 'https://madewithml.com/', d: 'Production ML from design to deployment.' },
        { t: F, n: 'Full Stack Deep Learning', u: 'https://fullstackdeeplearning.com/course/', d: 'Free materials on everything after the model trains.' },
        { t: P, n: 'Designing Machine Learning Systems — Chip Huyen', u: 'https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/', d: 'Very good, but buy AI Engineering first.', price: '~$60' }
      ],
      verdict: F,
      verdictText: '<b>Free — MLOps Zoomcamp is genuinely excellent and completely free.</b> On the book: if you are buying one Chip Huyen book, buy <i>AI Engineering</i> — more current, closer to your job. Buy <i>DMLS</i> later if you move toward classical ML systems. Pair whichever you read with MLOps Zoomcamp for the hands-on work the books lack.',
      build: 'Take your Phase 3 tabular model and productionise it properly: MLflow tracking, a registry, a monitoring dashboard, and a documented retraining trigger.'
    },
    {
      id: '9.6', title: 'System design for AI', hours: [15, 20],
      topics: 'Requirements · latency budgets · build vs buy · model selection under constraints · data pipelines · scaling · multi-tenancy · caching architecture',
      resources: [
        { t: F, n: 'Eugene Yan — Patterns for Building LLM-based Systems', u: 'https://eugeneyan.com/writing/llm-patterns/', d: 'Exceptional, free, comprehensive.' },
        { t: F, n: 'Evidently — ML System Design: 300 case studies', u: 'https://www.evidentlyai.com/ml-system-design', d: 'How real companies actually built it.' },
        { t: F, n: 'Awesome LLMOps', u: 'https://github.com/tensorchord/Awesome-LLMOps', d: 'Tooling landscape map.' },
        { t: F, n: 'ByteByteGo blog', u: 'https://blog.bytebytego.com/', d: 'General system design, much of it free.' }
      ],
      verdict: F,
      verdictText: '<b>Free.</b> Eugene Yan\'s patterns post plus the Evidently case studies is a better system design education than any paid course, because it is grounded in what companies actually shipped.',
      build: '<b>Capstone.</b> A full design doc for an AI system your team could use: requirements, architecture diagram, model choice with justification, eval plan, cost estimate, failure modes, rollout plan. <b>Then circulate it.</b> A good design doc is the most senior-looking artifact a junior engineer can produce.'
    }
  ],
  done: 'You can own an AI feature from problem statement to production — and operate it.'
},

{
  id: 10, title: 'Frontier & Specialization', hours: [0, 0], icon: '✦', ongoing: true,
  tagline: 'How you stay relevant in 2029.',
  why: 'By now you are not following a roadmap, you are navigating. This phase is about habits and directions, not completion.',
  skipTest: [],
  modules: [
    {
      id: '10.1', title: 'Reading research (permanent habit)', hours: [2, 2], per: '/week',
      topics: 'Three-pass reading · paper triage · following the right people',
      resources: [
        { t: F, n: 'Hugging Face Daily Papers', u: 'https://huggingface.co/papers', d: 'Curated with community discussion. Best daily filter available.' },
        { t: F, n: 'Sebastian Raschka — Ahead of AI', u: 'https://magazine.sebastianraschka.com/', d: 'The best technical newsletter in the field. Deep, honest, well-illustrated.' },
        { t: F, n: 'Simon Willison\'s blog', u: 'https://simonwillison.net/', d: 'The best running commentary on practical LLM developments anywhere.' },
        { t: F, n: 'Nathan Lambert — Interconnects', u: 'https://www.interconnects.ai/', d: 'Post-training and RL.' },
        { t: F, n: 'The Batch — Andrew Ng', u: 'https://www.deeplearning.ai/the-batch/', d: 'Weekly, broad.' },
        { t: F, n: 'Yannic Kilcher', u: 'https://www.youtube.com/@YannicKilcher', d: 'Paper walkthroughs on video.' }
      ],
      verdict: F,
      verdictText: '<b>Free.</b> Pick two newsletters, not eight. Read one paper properly per week rather than skimming ten. Depth beats coverage, and coverage is what feeds anxiety.<br><br><b>Three-pass method:</b> Pass 1 — title, abstract, figures, conclusion (10 min). Pass 2 — full read, skip proofs (1h). Pass 3 — reimplement the core idea (only for papers that matter to you).',
      build: 'One paper a week. Write three sentences about each in a running note. After six months you will have a genuine map of the field.'
    },
    {
      id: '10.2', title: 'Reasoning models & test-time compute', hours: [15, 20],
      topics: 'Chain-of-thought at scale · process reward models · RLVR · inference-time scaling · extended thinking',
      resources: [
        { t: F, n: 'DeepSeek-R1 paper', u: 'https://arxiv.org/abs/2501.12948', d: 'GRPO and RL for reasoning.' },
        { t: F, n: 'Let\'s Verify Step by Step', u: 'https://arxiv.org/abs/2305.20050', d: 'Process supervision.' },
        { t: F, n: 'Anthropic — extended thinking', u: 'https://docs.claude.com/en/docs/build-with-claude/extended-thinking', d: 'The practical API surface.' },
        { t: F, n: 'RLHF Book — reasoning chapters', u: 'https://rlhfbook.com/', d: 'Free and current.' }
      ],
      verdict: F,
      verdictText: '<b>Free.</b> The most active frontier as of 2026. Understanding how test-time compute trades against training compute is central to reasoning about where the field goes next.',
      build: 'Benchmark a reasoning model against a standard model on a task from your work. Measure accuracy, latency and cost. Decide when the tradeoff is worth it.'
    },
    {
      id: '10.3', title: 'Multimodal & vision-language', hours: [15, 20],
      topics: 'CLIP · vision encoders · VLM architectures · document understanding · audio',
      resources: [
        { t: F, n: 'CLIP paper', u: 'https://arxiv.org/abs/2103.00020', d: 'The foundation.' },
        { t: F, n: 'LLaVA paper', u: 'https://arxiv.org/abs/2304.08485', d: 'Visual instruction tuning.' },
        { t: F, n: 'HF Audio Course', u: 'https://huggingface.co/learn/audio-course/', d: 'Free, complete.' },
        { t: F, n: 'Anthropic vision docs', u: 'https://docs.claude.com/en/docs/build-with-claude/vision', d: 'Practical multimodal usage.' }
      ],
      verdict: F,
      verdictText: '<b>Free.</b> Multimodal is rapidly becoming the default rather than a specialisation — document understanding, screenshots and charts show up constantly in real Decision Science work.',
      build: 'A document-understanding pipeline over real PDFs with charts and tables. Compare a VLM against traditional OCR + parsing.'
    },
    {
      id: '10.4', title: 'Distributed training & scale', hours: [20, 25],
      topics: 'Data/tensor/pipeline parallelism · ZeRO & DeepSpeed · FSDP · gradient checkpointing · multi-node · efficient kernels',
      resources: [
        { t: F, n: 'HF — The Ultra-Scale Playbook', u: 'https://huggingface.co/spaces/nanotron/ultrascale-playbook', d: 'Exceptional and free, on training at scale.' },
        { t: F, n: 'PyTorch FSDP tutorial', u: 'https://pytorch.org/tutorials/intermediate/FSDP_tutorial.html', d: 'The practical entry point.' },
        { t: F, n: 'DeepSpeed', u: 'https://www.deepspeed.ai/', d: 'ZeRO and friends.' }
      ],
      verdict: F,
      verdictText: '<b>Free.</b> Only go here if you will actually train large models. For most AI engineers, reading the Ultra-Scale Playbook once for literacy is sufficient.',
      build: 'Multi-GPU fine-tune with FSDP, even on rented hardware for an hour. Measure the scaling efficiency you actually get versus the theoretical.'
    },
    {
      id: '10.5', title: 'Generative media (optional)', hours: [10, 15],
      topics: 'Diffusion models · latent diffusion · ControlNet · video generation',
      resources: [
        { t: F, n: 'HF Diffusion Course', u: 'https://huggingface.co/learn/diffusion-course/', d: 'Free, hands-on.' },
        { t: F, n: 'Lilian Weng — What are Diffusion Models?', u: 'https://lilianweng.github.io/posts/2021-07-11-diffusion-models/', d: 'The clearest mathematical treatment.' },
        { t: F, n: 'fast.ai Part 2 — Foundations to Stable Diffusion', u: 'https://course.fast.ai/Lessons/part2.html', d: 'From scratch.' }
      ],
      verdict: F,
      verdictText: '<b>Free, and genuinely optional</b> unless image or video generation touches your work. Skip without guilt if it does not.',
      build: 'Only if relevant to you: fine-tune a diffusion model with LoRA on a small custom concept.'
    },
    {
      id: '10.6', title: 'Pick a specialization (year two)', hours: [0, 0],
      topics: 'Agentic systems architecture · RAG at scale · model training & post-training · LLM infrastructure & serving · decision intelligence · AI safety & evaluation',
      resources: [
        { t: F, n: 'Decision intelligence: causal ML + LLMs', u: 'https://www.pywhy.org/dowhy/', d: 'The strongest differentiator available to you specifically — it sits exactly where your team already is, and almost nobody covers both halves well.' },
        { t: F, n: 'Agentic systems architecture', u: 'https://langchain-ai.github.io/langgraph/', d: 'The natural extension of your current work.' },
        { t: F, n: 'LLM infrastructure & serving', u: 'https://docs.vllm.ai/', d: 'Fewer people, high demand.' },
        { t: F, n: 'AI safety & evaluation', u: 'https://www.anthropic.com/research', d: 'Red teaming, alignment evaluation, governance. Growing fast.' }
      ],
      verdict: F,
      verdictText: '<b>Free.</b> By month 12–18, generalist coverage stops compounding — pick one. <b>For you, decision intelligence is the standout:</b> causal inference plus LLMs, sitting exactly where your team already operates, and a combination almost nobody has.',
      build: 'Choose one. Then go three levels deeper than anyone around you on that one thing.'
    },
    {
      id: '10.7', title: 'Contribute and be visible', hours: [0, 0],
      topics: 'Open source · technical writing · internal talks · community · competitions',
      resources: [
        { t: F, n: 'LangGraph — good first issues', u: 'https://github.com/langchain-ai/langgraph/issues', d: 'Contribute to the framework you use daily.' },
        { t: F, n: 'Hugging Face — open source', u: 'https://github.com/huggingface', d: 'Docs fixes count and are welcomed.' },
        { t: F, n: 'Kaggle', u: 'https://www.kaggle.com/', d: 'Competitions and public notebooks.' }
      ],
      verdict: F,
      verdictText: '<b>Free, and this is the compounding one.</b> The gap between "knows a lot" and "known for knowing a lot" is entirely public artifacts. A blog post that takes you six hours can pay back for years.',
      build: 'One merged PR to a library you use. One technical blog post per quarter. One internal talk per half-year. That cadence, sustained, is a career.'
    }
  ],
  done: 'Never. That is the job.'
}
];

/* -------------------------------------------------------------------------- */

const PROJECTS = [
  { n: 1, name: 'Typed, tested, packaged CLI tool', phase: 0, proves: 'You write professional code, not scripts' },
  { n: 2, name: 'Causal analysis: DAG + three estimators', phase: 2, proves: 'You understand <i>why</i>, not just <i>what</i> — rare and valuable' },
  { n: 3, name: 'Tabular ML with rigorous error analysis', phase: 3, proves: 'You know evaluation, leakage and honest reporting' },
  { n: 4, name: 'Transformer implemented from memory', phase: 5, proves: 'You understand the architecture, not just the API' },
  { n: 5, name: 'Fine-tuned model, measured before/after', phase: 6, proves: 'You can improve a model, not just call one' },
  { n: 6, name: 'Production RAG with a full eval harness', phase: 7, proves: 'You can ship the most common LLM pattern, with proof' },
  { n: 7, name: 'LangGraph agent: HITL, checkpointing, tracing, evals', phase: 8, proves: 'Your flagship. Directly relevant to your current work.', star: true },
  { n: 8, name: 'Deployed AI service + design doc + cost analysis', phase: 9, proves: 'You operate systems, you do not just build demos' }
];

const SPEND = [
  { item: 'Practical Statistics for Data Scientists', cost: '~$45', v: 'buy', why: 'The stats book you will actually reach for in a meeting.' },
  { item: 'Trustworthy Online Controlled Experiments (Kohavi)', cost: '~$50', v: 'buy', why: 'Definitive on experimentation. Nothing free matches it.' },
  { item: 'Hands-On Machine Learning, 3rd ed. (Géron)', cost: '~$65', v: 'buy', why: 'Best single ML book in print. Current as of March 2026.' },
  { item: 'AI Engineering (Chip Huyen)', cost: '~$60', v: 'buy', why: 'The best book for the exact job you are doing.' },
  { item: 'Build an LLM from Scratch (Raschka)', cost: '~$50', v: 'buy', why: 'Or use the free code repo + CS336 if budget is tight.' },
  { item: 'Compute — Colab Pro / API credits', cost: '~$50–150', v: 'buy', why: 'Highest return per dollar in this entire list.' },
  { item: 'Fluent Python, 2nd ed.', cost: '~$55', v: 'maybe', why: 'Month 4+. Makes you good, not functional. Not yet.' },
  { item: 'Coursera Plus (one month)', cost: '~$59', v: 'maybe', why: 'Only if you need graded accountability for Ng\'s specialization.' },
  { item: 'Everything else in this roadmap', cost: '$0', v: 'free', why: 'Karpathy, CS336, HF, LangChain Academy, Anthropic Academy, every paper, a dozen free books.' }
];

const NEVER_BUY = [
  '"Become an AI Engineer" bootcamps',
  'Udemy agentic-AI / LangGraph courses — the API moves faster than they update',
  'Prompt engineering courses — the model vendors give away better, free',
  '"Certifications" from anyone who did not build the tool',
  'Anything promising job placement'
];
