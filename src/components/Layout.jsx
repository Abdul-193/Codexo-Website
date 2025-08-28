import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "../utils";
import { Home, FolderOpen, User } from "lucide-react";

const navigationItems = [
  {
    title: "Home",
    url: createPageUrl("Homepage"),
    icon: Home,
  },
  {
    title: "Projekte",
    url: createPageUrl("Projekte"),
    icon: FolderOpen,
  },
  {
    title: "About",
    url: createPageUrl("About"),
    icon: User,
  },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      <style>
        {`
          :root {
            --codexo-primary: #1a472a;
            --codexo-primary-light: #22543d;
            --codexo-primary-lighter: #2d5a3d;
            --codexo-accent: #059669;
          }

          * {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          }

          .codexo-text-primary { color: var(--codexo-primary); }
          .codexo-bg-primary { background-color: var(--codexo-primary); }
          .codexo-bg-primary-light { background-color: var(--codexo-primary-light); }
          .codexo-border-primary { border-color: var(--codexo-primary); }
          .codexo-accent { color: var(--codexo-accent); }

          .codexo-hover:hover {
            background-color: var(--codexo-primary-light);
            transform: translateY(-1px);
          }
        `}
      </style>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <nav className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to={createPageUrl("Homepage")} className="flex items-center space-x-2 group">
              <div className="w-8 h-8 codexo-bg-primary rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-2xl font-bold codexo-text-primary tracking-tight">codexo</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                    location.pathname === item.url
                      ? 'codexo-bg-primary text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900 codexo-hover hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <div className="flex space-x-1">
                {navigationItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.url}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      location.pathname === item.url
                        ? 'codexo-bg-primary text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-6 h-6 codexo-bg-primary rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xs">C</span>
              </div>
              <span className="text-xl font-bold codexo-text-primary">codexo</span>
            </div>
            <p className="text-gray-500 text-sm">
              © 2024 codexo. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
