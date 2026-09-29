import { useState } from 'react'

const NAV_LINKS = ['Overview', 'Features', 'Architecture', 'Tech Stack', 'Demo']

const FEATURES = [
  {
    icon: '🛒',
    title: 'Product Catalog',
    desc: 'Paginated listings with real-time search, filters by category/price, and infinite scroll for 10K+ products.',
    tag: 'Core',
    color: '#7c5cfc',
  },
  {
    icon: '🔐',
    title: 'Cloud Auth',
    desc: 'Firebase Authentication with email/password, Google OAuth, and biometric unlock via device fingerprint sensor.',
    tag: 'Security',
    color: '#34d399',
  },
  {
    icon: '🗄️',
    title: 'Local Database',
    desc: 'SQLite via Room ORM for offline cart persistence, search history, and cached product images.',
    tag: 'Data',
    color: '#fbbf24',
  },
  {
    icon: '📸',
    title: 'Camera Integration',
    desc: 'Barcode scanning for instant product lookup and AR-powered virtual try-on for select items.',
    tag: 'Hardware',
    color: '#fb7185',
  },
  {
    icon: '🧭',
    title: 'Navigation',
    desc: 'Bottom tab navigation with nested stack flows, deep linking, and shared element transitions between screens.',
    tag: 'UX',
    color: '#a78bfa',
  },
  {
    icon: '☁️',
    title: 'Cloud Sync',
    desc: 'Firestore real-time updates for cart, wishlist, and order tracking. Push notifications via FCM.',
    tag: 'Backend',
    color: '#34d399',
  },
]

const TECH_STACK = [
  { category: 'Mobile Framework', items: ['React Native 0.74', 'Expo SDK 51', 'TypeScript 5.4'] },
  { category: 'Navigation', items: ['React Navigation v6', 'Deep Linking', 'Tab + Stack Navigators'] },
  { category: 'State & Data', items: ['Redux Toolkit', 'React Query', 'AsyncStorage'] },
  { category: 'Backend', items: ['Firebase Auth', 'Firestore', 'Cloud Functions'] },
  { category: 'Local DB', items: ['SQLite', 'MMKV Storage', 'Realm (cache)'] },
  { category: 'Hardware', items: ['Camera API', 'Biometrics', 'Location Services', 'Notifications'] },
]

const SCREENS = [
  { name: 'Home Feed', bg: '#1c2030', accent: '#7c5cfc', icon: '🏠' },
  { name: 'Product Detail', bg: '#13161f', accent: '#34d399', icon: '📦' },
  { name: 'Cart & Checkout', bg: '#1a1630', accent: '#a78bfa', icon: '🛍️' },
  { name: 'Profile & Orders', bg: '#131a1c', accent: '#34d399', icon: '👤' },
]

const ARCHITECTURE_LAYERS = [
  { label: 'Presentation', desc: 'Screens · Components · Navigation', color: '#7c5cfc', width: '100%' },
  { label: 'Business Logic', desc: 'Redux Slices · Hooks · Selectors', color: '#a78bfa', width: '85%' },
  { label: 'Data Layer', desc: 'API Client · Repository Pattern', color: '#34d399', width: '70%' },
  { label: 'Storage', desc: 'SQLite · MMKV · Firestore', color: '#fbbf24', width: '55%' },
  { label: 'Native Bridge', desc: 'Camera · Biometrics · GPS', color: '#fb7185', width: '40%' },
]

const MILESTONES = [
  { phase: 'Phase 1', title: 'Planning & Design', done: true, detail: 'Wireframes, system models, DB schema' },
  { phase: 'Phase 2', title: 'Core Navigation & Auth', done: true, detail: 'Stack/tab flow + Firebase login' },
  { phase: 'Phase 3', title: 'Data & Backend', done: true, detail: 'REST API, Firestore, Room integration' },
  { phase: 'Phase 4', title: 'Hardware Integrations', done: true, detail: 'Camera, biometrics, GPS, push notifs' },
  { phase: 'Phase 5', title: 'Testing & APK Build', done: false, detail: 'Unit + integration tests, signed APK' },
  { phase: 'Phase 6', title: 'Demo & Submission', done: false, detail: 'Video recording, GitHub repo, docs' },
]

