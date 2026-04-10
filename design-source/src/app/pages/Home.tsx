import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ServiceIcon } from '../components/ServiceIcon';

export function Home() {
  const services = [
    {
      iconType: 'portrait' as const,
      title: 'Портретная съемка',
      description: 'Профессиональные портреты в студии или на локации',
      price: '5000',
    },
    {
      iconType: 'wedding' as const,
      title: 'Свадебная съемка',
      description: 'Полное сопровождение вашего важного дня',
      price: '25000',
    },
    {
      iconType: 'family' as const,
      title: 'Семейные фотосессии',
      description: 'Запечатлейте особенные моменты с близкими',
      price: '7000',
    },
    {
      iconType: 'fashion' as const,
      title: 'Fashion съемка',
      description: 'Креативные съемки для моделей и брендов',
      price: '15000',
    },
    {
      iconType: 'corporate' as const,
      title: 'Корпоративные портреты',
      description: 'Деловые фотосессии для команды и личного бренда',
      price: '8000',
    },
    {
      iconType: 'creative' as const,
      title: 'Творческие проекты',
      description: 'Реализация уникальных художественных концепций',
      price: '12000',
    },
  ];

  const galleryPhotos = [
    'https://images.unsplash.com/photo-1532272278764-53cd1fe53f72?w=600',
    'https://images.unsplash.com/photo-1684919556999-a42d37ffccc1?w=600',
    'https://images.unsplash.com/photo-1659303388060-c11a6b055397?w=600',
    'https://images.unsplash.com/photo-1659303388076-de1535159d6c?w=600',
    'https://images.unsplash.com/photo-1659303388050-6340719de9d4?w=600',
    'https://images.unsplash.com/photo-1600366249664-acd65e33e5d2?w=600',
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      avatar: 'https://i.pravatar.cc/100?img=1',
      rating: 5,
      text: 'Потрясающая атмосфера и профессиональный подход! Фотографии превзошли все мои ожидания. Особенно понравилась работа с освещением.',
    },
    {
      name: 'Дмитрий Соколов',
      avatar: 'https://i.pravatar.cc/100?img=12',
      rating: 5,
      text: 'Заказывали семейную фотосессию. Фотограф нашел подход к детям, все прошло легко и весело. Результат - шикарные живые фотографии!',
    },
    {
      name: 'Елена Михайлова',
      avatar: 'https://i.pravatar.cc/100?img=5',
      rating: 5,
      text: 'Делали корпоративные портреты для всей команды. Быстро, качественно, профессионально. Рекомендую для бизнес-съемок!',
    },
  ];

  return (
    <div className="pt-[72px]">
      {/* HERO Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1759853900057-bd622dd45028?w=1600)',
          }}
        ></div>
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)',
          }}
        ></div>

        <div className="relative z-10 text-center text-white max-w-4xl px-8">
          <h1 className="text-white mb-6" style={{ fontSize: '64px' }}>
            Ваши моменты — наше искусство
          </h1>
          <p
            className="text-white/90 mb-12 text-xl leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >Профессиональная фотостудия в Ростове-на-Дону. Создаём уникальные образы и сохраняем важные моменты вашей жизни.</p>
          <div className="flex gap-4 justify-center">
            <Link to="/services">
              <button className="btn btn-primary text-lg px-10 py-4">
                Смотреть услуги
              </button>
            </Link>
            <Link to="/gallery">
              <button
                className="btn text-lg px-10 py-4"
                style={{
                  backgroundColor: 'transparent',
                  color: 'white',
                  border: '2px solid white',
                }}
              >
                Наши работы
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT Section */}
      <section className="py-24 bg-[var(--background)]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="mb-6">О нас</h2>
              <p className="mb-6 leading-relaxed text-lg">
                Фото-сон — это команда профессиональных фотографов с более чем
                10-летним опытом работы. Мы специализируемся на создании
                высококачественных фотографий, которые передают эмоции и
                рассказывают истории.
              </p>
              <p className="mb-6 leading-relaxed text-lg">
                Наша студия оснащена современным оборудованием, а
                индивидуальный подход к каждому клиенту гарантирует
                уникальный результат, который превосходит ожидания.
              </p>
              <p className="mb-10 leading-relaxed text-lg">
                Мы создаём не просто фотографии — мы создаём воспоминания,
                которые останутся с вами навсегда.
              </p>

              {/* Icon Row */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div
                    className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center"
                    style={{ backgroundColor: '#FDF6E3' }}
                  >
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L23.09 15.26L33 16.27L26.5 22.27L28.18 32.02L20 27.27L11.82 32.02L13.5 22.27L7 16.27L16.91 15.26L20 6Z" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="font-medium">10+ лет опыта</p>
                </div>
                <div className="text-center">
                  <div
                    className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center"
                    style={{ backgroundColor: '#FDF6E3' }}
                  >
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="6" y="10" width="28" height="20" rx="2" stroke="#C9A84C" strokeWidth="2"/>
                      <circle cx="20" cy="20" r="5" stroke="#C9A84C" strokeWidth="2"/>
                      <path d="M13 10V7C13 6.44772 13.4477 6 14 6H26C26.5523 6 27 6.44772 27 7V10" stroke="#C9A84C" strokeWidth="2"/>
                    </svg>
                  </div>
                  <p className="font-medium">Высокое качество</p>
                </div>
                <div className="text-center">
                  <div
                    className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center"
                    style={{ backgroundColor: '#FDF6E3' }}
                  >
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4L24 14L34 16L27 23L29 33L20 28L11 33L13 23L6 16L16 14L20 4Z" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="20" cy="20" r="4" stroke="#C9A84C" strokeWidth="2"/>
                    </svg>
                  </div>
                  <p className="font-medium">Индивидуальный подход</p>
                </div>
              </div>
            </div>

            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1744686909358-915e14866592?w=800"
                alt="Photographer working"
                className="w-full h-[600px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <h2 className="text-center mb-16">Наши услуги</h2>
          <div className="grid grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="card transition-all duration-300 hover:shadow-xl group cursor-pointer"
              >
                <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                  <ServiceIcon type={service.iconType} />
                </div>
                <h3 className="mb-4">{service.title}</h3>
                <p className="mb-6 text-[var(--color-gray)]">
                  {service.description}
                </p>
                <p
                  className="text-xl mb-6"
                  style={{
                    color: 'var(--color-gold)',
                    fontWeight: 'var(--font-weight-medium)',
                  }}
                >
                  от {service.price} ₽
                </p>
                <Link
                  to="/services"
                  className="text-[var(--color-gold)] hover:underline no-underline font-medium"
                >
                  Подробнее →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/services">
              <button className="btn btn-primary">Все услуги</button>
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW Section */}
      <section className="py-24 bg-[var(--background)]">
        <div className="max-w-[1440px] mx-auto px-8">
          <h2 className="text-center mb-16">Примеры работ</h2>
          <div className="grid grid-cols-3 gap-6 mb-12">
            {galleryPhotos.map((photo, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg group cursor-pointer"
                style={{ aspectRatio: '4/5' }}
              >
                <ImageWithFallback
                  src={photo}
                  alt={`Gallery photo ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/gallery">
              <button className="btn btn-secondary">Смотреть все работы</button>
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <h2 className="text-center mb-16">Отзывы клиентов</h2>
          <div className="grid grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="card">
                <div className="flex items-center gap-4 mb-6">
                  <ImageWithFallback
                    src={review.avatar}
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium mb-1">{review.name}</p>
                    <div className="flex gap-1 text-[var(--color-gold)]">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[var(--color-gray)] leading-relaxed">
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/reviews">
              <button className="btn btn-ghost">Все отзывы</button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER Section */}
      <section
        className="py-24"
        style={{ backgroundColor: 'var(--color-gold)' }}
      >
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <h2 className="text-white mb-6" style={{ fontSize: '48px' }}>
            Запишитесь прямо сейчас
          </h2>
          <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">
            Забронируйте свою фотосессию сегодня и получите скидку 10% на
            первый заказ
          </p>
          <Link to="/contacts">
            <button
              className="btn text-lg px-12 py-4"
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
