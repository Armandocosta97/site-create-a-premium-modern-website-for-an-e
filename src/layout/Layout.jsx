import { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"

export default function Layout({ children, navigationItems = [] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <NavLink to="/" end className="site-brand" aria-label="Casa Aurea Events home">
            <span className="site-brand__name">Casa Aurea Events</span>
            <span className="site-brand__tagline">Premium catering and bar service</span>
          </NavLink>

          <button
            type="button"
            className="site-header__toggle"
            aria-expanded={isMenuOpen}
            aria-controls="site-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            Menu
          </button>

          <nav
            id="site-navigation"
            aria-label="Main navigation"
            className={`site-nav${isMenuOpen ? " site-nav--open" : ""}`}
          >
            {navigationItems.map((item) => (
              <NavLink
                key={item.target}
                to={item.target}
                end={item.target === "/"}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="site-footer__brand">
            <p className="site-footer__eyebrow">Casa Aurea Events</p>
            <p className="site-footer__headline">
              Elevated catering, signature drinks, and refined hospitality for elegant gatherings.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="site-footer__nav">
            {navigationItems.map((item) => (
              <NavLink
                key={`footer-${item.target}`}
                to={item.target}
                end={item.target === "/"}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="site-footer__contact">
            <a href="tel:+39011000000">+39 011 000000</a>
            <a href="mailto:hello@casaaureaevents.it">hello@casaaureaevents.it</a>
            <p>Torino and surrounding areas</p>
            <p>Instagram coming soon</p>
          </div>

          <p className="site-footer__copyright">
            © 2026 Casa Aurea Events. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
