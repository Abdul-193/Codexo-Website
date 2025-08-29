import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "../utils";
import { Home, FolderOpen, User } from "lucide-react";

const navigationItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Projects", url: createPageUrl("projekte"), icon: FolderOpen },
  { title: "About", url: createPageUrl("about"), icon: User },
];

export default function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="app">
      <header className="site-header">
        <div className="container header-inner">
          <Link to={createPageUrl("home")} className="brand" aria-label="codexo homepage">
            <div className="brand-mark">C</div>
            <span className="brand-name">codexo</span>
          </Link>
          <nav className="nav">
            {navigationItems.map((item) => (
              <Link
                key={item.title}
                to={item.url}
                className={
                  "nav-link" + (location.pathname === item.url ? " active" : "")
                }
              >
                <item.icon size={16} />
                <span>{item.title}</span>
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="site-main">{children}</main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="brand brand-small">
            <div className="brand-mark">C</div>
            <span className="brand-name">codexo</span>
          </div>
          <p className="muted">© 2024 codexo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

