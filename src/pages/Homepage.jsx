import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import {
  ArrowRight,
  Code,
  Palette,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Homepage() {
  const features = [
    {
      icon: Code,
      title: "Entwicklung",
      description: "Moderne Webanwendungen mit neuesten Technologien",
    },
    {
      icon: Palette,
      title: "Design",
      description: "Ästhetische und benutzerfreundliche Interfaces",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimierte Lösungen für beste Geschwindigkeit",
    },
  ];

  const stats = [
    { number: "50+", label: "Projekte" },
    { number: "100%", label: "Zufriedenheit" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-green-50/30"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 codexo-text-primary">
              Digitale Lösungen
              <span className="block text-4xl md:text-6xl codexo-accent mt-2">
                neu gedacht
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Wir erschaffen außergewöhnliche digitale Erlebnisse, die Ihre Vision zum Leben erwecken
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to={createPageUrl("Projekte")}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="codexo-bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 shadow-2xl hover:shadow-3xl transition-all duration-300"
                >
                  <span>Projekte ansehen</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>

              <Link to={createPageUrl("About")}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 codexo-border-primary codexo-text-primary px-8 py-4 rounded-full font-semibold text-lg hover:codexo-bg-primary hover:text-white transition-all duration-300"
                >
                  Mehr erfahren
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 codexo-bg-primary rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-green-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 codexo-bg-primary rounded-full opacity-10 animate-pulse delay-300"></div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold codexo-text-primary mb-6">
              Unsere Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Mit Leidenschaft für Details und einem Fokus auf Qualität
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="w-16 h-16 codexo-bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold codexo-text-primary mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 codexo-bg-primary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-white"
              >
                <div className="text-5xl md:text-6xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-xl opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-green-50/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold codexo-text-primary mb-6">
              Bereit für Ihr nächstes Projekt?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Lassen Sie uns gemeinsam etwas Außergewöhnliches schaffen
            </p>

            <Link to={createPageUrl("About")}> 
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="codexo-bg-primary text-white px-12 py-4 rounded-full font-semibold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center space-x-2 mx-auto"
              >
                <span>Kontakt aufnehmen</span>
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
