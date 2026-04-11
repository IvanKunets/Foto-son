import image_4b08fd5937cc93d3d2bfd40e023d8102c6bdfe29 from 'figma:asset/4b08fd5937cc93d3d2bfd40e023d8102c6bdfe29.png'
import image_7c9c64c85f8110788026368e47b9f486d1e6121b from 'figma:asset/7c9c64c85f8110788026368e47b9f486d1e6121b.png'
import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-[60px] md:pt-[72px]">
      {/* Hero */}
      <section
        className="relative h-[200px] md:h-[280px] flex items-center justify-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1759853900057-bd622dd45028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwcGhvdG9ncmFwaHklMjBzdHVkaW8lMjBtb29keSUyMGxpZ2h0aW5nJTIwYmFja2Ryb3B8ZW58MXx8fHwxNzc1NTY2NjE0fDA&ixlib=rb-4.1.0&q=80&w=1080)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="mb-2 md:mb-3 text-[#ffffff] text-[36px] md:text-[48px]">Контакты</h1>
          <p className="text-xs md:text-sm" style={{ color: '#E0DDD8' }}>
            Главная / Контакты
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
            {/* Contact Information */}
            <div className="md:col-span-2">
              <h2 className="mb-6 md:mb-8 text-[28px] md:text-[36px]">Как с нами связаться</h2>

              <div className="space-y-6 md:space-y-8">
                <div>
                  <h4 className="mb-2 md:mb-3 text-[18px] md:text-[20px]">Телефон</h4>
                  <a
                    href="tel:+78631234567"
                    className="text-lg md:text-xl text-[var(--color-gold)] hover:underline no-underline block py-2"
                  >
                    +7 (863) 123-45-67
                  </a>
                  <p className="text-xs md:text-sm text-[var(--color-gray)] mt-1 md:mt-2">
                    Ежедневно с 10:00 до 20:00
                  </p>
                </div>

                <div>
                  <h4 className="mb-2 md:mb-3 text-[18px] md:text-[20px]">Email</h4>
                  <a
                    href="mailto:info@photoson.ru"
                    className="text-lg md:text-xl text-[var(--color-gold)] hover:underline no-underline block py-2"
                  >
                    info@photoson.ru
                  </a>
                  <p className="text-xs md:text-sm text-[var(--color-gray)] mt-1 md:mt-2">
                    Ответим в течение 2 часов
                  </p>
                </div>

                <div>
                  <h4 className="mb-2 md:mb-3 text-[18px] md:text-[20px]">Адрес студии</h4>
                  <p className="text-base md:text-lg mb-2">
                    г. Ростов-на-Дону, ул. Большая Садовая, д. 50
                  </p>

                </div>

                <div>
                  <h4 className="mb-2 md:mb-3 text-[18px] md:text-[20px]">Режим работы</h4>
                  <div className="space-y-2 text-sm md:text-base">
                    <div className="flex justify-between gap-4">
                      <span>Понедельник - Пятница</span>
                      <span className="font-medium">10:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>Суббота - Воскресенье</span>
                      <span className="font-medium">11:00 - 18:00</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="mb-2 md:mb-3 text-[18px] md:text-[20px]">Социальные сети</h4>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-[var(--color-gold)] hover:bg-[var(--color-charcoal)] transition-colors flex items-center justify-center text-white"
                      aria-label="Instagram"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-[var(--color-gold)] hover:bg-[var(--color-charcoal)] transition-colors flex items-center justify-center text-white"
                      aria-label="VK"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.18 14.08h-1.25c-.46 0-.6-.37-1.43-1.2-.72-.67-1.04-.76-1.22-.76-.25 0-.32.07-.32.42v1.1c0 .3-.09.47-1.01.47-1.52 0-3.2-.92-4.38-2.64-1.78-2.55-2.27-4.47-2.27-4.86 0-.18.07-.35.42-.35h1.25c.31 0 .43.14.55.47.61 1.78 1.63 3.34 2.05 3.34.16 0 .23-.07.23-.48v-1.87c-.06-.99-.58-1.08-.58-1.43 0-.15.12-.3.32-.3h1.96c.26 0 .36.14.36.45v2.53c0 .26.12.36.19.36.16 0 .29-.1.58-.39 1.07-1.21 1.84-3.08 1.84-3.08.1-.2.24-.39.61-.39h1.25c.37 0 .45.19.37.45-.13.66-1.61 3.32-1.61 3.32-.13.21-.18.3 0 .54.13.18.56.55.85.88.53.58.94 1.06 1.05 1.4.1.34-.07.51-.44.51z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-[var(--color-gold)] hover:bg-[var(--color-charcoal)] transition-colors flex items-center justify-center text-white"
                      aria-label="Telegram"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <div className="card p-4 md:p-8">
                <h2 className="mb-6 md:mb-8 text-[28px] md:text-[36px]">Оставить заявку</h2>
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div>
                    <label className="block mb-2 text-sm md:text-base">Ваше имя *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="input"
                      placeholder="Введите ваше имя"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="block mb-2 text-sm md:text-base">Телефон *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input"
                        placeholder="+7 (___) ___-__-__"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm md:text-base">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm md:text-base">Тип съемки *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="input"
                      required
                      style={{
                        appearance: 'none',
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%236B6B6B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 16px center',
                        paddingRight: '40px',
                      }}
                    >
                      <option value="">Выберите услугу</option>
                      <option value="portrait">Портретная съемка</option>
                      <option value="wedding">Свадебная съемка</option>
                      <option value="family">Семейная фотосессия</option>
                      <option value="fashion">Fashion съемка</option>
                      <option value="corporate">Корпоративные портреты</option>
                      <option value="creative">Творческий проект</option>
                      <option value="pregnancy">Фотосессия беременности</option>
                      <option value="children">Детская фотосессия</option>
                      <option value="lovestory">Love Story</option>
                      <option value="other">Другое</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm md:text-base">Сообщение</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="input"
                      rows={5}
                      placeholder="Расскажите о ваших пожеланиях и предпочтениях..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary w-full text-base md:text-lg py-3 md:py-4">
                    Отправить заявку
                  </button>

                  <p className="text-xs md:text-sm text-[var(--color-gray)] text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой
                    конфиденциальности
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 md:py-16 bg-[var(--background)]">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="w-full rounded-lg overflow-hidden relative h-[300px] md:h-[500px]">
            <ImageWithFallback
              src={image_4b08fd5937cc93d3d2bfd40e023d8102c6bdfe29}
              alt="Карта - г. Ростов-на-Дону, ул. Большая Садовая, д. 12"
              className="w-full h-full object-cover"
            />
            {/* Gold location pin overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full flex flex-col items-center">
              <svg
                width="40"
                height="40"
                className="md:w-[48px] md:h-[48px]"
                viewBox="0 0 24 24"
                fill="var(--color-gold)"
                stroke="var(--color-charcoal)"
                strokeWidth="1"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3" fill="var(--color-charcoal)"></circle>
              </svg>
              <div
                className="mt-1 md:mt-2 px-2 md:px-3 py-1 rounded text-xs md:text-sm"
                style={{
                  backgroundColor: 'var(--color-gold)',
                  color: 'var(--color-charcoal)',
                  fontWeight: '500',
                }}
              >
                Фото-сон
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}