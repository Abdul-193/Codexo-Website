import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar } from "lucide-react";

export default function Projekte() {
  const [filter, setFilter] = useState("alle");

  const projects = [
    // 🌐 Web & Hosting
    {
      id: 1,
      title: "Domain registration & management",
      description: "Full lifecycle domain setup, DNS management and SSL provisioning",
      image: null,
      category: "web",
      technologies: ["Domains", "DNS", "SSL"],
      date: "2025",
      status: "Service",
    },
    {
      id: 2,
      title: "Secure and reliable website hosting",
      description: "Managed hosting with backups, monitoring and security hardening",
      image: null,
      category: "web",
      technologies: ["Hosting", "Backups", "Security"],
      date: "2025",
      status: "Service",
    },
    {
      id: 3,
      title: "Custom website development (corporate, e-commerce, personal)",
      description: "Tailored websites from corporate pages to modern e-commerce",
      image: null,
      category: "web",
      technologies: ["React/Next", "CMS", "Payments"],
      date: "2025",
      status: "Service",
    },
    {
      id: 4,
      title: "Website maintenance & optimization",
      description: "Performance tuning, audits, updates and proactive maintenance",
      image: null,
      category: "web",
      technologies: ["Optimization", "Core Web Vitals", "Monitoring"],
      date: "2025",
      status: "Service",
    },

    // ⚙️ Automation & Workflow
    {
      id: 5,
      title: "n8n workflow automation projects",
      description: "Automate processes and integrate tools visually with n8n",
      image: null,
      category: "automation",
      technologies: ["n8n", "Integrations", "Webhooks"],
      date: "2025",
      status: "Service",
    },
    {
      id: 6,
      title: "Social media automation & scheduling",
      description: "Automated content scheduling, posting and reporting across platforms",
      image: null,
      category: "automation",
      technologies: ["Automation", "Scheduling", "APIs"],
      date: "2025",
      status: "Service",
    },
    {
      id: 7,
      title: "Data integration between apps & platforms",
      description: "Connect systems with robust data flows, syncs and ETL",
      image: null,
      category: "automation",
      technologies: ["APIs", "ETL", "Pipelines"],
      date: "2025",
      status: "Service",
    },
    {
      id: 8,
      title: "Business process optimization",
      description: "Map, streamline and automate workflows for efficiency",
      image: null,
      category: "automation",
      technologies: ["Workflows", "BPM", "Automation"],
      date: "2025",
      status: "Service",
    },

    // 📱 Mobile & Desktop Applications
    {
      id: 9,
      title: "iOS app development",
      description: "Native or cross‑platform iOS applications from idea to App Store",
      image: null,
      category: "apps",
      technologies: ["iOS", "Swift / React Native"],
      date: "2025",
      status: "Service",
    },
    {
      id: 10,
      title: "Android app development",
      description: "High‑quality Android apps with modern UI and performance",
      image: null,
      category: "apps",
      technologies: ["Android", "Kotlin / React Native"],
      date: "2025",
      status: "Service",
    },
    {
      id: 11,
      title: "Cross-platform desktop applications (Windows, macOS, Linux)",
      description: "Desktop apps that run anywhere with a single codebase",
      image: null,
      category: "apps",
      technologies: ["Electron", "Tauri", "Native APIs"],
      date: "2025",
      status: "Service",
    },
    {
      id: 12,
      title: "Hybrid apps (one codebase, multiple platforms)",
      description: "Build once, deploy to mobile and desktop",
      image: null,
      category: "apps",
      technologies: ["React Native", "Flutter"],
      date: "2025",
      status: "Service",
    },

    // 🎯 Digital Solutions
    {
      id: 13,
      title: "API development & integration",
      description: "Design, build and integrate REST/GraphQL APIs",
      image: null,
      category: "solutions",
      technologies: ["REST", "GraphQL", "OAuth"],
      date: "2025",
      status: "Service",
    },
    {
      id: 14,
      title: "Dashboard & analytics tools",
      description: "Custom dashboards with actionable insights and reporting",
      image: null,
      category: "solutions",
      technologies: ["Dashboards", "Analytics", "Data Viz"],
      date: "2025",
      status: "Service",
    },
    {
      id: 15,
      title: "Custom CRM / ERP solutions",
      description: "Tailored business systems that fit your operations",
      image: null,
      category: "solutions",
      technologies: ["CRM", "ERP", "Integrations"],
      date: "2025",
      status: "Service",
    },
    {
      id: 16,
      title: "Cloud-based applications",
      description: "Scalable SaaS and cloud-native applications",
      image: null,
      category: "solutions",
      technologies: ["Cloud", "SaaS", "Containers"],
      date: "2025",
      status: "Service",
    },
  ];

  const categories = [
    { key: "alle", label: "All" },
    { key: "web", label: "Web & Hosting" },
    { key: "automation", label: "Automation" },
    { key: "apps", label: "Mobile & Desktop" },
    { key: "solutions", label: "Digital Solutions" },
  ];

  const filtered = filter === "alle" ? projects : projects.filter((p) => p.category === filter);

  const statusClass = (s) => (s === "Live" ? "badge green" : s === "Beta" ? "badge yellow" : "badge gray");

  return (
    <div className="section">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <h1 className="h1" style={{ marginBottom: 8 }}>Our Projects</h1>
          <p className="muted">A selection of successfully delivered work</p>
        </div>

        {/* Filter */}
        <div className="actions" style={{ marginBottom: 24 }}>
          {categories.map((c) => (
            <button
              key={c.key}
              className={"btn" + (filter === c.key ? " btn-primary" : "")}
              onClick={() => setFilter(c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid cols-3">
          {filtered.map((project, i) => (
            <motion.div key={project.id} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: i * 0.05 }}>
              <div className="card">
                {project.image && (
                  <img src={project.image} alt={project.title} className="card-media" />
                )}
                <div className="card-header" style={{ marginTop: 12 }}>
                  <h3 style={{ margin: 0 }}>{project.title}</h3>
                  <div className="muted" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                    <Calendar size={14} /> {project.date}
                  </div>
                </div>
                <p className="muted" style={{ marginBottom: 12 }}>{project.description}</p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
                  {project.technologies.map((t) => (
                    <span key={t} className="badge gray">{t}</span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 8, alignItems: "center", justifyContent: "space-between" }}>
                  <span className={statusClass(project.status)}>{project.status}</span>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button className="btn btn-ghost"><ExternalLink size={16} /> View</button>
                    <button className="btn btn-ghost"><Github size={16} /> Code</button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