function PhoneMockup({ screen }: { screen: typeof SCREENS[0] }) {
  return (
    <div className="animate-float" style={{ animationDelay: `${Math.random() * 2}s` }}>
      <div
        style={{
          width: 160,
          height: 300,
          borderRadius: 28,
          background: screen.bg,
          border: `2px solid ${screen.accent}33`,
          boxShadow: `0 20px 60px ${screen.accent}22, 0 0 0 1px rgba(255,255,255,0.04)`,
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* notch */}
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 10, paddingBottom: 6 }}>
          <div style={{ width: 60, height: 8, borderRadius: 4, background: 'rgba(255,255,255,0.08)' }} />
        </div>
        {/* status bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 14px 8px', fontSize: 8, color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-mono)' }}>
          <span>9:41</span>
          <span>●●● 100%</span>
        </div>
        {/* content */}
        <div style={{ flex: 1, padding: '8px 12px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ fontSize: 22, textAlign: 'center' }}>{screen.icon}</div>
          <div style={{ fontSize: 10, fontWeight: 600, color: screen.accent, fontFamily: 'var(--font-mono)', textAlign: 'center' }}>
            {screen.name}
          </div>
          {[1, 2, 3].map(i => (
            <div key={i} style={{ height: i === 1 ? 40 : 24, borderRadius: 8, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.05)' }} />
          ))}
          <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
            {[1, 2].map(i => (
              <div key={i} style={{ flex: 1, height: 28, borderRadius: 8, background: i === 1 ? `${screen.accent}22` : 'rgba(255,255,255,0.03)', border: `1px solid ${i === 1 ? screen.accent + '44' : 'rgba(255,255,255,0.05)'}` }} />
            ))}
          </div>
          {[1, 2].map(i => (
            <div key={i} style={{ height: 20, borderRadius: 6, background: 'rgba(255,255,255,0.03)' }} />
          ))}
        </div>
        {/* bottom nav */}
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '8px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          {['🏠', '🔍', '🛍️', '👤'].map((icon, i) => (
            <div key={i} style={{ fontSize: 12, opacity: i === 0 ? 1 : 0.35 }}>{icon}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [activeNav, setActiveNav] = useState('Overview')
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)' }}>
      {/* Nav */}
      <nav className="glass" style={{
        position: 'sticky', top: 0, zIndex: 50,
        padding: '0 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 60,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 10,
            background: 'linear-gradient(135deg, #7c5cfc, #34d399)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 16,
          }}>🛒</div>
          <span className="font-display" style={{ fontWeight: 600, fontSize: 16, color: '#e8eaf0' }}>ShopFlow</span>
          <span className="font-mono" style={{ fontSize: 10, color: 'var(--color-muted)', background: 'rgba(124,92,252,0.12)', padding: '2px 8px', borderRadius: 4, border: '1px solid rgba(124,92,252,0.2)' }}>v2.1.0</span>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {NAV_LINKS.map(link => (
            <button key={link} onClick={() => setActiveNav(link)} style={{
              padding: '6px 14px', borderRadius: 8, border: 'none', cursor: 'pointer',
              fontSize: 13, fontWeight: 500, fontFamily: 'var(--font-body)',
              background: activeNav === link ? 'rgba(124,92,252,0.15)' : 'transparent',
              color: activeNav === link ? '#a78bfa' : 'var(--color-muted)',
              transition: 'all 0.15s',
            }}>{link}</button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <a href="#" style={{
            display: 'flex', alignItems: 'center', gap: 6,
            padding: '6px 14px', borderRadius: 8,
            background: 'rgba(255,255,255,0.04)', border: '1px solid var(--color-border)',
            fontSize: 13, color: 'var(--color-muted)', textDecoration: 'none',
            transition: 'all 0.15s',
          }}>
            <span style={{ fontFamily: 'var(--font-mono)' }}>GitHub</span>
          </a>
          <a href="#" style={{
            display: 'flex', alignItems: 'center', gap: 6,
            padding: '6px 14px', borderRadius: 8,
            background: 'linear-gradient(135deg, #7c5cfc, #a78bfa)',
            fontSize: 13, fontWeight: 600, color: '#fff', textDecoration: 'none',
          }}>
            ↓ APK
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: '80px 40px 60px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <div style={{ animation: 'slide-in 0.6s ease-out' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 14px', borderRadius: 999,
              background: 'rgba(124,92,252,0.1)', border: '1px solid rgba(124,92,252,0.25)',
              marginBottom: 24,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#34d399', display: 'inline-block', boxShadow: '0 0 8px #34d399' }} />
              <span className="font-mono" style={{ fontSize: 11, color: '#a78bfa' }}>Mobile App Capstone Project · CS499</span>
            </div>

            <h1 className="font-display" style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 700, lineHeight: 1.1, marginBottom: 20, letterSpacing: '-0.02em' }}>
              ShopFlow —<br />
              <span className="gradient-text">The E-Commerce</span><br />
              Mobile Experience
            </h1>

            <p style={{ fontSize: 17, color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: 32, maxWidth: 480 }}>
              A full-stack mobile application built with React Native featuring cloud authentication, local database persistence, hardware integrations, and real-time sync across 6 interconnected modules.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
              <a href="#" style={{
                padding: '12px 24px', borderRadius: 12,
                background: 'linear-gradient(135deg, #7c5cfc, #a78bfa)',
                color: '#fff', fontWeight: 600, textDecoration: 'none', fontSize: 15,
                boxShadow: '0 8px 32px rgba(124,92,252,0.35)',
                transition: 'transform 0.15s, box-shadow 0.15s',
              }}>
                ▶ Watch Demo
              </a>
              <a href="#" style={{
                padding: '12px 24px', borderRadius: 12,
                background: 'rgba(255,255,255,0.04)', border: '1px solid var(--color-border)',
                color: 'var(--color-text)', fontWeight: 500, textDecoration: 'none', fontSize: 15,
                transition: 'border-color 0.15s',
              }}>
                Download APK
              </a>
              <a href="#" style={{
                padding: '12px 24px', borderRadius: 12,
                background: 'rgba(255,255,255,0.04)', border: '1px solid var(--color-border)',
                color: 'var(--color-text)', fontWeight: 500, textDecoration: 'none', fontSize: 15,
              }}>
                View GitHub →
              </a>
            </div>

            <div style={{ display: 'flex', gap: 32 }}>
              {[
                { value: '47', label: 'Screens' },
                { value: '12', label: 'Modules' },
                { value: '2.4k', label: 'Commits' },
                { value: '98%', label: 'Test Coverage' },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="font-display" style={{ fontSize: 28, fontWeight: 700, color: '#a78bfa' }}>{stat.value}</div>
                  <div className="font-mono" style={{ fontSize: 11, color: 'var(--color-muted)', marginTop: 2 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Phone mockups cluster */}
          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', alignItems: 'flex-start', paddingTop: 20 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, paddingTop: 40 }}>
              <PhoneMockup screen={SCREENS[0]} />
              <PhoneMockup screen={SCREENS[2]} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <PhoneMockup screen={SCREENS[1]} />
              <PhoneMockup screen={SCREENS[3]} />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '60px 40px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <div className="font-mono" style={{ fontSize: 11, color: '#7c5cfc', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>01 · Features</div>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 600, letterSpacing: '-0.02em' }}>
            Everything a modern<br />mobile app needs
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {FEATURES.map((f, i) => (
            <div key={i} className="card-hover" style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 16, padding: 24,
              animationDelay: `${i * 0.1}s`,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: `${f.color}14`, border: `1px solid ${f.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20,
                }}>{f.icon}</div>
                <span className="font-mono" style={{
                  fontSize: 10, padding: '3px 10px', borderRadius: 6,
                  background: `${f.color}14`, color: f.color,
                  border: `1px solid ${f.color}30`,
                }}>{f.tag}</span>
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8, color: '#e8eaf0' }}>{f.title}</h3>
              <p style={{ fontSize: 13, color: 'var(--color-muted)', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture */}
      <section style={{ padding: '60px 40px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <div>
            <div className="font-mono" style={{ fontSize: 11, color: '#7c5cfc', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>02 · Architecture</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 16 }}>
              Layered, testable<br />by design
            </h2>
            <p style={{ fontSize: 15, color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: 32 }}>
              Clean Architecture with strict separation of concerns. Each layer communicates through defined interfaces, making the codebase 100% unit-testable without mocking the UI.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {ARCHITECTURE_LAYERS.map((layer, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: layer.color }}>{layer.label}</span>
                    <span className="font-mono" style={{ fontSize: 11, color: 'var(--color-muted)' }}>{layer.desc}</span>
                  </div>
                  <div style={{ height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.05)' }}>
                    <div className="progress-bar" style={{
                      width: layer.width,
                      background: `linear-gradient(90deg, ${layer.color}, ${layer.color}88)`,
                      transition: 'width 1s ease',
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture diagram */}
          <div style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 20, padding: 28,
          }}>
            <div className="font-mono" style={{ fontSize: 11, color: 'var(--color-muted)', marginBottom: 20 }}>system-architecture.md</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {[
                { label: '📱 UI Layer', sub: 'React Native Screens', indent: 0, color: '#7c5cfc' },
                { label: '├── 🧩 Components', sub: 'Atomic Design', indent: 16, color: 'var(--color-muted)' },
                { label: '├── 🧭 Navigation', sub: 'React Navigation', indent: 16, color: 'var(--color-muted)' },
                { label: '🔄 State Management', sub: 'Redux + React Query', indent: 0, color: '#a78bfa' },
                { label: '├── 📦 Slices', sub: 'cart, auth, products', indent: 16, color: 'var(--color-muted)' },
                { label: '├── 🎣 Custom Hooks', sub: 'useCart, useSearch', indent: 16, color: 'var(--color-muted)' },
                { label: '🗄️ Data Layer', sub: 'Repository Pattern', indent: 0, color: '#34d399' },
                { label: '├── 🔥 Firestore', sub: 'Real-time sync', indent: 16, color: 'var(--color-muted)' },
                { label: '└── 💾 SQLite Room', sub: 'Offline cache', indent: 16, color: 'var(--color-muted)' },
                { label: '📡 Native Modules', sub: 'Bridge layer', indent: 0, color: '#fb7185' },
                { label: '├── 📸 Camera', sub: 'expo-camera', indent: 16, color: 'var(--color-muted)' },
                { label: '└── 🔑 Biometrics', sub: 'expo-local-auth', indent: 16, color: 'var(--color-muted)' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, paddingLeft: item.indent }}>
                  <span className="font-mono" style={{ fontSize: 12, color: item.color }}>{item.label}</span>
                  {item.sub && <span className="font-mono" style={{ fontSize: 10, color: 'rgba(123,130,160,0.6)', marginLeft: 'auto' }}>{item.sub}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section style={{ padding: '60px 40px', maxWidth: 1200, margin: '0 auto' }}>
        <div className="font-mono" style={{ fontSize: 11, color: '#7c5cfc', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>03 · Tech Stack</div>
        <h2 className="font-display" style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 32 }}>
          Built on proven tools
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {TECH_STACK.map((group, i) => (
            <div key={i} style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 14, padding: 20,
            }}>
              <div className="font-mono" style={{ fontSize: 10, color: 'var(--color-muted)', marginBottom: 14, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{group.category}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {group.items.map((item, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#7c5cfc', flexShrink: 0 }} />
                    <span className="font-mono" style={{ fontSize: 12, color: '#e8eaf0' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Patterns */}
      <section style={{ padding: '60px 40px', maxWidth: 1200, margin: '0 auto' }}>
        <div className="font-mono" style={{ fontSize: 11, color: '#7c5cfc', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>04 · Navigation Patterns</div>
        <h2 className="font-display" style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 32 }}>
          Intuitive, multi-level flows
        </h2>

        <div style={{
          background: 'var(--color-surface)', border: '1px solid var(--color-border)',
          borderRadius: 20, padding: 32,
        }}>
          {/* Tab strip */}
          <div style={{ display: 'flex', gap: 4, marginBottom: 28, background: 'rgba(255,255,255,0.03)', padding: 4, borderRadius: 10, width: 'fit-content' }}>
            {['Tab Navigator', 'Stack Flow', 'Deep Linking'].map((tab, i) => (
              <button key={i} onClick={() => setActiveTab(i)} style={{
                padding: '6px 16px', borderRadius: 8, border: 'none', cursor: 'pointer',
                fontSize: 13, fontWeight: 500, fontFamily: 'var(--font-body)',
                background: activeTab === i ? 'rgba(124,92,252,0.2)' : 'transparent',
                color: activeTab === i ? '#a78bfa' : 'var(--color-muted)',
                transition: 'all 0.15s',
              }}>{tab}</button>
            ))}
          </div>

          {activeTab === 0 && (
            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              {['Home', 'Search', 'Cart', 'Orders', 'Profile'].map((tab, i) => (
                <div key={i} style={{ flex: 1, textAlign: 'center' }}>
                  <div style={{
                    height: 60, borderRadius: 12, marginBottom: 10,
                    background: i === 0 ? 'rgba(124,92,252,0.15)' : 'rgba(255,255,255,0.03)',
                    border: `1px solid ${i === 0 ? 'rgba(124,92,252,0.4)' : 'var(--color-border)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22,
                  }}>
                    {['🏠', '🔍', '🛍️', '📋', '👤'][i]}
                  </div>
                  <span className="font-mono" style={{ fontSize: 11, color: i === 0 ? '#a78bfa' : 'var(--color-muted)' }}>{tab}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 1 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              {['Product List', '→', 'Product Detail', '→', 'Add to Cart', '→', 'Checkout', '→', 'Order Confirm'].map((step, i) => (
                <div key={i}>
                  {step === '→' ? (
                    <span style={{ color: '#7c5cfc', fontSize: 18 }}>→</span>
                  ) : (
                    <div style={{
                      padding: '10px 14px', borderRadius: 10, textAlign: 'center',
                      background: i === 0 ? 'rgba(124,92,252,0.15)' : 'rgba(255,255,255,0.03)',
                      border: `1px solid ${i === 0 ? 'rgba(124,92,252,0.3)' : 'var(--color-border)'}`,
                    }}>
                      <div className="font-mono" style={{ fontSize: 10, color: i === 0 ? '#a78bfa' : 'var(--color-muted)', whiteSpace: 'nowrap' }}>{step}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 2 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { route: 'shopflow://product/:id', desc: 'Direct product page from push notification' },
                { route: 'shopflow://cart', desc: 'Jump to cart from external link' },
                { route: 'shopflow://orders/:orderId', desc: 'Order tracking from email deep link' },
              ].map((link, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 16,
                  padding: '14px 18px', borderRadius: 10,
                  background: 'rgba(255,255,255,0.02)', border: '1px solid var(--color-border)',
                }}>
                  <code className="font-mono" style={{ fontSize: 12, color: '#7c5cfc', background: 'rgba(124,92,252,0.1)', padding: '3px 10px', borderRadius: 6 }}>{link.route}</code>
                  <span style={{ fontSize: 13, color: 'var(--color-muted)' }}>{link.desc}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Progress timeline */}
      <section style={{ padding: '60px 40px', maxWidth: 1200, margin: '0 auto' }}>
        <div className="font-mono" style={{ fontSize: 11, color: '#7c5cfc', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>05 · Project Progress</div>
        <h2 className="font-display" style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 32 }}>
          Development milestones
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {MILESTONES.map((m, i) => (
            <div key={i} style={{ display: 'flex', gap: 20, position: 'relative' }}>
              {/* timeline line */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 40, flexShrink: 0 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
                  background: m.done ? 'rgba(52,211,153,0.15)' : 'rgba(255,255,255,0.04)',
                  border: `2px solid ${m.done ? '#34d399' : 'var(--color-border)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14, zIndex: 1, position: 'relative',
                }}>{m.done ? '✓' : '○'}</div>
                {i < MILESTONES.length - 1 && (
                  <div style={{ width: 2, flex: 1, background: m.done ? 'rgba(52,211,153,0.2)' : 'rgba(255,255,255,0.05)', minHeight: 32 }} />
                )}
              </div>
              <div style={{ paddingBottom: 28, paddingTop: 4 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                  <span className="font-mono" style={{ fontSize: 10, color: m.done ? '#34d399' : 'var(--color-muted)' }}>{m.phase}</span>
                  <span style={{ fontSize: 15, fontWeight: 600, color: m.done ? '#e8eaf0' : 'var(--color-muted)' }}>{m.title}</span>
                  {!m.done && <span className="font-mono" style={{ fontSize: 10, padding: '2px 8px', borderRadius: 4, background: 'rgba(251,191,36,0.1)', color: '#fbbf24', border: '1px solid rgba(251,191,36,0.2)' }}>In Progress</span>}
                </div>
                <p style={{ fontSize: 13, color: 'var(--color-muted)' }}>{m.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Demo CTA */}
      <section style={{ padding: '60px 40px 100px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          borderRadius: 24,
          background: 'linear-gradient(135deg, rgba(124,92,252,0.12) 0%, rgba(52,211,153,0.08) 100%)',
          border: '1px solid rgba(124,92,252,0.2)',
          padding: '60px 48px',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center',
        }}>
          <div>
            <div className="font-mono" style={{ fontSize: 11, color: '#7c5cfc', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>06 · Deliverables</div>
            <h2 className="font-display" style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 16 }}>
              Ready to submit.<br />
              <span className="gradient-text">Unlock your reward.</span>
            </h2>
            <p style={{ fontSize: 15, color: 'var(--color-muted)', lineHeight: 1.7 }}>
              All capstone requirements completed: GitHub repository, 5-minute demo video, signed APK, architecture docs, wireframes, and test report.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { icon: '📂', label: 'GitHub Repository', sub: 'github.com/student/shopflow', done: true },
              { icon: '🎥', label: 'Demo Video (5:42)', sub: 'Uploaded to Google Drive', done: true },
              { icon: '📦', label: 'APK Build (release)', sub: 'shopflow-v2.1.0-release.apk · 18.4 MB', done: true },
              { icon: '📄', label: 'Documentation', sub: 'Architecture · Wireframes · Test Report', done: true },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '14px 18px', borderRadius: 12,
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(52,211,153,0.15)',
              }}>
                <span style={{ fontSize: 20 }}>{item.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#e8eaf0', marginBottom: 2 }}>{item.label}</div>
                  <div className="font-mono" style={{ fontSize: 11, color: 'var(--color-muted)' }}>{item.sub}</div>
                </div>
                <div style={{
                  width: 22, height: 22, borderRadius: '50%',
                  background: 'rgba(52,211,153,0.15)', border: '1px solid #34d39944',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 12, color: '#34d399',
                }}>✓</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid var(--color-border)',
        padding: '28px 40px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <span className="font-mono" style={{ fontSize: 12, color: 'var(--color-muted)' }}>ShopFlow · CS499 Mobile App Capstone · Fall 2026</span>
        <div style={{ display: 'flex', gap: 20 }}>
          {['GitHub', 'APK Download', 'Video Demo', 'Documentation'].map(link => (
            <a key={link} href="#" style={{ fontSize: 12, color: 'var(--color-muted)', textDecoration: 'none', transition: 'color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#a78bfa')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}>
              {link}
            </a>
          ))}
        </div>
      </footer>
    </div>
  )
}
