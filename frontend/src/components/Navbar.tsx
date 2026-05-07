import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ROUTES } from "../lib/routes";

type NavItem = { to: string; label: string };

const navItems: NavItem[] = [
  { to: ROUTES.home, label: "Home" },
  { to: ROUTES.about, label: "About" },
  { to: ROUTES.services, label: "Services" },
  { to: ROUTES.contact, label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  /** CSS :hover can “stick”; drive highlight only while the pointer actually sits on a link */
  const [hoverPath, setHoverPath] = useState<string | null>(null);

  useEffect(() => {
    setHoverPath(null);
  }, [location.pathname]);

  function handlePrimaryNavClick(e: React.MouseEvent<HTMLAnchorElement>) {
    setOpen(false);
    setHoverPath(null);
    queueMicrotask(() => e.currentTarget.blur());
  }

  const renderedNav = (
    <>
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            [
              "nav-primary-link",
              isActive ? "active" : "",
              hoverPath === item.to ? "nav-primary-link--hover" : "",
            ]
              .filter(Boolean)
              .join(" ") || undefined
          }
          end={item.to === ROUTES.home}
          onMouseEnter={() => setHoverPath(item.to)}
          onMouseLeave={() => setHoverPath(null)}
          onClick={handlePrimaryNavClick}
        >
          {item.label}
        </NavLink>
      ))}
    </>
  );

  return (
    <header className="header header-light">
      <div className="container header-inner">
        <NavLink to={ROUTES.home} className="brand typography-brand" end onClick={handlePrimaryNavClick} aria-label="COMMITERS">
          COMMITERS
        </NavLink>

        <nav className="nav" aria-label="Primary navigation">
          {renderedNav}
        </nav>

        <button
          className="menu-btn"
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          Menu
        </button>
      </div>

      <div className={`container mobile-nav ${open ? "open" : ""}`} id="mobile-nav">
        {renderedNav}
      </div>
    </header>
  );
}
