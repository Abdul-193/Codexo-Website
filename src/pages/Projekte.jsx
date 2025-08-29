import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar } from "lucide-react";

export default function Projekte() {
  const [filter, setFilter] = useState("alle");

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Modern online shopping solution with payments and inventory management",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&h=600&fit=crop",
      category: "web",
      technologies: ["React", "Node.js", "PostgreSQL"],
      date: "2024",
      status: "Live",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Elegant, responsive portfolio with gallery and contact form",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop",
      category: "design",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      date: "2024",
      status: "Live",
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative project management app with real-time updates",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=900&h=600&fit=crop",
      category: "app",
      technologies: ["Vue.js", "Express", "Socket.io"],
      date: "2023",
      status: "Live",
    },
    {
      id: 4,
      title: "Brand Identity",
      description: "Complete brand identity including logo, colors and guidelines",
      image: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=900&h=600&fit=crop",
      category: "design",
      technologies: ["Adobe CC", "Figma"],
      date: "2023",
      status: "Completed",
    },
  ];

  const categories = [
    { key: "alle", label: "All" },
    { key: "web", label: "Web" },
    { key: "app", label: "App" },
    { key: "design", label: "Design" },
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

