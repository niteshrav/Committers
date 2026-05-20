import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ROUTES } from "../lib/routes";
import { SERVICE_NAV_ENTRIES, buildServiceSectionHref } from "../lib/navSections";

type OpenMenu = "none" | "services";

type NavMenusProps = {
  variant: "desktop" | "mobile";
  openMenu: OpenMenu;
  setOpenMenu: React.Dispatch<React.SetStateAction<OpenMenu>>;
  hoverPath: string | null;
  setHoverPath: (path: string | null) => void;
  handlePrimaryNavClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  closeMenus: () => void;
};

function NavMenus({
  variant,
  openMenu,
  setOpenMenu,
  hoverPath,
  setHoverPath,
  handlePrimaryNavClick,
  closeMenus,
}: NavMenusProps) {
  const menusWrapClass = variant === "desktop" ? "nav-menus-desktop" : "mobile-nav-menus";
  const dropdownPanelClass =
    variant === "desktop" ? "nav-dropdown-panel nav-dropdown-panel--desktop" : "nav-dropdown-panel nav-dropdown-panel--mobile";

  return (
    <div className={menusWrapClass} data-testid={variant === "mobile" ? "mobile-nav-inner" : undefined}>
      <NavLink
        to={ROUTES.home}
        className={({ isActive }) =>
          ["nav-primary-link", isActive ? "active" : "", hoverPath === ROUTES.home ? "nav-primary-link--hover" : ""]
            .filter(Boolean)
            .join(" ") || undefined
        }
        end
        onMouseEnter={() => setHoverPath(ROUTES.home)}
        onMouseLeave={() => setHoverPath(null)}
        onClick={(e) => {
          closeMenus();
          handlePrimaryNavClick(e);
        }}
      >
        Home
      </NavLink>

      <NavLink
        to={ROUTES.about}
        className={({ isActive }) =>
          ["nav-primary-link", isActive ? "active" : "", hoverPath === ROUTES.about ? "nav-primary-link--hover" : ""]
            .filter(Boolean)
            .join(" ") || undefined
        }
        onMouseEnter={() => setHoverPath(ROUTES.about)}
        onMouseLeave={() => setHoverPath(null)}
        onClick={(e) => {
          closeMenus();
          handlePrimaryNavClick(e);
        }}
      >
        About
      </NavLink>

      <div
        className={`nav-dropdown ${openMenu === "services" ? "nav-dropdown--open" : ""}`}
        onMouseEnter={() => {
          if (variant === "desktop") setOpenMenu("services");
        }}
        onMouseLeave={() => {
          if (variant === "desktop") setOpenMenu("none");
        }}
        onFocusCapture={() => {
          if (variant === "desktop") setOpenMenu("services");
        }}
        onBlurCapture={(e) => {
          if (variant !== "desktop") return;
          const next = e.relatedTarget as Node | null;
          if (next && e.currentTarget.contains(next)) return;
          setOpenMenu("none");
        }}
      >
        <NavLink
          to={ROUTES.services}
          id="nav-trigger-services"
          aria-expanded={openMenu === "services"}
          aria-haspopup="true"
          aria-controls="nav-menu-services"
          className={({ isActive }) =>
            [
              "nav-dropdown-trigger",
              "nav-primary-link",
              isActive ? "active" : "",
              hoverPath === "__services__" ? "nav-primary-link--hover" : "",
            ]
              .filter(Boolean)
              .join(" ") || undefined
          }
          onMouseEnter={() => setHoverPath("__services__")}
          onMouseLeave={() => setHoverPath(null)}
          onClick={(e) => {
            closeMenus();
            handlePrimaryNavClick(e);
          }}
        >
          Services
        </NavLink>
        {openMenu === "services" ? (
          <ul id="nav-menu-services" className={dropdownPanelClass} role="menu">
            {SERVICE_NAV_ENTRIES.map((entry) => (
              <li key={entry.id} role="none">
                <NavLink
                  role="menuitem"
                  to={buildServiceSectionHref(entry.id)}
                  className="nav-dropdown-link"
                  onClick={(e) => {
                    closeMenus();
                    handlePrimaryNavClick(e);
                  }}
                >
                  {entry.label}
                </NavLink>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <NavLink
        to={ROUTES.contact}
        className={({ isActive }) =>
          [
            "nav-primary-link",
            isActive ? "active" : "",
            hoverPath === ROUTES.contact ? "nav-primary-link--hover" : "",
          ]
            .filter(Boolean)
            .join(" ") || undefined
        }
        onMouseEnter={() => setHoverPath(ROUTES.contact)}
        onMouseLeave={() => setHoverPath(null)}
        onClick={(e) => {
          closeMenus();
          handlePrimaryNavClick(e);
        }}
      >
        Contact
      </NavLink>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<OpenMenu>("none");
  const location = useLocation();
  const [hoverPath, setHoverPath] = useState<string | null>(null);

  useEffect(() => {
    setHoverPath(null);
    setOpenMenu("none");
  }, [location.pathname]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      setOpenMenu("none");
      setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  function closeMenus() {
    setOpenMenu("none");
    setOpen(false);
  }

  function handlePrimaryNavClick(e: React.MouseEvent<HTMLAnchorElement>) {
    setOpen(false);
    setHoverPath(null);
    const el = e.currentTarget;
    queueMicrotask(() => el?.blur());
  }

  return (
    <header className="header header-light">
      <div className="container header-inner">
        <NavLink to={ROUTES.home} className="brand typography-brand" end onClick={handlePrimaryNavClick} aria-label="Commiters">
          Commiters
        </NavLink>

        <nav className="nav" aria-label="Primary navigation">
          <NavMenus
            variant="desktop"
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            hoverPath={hoverPath}
            setHoverPath={setHoverPath}
            handlePrimaryNavClick={handlePrimaryNavClick}
            closeMenus={closeMenus}
          />
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
        <NavMenus
          variant="mobile"
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          hoverPath={hoverPath}
          setHoverPath={setHoverPath}
          handlePrimaryNavClick={handlePrimaryNavClick}
          closeMenus={closeMenus}
        />
      </div>
    </header>
  );
}
