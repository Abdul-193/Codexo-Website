import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar } from "lucide-react";

export default function Projekte() {
  const [filter, setFilter] = useState("alle");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Moderne Online-Shopping-Lösung mit integriertem Zahlungssystem und Bestandsverwaltung",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      category: "web",
      technologies: ["React", "Node.js", "PostgreSQL"],
      date: "2024",
      status: "Live",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "Elegantes und responsives Portfolio für einen Fotografen mit Galerie und Kontaktformular",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      category: "design",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      date: "2024",
      status: "Live",
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "Kollaborative Projektmanagement-Anwendung für Teams mit Echtzeitaktualisierungen",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      category: "app",
      technologies: ["Vue.js", "Express", "Socket.io"],
      date: "2023",
      status: "Live",
    },
    {
      id: 4,
      title: "Brand Identity",
      description:
        "Komplette Markenidentität für ein Startup inklusive Logo, Farbschema und Guidelines",
      image:
        "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=600&h=400&fit=crop",
      category: "design",
      technologies: ["Adobe Creative Suite", "Figma"],
      date: "2023",
      status: "Abgeschlossen",
    },
    {
      id: 5,
      title: "Analytics Dashboard",
      description:
        "Datenvisualisierungs-Dashboard für Unternehmen mit interaktiven Charts und Berichten",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      category: "web",
      technologies: ["React", "D3.js", "Python"],
      date: "2023",
      status: "Live",
    },
    {
      id: 6,
      title: "Mobile Fitness App",
      description:
        "Fitness-Tracking-App mit personalisierten Trainingsplänen und sozialen Funktionen",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      category: "app",
      technologies: ["React Native", "Firebase", "Redux"],
      date: "2023",
      status: "Beta",
    },
  ];

  const categories = [
    { key: "alle", label: "Alle Projekte" },
    { key: "web", label: "Web Development" },
    { key: "app", label: "Mobile Apps" },
    { key: "design", label: "Design" },
  ];

  const filteredProjects =
    filter === "alle" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen py-12">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold codexo-text-primary mb-6">
            Unsere Projekte
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Eine Auswahl unserer erfolgreich umgesetzten Projekte – von modernen
            Webanwendungen bis hin zu innovativen mobilen Lösungen
          </p>
        </motion.div>
      </section>

      {/* Filter */}
      <section className="max-w-6xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <motion.button
              key={category.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category.key
                  ? "codexo-bg-primary text-white shadow-lg"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:shadow-md"
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === "Live"
                        ? "bg-green-100 text-green-800"
                        : project.status === "Beta"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold codexo-text-primary group-hover:codexo-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.date}
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 codexo-bg-primary text-white py-2 px-4 rounded-lg font-medium hover:codexo-bg-primary-light transition-colors duration-300 flex items-center justify-center space-x-2">
                    <ExternalLink className="w-4 h-4" />
                    <span>Ansehen</span>
                  </button>
                  <button className="p-2 border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-colors duration-300">
                    <Github className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-br from-green-50 to-gray-50 p-12 rounded-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold codexo-text-primary mb-4">
            Haben Sie ein Projekt im Kopf?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihre Vision in die Realität umsetzen
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="codexo-bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Projekt starten
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
