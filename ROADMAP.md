# The AI Engineer Roadmap

**From zero to "the person who actually knows how this works."**

Built for someone joining a Decision Science team, working on LangGraph, who wants the whole
picture — not just the top layer.

---

## How to read this document

Eleven phases, Phase 0 through Phase 10. Each phase has:

- **Skip test** — concrete questions. Answer them all confidently, skip the phase. No guilt, no
  gaps. This is how "start from zero" costs you nothing if you're already further along.
- **Modules** — the actual topics, in dependency order.
- **Resources** — free option, paid option, and a **verdict** on which to take and why.
- **Build** — the thing you make. Non-negotiable. Reading is not learning.
- **Done when** — the exit criteria.

**Hours are focused hours**, not calendar time. "Focused" means laptop open, phone away, actually
typing. A 60-hour module is 60 real hours — it might take you three weeks or three months. That's
fine. The sequence matters far more than the speed.

**Total: ~870–1,190 focused hours** to the end of Phase 9. Phase 10 never ends.

---

## Read this before anything else

### The honest verdict on paid content

Most of the best AI education on earth is free. That is not a consolation prize — Karpathy,
Stanford CS336, Hugging Face, LangChain Academy, and Anthropic Academy are genuinely the best
resources in existence for their topics, and they cost nothing.

**Spend money on exactly four categories:**

1. **Books that are references you'll return to for years.** ~$40–60 each, one-time. Best
   value in the entire list.
2. **One structured course when you need momentum**, not knowledge — usually early, when
   self-direction is hardest.
3. **Compute.** A Colab Pro subscription or ~$50 of API credits will teach you more than a $200
   course. This is the single most underrated line item.
4. **Nothing else.**

**Do not spend money on:** "Become an AI Engineer" bootcamps, most Udemy agentic-AI courses,
"certification" programs from anyone who isn't the vendor who built the tool, or any course
promising job placement.

Total recommended spend across the entire roadmap: **~$250–400 over a year**, mostly books.
Everything else is free and better.

### The three habits that separate you from people who "did a course"

1. **Build the thing before you read about the thing.** Struggle first, then read. The reading
   lands 10x harder against a problem you've already hit.
2. **Write it down publicly.** A repo, a blog, notes in your team's wiki. If you can't explain
   it in writing, you don't know it. This also happens to be exactly what makes your team notice.
3. **Read one paper a week from Phase 5 onward.** Not to understand every equation — to build
   tolerance for primary sources. Most engineers never do this. It compounds absurdly.

### Anti-pattern warning: tutorial hell

The failure mode for your exact situation is completing 40 courses and being unable to build
anything unassisted. The defense is the **Build** section of each phase. If you skip the builds,
this document is worthless. If you do only the builds and half the reading, you'll be fine.

---

## Phase map

| Phase | Title | Hours | Why it exists |
|---|---|---|---|
| 0 | Programming Foundations | 60–90 | You cannot skip this. Everything sits on it. |
| 1 | The Math You Actually Need | 70–100 | So you read papers instead of vibing. |
| 2 | Data Science Core | 80–110 | Your team's native language. |
| 3 | Classical Machine Learning | 100–130 | 70% of real "AI" work is still this. |
| 4 | Deep Learning | 90–120 | The substrate under every LLM. |
| 5 | NLP → Transformers | 70–100 | Where LLMs actually come from. |
| 6 | Large Language Models | 120–160 | The core of your job. |
| 7 | RAG | 70–90 | The most-shipped LLM pattern in industry. |
| 8 | Agents & LangGraph | 110–150 | Your current project. Your differentiator. |
| 9 | Production AI Engineering | 100–140 | What makes you senior instead of clever. |
| 10 | Frontier & Specialization | ∞ | How you stay relevant in 2029. |

---

# Phase 0 — Programming Foundations

**60–90 hours.** Everything else is built on this. Rushing here costs you double later.

### Skip test

Skip Phase 0 if you can answer all of these without looking anything up:

1. What's the difference between a list and a tuple, and when does it matter for a dict key?
2. Write a decorator that times a function.
3. What does `git rebase` do that `git merge` doesn't?
4. Explain a virtual environment to someone who's never used one. Why does it exist?
5. Write a SQL query using a window function to rank rows within a group.
6. What's the difference between `is` and `==` in Python?

Got 4+? Skim the modules you're shaky on. Got fewer? Do the whole phase.

---

## 0.1 — Python from zero (25–35h)

