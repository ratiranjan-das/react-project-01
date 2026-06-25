import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './TrackerPage.css'

const SYLLABUS = [
  { id: 'html-css', icon: 'ti-brand-html5', color: '#E34F26', label: 'HTML & CSS Foundations', sections: [
    { name: 'Cohort Topics', topics: [
      ['Introduction to Web Development & How Browsers Work', false],
      ['HTML Document Structure & Semantic Elements', false],
      ['Headings, Paragraphs, Lists, Links & Images', false],
      ['HTML Forms & Input Elements', false],
      ['CSS Selectors, Specificity & Cascade', false],
      ['Box Model: margin, padding, border, outline', false],
      ['CSS Flexbox Layout', false],
      ['CSS Grid Layout', false],
      ['Responsive Design & Media Queries', false],
      ['CSS Variables & Custom Properties', false],
      ['CSS Transitions & Basic Animations', false],
      ['Positioning: static, relative, absolute, fixed, sticky', false],
    ]},
    { name: 'Scenario & Practical Interview Questions', topics: [
      ['A layout breaks on mobile but looks fine on desktop — how do you debug it?', true],
      ['Two elements are overlapping unexpectedly — how does z-index & stacking context work?', true],
      ['You have a nav, sidebar & main content — would you use Flexbox or Grid, and why?', true],
      ['A button style is not applying even though your CSS is correct — explain specificity conflict', true],
      ['How would you make a website accessible for screen readers? (ARIA, semantic tags)', true],
      ['Your page feels slow on first load — which CSS techniques reduce render-blocking?', true],
      ['How do you build a sticky header that stops sticking after a certain section?', true],
      ['Implement a 3-column card layout that collapses to 1 column on mobile (no framework)', true],
      ['What is the difference between display:none, visibility:hidden, and opacity:0?', true],
      ['How would you implement a dark mode toggle using only CSS variables?', true],
    ]},
  ]},
  { id: 'javascript', icon: 'ti-brand-javascript', color: '#F0B429', label: 'JavaScript (Core)', sections: [
    { name: 'Cohort Topics', topics: [
      ['Variables: var, let, const & scope', false],
      ['Data types, type coercion & typeof', false],
      ['Functions: declarations, expressions & arrow functions', false],
      ['Arrays & Array methods: map, filter, reduce, find', false],
      ['Objects, prototypes & destructuring', false],
      ['Spread & rest operators', false],
      ['DOM manipulation & event listeners', false],
      ['Async JS: callbacks, Promises & async/await', false],
      ['Fetch API & working with REST APIs', false],
      ['Error handling: try/catch', false],
      ['ES6+ modules: import/export', false],
      ['LocalStorage & SessionStorage', false],
      ['Closures & higher-order functions', false],
      ['this keyword & binding', false],
    ]},
    { name: 'Scenario & Practical Interview Questions', topics: [
      ['Implement debounce from scratch — a search input should fire API only after user stops typing', true],
      ['Implement throttle from scratch — a scroll handler should fire at most once per 200ms', true],
      ['You have 3 APIs to call in parallel — how do you handle all of them & catch individual errors?', true],
      ['Explain what happens step-by-step when this code runs: setTimeout, Promise, console.log (event loop)', true],
      ['Your closure inside a for-loop prints wrong values — explain why & fix it', true],
      ['Deep clone an object without JSON.parse/stringify — handle circular refs & dates', true],
      ['Implement a memoize function that caches results of expensive function calls', true],
      ['You attach 1000 click listeners to 1000 list items — how do you optimise with event delegation?', true],
      ['What is the output? [] + {}, {} + [], typeof null — explain each', true],
      ['Implement Promise.all from scratch', true],
      ['Implement curry(fn) that works like: curry(add)(1)(2)(3) === 6', true],
      ['An async function inside forEach is not awaited correctly — how do you fix it?', true],
    ]},
  ]},
  { id: 'react', icon: 'ti-brand-react', color: '#61DAFB', label: 'React.js', sections: [
    { name: 'Cohort Topics', topics: [
      ['React setup with Vite', false],
      ['JSX syntax & expressions', false],
      ['Functional components & props', false],
      ['useState hook', false],
      ['useEffect hook', false],
      ['useRef & useCallback', false],
      ['useMemo for performance', false],
      ['Context API for state management', false],
      ['React Router: BrowserRouter, Routes, useParams', false],
      ['Controlled vs uncontrolled forms', false],
      ['Lifting state up & component communication', false],
      ['Custom hooks', false],
      ['React Query / TanStack Query for data fetching', false],
      ['Code splitting & lazy loading', false],
    ]},
    { name: 'Scenario & Practical Interview Questions', topics: [
      ['Why use React over plain JS? When would you NOT use React?', true],
      ['How do you optimise a React app that is re-rendering too often?', true],
      ['How do you increase initial page load speed in a React app?', true],
      ['How do you handle security in a React app? (XSS, dangerouslySetInnerHTML, sanitisation)', true],
      ['Your useEffect is running in an infinite loop — what is causing it and how do you fix it?', true],
      ['You have a list of 10,000 items — how do you render it without freezing the UI?', true],
      ['How do you share state between two sibling components that are far apart in the tree?', true],
      ['When would you use useCallback vs useMemo — give a real example for each', true],
      ['Build a custom hook that fetches data, handles loading & error states', true],
      ['A modal opened inside a deeply nested component needs to render at root level — how?', true],
      ['How do you handle a crashed component without breaking the whole app?', true],
      ['Your React app bundle is 4MB — what are 3 ways to reduce it?', true],
      ['Explain why Virtual DOM makes React fast — what is reconciliation & diffing?', true],
      ['You need global state but Redux feels too heavy — what alternatives would you use and why?', true],
    ]},
  ]},
  { id: 'typescript', icon: 'ti-brand-typescript', color: '#3178C6', label: 'TypeScript', sections: [
    { name: 'Cohort Topics', topics: [
      ['TypeScript setup & tsconfig', false],
      ['Basic types: string, number, boolean, any, unknown', false],
      ['Interfaces & type aliases', false],
      ['Generics', false],
      ['Union & intersection types', false],
      ['TypeScript with React: props & state typing', false],
      ['Utility types: Partial, Required, Pick, Omit', false],
      ['Enums', false],
    ]},
    { name: 'Scenario & Practical Interview Questions', topics: [
      ['Why add TypeScript to a JavaScript project — what real problems does it solve?', true],
      ['You get a TS error "Object is possibly undefined" — how do you handle it properly (not with !)?', true],
      ['When would you use interface vs type — give a scenario for each', true],
      ['Write a generic function fetchData<T> that returns typed API response', true],
      ['You receive an API response typed as any — how do you safely narrow the type?', true],
      ['What is a discriminated union — give a real-world example (e.g. API state: loading/success/error)', true],
      ['How do you type a React component that accepts either a string or a ReactNode as children?', true],
      ['You have a large object type and only need 3 fields from it — which utility type do you use?', true],
      ['What does strict:true in tsconfig actually enable, and why does it matter?', true],
    ]},
  ]},
  { id: 'git', icon: 'ti-brand-git', color: '#F05032', label: 'Git & GitHub', sections: [
    { name: 'Cohort Topics', topics: [
      ['Git basics: init, add, commit, log', false],
      ['Branching & Merging strategies', false],
      ['Remote repositories: push, pull, fetch, clone', false],
      ['GitHub PRs, Issues & Collaboration', false],
      ['GitHub CI/CD basics', false],
    ]},
    { name: 'Scenario & Practical Interview Questions', topics: [
      ['You committed a secret API key — how do you remove it from git history?', true],
      ['You need to apply one specific commit from another branch — what do you use?', true],
      ['Your feature branch has 10 messy commits before merging to main — how do you clean it up?', true],
      ['You pushed to main by mistake — how do you undo it safely without losing teammates work?', true],
      ['Two developers edited the same file — walk me through resolving a merge conflict', true],
      ['When would you use git rebase over git merge in a team project?', true],
      ['How would you set up a branching strategy for a team of 5 developers?', true],
    ]},
  ]},
  { id: 'nodejs', icon: 'ti-brand-nodejs', color: '#68A063', label: 'Node.js & Express', sections: [
    { name: 'Cohort Topics', topics: [
      ['Node.js architecture & event loop', false],
      ['npm & package.json', false],
      ['File system module (fs)', false],
      ['HTTP module basics', false],
      ['Express.js setup & routing', false],
      ['Middleware in Express', false],
      ['RESTful API design', false],
      ['Request & Response handling', false],
      ['Error handling middleware', false],
      ['Environment variables with dotenv', false],
      ['Authentication: JWT basics', false],
      ['bcrypt for password hashing', false],
      ['Cookies & sessions', false],
    ]},
    { name: 'Scenario & Practical Interview Questions', topics: [
      ['How do you secure a Node.js REST API? (rate limiting, helmet, input validation, CORS)', true],
      ['A user logs in — walk me through the full JWT flow (issue, send, verify, refresh)', true],
      ['Your Express API is getting hammered by 1000 req/sec — how do you protect it?', true],
      ['How do you handle a large file upload (2GB video) without crashing Node.js?', true],
      ['A user can access another users data by changing an ID in the URL — how do you prevent this?', true],
      ['Your API leaks a stack trace in production error responses — how do you fix it?', true],
      ['Design a middleware chain for: CORS → auth → rate-limit → validate input → route handler', true],
      ['How do you implement role-based access control (admin vs user) in Express?', true],
      ['Node is single-threaded — how do you handle CPU-heavy tasks without blocking the event loop?', true],
      ['How do you structure a large Express project (folders, routes, controllers, services)?', true],
      ['Your JWT secret is hardcoded in the code — what is the risk & how do you fix it?', true],
      ['Refresh token vs Access token — why do you need both and how do you implement rotation?', true],
    ]},
  ]},
  { id: 'mongodb', icon: 'ti-database', color: '#47A248', label: 'MongoDB & Mongoose', sections: [
    { name: 'Cohort Topics', topics: [
      ['MongoDB vs SQL: document-based databases', false],
      ['CRUD operations in MongoDB', false],
      ['MongoDB Atlas setup', false],
      ['Mongoose schemas & models', false],
      ['Mongoose queries: find, findById, updateOne', false],
      ['Mongoose populate (relationships)', false],
      ['Indexing & aggregation pipelines', false],
    ]},
    { name: 'Scenario & Practical Interview Questions', topics: [
      ['You are building a blog — should posts & comments be embedded or referenced? Justify.', true],
      ['A query on a 1M document collection is taking 5 seconds — how do you fix it?', true],
      ['Write an aggregation pipeline: get top 5 users by total order value in last 30 days', true],
      ['User orders a product — inventory must decrease & order must be created atomically. How?', true],
      ['You need to search posts by title (partial match) efficiently — what do you use?', true],
      ['When would you choose MongoDB over PostgreSQL for a project?', true],
      ['Your Mongoose populate is causing N+1 queries — how do you fix it?', true],
      ['How do you run a migration to add a new required field to an existing collection safely?', true],
    ]},
  ]},
  { id: 'postgresql', icon: 'ti-server', color: '#336791', label: 'PostgreSQL & Prisma', sections: [
    { name: 'Cohort Topics', topics: [
      ['SQL fundamentals: SELECT, INSERT, UPDATE, DELETE', false],
      ['Joins, foreign keys & relations', false],
      ['PostgreSQL setup', false],
      ['Prisma ORM setup & schema definition', false],
      ['Prisma migrations', false],
      ['Prisma client queries', false],
      ['Prisma with Next.js / SaaS workflows', false],
    ]},
    { name: 'Scenario & Practical Interview Questions', topics: [
      ['A dashboard query joins 4 tables and takes 8 seconds — walk me through how you debug it', true],
      ['Write a query: get each departments highest paid employee (window function)', true],
      ['You need to transfer money between two accounts — write the safe transaction with rollback', true],
      ['Your ORM is making 100 queries for 100 users (N+1 problem) — how do you fix it?', true],
      ['When would you use a CTE (WITH clause) vs a subquery?', true],
      ['You have 10M rows and queries are slow — which columns do you index and why?', true],
      ['EXPLAIN ANALYZE output shows Sequential Scan on a large table — what do you do?', true],
      ['Design a schema for a multi-tenant SaaS — how do you isolate each tenants data?', true],
      ['What are ACID properties — give a real example where each one matters?', true],
      ['When would you use Prisma vs writing raw SQL directly?', true],
      ['You need to store and query JSON data in PostgreSQL — how does JSONB help?', true],
      ['Your Prisma migration failed in production halfway — what do you do?', true],
    ]},
  ]},
  { id: 'supabase', icon: 'ti-bolt', color: '#3ECF8E', label: 'Supabase', sections: [
    { name: 'Core Concepts — Learn These First', topics: [
      ['What is Supabase — Firebase alternative built on PostgreSQL', false],
      ['Supabase project setup & dashboard walkthrough', false],
      ['Supabase JS client (supabase-js) — installation & initialization', false],
      ['anon key vs service_role key — what each is for', false],
      ['Supabase Table Editor & SQL Editor', false],
      ['Running SQL migrations with Supabase CLI', false],
    ]},
    { name: 'Authentication', topics: [
      ['Email/password auth setup', false],
      ['Magic link & OTP authentication', false],
      ['OAuth providers (Google, GitHub) with Supabase', false],
      ['supabase.auth.getUser() vs supabase.auth.getSession()', false],
      ['Protecting routes using session in Next.js + Supabase', false],
      ['auth.uid() — using user ID inside RLS policies', false],
    ]},
    { name: 'Row Level Security (RLS) — Most Important', topics: [
      ['What is RLS & why it is critical for Supabase apps', false],
      ['Enabling RLS on a table (ALTER TABLE … ENABLE ROW LEVEL SECURITY)', false],
      ['Writing SELECT, INSERT, UPDATE, DELETE policies', false],
      ['USING clause vs WITH CHECK clause — difference', false],
      ['auth.uid() & auth.jwt() helper functions in policies', false],
      ['anon role vs authenticated role — what each can access', false],
      ['service_role key bypasses RLS — why you must keep it server-side only', false],
      ['Testing RLS by impersonating users in Supabase Studio', false],
      ['RLS on Storage (storage.objects table)', false],
    ]},
    { name: 'Database & Realtime', topics: [
      ['CRUD with supabase-js (.from().select().insert().update().delete())', false],
      ['Filtering, ordering & pagination (.eq, .gt, .order, .limit, .range)', false],
      ['Realtime subscriptions — listening to table changes', false],
      ['Supabase Realtime channels & broadcast', false],
      ['Database functions & triggers in Supabase', false],
      ['Full-text search with Supabase (to_tsvector, to_tsquery)', false],
      ['pgvector extension — vector/AI embeddings use case', false],
    ]},
    { name: 'Storage & Edge Functions', topics: [
      ['Supabase Storage — creating buckets (public vs private)', false],
      ['Uploading, downloading & deleting files with supabase-js', false],
      ['Storage RLS policies for secure file access', false],
      ['Edge Functions — what they are & when to use them', false],
      ['Deploying an Edge Function with Supabase CLI', false],
    ]},
    { name: 'Scenario & Practical Interview Questions', topics: [
      ['Why would you choose Supabase over Firebase for a new project?', true],
      ['You enabled RLS but forgot to add any policy — what happens to your data access?', true],
      ['A user can read other users private data — your RLS policy has a bug. How do you debug it?', true],
      ['You stored the service_role key in your React frontend — what is the risk?', true],
      ['How does Supabase auto-generate a REST API from your tables — what is PostgREST?', true],
      ['Build a multi-tenant app where each user sees only their own rows — write the RLS policy', true],
      ['Your realtime subscription is firing for every change in a table — how do you filter it?', true],
      ['A file upload works locally but fails in production Supabase Storage — what do you check?', true],
      ['How do you generate TypeScript types from your Supabase schema — why does it matter?', true],
      ['Your RLS policy query is slow — what is the fix? (indexing auth.uid() column)', true],
      ['When would you use a Supabase Edge Function instead of a Next.js API route?', true],
      ['How do you use Supabase Auth with Next.js App Router and protect server components?', true],
    ]},
  ]},
  { id: 'nextjs', icon: 'ti-brand-nextjs', color: '#888888', label: 'Next.js', sections: [
    { name: 'Cohort Topics', topics: [
      ['Next.js App Router vs Pages Router', false],
      ['File-based routing', false],
      ['Server Components vs Client Components', false],
      ['Server Actions', false],
      ['Data fetching patterns in Next.js', false],
      ['API routes in Next.js', false],
      ['Metadata & SEO with Next.js', false],
      ['Image & font optimization', false],
      ['Middleware in Next.js', false],
      ['Authentication with Clerk', false],
      ['Deployment on Vercel', false],
      ['Webhook handling', false],
    ]},
    { name: 'Scenario & Practical Interview Questions', topics: [
      ['Why use Next.js over plain React? What problems does it solve?', true],
      ['How do you improve initial page load speed in a Next.js app?', true],
      ['How do you handle SEO in a Next.js app — dynamic metadata, OG tags, sitemap?', true],
      ['Your page needs fresh data every request but also fast — which rendering strategy fits?', true],
      ['When should a component be a Server Component vs a Client Component?', true],
      ['A user visits a protected dashboard while logged out — how do you redirect them in Next.js?', true],
      ['How does Next.js caching work — and how do you force revalidate a cached page?', true],
      ['You need to fetch user-specific data on the server without exposing it to the client — how?', true],
      ['Your Next.js images are slow — what does next/image do differently and how do you use it?', true],
      ['How would you implement a multi-language (i18n) site in Next.js?', true],
      ['What is the difference between next/link prefetching and regular anchor tags?', true],
      ['How do you secure an API route in Next.js so only authenticated users can call it?', true],
    ]},
  ]},
  { id: 'devops', icon: 'ti-cloud', color: '#2496ED', label: 'Docker & DevOps', sections: [
    { name: 'Cohort Topics', topics: [
      ['Docker fundamentals: images, containers, volumes', false],
      ['Writing Dockerfiles', false],
      ['Docker Compose for multi-service apps', false],
      ['AWS EC2: launching & managing servers', false],
      ['AWS ECR: container registry', false],
      ['AWS CloudFront: CDN & distribution', false],
      ['Nginx as reverse proxy', false],
      ['GitHub Actions for CI/CD', false],
      ['Environment management in production', false],
    ]},
    { name: 'Scenario & Practical Interview Questions', topics: [
      ['Your Docker image is 2GB — walk me through how you would reduce it', true],
      ['A Node.js app works on your machine but crashes in Docker — how do you debug it?', true],
      ['How do you make sure secrets (DB passwords, API keys) never end up in a Docker image?', true],
      ['Walk me through a CI/CD pipeline for a Next.js app from push to production', true],
      ['Your deployment caused downtime — how would you set up zero-downtime deploys?', true],
      ['How do you roll back a broken deployment quickly?', true],
      ['Production is down — how do you check if it is a server issue, app issue, or DB issue?', true],
      ['How do you configure Nginx to serve a Node.js app with HTTPS?', true],
      ['Difference between Docker image and container — explain with a real analogy', true],
      ['When do you need a Load Balancer — give a real scenario', true],
    ]},
  ]},
  { id: 'system-design', icon: 'ti-layout-board', color: '#7C3AED', label: 'Web Concepts & System Design', sections: [
    { name: 'Scenario & Practical Interview Questions', topics: [
      ['What happens step by step when you type google.com and press Enter?', true],
      ['Design a URL shortener like bit.ly — DB schema, redirect logic, scale considerations', true],
      ['How would you build a real-time chat feature in a MERN/Next.js app?', true],
      ['Your app is getting 10x traffic suddenly — how do you scale it?', true],
      ['How do you prevent a user from being able to see another users private data via the API?', true],
      ['A user reports they are logged out randomly — what could be causing JWT issues?', true],
      ['How do you prevent SQL injection in a Node.js + PostgreSQL app?', true],
      ['How do you protect a React + Node.js app from XSS attacks?', true],
      ['Explain CORS — why does the browser block requests and how do you fix it correctly?', true],
      ['REST vs GraphQL — which would you pick for a social media app and why?', true],
      ['How do you cache API responses to reduce DB load — walk through a real strategy', true],
      ['Design the data model for an e-commerce app (users, products, orders, payments)', true],
      ['When would you use WebSockets vs HTTP polling vs Server-Sent Events?', true],
      ['How do you measure and improve Core Web Vitals (LCP, CLS, INP) on a live site?', true],
      ['Session-based auth vs JWT — which would you use for a SaaS app and why?', true],
    ]},
  ]},
  { id: 'advanced', icon: 'ti-cpu', color: '#F59E0B', label: 'Advanced & AI Integration', sections: [
    { name: 'Cohort Topics', topics: [
      ['Turborepo / Monorepo setup', false],
      ['Inngest for background workflows', false],
      ['Agentic workflows with Inngest AgentKit', false],
      ['RAG Architecture & Vector Search fundamentals', false],
      ['Document ingestion & chunking pipelines', false],
      ['Embedding generation & storage', false],
      ['Context retrieval & prompt augmentation', false],
      ['Build your own v0-style AI code generator', false],
      ['Secure code execution with E2B', false],
      ['Rate limiting & abuse prevention', false],
      ['Advance RAG quality evaluation & guardrails', false],
    ]},
    { name: 'Scenario & Practical Interview Questions', topics: [
      ['You are building a chatbot that answers questions from a PDF — how do you architect it? (RAG)', true],
      ['What is the difference between a monorepo and a polyrepo — when would you use each?', true],
      ['A background email-sending job is blocking your API response — how do you fix it? (Inngest/queues)', true],
      ['How do you prevent a user from abusing your AI API endpoint (1000 calls/min)?', true],
      ['Explain vector embeddings in simple terms — why are they needed for AI search?', true],
    ]},
  ]},
  { id: 'projects', icon: 'ti-rocket', color: '#EF4444', label: 'Projects & Assignments', sections: [
    { name: 'Cohort Projects', topics: [
      ['Portfolio / Landing page project', false],
      ['JavaScript DOM mini-projects (10)', false],
      ['React SPA project', false],
      ['REST API with Node/Express', false],
      ['Full-stack MERN app', false],
      ['Next.js SaaS capstone project', false],
      ['AI-powered full-stack app', false],
      ['Aptitude quizzes & assignments', false],
    ]},
    { name: 'Interview Prep Must-Do', topics: [
      ['Deploy at least 2 projects live (Vercel / Railway / Render)', true],
      ['Clean GitHub README for each project', true],
      ['One project with JWT auth end-to-end', true],
      ['One project with real database (MongoDB or PostgreSQL/Supabase)', true],
      ['Practice explaining your project in 2 minutes (elevator pitch)', true],
      ['Prepare STAR method stories for behavioral questions', true],
      ['Practice 5 machine coding rounds (accordion, debounced search, infinite scroll, auth form, todo)', true],
      ['Mock interview practice — explain your code decisions out loud', true],
    ]},
  ]},
]

