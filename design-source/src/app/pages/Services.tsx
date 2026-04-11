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
    <div className="pt-[60px] md:pt-[72px]">
      {/* Hero Section */}
      <section className="relative h-[200px] md:h-[280px] flex items-center justify-center overflow-hidden">
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

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-white mb-2 md:mb-3 text-[36px] md:text-[48px]">
            Услуги
          </h1>
          <p className="text-[#E0DDD8] text-xs md:text-sm" style={{ fontFamily: 'var(--font-body)' }}>
            <Link to="/" className="hover:text-white transition-colors no-underline text-[#E0DDD8]">
              Главная
            </Link>
            {' '}/{' '}Услуги
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <h2 className="text-center mb-8 md:mb-16 text-[32px] md:text-[36px]">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="card transition-all duration-300 hover:shadow-xl"
              >
                <div className="mb-4 md:mb-6">
                  <ServiceIcon type={service.iconType} />
                </div>
                <h3 className="mb-3 md:mb-4 text-[20px] md:text-[24px]">{service.title}</h3>
                <p className="mb-4 md:mb-6 text-[var(--color-gray)] leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>

                <div className="mb-4 md:mb-6 pb-4 md:pb-6 border-b border-[var(--border)]">
                  <p
                    className="text-2xl md:text-3xl mb-1 md:mb-2"
                    style={{
                      color: 'var(--color-gold)',
                      fontWeight: 'var(--font-weight-bold)',
                    }}
                  >
                    от {service.price} ₽
                  </p>
                  <p className="text-xs md:text-sm text-[var(--color-gray)]">
                    Длительность: {service.duration}
                  </p>
                </div>

                <div className="mb-4 md:mb-6">
                  <p className="font-medium mb-2 md:mb-3 text-sm md:text-base">Что включено:</p>
                  <ul className="space-y-1.5 md:space-y-2">
                    {service.includes.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs md:text-sm text-[var(--color-gray)]"
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

                <Link to="/contacts" className="block">
                  <button className="btn btn-primary w-full">Записаться</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form Section */}
      <section
        className="py-12 md:py-24"
        style={{ backgroundColor: 'var(--color-gold)' }}
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center">
          <h2 className="text-white mb-3 md:mb-4 text-[28px] md:text-[48px]">
            Не нашли нужную услугу?
          </h2>
          <p className="text-white text-base md:text-lg mb-6 md:mb-8" style={{ fontFamily: 'var(--font-body)' }}>
            Оставьте заявку — мы свяжемся с вами и подберём вариант
          </p>
          <Link to="/contacts" className="block md:inline-block">
            <button
              className="btn text-base md:text-lg px-8 md:px-12 py-3 md:py-4 w-full md:w-auto"
              style={{
                backgroundColor: 'white',
                color: 'var(--color-charcoal)',
                border: 'none',
              }}
            >
              Оставить заявку
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
