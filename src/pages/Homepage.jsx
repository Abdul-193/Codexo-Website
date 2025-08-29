import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Homepage() {
  const features = [
    { icon: Code, title: "Entwicklung", description: "Moderne Webanwendungen mit aktuellen Technologien" },
    { icon: Palette, title: "Design", description: "Ästhetische und benutzerfreundliche Interfaces" },
    { icon: Zap, title: "Performance", description: "Optimierte Lösungen für beste Geschwindigkeit" },
  ];

  const stats = [
    { number: "50+", label: "Projekte" },
    { number: "100%", label: "Zufriedenheit" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="h1">Digitale Lösungen neu gedacht</h1>
            <p className="muted" style={{ fontSize: 18, maxWidth: 720, margin: "0 auto 24px" }}>
              Wir erschaffen außergewöhnliche digitale Erlebnisse, die Ihre Vision zum Leben erwecken.
            </p>
            <div className="actions">
              <Link to={createPageUrl("projekte")} className="btn btn-primary">
                <span>Projekte ansehen</span>
                <ArrowRight size={18} />
              </Link>
              <Link to={createPageUrl("about")} className="btn btn-ghost">
                Mehr erfahren
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section surface">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <h2 className="h2">Unsere Expertise</h2>
            <p className="muted">Mit Leidenschaft für Details und Fokus auf Qualität</p>
          </div>
          <div className="grid cols-3">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <div className="card">
                  <div style={{ width: 56, height: 56, borderRadius: 12, background: "var(--primary)", color: "#fff", display: "grid", placeItems: "center", marginBottom: 12 }}>
                    <f.icon size={26} />
                  </div>
                  <h3 style={{ margin: "0 0 8px" }}>{f.title}</h3>
                  <p className="muted">{f.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section primary">
        <div className="container">
          <div className="grid cols-3" style={{ textAlign: "center" }}>
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <div style={{ fontSize: 42, fontWeight: 800, marginBottom: 6 }}>{s.number}</div>
                <div style={{ opacity: 0.9 }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="h2">Bereit für Ihr nächstes Projekt?</h2>
            <p className="muted" style={{ marginBottom: 20 }}>Lassen Sie uns gemeinsam etwas Außergewöhnliches schaffen.</p>
            <Link to={createPageUrl("about")} className="btn btn-primary">
              <span>Kontakt aufnehmen</span>
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