const KEY = 'chaicode_tracker_v6'
const TABS = [
  { id: 'all', label: 'All' },
  { id: 'in-progress', label: 'In progress' },
  { id: 'done', label: 'Completed' },
  { id: 'not-started', label: 'Not started' },
  { id: 'interview', label: '🎯 Interview only' },
]

function loadState() {
  try { return JSON.parse(localStorage.getItem(KEY) || '{}') } catch { return {} }
}

function getAllTopics(m) {
  const out = []
  m.sections.forEach((sec, si) =>
    sec.topics.forEach((t, ti) =>
      out.push({ key: `${m.id}::${si}::${ti}`, label: t[0], isKey: t[1] })
    )
  )
  return out
}

function getModuleStats(m, state) {
  const all = getAllTopics(m)
  const done = all.filter(t => state[t.key]).length
  return { done, total: all.length, pct: all.length ? Math.round(done / all.length * 100) : 0 }
}

function getTotalStats(state) {
  let done = 0, total = 0, mDone = 0
  SYLLABUS.forEach(m => {
    const s = getModuleStats(m, state)
    done += s.done; total += s.total
    if (s.done === s.total && s.total > 0) mDone++
  })
  return { done, total, pct: total ? Math.round(done / total * 100) : 0, mDone }
}

function getStreak(state) {
  const dates = Object.values(state).filter(Boolean).sort()
  if (!dates.length) return 0
  const today = new Date().toISOString().slice(0, 10)
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10)
  const last = dates[dates.length - 1]
  if (last !== today && last !== yesterday) return 0
  const unique = [...new Set(dates)].sort().reverse()
  let streak = 1
  for (let i = 1; i < unique.length; i++) {
    if ((new Date(unique[i - 1]) - new Date(unique[i])) / 86400000 === 1) streak++
    else break
  }
  return streak
}

