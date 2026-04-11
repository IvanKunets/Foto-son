import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-[var(--color-charcoal)] text-white py-8 md:py-16">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Logo & Tagline */}
          <div>
            <h3 className="text-white mb-3 md:mb-4 text-[20px] md:text-[24px]">Фото-сон</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Профессиональная фотостудия в центре города. Создаём искусство из ваших моментов.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white mb-3 md:mb-4 text-base md:text-lg">Навигация</h4>
            <nav className="flex flex-col gap-2 md:gap-3">
              <Link to="/" className="text-white/70 hover:text-white transition-colors no-underline text-sm md:text-base">
                Главная
              </Link>
              <Link to="/services" className="text-white/70 hover:text-white transition-colors no-underline text-sm md:text-base">
                Услуги
              </Link>
              <Link to="/gallery" className="text-white/70 hover:text-white transition-colors no-underline text-sm md:text-base">
                Галерея
              </Link>
              <Link to="/reviews" className="text-white/70 hover:text-white transition-colors no-underline text-sm md:text-base">
                Отзывы
              </Link>
              <Link to="/contacts" className="text-white/70 hover:text-white transition-colors no-underline text-sm md:text-base">
                Контакты
              </Link>
            </nav>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-white mb-3 md:mb-4 text-base md:text-lg">Контакты</h4>
            <div className="flex flex-col gap-2 md:gap-3 text-white/70">
              <a href="tel:+78631234567" className="hover:text-white transition-colors no-underline text-sm md:text-base">
                +7 (863) 123-45-67
              </a>
              <p className="text-sm text-[#ffffffb3]">г. Ростов-на-Дону, ул. Большая Садовая, д. 50</p>
              <div className="text-sm">
                <p className="mb-1 text-[#ffffffb3]">Пн-Пт: 10:00 - 20:00</p>
                <p className="text-[#ffffffb3]">Сб-Вс: 11:00 - 18:00</p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white mb-3 md:mb-4 text-base md:text-lg">Социальные сети</h4>
            <div className="flex gap-3 md:gap-4">
              <a
                href="#"
                className="w-11 h-11 md:w-10 md:h-10 rounded-full bg-white/10 hover:bg-[var(--color-gold)] transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-11 h-11 md:w-10 md:h-10 rounded-full bg-white/10 hover:bg-[var(--color-gold)] transition-colors flex items-center justify-center"
                aria-label="VK"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.18 14.08h-1.25c-.46 0-.6-.37-1.43-1.2-.72-.67-1.04-.76-1.22-.76-.25 0-.32.07-.32.42v1.1c0 .3-.09.47-1.01.47-1.52 0-3.2-.92-4.38-2.64-1.78-2.55-2.27-4.47-2.27-4.86 0-.18.07-.35.42-.35h1.25c.31 0 .43.14.55.47.61 1.78 1.63 3.34 2.05 3.34.16 0 .23-.07.23-.48v-1.87c-.06-.99-.58-1.08-.58-1.43 0-.15.12-.3.32-.3h1.96c.26 0 .36.14.36.45v2.53c0 .26.12.36.19.36.16 0 .29-.1.58-.39 1.07-1.21 1.84-3.08 1.84-3.08.1-.2.24-.39.61-.39h1.25c.37 0 .45.19.37.45-.13.66-1.61 3.32-1.61 3.32-.13.21-.18.3 0 .54.13.18.56.55.85.88.53.58.94 1.06 1.05 1.4.1.34-.07.51-.44.51z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-11 h-11 md:w-10 md:h-10 rounded-full bg-white/10 hover:bg-[var(--color-gold)] transition-colors flex items-center justify-center"
                aria-label="Telegram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 md:pt-8 text-center text-white/50 text-xs md:text-sm">
          <p>&copy; 2026 Фото-сон. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
