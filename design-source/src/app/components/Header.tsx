import { Link, useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import logoImage from 'figma:asset/888d5bd478425c67a4c116aeef6d89ae81f00fca.png';

export function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-8 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="no-underline">
          <img
            src={logoImage}
            alt="Фото-сон"
            style={{ width: '260px', height: 'auto' }}
          />
        </Link>

        {/* Navigation Links */}
        <nav className="flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors duration-200 no-underline ${
                location.pathname === link.path
                  ? 'text-[var(--color-gold)]'
                  : 'text-[var(--color-charcoal)] hover:text-[var(--color-gold)]'
              }`}
              style={{ fontWeight: 'var(--font-weight-medium)' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link to="/contacts">
          <button className="btn btn-primary">Оставить заявку</button>
        </Link>
      </div>
    </header>
  );
}