export default function TrackerPage() {
  const [state, setState] = useState(loadState)
  const [activeTab, setActiveTab] = useState('all')
  const [openModules, setOpenModules] = useState(new Set())
  const [query, setQuery] = useState('')
  const [dark, setDark] = useState(
    () => localStorage.getItem('chaicode_theme') === 'dark'
  )

  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(state)) } catch {}
  }, [state])

  useEffect(() => {
    localStorage.setItem('chaicode_theme', dark ? 'dark' : 'light')
  }, [dark])

  function toggle(key) {
    setState(prev => {
      const next = { ...prev }
      if (next[key]) delete next[key]
      else next[key] = new Date().toISOString().slice(0, 10)
      return next
    })
  }

  function markAll(moduleId, mark) {
    const m = SYLLABUS.find(x => x.id === moduleId)
    if (!m) return
    setState(prev => {
      const next = { ...prev }
      getAllTopics(m).forEach(t => {
        if (mark) next[t.key] = next[t.key] || new Date().toISOString().slice(0, 10)
        else delete next[t.key]
      })
      return next
    })
  }

  function confirmReset() {
    if (window.confirm('Reset all your progress? This cannot be undone.')) setState({})
  }

  function toggleMod(id) {
    setOpenModules(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const stats = getTotalStats(state)
  const streak = getStreak(state)
  const ql = query.toLowerCase()

  const visibleModules = SYLLABUS.filter(m => {
    const s = getModuleStats(m, state)
    const allTopics = getAllTopics(m)
    const statusOk = activeTab === 'all'
      || (activeTab === 'done' && s.pct === 100)
      || (activeTab === 'not-started' && s.done === 0)
      || (activeTab === 'in-progress' && s.done > 0 && s.pct < 100)
      || activeTab === 'interview'
    const titleMatch = m.label.toLowerCase().includes(ql)
    const hasMatch = titleMatch || allTopics.some(t => t.label.toLowerCase().includes(ql))
    if (ql && !hasMatch) return false
    return statusOk
  })

  return (
    <div data-theme={dark ? 'dark' : 'light'} className="tracker-root">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.19.0/dist/tabler-icons.min.css" />

      <div className="tr-back-bar">
        <Link to="/" className="tr-back-btn">
          <i className="ti ti-arrow-left" /> Back to Portfolio
        </Link>
      </div>

      <div className="tr-container">
        <div className="tr-header">
          <h1 className="tr-title">☕ My FullStack Journey</h1>
          <div className="tr-header-actions">
            <button className="tr-btn-icon" onClick={() => setDark(d => !d)} title="Toggle dark mode">
              <i className={`ti ${dark ? 'ti-sun' : 'ti-moon'}`} />
            </button>
            <button className="tr-btn-icon tr-danger" onClick={confirmReset} title="Reset all progress">
              <i className="ti ti-refresh" /> Reset
            </button>
          </div>
        </div>

        <div className="tr-stats-grid">
          <div className="tr-stat tr-stat--blue"><div className="tr-stat-label">Overall</div><div className="tr-stat-value">{stats.pct}%</div></div>
          <div className="tr-stat tr-stat--green"><div className="tr-stat-label">Completed</div><div className="tr-stat-value">{stats.done}</div></div>
          <div className="tr-stat tr-stat--amber"><div className="tr-stat-label">Remaining</div><div className="tr-stat-value">{stats.total - stats.done}</div></div>
          <div className="tr-stat tr-stat--purple"><div className="tr-stat-label">Modules done</div><div className="tr-stat-value">{stats.mDone}/{SYLLABUS.length}</div></div>
        </div>

        <div className="tr-progress-section">
          <div className="tr-progress-header">
            <span>Overall Progress</span>
            <span>{stats.done} of {stats.total} topics</span>
          </div>
          <div className="tr-bar-wrap">
            <div className="tr-bar" style={{ width: `${stats.pct}%` }} />
          </div>
        </div>

        {streak >= 2 && (
          <div className="tr-streak">
            <i className="ti ti-flame" /> {streak}-day study streak! Keep going 💪
          </div>
        )}

        <div className="tr-search-wrap">
          <i className="ti ti-search" />
          <input
            type="text"
            placeholder="Search topics…"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>

        <div className="tr-tabs">
          {TABS.map(t => (
            <button
              key={t.id}
              className={`tr-tab${activeTab === t.id ? ' active' : ''}`}
              onClick={() => setActiveTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div>
          {visibleModules.length === 0 ? (
            <div className="tr-empty">
              <i className="ti ti-mood-empty" />
              No topics match your filter.
            </div>
          ) : (
            visibleModules.map(m => {
              const s = getModuleStats(m, state)
              const isOpen = openModules.has(m.id) || !!ql
              const pctClass = s.pct === 100 ? 'done' : s.done > 0 ? 'partial' : ''
              const pctText = s.pct === 100 ? '✓ 100%' : `${s.pct}%`

              const sectionsContent = m.sections.map((sec, si) => {
                const rows = sec.topics
                  .map((t, ti) => {
                    const topicKey = `${m.id}::${si}::${ti}`
                    const matchSearch = !ql || t[0].toLowerCase().includes(ql) || m.label.toLowerCase().includes(ql)
                    const matchTab = activeTab !== 'interview' || t[1]
                    if (!matchSearch || !matchTab) return null
                    const checked = !!state[topicKey]
                    return (
                      <div key={ti} className="tr-topic-row">
                        <input
                          type="checkbox"
                          id={`cb-${m.id}-${si}-${ti}`}
                          checked={checked}
                          onChange={() => toggle(topicKey)}
                        />
                        <label
                          htmlFor={`cb-${m.id}-${si}-${ti}`}
                          className={`tr-topic-label${checked ? ' done' : ''}`}
                        >
                          {t[0]}
                        </label>
                        {t[1] && <span className="tr-interview-badge">🎯 interview</span>}
                        {checked && <span className="tr-date-tag">{state[topicKey]}</span>}
                      </div>
                    )
                  })
                  .filter(Boolean)

                if (rows.length === 0) return null
                return (
                  <div key={si}>
                    <div className="tr-section-label">{sec.name}</div>
                    {rows}
                  </div>
                )
              }).filter(Boolean)

              if (sectionsContent.length === 0) return null

              return (
                <div key={m.id} className="tr-module" style={{ '--mod-color': m.color }}>
                  <div className="tr-module-bar">
                    <div className="tr-module-bar-fill" style={{ width: `${s.pct}%`, background: m.color }} />
                  </div>
                  <div className="tr-module-header" onClick={() => toggleMod(m.id)}>
                    <div className="tr-mod-icon-wrap">
                      <i className={`ti ${m.icon} tr-mod-icon`} />
                    </div>
                    <span className="tr-mod-title">{m.label}</span>
                    <span className="tr-mod-meta">{s.done}/{s.total}</span>
                    <span className={`tr-mod-pct ${pctClass}`}>{pctText}</span>
                    <i className={`ti ti-chevron-down tr-chevron${isOpen ? ' open' : ''}`} />
                  </div>
                  {isOpen && (
                    <div className="tr-topics">
                      {sectionsContent}
                      <div className="tr-module-actions">
                        <button className="tr-mod-action-btn" onClick={() => markAll(m.id, true)}>Mark all done</button>
                        <button className="tr-mod-action-btn" onClick={() => markAll(m.id, false)}>Unmark all</button>
                      </div>
                    </div>
                  )}
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}
