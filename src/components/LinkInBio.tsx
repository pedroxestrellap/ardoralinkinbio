import { useState } from "react";

/* ─── Links ─────────────────────────────────────────── */
const links = [
  {
    label: "Ver Catálogo",
    href: "https://ardorastore.com/collections/all",
    delay: "fade-up-5",
  },
  {
    label: "Escríbenos por WhatsApp",
    href: "https://wa.me/18095168877?text=Hola!%20Quiero%20info%20sobre%20sus%20productos%20%F0%9F%8C%BF",
    delay: "fade-up-6",
  },
];

/* ─── Socials ────────────────────────────────────────── */
const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/ardorastore",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@ardorastore",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.43a8.16 8.16 0 0 0 4.77 1.52V7.5a4.85 4.85 0 0 1-1-.81z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/ardorastore",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    href: "https://x.com/ardorastore",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/18095168877",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.126 1.526 5.859L.057 23.215a.75.75 0 0 0 .928.928l5.356-1.469A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.655-.51-5.176-1.399l-.372-.217-3.853 1.057 1.057-3.853-.217-.372A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
    ),
  },
];

/* ─── Link Button ───────────────────────────────────── */
function LinkButton({ label, href, animClass }: { label: string; href: string; animClass: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`${animClass} flex items-center justify-center w-full py-[15px] px-6 rounded-[14px] border-2 border-ink font-body font-bold text-[13px] tracking-[0.2em] uppercase no-underline select-none transition-all duration-200 ease-out`}
      style={{
        backgroundColor: hovered ? "#F4EFE8" : "#111111",
        color:           hovered ? "#111111" : "#F4EFE8",
        transform:       hovered ? "translateY(-2px)" : "translateY(0)",
        boxShadow:       hovered ? "0 6px 20px rgba(0,0,0,0.14)" : "none",
      }}
    >
      {label}
    </a>
  );
}

/* ─── Social Icon ───────────────────────────────────── */
function SocialIcon({ name, href, icon }: { name: string; href: string; icon: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      title={name}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="no-underline block transition-all duration-200"
      style={{
        color:     hovered ? "#111111" : "rgba(17,17,17,0.35)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
      }}
    >
      {icon}
    </a>
  );
}

/* ─── Main Component ────────────────────────────────── */
export default function LinkInBio() {
  return (
    <main className="flex flex-col items-center min-h-dvh px-5 pb-16">
      <div className="w-full max-w-sm">

        {/* ── Top bar ── */}
        <div className="flex justify-center items-center pt-6 pb-5 animate-fade-in">
          {/* <span
            className="font-body"
            style={{ fontWeight: 300, fontSize: "11px", letterSpacing: "0.1em", color: "rgba(17,17,17,0.35)" }}
          >
            @ardorastore
          </span> */}
        </div>

        {/* ── Avatar ── */}
        <div className="flex justify-center animate-fade-up-2" style={{ marginBottom: 0, position: "relative", zIndex: 10 }}>
          <div style={{
            width: "148px", height: "148px",
            borderRadius: "50%", overflow: "hidden",
            border: "3px solid #111",
            background: "#f4efe8",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
              {/* ✏️ Reemplaza con tu foto/logo real: */}
              <img 
                src="/ardora.webp" 
                alt="Ardora" 
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  objectFit: "contain",    // ← contain en vez de cover
                  objectPosition: "center",
                  padding: "16px",         // ← espacio para que respire el logo
                }} 
              />
          </div>
        </div>

        {/* ── Horizontal rule (behind avatar) ── */}
        <div style={{ marginTop: "-74px", borderTop: "1.5px solid rgba(17,17,17,0.82)", position: "relative", zIndex: 1 }} />

        {/* ── Spacer ── */}
        <div style={{ height: "82px" }} />

        {/* ── Tags ── */}
        <div
          className="animate-fade-up-3"
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px", marginBottom: "20px" }}
        >
          {["✈️ Skincare Coreano", "🇩🇴 Santo Domingo"].map((tag) => (
            <span
              key={tag}
              className="font-body"
              style={{
                fontSize: "11px", fontWeight: 400,
                padding: "4px 12px",
                borderRadius: "100px",
                border: "1px solid rgba(17,17,17,0.2)",
                color: "rgba(17,17,17,0.6)",
                letterSpacing: "0.04em",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* ── Headline ── */}
        <h1
          className="text-center animate-fade-up-1 mb-5 font-script"
          style={{ fontSize: "3rem", lineHeight: 1, color: "#111" }}
        >
           Skincare coreano que <strong>enamora!</strong>
        </h1>

        {/* ── Body copy ── */}
        <p
          className="text-center font-body animate-fade-up-4 mb-8"
          style={{ fontWeight: 300, fontSize: "0.94rem", lineHeight: 1.7, color: "rgba(17,17,17,0.76)", padding: "0 2px" }}
        >
          Todo para amar tu piel un poco más.<br />
          Skincare coreano con envío gratis<br />
          en Santo Domingo.
        </p>

        {/* ── Links ── */}
        <div className="flex flex-col gap-3">
          {links.map((link) => (
            <LinkButton
              key={link.label}
              label={link.label}
              href={link.href}
              animClass={`animate-${link.delay}`}
            />
          ))}
        </div>

        {/* ── Footer ── */}
        <footer className="animate-fade-up-9" style={{ marginTop: "48px" }}>
          {/* Rule */}
          <div style={{ borderTop: "1px solid rgba(17,17,17,0.15)", marginBottom: "28px" }} />

          {/* Social icons */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "28px", marginBottom: "20px" }}>
            {socials.map((s) => (
              <SocialIcon key={s.name} {...s} />
            ))}
          </div>

          {/* Location */}
          <p
            className="font-body text-center"
            style={{ fontWeight: 400, fontSize: "11px", letterSpacing: "0.1em", color: "rgba(17,17,17,0.6)", marginBottom: "4px" }}
          >
            📍 Santo Domingo, RD
          </p>

          {/* Copyright */}
          <p
            className="font-body text-center"
            style={{ fontWeight: 500, fontSize: "11px", letterSpacing: "0.1em", color: "rgba(17,17,17,0.65)", paddingBottom: "8px" }}
          >
            © 2026 · @ardorastore
          </p>
        </footer>

      </div>
    </main>
  );
}
