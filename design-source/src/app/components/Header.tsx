import { Link, useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import logoImage from 'figma:asset/888d5bd478425c67a4c116aeef6d89ae81f00fca.png';

export function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Главная' },
    { path: '/services', label: 'Услуги' },
    { path: '/gallery', label: 'Галерея' },
    { path: '/reviews', label: 'Отзывы' },
    { path: '/contacts', label: 'Контакты' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-2 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="no-underline">
            <img
              src={logoImage}
              alt="Фото-сон"
              className="w-[180px] h-[35px] md:w-[260px] md:h-[50px]"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors duration-200 no-underline ${ location.pathname === link.path ? 'text-[var(--color-gold)]' : 'text-[var(--color-charcoal)] hover:text-[var(--color-gold)]' } text-[18px]`}
                style={{ fontWeight: 'var(--font-weight-medium)' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <Link to="/contacts" className="hidden md:block">
            <button className="btn btn-primary text-[18px]">Оставить заявку</button>
          </Link>

          {/* Mobile Hamburger Menu */}
          <button
            className="md:hidden w-11 h-11 flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-charcoal)" strokeWidth="2">
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          <div
            className="absolute top-0 right-0 bottom-0 w-[280px] bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col p-6 pt-20">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-4 px-4 border-b transition-colors duration-200 no-underline ${
                    location.pathname === link.path
                      ? 'text-[var(--color-gold)]'
                      : 'text-[var(--color-charcoal)]'
                  } text-[18px]`}
                  style={{
                    fontWeight: 'var(--font-weight-medium)',
                    borderColor: 'var(--color-border)',
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contacts" className="mt-6" onClick={() => setMobileMenuOpen(false)}>
                <button className="btn btn-primary w-full text-[18px]">Оставить заявку</button>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}