**Free:** [Harvard CS50P — Introduction to Programming with Python](https://cs50.harvard.edu/python/)
— the entire course, free, no signup required. Nine weeks of lectures + problem sets. Also on
[YouTube in full](https://www.youtube.com/playlist?list=PLhQjrBD2T382_R182iC2gNZI9HzWFMC_8).

**Free alternative:** [Python for Everybody](https://www.py4e.com/) (Dr. Chuck, Michigan) — gentler
ramp, more hand-holding. Full site free including the textbook and exercises.

**Paid:** [Automate the Boring Stuff with Python](https://automatetheboringstuff.com/) — the book is
**free to read online in full**, ~$25 in print.

> **Verdict: CS50P, free. Do not pay for a beginner Python course in 2026.**
> CS50P's problem sets are auto-graded and genuinely hard, which is the entire value. Python for
> Everybody is the better pick if you find CS50P demoralizing in week 1 — it's not a lesser course,
> just a gentler slope. Keep *Automate the Boring Stuff* open in a tab as a lookup reference.

**Build:** A CLI tool that reads a CSV of your expenses and prints a monthly summary. No libraries
beyond the standard library. This forces file I/O, dicts, error handling, and string formatting.

---

## 0.2 — Command line & Git (8–12h)

**Free:** [MIT Missing Semester](https://missing.csail.mit.edu/) — the shell, scripting, Git
internals, debugging, and profiling. This course is famous because universities skip all of it. Do
lectures 1, 2, 3, 5, 6.

**Free:** [Learn Git Branching](https://learngitbranching.js.org/) — visual, interactive, and the
fastest way to actually understand rebase vs merge.

**Free:** [Pro Git book](https://git-scm.com/book/en/v2) — chapters 1–3 and 7.1–7.3 only. The rest
is reference.

> **Verdict: Free, all of it.** There is no paid Git course worth money. Missing Semester is
> better than anything sold. Budget one evening for Learn Git Branching — it's the single
> highest-return hour in Phase 0.

**Build:** Put your Phase 0.1 CLI tool on GitHub. Make a branch, break something, rebase, force
push, recover with `git reflog`. Breaking and recovering is the lesson.

---

## 0.3 — Environments & modern Python tooling (5–8h)

Nobody teaches this and everybody suffers for it.

**Free:** [uv documentation](https://docs.astral.sh/uv/) — the modern Python package manager. Fast,
replaces pip/venv/pyenv/poetry. Read the "Getting started" and "Guides" sections.

**Free:** [Ruff documentation](https://docs.astral.sh/ruff/) — linting and formatting. Ten minutes
to set up, saves you forever.

**Free:** [Python Packaging User Guide](https://packaging.python.org/en/latest/tutorials/packaging-projects/)
— just the "Packaging Python Projects" tutorial.

> **Verdict: Free. Use `uv`.** In 2026 the reasonable default stack is `uv` + `ruff` +
> `pyproject.toml`. Learn conda only if your team already uses it. Do not learn poetry, pipenv, or
> virtualenvwrapper from scratch — that's legacy knowledge.

**Build:** Convert your CLI tool into an installable package with a `pyproject.toml`. Run it with
`uvx`.

---

## 0.4 — Python for real work (15–25h)

The gap between "wrote a script" and "wrote code a team can use."

Topics, in order: OOP and when *not* to use it · dataclasses and Pydantic · type hints and `mypy` ·
exceptions and custom exception types · context managers · generators and iterators ·
`pytest` and test design · logging (not `print`) · `asyncio` and when concurrency actually helps.

**Free:** [Real Python](https://realpython.com/) — many articles free. Specifically:
[OOP](https://realpython.com/python3-object-oriented-programming/),
[type checking](https://realpython.com/python-type-checking/),
[async IO](https://realpython.com/async-io-python/),
[pytest](https://realpython.com/pytest-python-testing/).

**Free:** [Pydantic docs](https://docs.pydantic.dev/latest/) — Concepts section. You will use
Pydantic constantly in Phases 6–9 for structured LLM output. Learning it now is a genuine head start.

**Free:** [ArjanCodes YouTube](https://www.youtube.com/@ArjanCodes) — code design and refactoring in
Python. The best free resource on writing Python that isn't embarrassing.

**Paid:** *Fluent Python*, 2nd ed., Luciano Ramalho (~$55). **Read chapters 1, 5, 7–9, 17.**
Skip the rest for now. It's a 1,000-page book; treating it as linear reading is how people quit.

> **Verdict: Free is enough to start; buy *Fluent Python* around month 4, not now.**
> ArjanCodes + Real Python covers the working knowledge. *Fluent Python* is the book that makes you
> good, but it lands properly only once you've written enough Python to have opinions. Buying it in
> week 2 means it sits unread.

**Build:** Refactor your CLI tool: add type hints, Pydantic models for config, `pytest` tests with
80%+ coverage, and structured logging. This is your first piece of professional code.

---

## 0.5 — SQL (10–15h)

Your Decision Science team runs on SQL. This is not optional and it is not a side skill.

**Free:** [SQLBolt](https://sqlbolt.com/) — interactive, browser-based, 18 lessons. Finish it in
an evening.

**Free:** [Mode SQL Tutorial](https://mode.com/sql-tutorial/) — the best free intermediate/advanced
SQL resource. Do the Intermediate and Advanced tracks: joins, window functions, CTEs, performance.

**Free:** [PostgreSQL Exercises](https://pgexercises.com/) — the practice you need for it to stick.

**Free:** [Stanford Databases (edX/Stanford Online)](https://online.stanford.edu/courses/soe-ydatabases-databases-relational-databases-and-sql)
— actual database theory. Optional, but it's why you'll understand indexes.

**Paid:** DataCamp SQL track (~$13–25/mo). Adaptive, gated exercises, good structure.

> **Verdict: Free. Specifically SQLBolt → Mode → PGExercises.**
> DataCamp's SQL content is fine, but Mode's tutorial is written by analysts for analysts and is
> better on window functions — the exact thing that separates junior from senior SQL. Save the
> subscription money.

**Build:** Load a real dataset into local Postgres (Docker one-liner). Write 20 queries answering
actual business questions. At least five must use window functions.

**Done when:** you can go from empty folder to typed, tested, packaged, version-controlled Python
project with a Postgres backend without a tutorial open.

---

# Phase 1 — The Math You Actually Need

**70–100 hours.** The goal is not to become a mathematician. The goal is that when you open a paper
and see `softmax(QKᵀ/√d_k)V`, you read it instead of skipping it.

**How to approach this phase:** intuition first (3Blue1Brown), then formalism, then code it.
Never formalism first. That's how people bounce off math for the third time.

### Skip test

1. What does it mean geometrically for a matrix to have a determinant of zero?
2. Why does the chain rule matter for neural networks?
3. What's the difference between a probability and a likelihood?
4. A p-value of 0.03 — what exactly is 0.03 the probability of?
5. What does an eigenvector represent?
6. Why do we divide by `n-1` in sample variance?

All six clean? Skip to Phase 2. Any hesitation on 3, 4, or 6 — do module 1.3 and 1.4 at minimum,
because those are where practitioners are quietly wrong most often.

---

## 1.1 — Linear algebra (20–28h)

**Free:** [3Blue1Brown — Essence of Linear Algebra](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab)
— 16 episodes, ~3 hours total. **Watch this before anything else, twice.** It's the single best
piece of math education ever made for this purpose.

**Free:** [MIT 18.06 Linear Algebra — Gilbert Strang](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/)
— full lectures. Watch lectures 1–11, 14, 15, 21, 22, 29. Skip the rest unless you're enjoying it.

**Free:** [Mathematics for Machine Learning book](https://mml-book.github.io/) — free PDF,
Deisenroth/Faisal/Ong. **Chapters 2, 3, 4 only.** This is your reference, not your reading.

**Paid:** [Imperial College — Mathematics for ML: Linear Algebra (Coursera)](https://www.coursera.org/learn/linear-algebra-machine-learning)
— part of a 3-course specialization. Coursera Plus is $59/mo or $399/yr.

> **Verdict: Free — 3Blue1Brown + selected Strang lectures + the MML book as reference.**
> The Imperial course is good but it's teaching you the same content behind a subscription. The
> reason to pay would be graded assignments forcing accountability; if that's what you need, one
> month of Coursera Plus timed to blitz the specialization is defensible. Otherwise don't.

**Build:** Implement in pure NumPy: matrix multiplication, transpose, determinant (2×2 and 3×3),
and PCA on a real dataset — including computing eigenvectors of the covariance matrix yourself.
Then check against `sklearn.decomposition.PCA`.

---

## 1.2 — Calculus (12–18h)

You need derivatives, the chain rule, gradients, and partial derivatives. You do not need integration
techniques, series convergence, or anything from a second-semester course.

**Free:** [3Blue1Brown — Essence of Calculus](https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr)
— episodes 1–4 and 8 cover 90% of what matters.

**Free:** [Khan Academy — Multivariable Calculus](https://www.khanacademy.org/math/multivariable-calculus)
— just "Derivatives of multivariable functions" (partial derivatives, gradient, chain rule).

**Free:** [MML book](https://mml-book.github.io/), **chapter 5** (Vector Calculus).

> **Verdict: Free, and keep it narrow.** The trap here is doing a full calculus course. You need
> maybe 15 hours of calculus, ever, for this career. Take exactly that and move on. Karpathy's
> micrograd in Phase 4 will teach you more about the chain rule than any calculus course, because
> you'll implement it.

**Build:** Implement gradient descent from scratch to fit a line to noisy data. Plot the loss curve.
Then break it: set the learning rate to 10 and watch it diverge. Understanding *why* it diverges is
the point.

---

## 1.3 — Probability (18–26h)

**Free:** [Harvard Stat 110 — Joe Blitzstein (full lecture playlist)](https://www.youtube.com/playlist?list=PL2SOU6wwxB0uwwH80KTQ6ht66KWxbzTIo)
— free on YouTube; [course site here](https://projects.iq.harvard.edu/stat110/home). Widely considered
the best probability course available anywhere. Watch lectures 1–12, 17–20, 23.

**Free:** [Seeing Theory (Brown)](https://seeing-theory.brown.edu/) — interactive visual probability.
Do this in an hour before starting Stat 110, it builds intuition fast.

**Free:** [Introduction to Probability (Blitzstein & Hwang)](https://probabilitybook.net/) — the
Stat 110 textbook, free PDF from the author's site.

**Free:** [MML book](https://mml-book.github.io/), **chapter 6**.

> **Verdict: Free. Stat 110 is not "the free option," it is the best option.**
> There is no paid probability course that beats it. If Stat 110 feels too heavy, do Seeing Theory
> plus StatQuest's probability playlist and come back to Stat 110 after Phase 3 — but come back.

**Build:** Monte Carlo simulation of the Monty Hall problem. Then simulate a Bayesian A/B test:
two conversion rates, compute the posterior probability that B beats A. You'll use this exact
pattern on your team.

---

## 1.4 — Statistics & inference (20–28h)

This is the module that makes you credible on a Decision Science team. Most ML engineers are weak
here. Being strong here is a genuine differentiator.

Topics: sampling distributions · CLT · confidence intervals · hypothesis testing · t-tests, chi-square,
ANOVA · Type I/II error and power · multiple comparisons · bootstrapping · Bayesian vs frequentist ·
MLE · regression as inference (not just prediction).

**Free:** [StatQuest with Josh Starmer](https://www.youtube.com/@statquest) — the Statistics
Fundamentals playlist. Genuinely excellent, extremely digestible, no gatekeeping.

**Free:** [Think Stats, 2nd ed. (Allen Downey)](https://greenteapress.com/thinkstats2/) — free
PDF. Python-first statistics. Chapters 1–9.

**Free:** [Statistical Rethinking (Richard McElreath)](https://xcelab.net/rm/) — full lecture series
free on YouTube. Bayesian, and the best statistical *thinking* course in existence. The book is
paid (~$90) but **the lectures are free and standalone**.

**Paid:** *Practical Statistics for Data Scientists*, 2nd ed., Bruce & Bruce (~$45). Compact,
practitioner-focused, no fluff.

> **Verdict: Free for the core (StatQuest + Think Stats). Buy *Practical Statistics for Data
> Scientists* — it's the one stats book worth owning.**
> It's ~350 pages, organized by "thing you'll actually do," and it's the book you'll grab when
> someone asks you a question in a meeting. Watch McElreath's lectures over a long period as a
> background course — his framing of causality and model-building will change how you think, and
> it costs nothing.

**Build:** Take a public A/B test dataset. Compute the effect size, CI, and p-value by hand
(scipy for arithmetic only). Then bootstrap the same CI. Then compute the required sample size for
80% power. Write up the result as if for a stakeholder — one paragraph, no jargon.

**Done when:** you can read a stats claim in a paper or a colleague's deck and immediately ask the
right skeptical question.

---

# Phase 2 — Data Science Core

**80–110 hours.** You passed an EDA test to get here, so parts of this will be revision. The
causal inference and experimentation modules almost certainly won't be — and those are the ones
your team will care about most.

### Skip test

1. `df.apply()` vs vectorized operations — when does the difference matter and by how much?
2. What is Simpson's paradox and how would you detect it in your data?
3. Your A/B test is significant at p=0.04 after you checked results daily for two weeks. What's wrong?
4. Difference between correlation, association, and causation — with a concrete example of each.
5. What is a confounder, and name three ways to handle one.
6. When is a time series "stationary" and why do you care?

---

## 2.1 — NumPy, pandas, and the data stack (15–20h)

**Free:** [Kaggle Learn — Pandas](https://www.kaggle.com/learn/pandas) and
[Data Cleaning](https://www.kaggle.com/learn/data-cleaning) — short, hands-on, free.

**Free:** [Python Data Science Handbook (Jake VanderPlas)](https://jakevdp.github.io/PythonDataScienceHandbook/)
— **free online in full.** Chapters 2 (NumPy) and 3 (pandas). Still the best pandas reference.

**Free:** [Effective Pandas (Matt Harrison)](https://www.youtube.com/watch?v=zgbUk90aQ6A) — one
talk that will change how you write pandas. Method chaining, avoiding `inplace`, proper dtypes.

**Free:** [Polars user guide](https://docs.pola.rs/) — worth 3 hours. Increasingly common in
industry, faster than pandas, and the API is cleaner.

> **Verdict: Free. VanderPlas's book is free and remains the best.**
> Don't buy a pandas course. Do watch the Matt Harrison talk — it's the difference between writing
> pandas like a beginner and writing it like someone who's shipped.

**Build:** Take a genuinely messy public dataset (not Titanic — try a government open-data CSV).
Clean it end-to-end in a single method chain. Document every decision you made and why.

---

## 2.2 — EDA & visualization (10–14h)

**Free:** [Kaggle Learn — Data Visualization](https://www.kaggle.com/learn/data-visualization).

**Free:** [Fundamentals of Data Visualization (Claus Wilke)](https://clauswilke.com/dataviz/) —
**free online in full.** This is the theory: which chart, which colors, why. Read chapters 1–6,
17, 19–22, 29.

**Free:** [seaborn tutorial](https://seaborn.pydata.org/tutorial.html) and
[Plotly Python docs](https://plotly.com/python/) for interactive work.

**Free:** [Storytelling with Data blog](https://www.storytellingwithdata.com/blog) — the book is
paid (~$35) but the blog covers most of it.

> **Verdict: Free. Wilke's book is free, better than the paid alternatives, and cited constantly.**
> For a Decision Science team, chart literacy is a political skill as much as a technical one —
> the person whose slides are legible wins arguments. Wilke chapters 17 and 29 alone are worth
> the time.

**Build:** Take your cleaned dataset from 2.1 and produce a five-chart narrative that answers one
business question. Every chart must earn its place. Delete the ones that don't.

---

## 2.3 — Experimentation & A/B testing (15–20h)

**This is Decision Science bread and butter.** Do not skim it.

Topics: randomization and assignment · sample size and power calculations · guardrail metrics ·
peeking and sequential testing · CUPED variance reduction · network effects and interference ·
switchback tests · Simpson's paradox in experiment analysis · SRM (sample ratio mismatch) ·
novelty and primacy effects.

**Free:** [Kohavi's ExP Experimentation Platform papers & talks](https://exp-platform.com/) — the
canonical source. Read "Trustworthy Online Controlled Experiments: Five Puzzling Outcomes Explained"
and "Seven Rules of Thumb for Web Site Experimenters."

**Free:** [Netflix, Airbnb, and Spotify engineering blogs on experimentation](https://netflixtechblog.com/tagged/experimentation)
— real practice at scale, free.

**Free:** [Evan Miller's A/B testing tools](https://www.evanmiller.org/ab-testing/) — plus his
essay "How Not to Run an A/B Test," which is the single best 10-minute read on peeking.

**Paid:** *Trustworthy Online Controlled Experiments*, Kohavi, Tang & Xu, Cambridge (~$50). The
definitive book. **Read chapters 1–4, 17–19, 22.**

> **Verdict: Buy the Kohavi book. This is one of the four things worth paying for.**
> It's written by the people who built experimentation at Microsoft, LinkedIn, Google, and Amazon.
> Nothing free is close to it in completeness. If your team runs experiments, this book will make
> you the person who catches the flaw in someone else's test design — which is exactly the
> reputation you said you want.

**Build:** Write a reusable experiment analysis module: takes a dataframe of assignments and
outcomes, returns effect size, CI, p-value, power achieved, and an SRM check. Add CUPED. Use it
on real work.

---

## 2.4 — Causal inference (20–28h)

**The highest-leverage module in this entire document for a Decision Science team**, and the one
most AI engineers have never touched. Correlation-vs-causation is where business decisions actually
get made or broken.

Topics: potential outcomes framework · DAGs and confounding · backdoor criterion · propensity score
matching · IPW · difference-in-differences · regression discontinuity · instrumental variables ·
synthetic control · uplift modeling / CATE / heterogeneous treatment effects · double machine learning.

**Free:** [Causal Inference for the Brave and True (Matheus Facure)](https://matheusfacure.github.io/python-causality-handbook/landing-page.html)
— free online book, Python-based, genuinely delightful to read. **This is the main resource.**
Part I entirely; Part II chapters on ML-based causal methods.

**Free:** [Brady Neal — Introduction to Causal Inference](https://www.bradyneal.com/causal-inference-course)
— free course with video lectures and a free course book. More formal than Facure; the two
complement each other perfectly.

**Free:** [The Effect (Nick Huntington-Klein)](https://theeffectbook.net/) — free online, excellent
on research design intuition.

**Free:** [Causal Inference: The Mixtape (Scott Cunningham)](https://mixtape.scunning.com/) — free
online. Strong on DiD, RDD, and IV with real examples.

**Free:** [EconML](https://econml.azurewebsites.net/) and [DoWhy](https://www.pywhy.org/dowhy/)
docs — Microsoft's causal ML libraries. Work the example notebooks.

**Paid:** *Causal Inference: What If* (Hernán & Robins) — **free PDF from Harvard**, actually.
So: not paid.

> **Verdict: Entirely free, and the free resources here are world-class.**
> Causal inference has an unusually generous open-access culture — four complete textbooks are
> free online. Do Facure first (approachable, Python), then Brady Neal (formal), then Mixtape for
> the econometric designs. There is genuinely nothing to buy.

**Build:** Take an observational dataset. Draw the DAG. Estimate a treatment effect three ways
(naive comparison, propensity matching, double ML). Explain why the numbers differ. This one
project will make you visibly useful to your team.

---

## 2.5 — Time series & forecasting (12–18h)

**Free:** [Forecasting: Principles and Practice, 3rd ed. (Hyndman & Athanasopoulos)](https://otexts.com/fpp3/)
— **free online in full.** The standard reference. Chapters 1–9. It's in R, but the concepts
transfer directly and there's a [Python companion](https://otexts.com/fpppy/).

**Free:** [Nixtla StatsForecast docs](https://nixtlaverse.nixtla.io/statsforecast/index.html) —
modern, fast Python forecasting.

**Free:** [Kaggle Learn — Time Series](https://www.kaggle.com/learn/time-series).

**Free:** [Darts library docs](https://unit8co.github.io/darts/) — unified API across classical and
deep forecasting models.

> **Verdict: Free. Hyndman's book is the field standard and it's free.**
> Skip paid forecasting courses entirely. Note that in 2026 the practical default for many
> forecasting problems is still gradient boosting with good features, not deep learning — FPP3
> teaches you enough classical theory to know when that's true.

**Build:** Forecast something real with actual stakes — your team's ticket volume, or a public
demand dataset. Compare a naive baseline, ETS/ARIMA, and LightGBM with lag features. The baseline
comparison is the lesson: most fancy models lose to a good baseline.

**Done when:** you can take a business question, design the analysis, execute it, and defend the
causal claim you're making.

---

# Phase 3 — Classical Machine Learning

**100–130 hours.** Resist the urge to skip to LLMs. A large share of production "AI" value in 2026
is still gradient boosting on tabular data, and knowing when *not* to use an LLM is a senior skill.

### Skip test

1. Why does random forest reduce variance but not bias much?
2. You have 99% accuracy on a fraud dataset. Why might that be terrible?
3. What is target leakage? Give three ways it sneaks in.
4. Explain the bias-variance tradeoff in terms of model capacity.
5. When would you use L1 over L2 regularization?
6. What does XGBoost actually do differently from a plain gradient boosting machine?

---

## 3.1 — ML foundations & supervised learning (30–40h)

**Free:** [Andrew Ng — Machine Learning Specialization (Coursera, audit)](https://www.coursera.org/specializations/machine-learning-introduction)
— auditable free per-course (no certificate, no graded assignments). The canonical starting point.

**Free:** [StatQuest ML playlist](https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF)
— every classical algorithm, explained visually. Use this whenever Ng's math loses you.

**Free:** [scikit-learn User Guide](https://scikit-learn.org/stable/user_guide.html) — genuinely one
of the best-written ML documents anywhere. Sections 1, 3, 6.

**Free:** [Google Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course)
— free, updated, fast.

**Paid:** [Machine Learning Specialization, certificate track](https://www.coursera.org/specializations/machine-learning-introduction)
— Coursera Plus $59/mo or $399/yr. Note: Coursera has tightened free auditing; some courses now
only preview the first module. Check before assuming.

**Paid:** *Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow*, **3rd edition**
(Géron, released March 2026, ~$65). **Read chapters 1–9 in this phase.** Chapters 10+ belong to Phase 4.

> **Verdict: Free for the course (Ng, audited) + buy Géron. This is the second of the four things
> worth paying for.**
> Géron's book is the best single ML book in print, and the 3rd edition is current — it covers
> transformers and diffusion models. You'll reference it for years. That said: **if auditing Ng
> proves restricted for you, one month of Coursera Plus to blitz the specialization is a
> reasonable ~$59.** Don't subscribe for a year.
>
> **On fast.ai:** [Practical Deep Learning for Coders](https://course.fast.ai/) is free and
> excellent, but it's top-down and belongs in Phase 4, not here. Doing fast.ai before you
> understand classical ML tends to produce people who can train models but can't debug them.

**Build:** End-to-end supervised project on a tabular dataset: split properly (watch for leakage),
baseline, feature engineering, model selection with cross-validation, error analysis. Write the
error analysis up — that's the part everyone skips and it's the part that matters.

---

## 3.2 — Trees, ensembles & gradient boosting (15–20h)

The workhorses. In practice, this is what wins on tabular data.

**Free:** [XGBoost documentation](https://xgboost.readthedocs.io/en/stable/tutorials/model.html) —
the "Introduction to Boosted Trees" tutorial is the clearest explanation of the algorithm anywhere.

**Free:** [LightGBM docs](https://lightgbm.readthedocs.io/) — Features and Parameters Tuning pages.

**Free:** [CatBoost docs](https://catboost.ai/docs/) — especially its handling of categorical
features, which is genuinely different.

**Free:** [StatQuest's XGBoost series](https://www.youtube.com/playlist?list=PLblh5JKOoLUJjeXUvUE0maghNuY2_5fY6)
— four videos, complete derivation, painless.

> **Verdict: Free. Docs plus StatQuest is a complete education here.**
> No book or course explains boosting better than the XGBoost docs plus Josh Starmer.

**Build:** Enter a live Kaggle tabular competition. Not to win — to see where your gradient
boosting baseline lands versus the leaderboard, and then read the top public notebooks to find out
what you didn't think of.

---

## 3.3 — Unsupervised learning & dimensionality reduction (10–14h)

k-means and its failure modes · hierarchical clustering · DBSCAN · GMM · PCA (again, properly) ·
t-SNE and UMAP and why both lie to you · anomaly detection.

**Free:** [scikit-learn User Guide, section 2](https://scikit-learn.org/stable/unsupervised_learning.html).

**Free:** [Distill.pub — How to Use t-SNE Effectively](https://distill.pub/2016/misread-tsne/) —
interactive and important. Most people misread t-SNE plots.

**Free:** [UMAP documentation](https://umap-learn.readthedocs.io/en/latest/how_umap_works.html).

> **Verdict: Free.** Nothing paid here is better than the sklearn guide plus the Distill article.

**Build:** Customer segmentation on a real dataset. Then defend your choice of k to an imaginary
skeptical stakeholder. Then show what happens with k±3. Clustering is easy; justifying clustering
is the skill.

---

## 3.4 — Model evaluation, validation & the ways you fool yourself (18–24h)

**The most underrated module in Phase 3.** Everything here is what separates a model that works in
a notebook from one that works in production.

Topics: train/val/test discipline · cross-validation variants (and when k-fold is wrong) · time-based
splits · group splits · target leakage · train-serve skew · metrics for imbalanced data · precision/
recall/F1/ROC-AUC/PR-AUC and when each misleads · calibration · threshold selection as a business
decision · cost-sensitive evaluation.

**Free:** [Google's Rules of Machine Learning](https://developers.google.com/machine-learning/guides/rules-of-ml)
— 43 rules from Google's ML practice. Read it twice. It's short and it's the most practically useful
free document in ML.

**Free:** [scikit-learn — Model evaluation](https://scikit-learn.org/stable/modules/model_evaluation.html)
and [Probability calibration](https://scikit-learn.org/stable/modules/calibration.html).

**Free:** [Made With ML — Evaluation](https://madewithml.com/) — Goku Mohandas's course, free,
production-focused.

> **Verdict: Free. Read Google's Rules of ML today, even out of order.**
> It's 30 minutes and it will change how you approach every project in this document.

**Build:** Deliberately build a leaky model — one that gets 0.99 AUC through leakage. Find the leak.
Fix it. Document what the honest number was. Do this once and you'll spot leakage forever.

---

## 3.5 — Feature engineering & interpretability (15–20h)

**Free:** [Feature Engineering A-Z](https://feaz-book.com/) — free online reference by Emil Hvitfeldt.

**Free:** [Interpretable Machine Learning (Christoph Molnar)](https://christophm.github.io/interpretable-ml-book/)
— **free online in full.** The definitive text on SHAP, LIME, PDPs, permutation importance.
Chapters 5, 6, 8, 9.

**Free:** [SHAP documentation](https://shap.readthedocs.io/en/latest/) — work the tabular examples.

**Paid:** *Feature Engineering for Machine Learning* (Zheng & Casari, ~$40).

> **Verdict: Free. Molnar's book is free and is the reference practitioners actually cite.**
> Skip the Zheng & Casari book — it's fine but it's 2018 and the free resources have caught up.
> Interpretability matters more than usual on a Decision Science team, because your outputs feed
> human decisions and someone will ask "why did the model say that." Have an answer.

**Build:** Take your best model from 3.1. Produce a SHAP analysis. Find one feature whose importance
surprises you and investigate why. Nine times out of ten you'll discover a data problem — that's
the point.

**Done when:** you can be handed a tabular business problem and deliver a defensible, well-evaluated,
explainable model without a tutorial.

---

# Phase 4 — Deep Learning

**90–120 hours.** Now it gets fun. And now you'll be glad you did the math.

### Skip test

1. Implement backpropagation for a two-layer MLP on paper. Can you?
2. Why does batch normalization help, and what's the debate about *why* it helps?
3. What's the vanishing gradient problem and name three things that address it?
4. In PyTorch, what does `loss.backward()` actually do to the computation graph?
5. Why is Adam usually better than SGD, and when is it not?
6. What's the difference between `model.eval()` and `torch.no_grad()`?

---

## 4.1 — Neural networks from scratch (25–35h)

**This module is the single most important one in this document.** Everything after it makes
sense because of it.

**Free:** [Andrej Karpathy — Neural Networks: Zero to Hero](https://karpathy.ai/zero-to-hero.html).
Do lectures 1–6 here (7 and 8 belong in Phase 5):

1. [The spelled-out intro to neural networks and backpropagation: building micrograd](https://youtu.be/VMj-3S1tku0) (2h25m)
2. [The spelled-out intro to language modeling: building makemore](https://youtu.be/PaCmpygFfXo) (1h57m)
3. [Building makemore Part 2: MLP](https://youtu.be/TCH_1BHY58I) (1h15m)
4. [Building makemore Part 3: Activations & Gradients, BatchNorm](https://youtu.be/P6sfmUTpUmc) (1h55m)
5. [Building makemore Part 4: Becoming a Backprop Ninja](https://youtu.be/q8SA3rM6ckI) (1h55m)
6. [Building makemore Part 5: Building a WaveNet](https://youtu.be/t3YJ5hKiMQ0) (56m)

Code: [github.com/karpathy/nn-zero-to-hero](https://github.com/karpathy/nn-zero-to-hero).

**Free:** [Neural Networks and Deep Learning (Michael Nielsen)](http://neuralnetworksanddeeplearning.com/)
— free online book. Chapters 1–3 are the best written explanation of backprop in prose form.

> **Verdict: Free, and it is not close. Karpathy's course is the best deep learning education that
> exists at any price.**
> **Type every line yourself.** Do not watch passively, do not copy-paste. Pause the video, try to
> write the next line, then compare. Lecture 4 (Backprop Ninja) is brutal and skippable on a first
> pass — but come back to it, because doing it is a genuine rite of passage.

**Build:** micrograd, from scratch, from memory, a week after finishing lecture 1. Then makemore.
If you can rebuild micrograd without notes, you understand backpropagation.

---

## 4.2 — PyTorch properly (15–20h)

**Free:** [Official PyTorch tutorials](https://pytorch.org/tutorials/) — "Learn the Basics" and
"PyTorch Recipes."

**Free:** [Learn PyTorch for Deep Learning (Daniel Bourke)](https://www.learnpytorch.io/) — free
book + [25-hour YouTube course](https://www.youtube.com/watch?v=Z_ikDlimN6A). Extremely thorough.

**Free:** [Karpathy — A Recipe for Training Neural Networks](https://karpathy.github.io/2019/04/25/recipe/)
— read this before your first real training run. It will save you weeks.

**Paid:** *Deep Learning with PyTorch* (Stevens, Antiga, Viehmann) — **free PDF from PyTorch's own
site**, so: free.

> **Verdict: Free. PyTorch's own docs plus Bourke's course.**
> One note: learn PyTorch, not TensorFlow. In 2026 the research world and most of the LLM ecosystem
> is PyTorch. Learn TF only if a job requires it. Also learn `einops` — it's a small library that
> makes tensor manipulation readable, and CS336 uses it throughout.

**Build:** Reimplement your Phase 3 tabular model as a PyTorch neural net. Compare it to your
gradient boosting result. It will probably lose. Understanding *why* it loses on tabular data is
worth more than the model.

---

## 4.3 — Training craft: making models actually work (15–20h)

Initialization · optimizers (SGD, momentum, Adam, AdamW) · learning rate schedules and warmup ·
regularization (dropout, weight decay, early stopping, augmentation) · normalization (batch, layer,
RMS) · gradient clipping · mixed precision · overfitting a single batch as a sanity check ·
debugging training runs · hyperparameter search.

**Free:** [Google's Deep Learning Tuning Playbook](https://github.com/google-research/tuning_playbook)
— free, from Google Brain researchers. Comprehensive and opinionated. **Read it fully.**

**Free:** [Weights & Biases free tier + their courses](https://www.wandb.courses/) — experiment
tracking, free for personal use.

**Free:** [Distill.pub — Why Momentum Really Works](https://distill.pub/2017/momentum/).

> **Verdict: Free. The Tuning Playbook is the best resource on this topic and it costs nothing.**
> This module is what separates people who can run a training script from people who can fix one.

**Build:** Take a model that's training badly on purpose (bad LR, no normalization). Diagnose and
fix it systematically, logging every experiment to W&B. Write up what you changed and what happened.

---

## 4.4 — Computer vision essentials (12–18h)

You're going into language, but CNNs teach architecture intuition, and multimodal models are
increasingly your problem.

**Free:** [Stanford CS231n](https://cs231n.stanford.edu/) — notes are free and legendary. Lectures
on YouTube. Focus on the CNN and training sections.

**Free:** [fast.ai Practical Deep Learning, Part 1](https://course.fast.ai/) — **now** is when
fast.ai makes sense, after Karpathy. Lessons 1–5.

**Free:** [Hugging Face Computer Vision Course](https://huggingface.co/learn/computer-vision-course).

> **Verdict: Free. CS231n notes + fast.ai.** Keep this module tight. You need CNN intuition and
> transfer learning, not a vision specialization. Two weeks maximum.

**Build:** Fine-tune a pretrained vision model on a custom dataset you assemble yourself (photos
from your phone are fine). The data collection is deliberately part of the exercise.

---

## 4.5 — Sequence models & the road to attention (12–18h)

RNNs · LSTMs · GRUs · seq2seq · the encoder-decoder bottleneck · why attention was invented.

**Free:** [Karpathy — The Unreasonable Effectiveness of RNNs](https://karpathy.github.io/2015/05/21/rnn-effectiveness/)
— historical but foundational.

**Free:** [Chris Olah — Understanding LSTM Networks](https://colah.github.io/posts/2015-08-Understanding-LSTMs/)
— the canonical explanation.

**Free:** [Dive into Deep Learning (d2l.ai)](https://d2l.ai/) — **free, complete, interactive,
PyTorch.** Chapters 9 and 10.

> **Verdict: Free.** Deliberately keep this short — RNNs are largely historical now. You're
> learning them to understand *why* transformers exist. The bottleneck problem in seq2seq is the
> setup for attention, and attention is the whole ballgame.

**Done when:** you can implement a neural network from scratch, train it competently in PyTorch,
debug a failing training run, and explain why attention was necessary.

---

# Phase 5 — NLP → Transformers

**70–100 hours.** The bridge. This is where "AI engineer" starts meaning something specific.

### Skip test

1. Why does self-attention scale by `1/√d_k`?
2. What's the difference between BERT's and GPT's pretraining objectives?
3. What is a KV cache and why does it exist?
4. Why do transformers need positional encodings when RNNs don't?
5. What's the difference between multi-head attention and grouped-query attention?
6. Explain BPE tokenization. Why do LLMs struggle to count letters in a word?

---

## 5.1 — Classical NLP & embeddings (12–18h)

Tokenization history · bag of words, TF-IDF · word2vec, GloVe, fastText · the embedding space idea ·
cosine similarity · why static embeddings fail at polysemy.

**Free:** [Speech and Language Processing, 3rd ed. (Jurafsky & Martin)](https://web.stanford.edu/~jurafsky/slp3/)
— **free PDF, the field's standard textbook.** Chapters 2, 6, 7.

**Free:** [Stanford CS224N](https://web.stanford.edu/class/cs224n/) — lectures free on YouTube.
Lectures 1–3 for embeddings.

**Free:** [The Illustrated Word2Vec (Jay Alammar)](https://jalammar.github.io/illustrated-word2vec/).

> **Verdict: Free. Jurafsky & Martin is free and it's the textbook.**
> Keep this module short — it's history that makes the present legible.

**Build:** Train word2vec on a corpus you care about (your team's docs, a subreddit dump). Explore
the embedding space. Find the analogies. Find where it fails.

---

## 5.2 — The Transformer, understood completely (25–35h)

**Do not move past this module until you can implement a transformer from memory.** This is the
gate. Everything in Phases 6–10 assumes it.

**Free:** [Attention Is All You Need](https://arxiv.org/abs/1706.03762) — read the actual paper.
It's eight pages. You will not understand it on the first read. That's expected.

**Free:** [The Illustrated Transformer (Jay Alammar)](https://jalammar.github.io/illustrated-transformer/)
— the single best visual explanation ever written. Read it before and after the paper.

**Free:** [Karpathy — Let's build GPT: from scratch, in code, spelled out](https://www.youtube.com/watch?v=kCc8FmEb1nY)
(1h56m) — lecture 7 of Zero to Hero. Build nanoGPT with him.

**Free:** [The Annotated Transformer (Harvard NLP)](https://nlp.seas.harvard.edu/annotated-transformer/)
— the paper, line by line, with working code.

**Free:** [3Blue1Brown — Attention in transformers, visually explained](https://www.youtube.com/watch?v=eMlx5fFNoYc)
and the neural network series chapters 5–7.

**Free:** [Stanford CS224N](https://web.stanford.edu/class/cs224n/), lectures 8–9.

**Free:** [nanoGPT repo](https://github.com/karpathy/nanoGPT) — Karpathy's minimal, readable GPT.

> **Verdict: Free, overwhelmingly. This topic has the best free material of any topic in AI.**
> Sequence: Illustrated Transformer → Karpathy's Let's build GPT (code along) → the paper →
> Annotated Transformer → the paper again. That loop is worth more than any paid course.

**Build:** Implement a transformer from scratch in PyTorch, from memory, without looking at
Karpathy's code. Multi-head attention, positional encoding, layer norm, residuals, the whole thing.
Train it on a small corpus. This single project is the most credible thing you can put on a resume
at this stage.

---

## 5.3 — Tokenization (8–12h)

Underrated. Half of the weird LLM failures you'll debug are tokenization artifacts.

**Free:** [Karpathy — Let's build the GPT Tokenizer](https://youtu.be/zduSFxRajkE) (2h13m) —
lecture 8 of Zero to Hero. BPE from scratch.

**Free:** [Hugging Face Tokenizers course chapter](https://huggingface.co/learn/llm-course/chapter6/1).

**Free:** [Tiktokenizer](https://tiktokenizer.vercel.app/) — visualize how different models tokenize.
Play with it for 20 minutes; it's genuinely illuminating.

> **Verdict: Free.** Karpathy's tokenizer lecture explains a class of production bugs you'd
> otherwise spend years being confused by.

**Build:** Implement BPE from scratch. Then take a prompt that behaves strangely and diagnose it
via its tokenization.

---

## 5.4 — The model families & the Hugging Face ecosystem (20–28h)

BERT and encoder models · GPT and decoder models · T5 and encoder-decoders · when each is right ·
transformers, datasets, tokenizers, accelerate, PEFT · the Hub · model cards · fine-tuning a
small model end to end.

**Free:** [Hugging Face LLM Course](https://huggingface.co/learn/llm-course/) — **free, official,
excellent.** Chapters 1–7. This is your practical foundation for everything that follows.

**Free:** [The Illustrated BERT](https://jalammar.github.io/illustrated-bert/) and
[Illustrated GPT-2](https://jalammar.github.io/illustrated-gpt2/).

**Free:** [Hugging Face Transformers docs](https://huggingface.co/docs/transformers/index).

> **Verdict: Free. The HF course is the industry-standard onboarding and it costs nothing.**
> Do all of it. The Hugging Face ecosystem is infrastructure you'll use daily.

**Build:** Fine-tune BERT for a classification task relevant to your team. Deploy it behind a
FastAPI endpoint. Measure latency. Now you've touched the full loop once.

**Done when:** you can implement a transformer from memory and explain every architectural choice
in it.

---

# Phase 6 — Large Language Models

**120–160 hours.** The core of your job. This phase is long because it's the one that matters most.

### Skip test

1. What are scaling laws and what did Chinchilla change?
2. Difference between SFT, RLHF, and DPO — and when you'd use each?
3. What does temperature actually do to the logits? What about top-p?
4. Why is LoRA memory-efficient? What's the rank hyperparameter doing?
5. What is continuous batching and why does it matter for serving throughput?
6. How would you evaluate a summarization model without human labels?

---

## 6.1 — Build an LLM from scratch (30–40h)

**Free:** [Stanford CS336 — Language Modeling from Scratch (Spring 2026)](https://www.youtube.com/playlist?list=PLoROMvodv4rMqXOcazWaTUHhq-yembLCV)
— Tatsunori Hashimoto and Percy Liang. **The best LLM course in existence, free on YouTube.**
Assignments on the [course site](https://stanford-cs336.github.io/). Tokenization, architecture,
training, data, scaling, inference, alignment — all implementation-first.

**Free:** [nanoGPT](https://github.com/karpathy/nanoGPT) and
[modded-nanogpt](https://github.com/KellerJordan/modded-nanogpt) — the latter is a speedrun repo
where people compete to train GPT-2 faster. Reading its history is a masterclass.

**Paid:** *Build a Large Language Model (From Scratch)*, Sebastian Raschka, Manning (~$50).
Chapters 1–7, complete. [Free code repo here](https://github.com/rasbt/LLMs-from-scratch) — the code
is fully open even if you don't buy the book.

**Paid:** *Hands-On Large Language Models* (Alammar & Grootendorst, O'Reilly, ~$60) — heavily
illustrated, more applied than Raschka.

> **Verdict: CS336 free (do it), and buy Raschka. This is the third of the four things worth paying for.**
> CS336 is graduate-level and assumes CS224N; if it's too fast, Raschka's book is the gentler
> path to the same destination and its code repo is free to explore first. Ideally: read Raschka's
> book while watching CS336 lectures. They cover the same ground at different altitudes and
> reinforce each other. Alammar's book is the one to buy *instead* if you learn better from
> pictures than from code.

**Build:** Train a small language model from scratch on a corpus you assembled. It will be bad.
Training it is the point. Then write up your loss curves and what you'd do with 100x the compute.

---

## 6.2 — Pretraining, data & scaling laws (10–15h)

**Free:** [Chinchilla paper — Training Compute-Optimal LLMs](https://arxiv.org/abs/2203.15556).

**Free:** [Kaplan et al. — Scaling Laws for Neural Language Models](https://arxiv.org/abs/2001.08361).

**Free:** [The Llama 3 Herd of Models](https://arxiv.org/abs/2407.21783) — the most detailed public
account of how a frontier model actually gets built. Read it as a systems document.

**Free:** [FineWeb / FineWeb-Edu blog post (Hugging Face)](https://huggingface.co/spaces/HuggingFaceFW/blogpost-fineweb-v1)
— how pretraining data is actually filtered. Genuinely eye-opening.

**Free:** [CS336](https://stanford-cs336.github.io/) lectures on data and scaling.

> **Verdict: Free — papers and blog posts only.** No course covers this better than the primary
> sources. This module is where your "read one paper a week" habit starts paying off.

---

## 6.3 — Prompt engineering, done seriously (12–18h)

Not "10 magic prompts." The engineering discipline: systematic construction, versioning, and testing.

**Free:** [Anthropic Academy](https://anthropic.skilljar.com/) — free, launched March 2026,
~18–22 hours across the full catalog. Do **Prompt Engineering**, **Building with the Claude API**,
and **Introduction to MCP** (the last one is Phase 8, bookmark it).

**Free:** [Anthropic's prompt engineering docs](https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview)
— including the interactive tutorial. Best-in-class.

**Free:** [OpenAI prompt engineering guide](https://platform.openai.com/docs/guides/prompt-engineering).

**Free:** [DAIR.AI Prompt Engineering Guide](https://www.promptingguide.ai/) — comprehensive, covers
CoT, ReAct, self-consistency, tree-of-thought with the source papers linked.

**Key papers (free):** [Chain-of-Thought](https://arxiv.org/abs/2201.11903) ·
[Self-Consistency](https://arxiv.org/abs/2203.11171) · [ReAct](https://arxiv.org/abs/2210.03629) ·
[Tree of Thoughts](https://arxiv.org/abs/2305.10601).

> **Verdict: Free, absolutely. Never pay for a prompt engineering course.**
> Anthropic's and OpenAI's own materials are the best available, are free, and are updated as the
> models change. Anything sold is a repackaging of these, already out of date.

**Build:** Take a real task at work. Build a prompt for it. Then build an eval set of 20 examples
and measure your prompt. Then improve it and measure again. **The measuring is the skill** — this
is the habit that makes you an engineer rather than a prompt hobbyist.

---

## 6.4 — Structured output, function calling & the API layer (10–14h)

**Free:** [Anthropic tool use docs](https://docs.claude.com/en/docs/agents-and-tools/tool-use/overview)
and [OpenAI function calling guide](https://platform.openai.com/docs/guides/function-calling).

**Free:** [Instructor library](https://python.useinstructor.com/) — structured extraction with
Pydantic. Its docs are also a mini-course in the patterns.

**Free:** [Outlines](https://dottxt-ai.github.io/outlines/) — constrained generation, guaranteed
valid JSON via grammars.

**Free:** [Pydantic AI docs](https://ai.pydantic.dev/) — type-safe agents, clean design.

> **Verdict: Free.** This is where your Phase 0.4 Pydantic work pays off. Structured output is
> the plumbing of every production LLM system — invest here.

**Build:** An extraction pipeline: unstructured documents in, validated Pydantic objects out, with
retry logic on validation failure and a measured success rate.

---

## 6.5 — Fine-tuning & PEFT (20–28h)

When to fine-tune vs prompt vs RAG · dataset construction · SFT · LoRA and QLoRA · quantization
(GGUF, AWQ, GPTQ) · catastrophic forgetting · evaluating a fine-tune.

**Free:** [Hugging Face PEFT docs](https://huggingface.co/docs/peft/index) and the
[LLM Course chapter 11](https://huggingface.co/learn/llm-course/chapter11/1) on fine-tuning.

**Free:** [Unsloth docs & notebooks](https://docs.unsloth.ai/) — free Colab notebooks that fine-tune
real models on a free GPU. **This is the fastest path from zero to a working fine-tune.**

**Free:** [LoRA paper](https://arxiv.org/abs/2106.09685) and [QLoRA paper](https://arxiv.org/abs/2305.14314).

**Free:** [Axolotl](https://docs.axolotl.ai/) — YAML-driven fine-tuning, what many teams actually use.

**Free:** [Sebastian Raschka's blog on LoRA](https://magazine.sebastianraschka.com/p/practical-tips-for-finetuning-llms)
— practical hyperparameter guidance from experiments.

**Free:** [smol course (Hugging Face)](https://huggingface.co/learn/smol-course/) — post-training
on small models. Runs on modest hardware.

> **Verdict: Free — but spend on compute.** Unsloth's free Colab notebooks plus HF docs are a
> complete education. Budget ~$10–50 for Colab Pro or a few hours of a rented A100 so you can
> actually run a real fine-tune instead of reading about one. **This is the compute line item
> from the "four things worth paying for."**

**Build:** Fine-tune a small open model (Llama 3.2 3B, Qwen 3B) on a task where the base model
genuinely fails. Measure before and after on a held-out set. If you can't show the improvement
numerically, you haven't finished.

---

## 6.6 — Alignment & post-training (15–20h)

RLHF · reward models · PPO · DPO · GRPO · RLVR · constitutional AI · why reasoning models work.

**Free:** [HuggingFace RLHF blog post](https://huggingface.co/blog/rlhf) — the clearest intro.

**Free:** [InstructGPT paper](https://arxiv.org/abs/2203.02155) — the paper that made ChatGPT possible.

**Free:** [DPO paper](https://arxiv.org/abs/2305.18290) — simpler than PPO, widely used now.

**Free:** [DeepSeek-R1 paper](https://arxiv.org/abs/2501.12948) — GRPO and RL for reasoning. One of
the most important papers of the last two years.

**Free:** [Anthropic — Constitutional AI](https://arxiv.org/abs/2212.08073).

**Free:** [HF TRL library docs](https://huggingface.co/docs/trl/index) — SFT, DPO, GRPO trainers.

**Free:** [Nathan Lambert's RLHF Book](https://rlhfbook.com/) — free online, actively maintained,
by one of the field's clearest writers.

> **Verdict: Free. Lambert's RLHF Book is free and is the best single resource on this topic.**
> Most engineers never do post-training themselves, but understanding it is what lets you reason
> about *why* models behave as they do. Read the DeepSeek-R1 paper carefully — it's the clearest
> public window into how modern reasoning models are made.

**Build:** Run DPO on a small model using TRL with a preference dataset. Even a toy run teaches you
what the pipeline actually looks like.

---

## 6.7 — Inference, serving & optimization (12–18h)

KV caching · continuous batching · PagedAttention · speculative decoding · quantization for
inference · Flash Attention · throughput vs latency · cost per token · prompt caching · batching
strategies.

**Free:** [vLLM documentation](https://docs.vllm.ai/) — the standard open-source serving engine.
Read the design docs, not just the quickstart.

**Free:** [PagedAttention / vLLM paper](https://arxiv.org/abs/2309.06180).

**Free:** [Flash Attention paper](https://arxiv.org/abs/2205.14135).

**Free:** [Hugging Face TGI docs](https://huggingface.co/docs/text-generation-inference/index).

**Free:** [Ollama](https://ollama.com/) and [llama.cpp](https://github.com/ggerganov/llama.cpp) —
local inference. Run a model on your own laptop; the intuition it builds is disproportionate.

**Free:** [Anthropic prompt caching docs](https://docs.claude.com/en/docs/build-with-claude/prompt-caching)
— an immediate, large cost lever on real systems.

> **Verdict: Free. Docs and papers.** Serving is where AI engineering meets systems engineering,
> and it's where a lot of people stop being able to keep up. Don't stop here — this is a place to
> get genuinely strong, because few people are.

**Build:** Serve an open model with vLLM. Load test it. Measure tokens/sec, time-to-first-token,
and cost per 1M tokens. Then tune batching and measure again.

---

## 6.8 — LLM evaluation (15–20h)

**The most underrated skill in AI engineering in 2026, and the one most job descriptions now ask
for explicitly.**

Benchmarks and their limits · task-specific evals · golden datasets · LLM-as-judge and its biases ·
pairwise comparison · rubrics · human eval · regression testing for prompts · statistical
significance in eval · eval-driven development.

**Free:** [Hamel Husain's evals writing](https://hamel.dev/blog/posts/evals/) — **the best practical
material on LLM evaluation anywhere, free.** Start with "Your AI Product Needs Evals."

**Free:** [Eugene Yan's blog](https://eugeneyan.com/writing/llm-evaluators/) — LLM evaluators,
patterns for LLM systems. Consistently excellent.

**Free:** [OpenAI Evals framework](https://github.com/openai/evals) and
[Anthropic's eval guidance](https://docs.claude.com/en/docs/test-and-evaluate/eval-tool).

**Free:** [DeepEval](https://docs.confident-ai.com/) and [promptfoo](https://www.promptfoo.dev/docs/intro/)
— open-source eval frameworks.

**Free:** [DeepLearning.AI — Evaluating AI Agents](https://www.deeplearning.ai/short-courses/) —
free short course.

**Paid:** *AI Engineering* (Chip Huyen, O'Reilly, ~$60). **Chapters 3 and 4 are the best written
treatment of evaluation in print.**

> **Verdict: Free for the core (Hamel Husain is better than anything paid), and buy Chip Huyen's
> book. This is the fourth of the four things worth paying for.**
> *AI Engineering* is the single best book for the job you're doing. Read chapters 1–4 now and the
> rest across Phases 7–9. It's been O'Reilly's most-read book since release for a reason.

**Build:** Build an eval suite for something already running at work. Golden set, automated
scoring, CI integration. Then find a regression with it. **Walking into a team meeting with "I
built evals and found that our change made X worse" is the fastest possible way to be taken
seriously.**

**Done when:** you can take a business problem to a working, evaluated, cost-analyzed LLM solution
and defend every choice.

---

# Phase 7 — RAG

**70–90 hours.** The most-deployed LLM pattern in industry. Also the one most people do badly.

### Skip test

1. Why does naive fixed-size chunking hurt retrieval quality? Name three better strategies.
2. What does a reranker do that the embedding model didn't?
3. What's hybrid search and why does BM25 still matter in 2026?
4. How do you evaluate a RAG system's retrieval separately from its generation?
5. What is HyDE and what problem does it solve?
6. When is RAG the wrong answer? Name two alternatives.

---

## 7.1 — Embeddings & vector search (12–18h)

Embedding models and how to choose one · MTEB leaderboard · cosine vs dot vs euclidean · ANN
algorithms (HNSW, IVF) · vector databases: pgvector, Qdrant, Weaviate, Pinecone, Chroma, Milvus ·
metadata filtering · when a vector DB is overkill.

**Free:** [MTEB Leaderboard](https://huggingface.co/spaces/mteb/leaderboard) — how to actually pick
an embedding model.

**Free:** [Pinecone Learning Center](https://www.pinecone.io/learn/) — vendor-produced but genuinely
the best free explainer content on vector search and ANN algorithms.

**Free:** [pgvector](https://github.com/pgvector/pgvector) and
[Qdrant docs](https://qdrant.tech/documentation/).

**Free:** [Sentence Transformers docs](https://sbert.net/).

> **Verdict: Free.** Pinecone's learning center is excellent and free even if you never use their
> product. **Practical note: start with pgvector.** Most teams reach for a dedicated vector DB long
> before they need one, and Postgres you already have.

**Build:** Semantic search over your team's actual documentation, using pgvector. Compare three
embedding models on the same 30 real queries and pick one with data.

---

## 7.2 — Chunking, ingestion & parsing (10–14h)

Fixed vs recursive vs semantic vs structural chunking · chunk size and overlap tradeoffs · document
parsing (PDF is genuinely hard) · tables and images · metadata extraction · contextual retrieval.

**Free:** [Anthropic — Contextual Retrieval](https://www.anthropic.com/news/contextual-retrieval)
— reduces retrieval failures substantially, with code. One of the highest-value free reads in RAG.

**Free:** [Chunking strategies (Pinecone)](https://www.pinecone.io/learn/chunking-strategies/).

**Free:** [Docling](https://docling-project.github.io/docling/) and
[Unstructured](https://docs.unstructured.io/) — document parsing.

**Free:** [LlamaIndex docs on ingestion](https://docs.llamaindex.ai/en/stable/module_guides/loading/).

> **Verdict: Free.** Read the Anthropic contextual retrieval post first — it will change your
> ingestion design before you build it badly.

---

## 7.3 — Retrieval: sparse, dense, hybrid, reranking (12–18h)

BM25 and why it survives · dense retrieval · hybrid search and reciprocal rank fusion ·
cross-encoder rerankers · Cohere Rerank, bge-reranker · query expansion and rewriting · multi-query ·
HyDE · self-query.

**Free:** [BM25 explained (Elastic)](https://www.elastic.co/blog/practical-bm25-part-2-the-bm25-algorithm-and-its-variables).

**Free:** [HyDE paper](https://arxiv.org/abs/2212.10496).

**Free:** [Rerankers — Pinecone](https://www.pinecone.io/learn/series/rag/rerankers/).

**Free:** [DeepLearning.AI — Advanced Retrieval for AI with Chroma](https://www.deeplearning.ai/short-courses/advanced-retrieval-for-ai/)
— free short course.

> **Verdict: Free.** DeepLearning.AI's short courses are free, ~1–2 hours each, and made with the
> vendors who built the tools. There's no reason to pay for RAG education.
>
> **The single highest-ROI change in most RAG systems is adding a reranker.** If you learn one
> thing in Phase 7, learn that.

**Build:** Take your 7.1 search system. Add BM25, fuse the results, add a reranker. Measure
retrieval quality (recall@k, MRR) at every step. Show the curve.

---

## 7.4 — Advanced RAG & graph approaches (12–18h)

Agentic RAG · self-RAG and corrective RAG · multi-hop · RAPTOR hierarchical summarization ·
GraphRAG and knowledge graphs · multimodal RAG · long-context vs RAG (an actual live debate).

**Free:** [Microsoft GraphRAG](https://microsoft.github.io/graphrag/) — docs and paper.

**Free:** [RAPTOR paper](https://arxiv.org/abs/2401.18059).

**Free:** [Self-RAG paper](https://arxiv.org/abs/2310.11511) and
[Corrective RAG](https://arxiv.org/abs/2401.15884).

**Free:** [LangGraph's RAG tutorials](https://langchain-ai.github.io/langgraph/tutorials/rag/langgraph_adaptive_rag/)
— adaptive, corrective, and self-RAG implemented in LangGraph. **Directly relevant to your project.**

**Free:** [Neo4j GraphAcademy](https://graphacademy.neo4j.com/) — free courses on knowledge graphs
with LLMs.

> **Verdict: Free.** The LangGraph RAG tutorials are the sweet spot for you specifically — they
> teach advanced RAG *and* LangGraph patterns simultaneously.

---

## 7.5 — RAG evaluation (12–16h)

Retrieval metrics (recall@k, MRR, NDCG) vs generation metrics · faithfulness and groundedness ·
answer relevance · context precision/recall · synthetic eval set generation · RAGAS · citation
verification.

**Free:** [RAGAS documentation](https://docs.ragas.io/) — the standard RAG eval framework.

**Free:** [TruLens](https://www.trulens.org/) — the RAG triad (context relevance, groundedness,
answer relevance).

**Free:** [Hamel Husain — Evals FAQ](https://hamel.dev/blog/posts/evals-faq/) and his RAG-specific
writing.

> **Verdict: Free.** Combine RAGAS with your own golden set. **Automated RAG metrics are directional,
> not authoritative** — a hand-labeled set of 50 real queries from your users beats 5,000 synthetic
> ones. Say that in a meeting and watch people's expressions change.

**Build:** Full RAG evaluation harness over your system: separate retrieval and generation scores,
a golden set built from real queries, and a CI check that fails on regression.

**Done when:** you can build a RAG system, prove its quality numerically, and articulate precisely
where it will fail.

---

# Phase 8 — Agents & LangGraph

**110–150 hours.** Your current project. Your differentiator. This is where you go from "learning"
to "the person who understands what we're building."

### Skip test

1. What is the ReAct loop? Where does it fail?
2. In LangGraph, what's the difference between state, a node, and a conditional edge?
3. What is a checkpointer and why does it enable human-in-the-loop?
4. Why do multi-agent systems often perform worse than a single well-designed agent?
5. What's the difference between MCP tools, resources, and prompts?
6. How do you stop an agent from looping forever, and how do you evaluate one?

---

## 8.1 — Agent fundamentals (12–18h)

What an agent actually is (and the marketing around it) · the ReAct loop · tool calling as the
primitive · planning vs reactive · reflection · when an agent is the wrong architecture (usually).

**Free:** [Anthropic — Building Effective Agents](https://www.anthropic.com/engineering/building-effective-agents)
— **read this first, before any framework.** The most clear-headed writing on agent design in
existence. Its core argument — that most "agent" problems are better solved by simple composable
workflows — will save you months.

**Free:** [Anthropic — Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents).

**Free:** [ReAct paper](https://arxiv.org/abs/2210.03629) and [Reflexion](https://arxiv.org/abs/2303.11366).

**Free:** [Hugging Face Agents Course](https://huggingface.co/learn/agents-course/) — free and
certified. ~8 hours, 4 modules, covers smolagents, LangGraph, and LlamaIndex.

**Free:** [Chip Huyen — Agents](https://huyenchip.com/2025/01/07/agents.html) — long-form, excellent.

> **Verdict: Free. The Anthropic engineering blog is the best agent material published anywhere.**
> Read "Building Effective Agents" before you write a line of LangGraph. Most agent failures are
> design failures, not framework failures.

---

## 8.2 — LangChain essentials (10–15h)

Enough to be productive, not a religion.

**Free:** [LangChain docs](https://docs.langchain.com/oss/python/langchain/overview) — the modern
docs. LCEL, runnables, chat models, tools, output parsers.

**Free:** [LangChain Academy — Introduction to LangChain (Python)](https://academy.langchain.com/)
— free, official.

> **Verdict: Free.** LangChain's own materials are free and current. **A caution:** LangChain has
> churned its API significantly over the years, so anything older than ~6 months may be wrong.
> Trust the official docs over blog posts and over Udemy courses, which are frequently stale.
> Learn the abstractions you need and don't over-invest — the concepts transfer, the API doesn't.

---

## 8.3 — LangGraph, properly (25–35h)

**This is your priority module. Go deep.**

Graphs, nodes, edges · state and reducers · conditional routing · cycles · checkpointers and
persistence · human-in-the-loop and interrupts · streaming · subgraphs · time travel and
state editing · `Command` and dynamic routing · durability and error recovery · deployment.

**Free:** [LangChain Academy — Foundation: Introduction to LangGraph (Python)](https://academy.langchain.com/courses/intro-to-langgraph)
— **free, official, 6 modules, 55 lessons, ~6 hours of video.** Modules: Introduction · State and
Memory · UX and Human-in-the-Loop · Building Your Assistant · Long-Term Memory · Deployment.
**This is the single best thing you can do for your current project. Do it this month.**

**Free:** [LangChain Academy — additional free courses](https://academy.langchain.com/collections):
Introduction to Deep Agents · Building Reliable Agents · Monitoring Production Agents ·
Introduction to LangSmith Deployment.

**Free:** [LangGraph documentation](https://langchain-ai.github.io/langgraph/) — concepts section
in full, then the how-to guides as needed.

**Free:** [langchain-academy GitHub repo](https://github.com/langchain-ai/langchain-academy) —
all notebooks.

**Free:** [LangGraph — Workflows & Agents guide](https://docs.langchain.com/oss/python/langgraph/workflows-agents)
— the canonical build guide: routing, orchestrator-worker, evaluator-optimiser, agents.

**Paid:** Udemy LangGraph courses ($15–90 on sale).

> **Verdict: Free, decisively. Do not buy a LangGraph course.**
> LangChain Academy is made by the people who write the framework, is kept current with API
> changes, and is free. Udemy courses on LangGraph go stale within months because the API moves —
> paying for one is actively worse than free. **The one thing worth money here is a LangSmith
> account (free tier is generous; paid starts around $39/user/mo) — but use the free tier until
> your team pays for it.**

**Build (this is your flagship project):** A LangGraph agent for something real at work.
Requirements: persistent state via a checkpointer · at least one human-in-the-loop interrupt ·
conditional routing based on tool results · streaming output · full LangSmith tracing · an eval
suite. **Then present it to your team.** This project is the thing that changes how they see you.

---

## 8.4 — Memory & context engineering (12–18h)

Short-term vs long-term memory · thread-scoped vs cross-thread · summarization and compaction ·
semantic/episodic/procedural memory · context window management · context rot · retrieval-as-memory ·
the LangGraph Store API.

**Free:** [LangGraph memory concepts](https://langchain-ai.github.io/langgraph/concepts/memory/)
and the Long-Term Memory module in LangChain Academy.

**Free:** [Anthropic — Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents).

**Free:** [Hugging Face Context Course](https://huggingface.co/learn/) — context engineering for
code agents.

**Free:** [MemGPT / Letta paper](https://arxiv.org/abs/2310.08560) — memory hierarchies for agents.

**Free:** [Mem0](https://docs.mem0.ai/) and [Zep](https://help.getzep.com/) docs.

> **Verdict: Free.** Context engineering is arguably *the* skill of 2026 agent work — it has
> largely replaced prompt engineering as the thing that determines whether a system works. The
> research is recent enough that blog posts and papers are ahead of any course.

---

## 8.5 — Multi-agent systems (12–18h)

Supervisor · swarm/handoff · hierarchical teams · network · the coordination cost problem · when
one good agent beats five mediocre ones (usually).

**Free:** [LangGraph multi-agent concepts](https://langchain-ai.github.io/langgraph/concepts/multi_agent/)
and the [supervisor](https://github.com/langchain-ai/langgraph-supervisor-py) /
[swarm](https://github.com/langchain-ai/langgraph-swarm-py) libraries.

**Free:** [Anthropic — How we built our multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system)
— a genuinely detailed production postmortem. Rare and valuable.

**Free:** [Cognition — Don't Build Multi-Agents](https://cognition.ai/blog/dont-build-multi-agents)
— the strongest counter-argument. **Read it alongside the Anthropic piece.** Holding both views
at once is what makes you sound senior.

**Free:** [DeepLearning.AI — Multi AI Agent Systems with crewAI](https://www.deeplearning.ai/short-courses/)
— free short course, useful for breadth.

> **Verdict: Free.** The most valuable thing here is the disagreement — read both the Anthropic and
> Cognition pieces and form your own view. That's the difference between reciting and understanding.

---

## 8.6 — Model Context Protocol (12–16h)

The interoperability standard. Widely adopted, and increasingly assumed knowledge.

Architecture (host/client/server) · the three primitives: tools, resources, prompts · transports
(stdio, HTTP/SSE) · sampling · building servers and clients · security considerations.

**Free:** [Anthropic Academy — Introduction to MCP](https://anthropic.skilljar.com/introduction-to-model-context-protocol)
— free, official, hands-on with the Python SDK.

**Free:** [Anthropic Academy — MCP: Advanced Topics](https://anthropic.skilljar.com/model-context-protocol-advanced-topics)
— sampling, notifications, transports, production patterns.

**Free:** [MCP specification & docs](https://modelcontextprotocol.io/).

**Free:** [DeepLearning.AI — MCP: Build Rich-Context AI Apps with Anthropic](https://www.deeplearning.ai/short-courses/mcp-build-rich-context-ai-apps-with-anthropic/)
— free short course.

**Free:** [MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk).

> **Verdict: Free, official. Never pay for MCP training.**
> Anthropic built the protocol and gives away the best course on it. Coursera also hosts an
> Anthropic MCP course, but Skilljar is free and the same content.

**Build:** An MCP server exposing something your team uses — an internal API, a database, a
document store. Connect it to Claude Desktop or your IDE. This is a small project with
disproportionate visibility.

---

## 8.7 — Agent evaluation & observability (14–18h)

Trajectory evaluation vs final-answer evaluation · tool-call accuracy · step-level scoring ·
tracing · LangSmith · cost and latency per run · regression suites · debugging non-determinism.

**Free:** [LangSmith docs](https://docs.smith.langchain.com/) — free tier is generous.

**Free:** [LangChain Academy — Monitoring Production Agents](https://academy.langchain.com/) — free.

**Free:** [Langfuse](https://langfuse.com/docs) — open-source, self-hostable. The strongest
alternative to LangSmith and the best choice if you want vendor independence.

**Free:** [Arize Phoenix](https://arize.com/docs/phoenix) — open-source, OpenTelemetry-based,
ML-grade rigor.

**Free:** [DeepLearning.AI — Evaluating AI Agents](https://www.deeplearning.ai/short-courses/) —
free short course.

> **Verdict: Free tiers are enough for learning; the paid decision belongs to your team, not you.**
> Learn LangSmith (you're on LangGraph, the integration is seamless) and learn Langfuse (open
> source, and knowing the non-vendor-locked option makes you useful in architecture discussions).
> **Being the person who introduces tracing to a team that doesn't have it is a very fast way to
> become important.**

---

## 8.8 — The wider framework landscape (10–14h)

Breadth, so you're not a one-framework person. Timebox this hard — one day each, maximum.

**Free:** [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/) ·
[Claude Agent SDK](https://docs.claude.com/en/api/agent-sdk/overview) ·
[Pydantic AI](https://ai.pydantic.dev/) · [CrewAI](https://docs.crewai.com/) ·
[AutoGen](https://microsoft.github.io/autogen/) · [smolagents](https://huggingface.co/docs/smolagents/)
· [LlamaIndex Workflows](https://docs.llamaindex.ai/en/stable/module_guides/workflow/) ·
[DSPy](https://dspy.ai/) — programmatic prompt optimization, genuinely different and worth a look.

> **Verdict: Free, all of them. Build one small thing in two of these.**
> The goal is comparative judgment: being able to say "we use LangGraph because we need
> checkpointing and human-in-the-loop; if we just needed a simple tool loop, the OpenAI Agents SDK
> would be less machinery." That sentence is worth more in a design review than deep expertise in
> any single framework.

**Done when:** you can design, build, evaluate, and debug a production agent system — and argue
convincingly about when *not* to build one.

---

# Phase 9 — Production AI Engineering

**100–140 hours.** This is what makes you senior rather than clever. Most people skip it. Don't.

### Skip test

1. How do you version a prompt in production and roll back a bad one?
2. What is prompt injection and why can't you fully fix it with prompting?
3. How do you test a non-deterministic system in CI?
4. What are your three biggest cost levers on an LLM application?
5. What's the difference between drift in classical ML and drift in an LLM app?
6. Design the failure path when your LLM provider has an outage.

---

## 9.1 — Serving your application (14–18h)

**Free:** [FastAPI documentation](https://fastapi.tiangolo.com/) — tutorial and advanced user guide.
The best-written framework docs in Python. Streaming responses, background tasks, dependency injection.

**Free:** [Docker — Get Started](https://docs.docker.com/get-started/) and
[Docker Compose](https://docs.docker.com/compose/).

**Free:** [The Twelve-Factor App](https://12factor.net/) — 30 minutes, still the standard for
config, logging, and process design.

> **Verdict: Free.** FastAPI + Docker is the default stack for AI services. Learn streaming
> properly — token-by-token streaming is a UX requirement, not a nice-to-have.

**Build:** Wrap your Phase 8 agent in FastAPI with streaming (SSE), health checks, structured
logging, and a Dockerfile. Deploy it somewhere real — Railway, Render, Fly.io, or Modal all have
usable free tiers.

---

## 9.2 — Security & guardrails (14–18h)

Prompt injection (direct and indirect) · jailbreaks · data exfiltration through tool use · the
lethal trifecta (private data + untrusted content + external communication) · output validation ·
PII handling · sandboxing tool execution · rate limiting · least-privilege tool design ·
red teaming.

**Free:** [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
— the industry reference. Read it fully.

**Free:** [Simon Willison's prompt injection series](https://simonwillison.net/tags/prompt-injection/)
— he coined the term and remains the clearest voice on it. His "lethal trifecta" framing is the
most useful mental model available.

**Free:** [Anthropic — Mitigating jailbreaks and prompt injections](https://docs.claude.com/en/docs/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks).

**Free:** [NVIDIA NeMo Guardrails](https://docs.nvidia.com/nemo/guardrails/) and
[Guardrails AI](https://www.guardrailsai.com/docs).

**Free:** [DeepLearning.AI — Red Teaming LLM Applications](https://www.deeplearning.ai/short-courses/)
— free short course.

> **Verdict: Free.** This module matters more the moment your agent gets tool access — and yours
> will. **Prompt injection is not fully solvable at the prompt layer.** Understanding that, and
> designing around it with least-privilege tools and human approval gates, is a genuinely senior
> position that most people building agents in 2026 have not internalized.

**Build:** Red team your own agent. Try to make it leak its system prompt, call a tool it
shouldn't, or exfiltrate data via a poisoned document. Write up what worked, then fix it
architecturally rather than with a "please don't do that" instruction.

---

## 9.3 — Testing, CI & prompt management (12–16h)

Unit tests for deterministic parts · eval suites as tests · snapshot testing · prompt versioning ·
A/B testing prompts in production · canary deploys · CI gates on eval regression.

**Free:** [promptfoo](https://www.promptfoo.dev/docs/intro/) — eval and red-team in CI. Excellent docs.

**Free:** [Hamel Husain — evals in CI](https://hamel.dev/blog/posts/evals/).

**Free:** [GitHub Actions docs](https://docs.github.com/en/actions/writing-workflows/quickstart).

> **Verdict: Free.** Wiring evals into CI is the concrete artifact that proves you understand
> production AI. It's also a thing you can contribute to your team's repo in your first months.

---

## 9.4 — Cost, latency & reliability (12–16h)

Token accounting · prompt caching · model routing (small model first, escalate) · semantic caching ·
batch APIs · streaming for perceived latency · timeouts and retries with backoff · fallback chains
across providers · graceful degradation · rate limit handling.

**Free:** [Anthropic prompt caching](https://docs.claude.com/en/docs/build-with-claude/prompt-caching)
and [batch processing](https://docs.claude.com/en/docs/build-with-claude/batch-processing) docs —
prompt caching and batch each cut costs dramatically on the right workloads.

**Free:** [LiteLLM](https://docs.litellm.ai/) — unified API across 100+ providers, with routing,
fallbacks, and budget controls. Extremely practical.

**Free:** [Chip Huyen — *AI Engineering*](https://www.oreilly.com/library/view/ai-engineering/9781098166298/),
chapters 9–10 (if you bought it in Phase 6).

> **Verdict: Free.** Cost engineering is where you visibly save your team money, which is the
> most legible form of value there is. Learn to produce a cost-per-request number for any system
> you build.

**Build:** Add a caching layer, a model router, and a fallback provider to your agent. Measure
cost per request before and after. Put the number in a slide.

---

## 9.5 — MLOps & LLMOps (18–24h)

Experiment tracking · model registry · feature stores · data versioning · monitoring and drift ·
retraining triggers · CI/CD for ML · the operational differences between ML systems and LLM systems.

**Free:** [MLOps Zoomcamp (DataTalks.Club)](https://github.com/DataTalksClub/mlops-zoomcamp) —
**free, complete, project-based.** The best free MLOps course in existence. MLflow, Prefect,
deployment, monitoring.

**Free:** [LLM Zoomcamp (DataTalks.Club)](https://github.com/DataTalksClub/llm-zoomcamp) — free,
the LLM-focused sibling.

**Free:** [Made With ML (Goku Mohandas)](https://madewithml.com/) — free, production ML from
design to deployment.

**Free:** [Full Stack Deep Learning](https://fullstackdeeplearning.com/course/) — free course
materials on everything after the model trains.

**Free:** [Google — MLOps: Continuous delivery and automation pipelines](https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning).

**Paid:** *Designing Machine Learning Systems* (Chip Huyen, ~$60).

> **Verdict: Free — MLOps Zoomcamp is genuinely excellent and completely free.**
> On the book: *Designing Machine Learning Systems* is very good, but if you're buying one Chip
> Huyen book, buy *AI Engineering* instead — it's more current and closer to your actual job.
> Buy *DMLS* later if you move toward classical ML systems. Pair whichever you read with MLOps
> Zoomcamp for the hands-on work the books lack.

---

## 9.6 — System design for AI (15–20h)

Requirements gathering · latency budgets · build vs buy · model selection under constraints ·
data pipelines · scaling · multi-tenancy · caching architecture · the actual tradeoffs.

**Free:** [Eugene Yan — Patterns for Building LLM-based Systems](https://eugeneyan.com/writing/llm-patterns/)
— exceptional, free, comprehensive.

**Free:** [ByteByteGo blog](https://blog.bytebytego.com/) — general system design, much free.

**Free:** [Evidently AI — ML System Design: 300 case studies](https://www.evidentlyai.com/ml-system-design)
— how real companies actually built it. Free.

**Free:** [Awesome LLMOps](https://github.com/tensorchord/Awesome-LLMOps) — tooling landscape map.

> **Verdict: Free.** Eugene Yan's patterns post plus the Evidently case study collection is a
> better system design education than any paid course, because it's grounded in what companies
> actually shipped.

**Build (capstone):** Write a full design doc for an AI system your team could actually use.
Requirements, architecture diagram, model choice with justification, eval plan, cost estimate,
failure modes, rollout plan. **Then circulate it.** A good design doc is the most senior-looking
artifact a junior engineer can produce.

**Done when:** you can own an AI feature from problem statement to production and operate it.

---

# Phase 10 — Frontier & Specialization

**Ongoing, forever.** By now you're not following a roadmap, you're navigating. This phase is
about the habits and directions that keep you current.

---

## 10.1 — Reading research (permanent habit, ~2h/week)

**Free:** [arXiv cs.CL](https://arxiv.org/list/cs.CL/recent) and
[cs.LG](https://arxiv.org/list/cs.LG/recent) · [Hugging Face Daily Papers](https://huggingface.co/papers)
— curated, with community discussion. Best daily filter available.

**Free:** [AlphaSignal](https://alphasignal.ai/), [The Batch](https://www.deeplearning.ai/the-batch/)
(Andrew Ng), [Import AI](https://importai.substack.com/) (Jack Clark) — newsletters.

**Free:** [Sebastian Raschka's Ahead of AI](https://magazine.sebastianraschka.com/) — the best
technical newsletter in the field. Deep, honest, well-illustrated.

**Free:** [Nathan Lambert — Interconnects](https://www.interconnects.ai/) — post-training and RL.

**Free:** [Simon Willison's blog](https://simonwillison.net/) — the best running commentary on
practical LLM developments anywhere.

**Free:** [Yannic Kilcher](https://www.youtube.com/@YannicKilcher) — paper walkthroughs on video.

> **Verdict: Free.** Pick two newsletters, not eight. Read one paper properly per week rather than
> skimming ten. Depth beats coverage, and coverage is what feeds anxiety.

**Method:** Three-pass reading. Pass 1: title, abstract, figures, conclusion (10 min). Pass 2: full
read, skip proofs (1h). Pass 3: reimplement the core idea (only for papers that matter to you).

---

## 10.2 — Reasoning models & test-time compute (15–20h)

**Free:** [DeepSeek-R1 paper](https://arxiv.org/abs/2501.12948) · [OpenAI o1 system card](https://openai.com/index/openai-o1-system-card/)
· [Let's Verify Step by Step](https://arxiv.org/abs/2305.20050) ·
[Anthropic on extended thinking](https://docs.claude.com/en/docs/build-with-claude/extended-thinking).

**Free:** [Nathan Lambert's RLHF Book](https://rlhfbook.com/), reasoning chapters.

> **Verdict: Free.** This is the most active frontier as of 2026. Understanding how test-time
> compute trades against training compute is central to reasoning about where the field goes next.

---

## 10.3 — Multimodal & vision-language models (15–20h)

**Free:** [CLIP paper](https://arxiv.org/abs/2103.00020) · [Flamingo](https://arxiv.org/abs/2204.14198)
· [LLaVA](https://arxiv.org/abs/2304.08485) · [Qwen-VL](https://arxiv.org/abs/2308.12966).

**Free:** [HF Computer Vision Course](https://huggingface.co/learn/computer-vision-course), multimodal
chapters · [HF Audio Course](https://huggingface.co/learn/audio-course/).

**Free:** [Anthropic vision docs](https://docs.claude.com/en/docs/build-with-claude/vision).

> **Verdict: Free.** Multimodal is rapidly becoming the default rather than a specialization —
> document understanding, screenshots, and charts show up constantly in real Decision Science work.

---

## 10.4 — Distributed training & scale (20–25h)

Data/tensor/pipeline parallelism · ZeRO and DeepSpeed · FSDP · gradient accumulation and checkpointing
· multi-node training · efficient attention kernels.

**Free:** [HF — Ultra-Scale Playbook](https://huggingface.co/spaces/nanotron/ultrascale-playbook)
— exceptional and free, on training at scale.

**Free:** [CS336](https://stanford-cs336.github.io/) systems lectures ·
[PyTorch FSDP tutorial](https://pytorch.org/tutorials/intermediate/FSDP_tutorial.html) ·
[DeepSpeed docs](https://www.deepspeed.ai/).

> **Verdict: Free.** Only go here if you'll actually train large models. For most AI engineers,
> reading the Ultra-Scale Playbook once for literacy is sufficient.

---

## 10.5 — Generative media (10–15h, optional)

**Free:** [HF Diffusion Course](https://huggingface.co/learn/diffusion-course/) ·
[Lilian Weng — What are Diffusion Models?](https://lilianweng.github.io/posts/2021-07-11-diffusion-models/)
· [fast.ai Part 2: Deep Learning Foundations to Stable Diffusion](https://course.fast.ai/Lessons/part2.html).

> **Verdict: Free, and genuinely optional** unless image/video generation touches your work. Skip
> without guilt if it doesn't.

---

## 10.6 — Pick a specialization (year two)

By month 12–18, generalist coverage stops compounding. Pick one:

- **Agentic systems architecture** — the natural extension of your current work. Deep LangGraph,
  multi-agent orchestration, long-horizon reliability, agent evaluation.
- **RAG / knowledge systems at scale** — retrieval quality, GraphRAG, enterprise search, hybrid
  architectures.
- **Model training & post-training** — fine-tuning, RLHF/GRPO, domain-specialized models.
- **LLM infrastructure & serving** — inference optimization, kernels, cost engineering. Fewer
  people, high demand.
- **Decision intelligence** — causal ML + LLMs. **This is the strongest differentiator available
  to you specifically**, because it sits exactly where your team already is and almost nobody
  covers both halves well.
- **AI safety & evaluation** — red teaming, alignment evaluation, governance. Growing fast.

---

## 10.7 — Contribute and be visible (ongoing)

Open source contributions to LangGraph, LangChain, vLLM, or Hugging Face · write technical blog
posts · answer questions in the LangChain Discord or r/LocalLLaMA · give an internal talk ·
[Kaggle](https://www.kaggle.com/) and [AI hackathons](https://lu.ma/ai).

> **Verdict: Free, and this is the compounding one.** The gap between "knows a lot" and "known
> for knowing a lot" is entirely public artifacts. A blog post that takes you six hours can pay
> back for years.

---

# The portfolio: eight projects that prove it

Ordered by phase. If you build all eight, you are demonstrably not a fresher anymore.

| # | Project | Phase | What it proves |
|---|---|---|---|
| 1 | Typed, tested, packaged CLI tool | 0 | You write professional code, not scripts |
| 2 | Causal analysis with three estimators and a DAG | 2 | You understand *why*, not just *what* — rare and valuable |
| 3 | Tabular ML with rigorous error analysis | 3 | You know evaluation, leakage, and honest reporting |
| 4 | Transformer implemented from scratch, from memory | 5 | You understand the architecture, not just the API |
| 5 | Fine-tuned model with measured before/after | 6 | You can improve a model, not just call one |
| 6 | Production RAG with a full eval harness | 7 | You can ship the most common LLM pattern, with proof |
| 7 | **LangGraph agent: HITL, checkpointing, tracing, evals** | 8 | **Your flagship. Directly relevant to your current work.** |
| 8 | Deployed AI service + design doc + cost analysis | 9 | You operate systems, you don't just build demos |

**Write each one up.** Repo with a real README, a short blog post, a diagram. The write-up is
half the value — and it's the half your team actually sees.

---

# Total spend: the honest accounting

| Item | Cost | Verdict |
|---|---|---|
| *Practical Statistics for Data Scientists* | ~$45 | **Buy.** The stats book you'll actually reach for. |
| *Trustworthy Online Controlled Experiments* (Kohavi) | ~$50 | **Buy.** Definitive on experimentation; nothing free matches it. |
| *Hands-On Machine Learning*, 3rd ed. (Géron) | ~$65 | **Buy.** Best single ML book in print, current as of March 2026. |
| *AI Engineering* (Chip Huyen) | ~$60 | **Buy.** The best book for the exact job you're doing. |
| *Build an LLM from Scratch* (Raschka) | ~$50 | **Buy** — or use the free code repo + CS336 if budget is tight. |
| *Fluent Python*, 2nd ed. | ~$55 | **Optional, month 4+.** Makes you good, not functional. |
| Compute (Colab Pro / API credits) | ~$50–150 | **Buy.** Highest return per dollar in this entire list. |
| Coursera Plus (1 month, optional) | ~$59 | **Only if** you need graded accountability for Ng's specialization. |
| Everything else | **$0** | Karpathy, CS336, HF, LangChain Academy, Anthropic Academy, all the papers, all the free books. |

**Realistic total: ~$270 (books + compute), up to ~$430 with the optional items.**
For a year of education that takes you from zero to genuinely competent, that is an absurd
bargain — and it's only possible because the best material in this field happens to be free.

---

# Sequencing advice for unpredictable time

You said your hours vary — some weeks ten, some weeks zero. That's normal and this roadmap is
built for it. Four rules:

1. **Never break the chain on Phase 4.1 (Karpathy) or Phase 8.3 (LangGraph).** These two modules
   need continuity — momentum matters more than hours. Do them in periods when you know you'll
   have a few consistent weeks.
2. **In zero-hour weeks, read.** Papers, blog posts, a book chapter on your commute. Reading
   survives interruption; coding doesn't.
3. **Front-load what your job pays you to know.** You're on LangGraph *now*. It is completely
   reasonable — and smarter — to do Phase 8.3 early, out of order, while working the foundations
   in parallel. You'll understand maybe 60% of it. Then when you arrive at Phase 8 properly, the
   remaining 40% will land hard and fast. Learning out of order is fine as long as you eventually
   close the loop.
4. **Depth over coverage, always.** Someone who deeply understands transformers, evaluation, and
   LangGraph beats someone who has skimmed everything. If you have to cut, cut breadth.

**A pragmatic order given your situation:** Phase 0 → Phase 8.1 and 8.3 (early, for work) →
Phase 1 → Phase 2 → Phase 3 → Phase 4 → Phase 5 → Phase 6 → Phase 7 → Phase 8 in full →
Phase 9 → Phase 10.

---

# What "knowing everything" actually looks like

Not memorizing every paper. It looks like this:

- You can implement the core of anything you use, from scratch, at least once.
- You can say **why** a design choice was made, and what the alternative was.
- You know where each thing **fails**, and you say so before someone else finds out.
- You measure. You show numbers. You don't say "it seems better."
- You can disagree with a popular opinion and defend it — the way you'd hold both the Anthropic
  and Cognition views on multi-agent systems simultaneously.
- You say "I don't know, let me find out" quickly, and then you actually find out.

That last one is the whole thing. Nobody knows everything in this field — it moves too fast. The
people who look like they do are the ones with strong foundations who close gaps quickly and
publicly. Foundations are what this roadmap buys you. The closing-gaps-quickly part is a habit,
and you start it today.

---

*Last verified: 27 July 2026. Prices are approximate USD and change. Free resources listed here
were confirmed live at time of writing — if a link rots, the topic still stands; search the title.*
