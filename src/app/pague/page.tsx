import React from "react";

export default function Page() {
  return (
    <div className="grid" style={{ minHeight: "100vh", placeItems: "center", padding: 24, background: "#f4f5f7" }}>
      <div className="grid" style={{ gap: 24, padding: 24, borderRadius: 16, boxShadow: "0 1px 2px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.06)", width: "100%", maxWidth: 560, background: "#fff", border: "1px solid #e6e7ea" }}>
        <div className="grid" style={{ gap: 4 }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, color: "#1f2937" }}>Appearance</h2>
          <p style={{ fontSize: 12, color: "#6b7280" }}>Set or customize your preferences for the system</p>
        </div>

        <div style={{ height: 1, background: "#edeef1" }} />

        <div className="grid" style={{ gap: 4 }}>
          <div className="flex" style={{ alignItems: "center", justifyContent: "space-between", gap: 16 }}>
            <label style={{ fontSize: 12, color: "#6b7280" }}>Language</label>
            <div className="flex" style={{ alignItems: "center", justifyContent: "space-between", gap: 12, padding: 12, borderRadius: 12, border: "1px solid #e6e7ea", background: "#fff", width: "100%", maxWidth: 260 }}>
              <span style={{ color: "#111827" }}>English</span>
              <svg width="16" height="16" viewBox="0 0 20 20" fill="#9ca3af" aria-hidden>
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
              </svg>
            </div>
          </div>
          <p style={{ fontSize: 12, color: "#9ca3af" }}>Select the language of the platform</p>
        </div>

        <div style={{ height: 1, background: "#edeef1" }} />

        <div className="grid" style={{ gap: 16 }}>
          <div style={{ fontSize: 12, color: "#6b7280" }}>Interface theme</div>
          <div className="grid" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 16 }}>
            <ThemeCard title="Auto" selected={false} />
            <ThemeCard title="Light" selected={true} />
            <ThemeCard title="Dark" selected={false} dark />
          </div>
        </div>

        <div style={{ height: 1, background: "#edeef1" }} />

        <div className="grid" style={{ gap: 4 }}>
          <div className="flex" style={{ alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ fontSize: 12, color: "#6b7280" }}>Accent color</div>
            <div className="flex" style={{ alignItems: "center", gap: 16 }}>
              {["#f97316", "#f59e0b", "#ef4444", "#22c55e", "#06b6d4", "#a855f7"].map((c, i) => (
                <span key={i} className="rounded-full" style={{ width: 24, height: 24, backgroundColor: c }} />
              ))}
            </div>
          </div>
          <p style={{ fontSize: 12, color: "#9ca3af" }}>Pick your platform&apos;s main color</p>
        </div>

        <div style={{ height: 1, background: "#edeef1" }} />

        <div className="grid" style={{ gap: 16 }}>
          <ToggleRow label="Reduce motion" enabled icon={<MotionIcon />} />
          <ToggleRow label="Auto play" enabled icon={<PlayIcon />} />
          <ToggleRow label="High quality photo" icon={<PhotoIcon />} />
        </div>

        <div style={{ height: 1, background: "#edeef1" }} />

        <div className="flex" style={{ alignItems: "center", justifyContent: "space-between", paddingTop: 8 }}>
          <button style={{ color: "#6b7280" }}>Reset to default</button>
          <div className="flex" style={{ alignItems: "center", gap: 12 }}>
            <button style={{ padding: "8px 16px", borderRadius: 12, border: "1px solid #e6e7ea", color: "#374151", background: "#fff" }}>Cancel</button>
            <button style={{ padding: "8px 16px", borderRadius: 12, background: "#6d5efc", color: "#fff", boxShadow: "0 1px 0 rgba(255,255,255,0.2) inset, 0 8px 14px rgba(109,94,252,0.35)" }}>Save Preferences</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ThemeCard({ title, selected, dark }: { title: string; selected?: boolean; dark?: boolean }) {
  return (
    <div className="grid" style={{ gap: 8, padding: 12, borderRadius: 12, position: "relative", border: `1px solid ${selected ? "#6d5efc" : "#e6e7ea"}` }}>
      <div className="grid" style={{ placeItems: "center", height: 96, borderRadius: 8, background: dark ? "#2f2b3a" : "#eef0f7" }}>
        <svg width="72" height="44" viewBox="0 0 72 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="70" height="42" rx="6" fill={dark ? "#26233a" : "#ffffff"} stroke={dark ? "#3f3a55" : "#e6e7ea"} />
          <rect x="10" y="10" width="52" height="6" rx="3" fill="#6d5efc" />
          <rect x="10" y="22" width="36" height="4" rx="2" fill={dark ? "#6b7280" : "#e6e7ea"} />
          <rect x="10" y="30" width="26" height="4" rx="2" fill={dark ? "#6b7280" : "#e6e7ea"} />
        </svg>
      </div>
      <div className="flex" style={{ alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: 12, color: "#374151" }}>{title}</span>
        {selected ? (
          <span className="rounded-full" style={{ width: 20, height: 20, backgroundColor: "#6d5efc" }} />
        ) : (
          <span className="rounded-full" style={{ width: 20, height: 20, border: "1px solid #e6e7ea" }} />
        )}
      </div>
      {selected ? (
        <span className="rounded-full" style={{ position: "absolute", left: 12, bottom: -8, width: 16, height: 16, backgroundColor: "#6d5efc", border: "2px solid #ffffff" }} />
      ) : null}
    </div>
  );
}

function ToggleRow({ label, enabled, icon }: { label: string; enabled?: boolean; icon?: React.ReactNode }) {
  return (
    <div className="flex" style={{ alignItems: "center", justifyContent: "space-between" }}>
      <span className="flex" style={{ alignItems: "center", gap: 12, color: "#374151" }}>{icon}{label}</span>
      <div className="flex rounded-full" style={{ width: 54, height: 28, alignItems: "center", padding: 4, background: enabled ? "#6d5efc" : "#e6e7ea" }}>
        <div className="rounded-full" style={{ width: 20, height: 20, background: "#ffffff", transform: enabled ? "translateX(20px)" : "translateX(0)", transition: "transform 150ms" }} />
      </div>
    </div>
  );
}

function MotionIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 12a8 8 0 1016 0" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 12h2M20 12h2" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="18" height="16" rx="4" stroke="#6b7280" strokeWidth="1.5" />
      <path d="M10 9l5 3-5 3V9z" fill="#6b7280" />
    </svg>
  );
}

function PhotoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="5" width="18" height="14" rx="3" stroke="#6b7280" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3" stroke="#6b7280" strokeWidth="1.5" />
      <path d="M7 8h3" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}


