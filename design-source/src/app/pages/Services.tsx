import { Link } from 'react-router';
import { ServiceIcon } from '../components/ServiceIcon';
import { useState } from 'react';

export function Services() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const services = [
    {
      iconType: 'portrait' as const,
      title: 'Портретная съемка',
      description:
        'Профессиональные портреты в студии или на локации. Индивидуальная работа с освещением и композицией для создания выразительных образов.',
      price: '5000',
      duration: '1-2 часа',
      includes: ['Съемка в студии', 'Базовая ретушь 10 фото', 'Онлайн-галерея'],
    },
    {
      iconType: 'children' as const,
      title: 'Детские фотосессии',
      description:
        'Яркие и живые фотографии ваших детей. Игровой формат съемки, естественные эмоции и радостные моменты детства.',
      price: '5500',
      duration: '1 час',
      includes: [
        'Игровая съемка',
        'Реквизит в студии',
        'Ретушь 12 фото',
        'Быстрая готовность',
      ],
    },
    {
      iconType: 'family' as const,
      title: 'Семейные фотосессии',
      description:
        'Запечатлейте особенные моменты с близкими. Естественные эмоции и искренние улыбки в уютной атмосфере студии или на природе.',
      price: '7000',
      duration: '1-2 часа',
      includes: [
        'Съемка семьи до 5 человек',
        'Смена 2 образов',
        'Ретушь 20 фото',
      ],
    },
    {
      iconType: 'wedding' as const,
      title: 'Свадебная съемка',
      description:
        'Полное сопровождение вашего важного дня от сборов до первого танца. Живые эмоции, важные моменты и атмосфера праздника.',
      price: '25000',
      duration: '8-10 часов',
      includes: [
        'Съемка полного дня',
        'Два фотографа',
        'Ретушь 100+ фото',
        'Фотокнига в подарок',
      ],
    },
    {
      iconType: 'corporate' as const,
      title: 'Корпоративные портреты',
      description:
        'Деловые фотосессии для команды и личного бренда. Профессиональные портреты для сайта, социальных сетей и бизнес-материалов.',
      price: '8000',
      duration: '2-3 часа',
      includes: [
        'Съемка до 10 человек',
        'Единый стиль',
        'Быстрая обработка',
        'Формат для всех платформ',
      ],
    },
    {
      iconType: 'lovestory' as const,
      title: 'Love Story',
      description:
        'Романтическая съемка для влюбленных пар. Передаём ваши чувства через красивые кадры в любимых местах или студии.',
      price: '8500',
      duration: '2 часа',
      includes: [
        'Локация на выбор',
        'Помощь с идеями',
        'Ретушь 25 фото',
        'Слайдшоу в подарок',
      ],
    },
  ];

  const serviceOptions = [
    'Портретная съемка',
    'Детские фотосессии',
    'Семейные фотосессии',
    'Свадебная съемка',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="pt-[72px]">
      {/* Hero Section */}
      <section className="relative h-[280px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1768064817487-e10b6844f219?w=1600)',
          }}
        ></div>
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, #1C1C1E 0%, transparent 100%)',
          }}
        ></div>

        <div className="relative z-10 text-center text-white">
          <h1 className="text-white mb-3" style={{ fontSize: '48px' }}>
            Услуги
          </h1>
          <p className="text-[#E0DDD8] text-sm" style={{ fontFamily: 'var(--font-body)' }}>
            <Link to="/" className="hover:text-white transition-colors no-underline text-[#E0DDD8]">
              Главная
            </Link>
            {' '}/{' '}Услуги
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <h2 className="text-center mb-16">Наши услуги</h2>
          <div className="grid grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="card transition-all duration-300 hover:shadow-xl"
              >
                <div className="mb-6">
                  <ServiceIcon type={service.iconType} />
                </div>
                <h3 className="mb-4">{service.title}</h3>
                <p className="mb-6 text-[var(--color-gray)] leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6 pb-6 border-b border-[var(--border)]">
                  <p
                    className="text-3xl mb-2"
                    style={{
                      color: 'var(--color-gold)',
                      fontWeight: 'var(--font-weight-bold)',
                    }}
                  >
                    от {service.price} ₽
                  </p>
                  <p className="text-sm text-[var(--color-gray)]">
                    Длительность: {service.duration}
                  </p>
                </div>

                <div className="mb-6">
                  <p className="font-medium mb-3">Что включено:</p>
                  <ul className="space-y-2">
                    {service.includes.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-[var(--color-gray)]"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mt-0.5 flex-shrink-0"
                        >
                          <path
                            d="M3 8L6.5 11.5L13 4.5"
                            stroke="#C9A84C"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to="/contacts">
                  <button className="btn btn-primary w-full">Записаться</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--color-gold)' }}>
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-2 gap-16 items-center">
            {/* Left Column - Text */}
            <div>
              <h2 className="text-white mb-6" style={{ fontSize: '36px' }}>
                Не нашли нужную услугу?
              </h2>
              <p className="text-white text-lg leading-relaxed">
                Оставьте заявку — мы свяжемся с вами и подберём вариант
              </p>
            </div>

            {/* Right Column - Form */}
            <div
              className="bg-white rounded-lg p-6"
              style={{
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block mb-2">Ваше имя</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2">Номер телефона</label>
                  <input
                    type="tel"
                    className="input"
                    placeholder="+7 (863) ___-__-__"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2">Выберите услугу</label>
                  <div className="relative">
                    <button
                      type="button"
                      className="input w-full flex items-center justify-between cursor-pointer"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      style={{
                        borderColor: isDropdownOpen
                          ? 'var(--color-gold)'
                          : 'var(--color-border)',
                      }}
                    >
                      <span
                        className={
                          formData.service ? '' : 'text-[var(--color-gray)]'
                        }
                      >
                        {formData.service || 'Выберите услугу'}
                      </span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          transform: isDropdownOpen
                            ? 'rotate(180deg)'
                            : 'rotate(0deg)',
                          transition: 'transform 0.2s',
                        }}
                      >
                        <path
                          d="M5 7.5L10 12.5L15 7.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    {isDropdownOpen && (
                      <div
                        className="absolute top-full left-0 right-0 mt-2 bg-white rounded border border-[var(--color-border)] shadow-lg z-10"
                        style={{
                          borderRadius: 'var(--radius-sm)',
                          boxShadow: 'var(--shadow-hover)',
                        }}
                      >
                        {serviceOptions.map((option, index) => (
                          <button
                            key={index}
                            type="button"
                            className="w-full text-left px-4 py-3 hover:bg-[var(--background)] transition-colors"
                            onClick={() => {
                              setFormData({ ...formData, service: option });
                              setIsDropdownOpen(false);
                            }}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn w-full"
                  style={{
                    backgroundColor: 'var(--color-charcoal)',
                    color: 'white',
                    border: 'none',
                    borderRadius: 'var(--radius-pill)',
                    padding: '12px 32px',
                  }}
                >
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
