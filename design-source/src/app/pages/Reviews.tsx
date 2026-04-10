import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router';

export function Reviews() {
  const reviews = [
    {
      name: 'Анна Петрова',
      avatar: 'https://i.pravatar.cc/100?img=1',
      rating: 5,
      date: '15 марта 2026',
      service: 'Портретная съемка',
      text: 'Потрясающая атмосфера и профессиональный подход! Фотографии превзошли все мои ожидания. Особенно понравилась работа с освещением и композицией. Фотограф нашел идеальные ракурсы и помог расслабиться перед камерой.',
    },
    {
      name: 'Дмитрий Соколов',
      avatar: 'https://i.pravatar.cc/100?img=12',
      rating: 5,
      date: '8 марта 2026',
      service: 'Семейная фотосессия',
      text: 'Заказывали семейную фотосессию. Фотограф нашел подход к детям, все прошло легко и весело. Результат - шикарные живые фотографии! Очень довольны качеством обработки и быстрой готовностью материала.',
    },
    {
      name: 'Елена Михайлова',
      avatar: 'https://i.pravatar.cc/100?img=5',
      rating: 5,
      date: '2 марта 2026',
      service: 'Корпоративные портреты',
      text: 'Делали корпоративные портреты для всей команды. Быстро, качественно, профессионально. Рекомендую для бизнес-съемок! Все сотрудники получили отличные фотографии в едином стиле.',
    },
    {
      name: 'Максим и Ольга',
      avatar: 'https://i.pravatar.cc/100?img=33',
      rating: 5,
      date: '25 февраля 2026',
      service: 'Свадебная съемка',
      text: 'Наша свадьба была самым важным днем в жизни, и мы очень рады, что доверили съемку именно этой студии. Два фотографа работали синхронно, не упустили ни одного важного момента. Фотокнига получилась просто волшебной!',
    },
    {
      name: 'Виктория Романова',
      avatar: 'https://i.pravatar.cc/100?img=9',
      rating: 5,
      date: '18 февраля 2026',
      service: 'Fashion съемка',
      text: 'Профессиональный подход на всех этапах! От разработки концепции до финальной ретуши. Команда стилистов отличная, результат превзошел ожидания. Буду обращаться еще!',
    },
    {
      name: 'Сергей Волков',
      avatar: 'https://i.pravatar.cc/100?img=14',
      rating: 5,
      date: '10 февраля 2026',
      service: 'Портретная съемка',
      text: 'Первый раз фотографировался в студии и немного волновался. Фотограф создал комфортную атмосферу, подсказывал как позировать. Получились отличные фото для соцсетей и резюме!',
    },
    {
      name: 'Мария Ковалева',
      avatar: 'https://i.pravatar.cc/100?img=20',
      rating: 5,
      date: '3 февраля 2026',
      service: 'Фотосессия беременности',
      text: 'Нежные, трогательные фотографии в ожидании малыша. Фотограф очень деликатно работал, помог выбрать позы, в которых я чувствовала себя красивой. Эти снимки навсегда останутся в нашей семье!',
    },
    {
      name: 'Алексей Морозов',
      avatar: 'https://i.pravatar.cc/100?img=15',
      rating: 5,
      date: '28 января 2026',
      service: 'Творческий проект',
      text: 'Реализовали совместно необычный арт-проект. Креативность, нестандартный подход и высочайшее качество исполнения. Рекомендую всем, кто ищет что-то большее, чем обычные фото!',
    },
    {
      name: 'Наталья Белова',
      avatar: 'https://i.pravatar.cc/100?img=25',
      rating: 5,
      date: '20 января 2026',
      service: 'Детская фотосессия',
      text: 'Фотограф превратил съемку в увлекательную игру! Сын совершенно не стеснялся камеры. Получились живые, эмоциональные кадры. Спасибо за терпение и профессионализм!',
    },
    {
      name: 'Игорь и Анастасия',
      avatar: 'https://i.pravatar.cc/100?img=35',
      rating: 5,
      date: '12 января 2026',
      service: 'Love Story',
      text: 'Романтичная съемка в парке получилась просто волшебной! Фотограф помог с идеями, подобрал красивые локации. Слайдшоу с музыкой - отдельное спасибо, смотрим и пересматриваем!',
    },
  ];

  const stats = [
    { number: '500+', label: 'Довольных клиентов' },
    { number: '1200+', label: 'Проведенных съемок' },
    { number: '4.9', label: 'Средний рейтинг' },
    { number: '10+', label: 'Лет опыта' },
  ];

  return (
    <div className="pt-[72px]">
      {/* Hero Section */}
      <section className="relative h-[280px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1758474090815-c6cf52eb154f?w=1600)',
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
            Отзывы клиентов
          </h1>
          <p className="text-[#E0DDD8] text-sm" style={{ fontFamily: 'var(--font-body)' }}>
            <Link to="/" className="hover:text-white transition-colors no-underline text-[#E0DDD8]">
              Главная
            </Link>
            {' / '}Отзывы
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p
                  className="text-5xl mb-3"
                  style={{
                    color: 'var(--color-gold)',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 'var(--font-weight-bold)',
                  }}
                >
                  {stat.number}
                </p>
                <p className="text-[var(--color-gray)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-[var(--background)]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="card">
                <div className="flex items-start gap-4 mb-6">
                  <ImageWithFallback
                    src={review.avatar}
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <p className="font-medium mb-1">{review.name}</p>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex gap-1 text-[var(--color-gold)]">
                        {[...Array(review.rating)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                      <span className="text-sm text-[var(--color-gray)]">
                        {review.date}
                      </span>
                    </div>
                    <p
                      className="text-sm px-3 py-1 rounded-full inline-block"
                      style={{
                        backgroundColor: 'var(--color-gold)/10',
                        color: 'var(--color-gold)',
                      }}
                    >
                      {review.service}
                    </p>
                  </div>
                </div>
                <p className="text-[var(--color-gray)] leading-relaxed">
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24" style={{ backgroundColor: 'var(--color-gold)' }}>
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <h2 className="text-white mb-4" style={{ fontSize: '36px' }}>
            Станьте частью наших довольных клиентов
          </h2>
          <p className="text-white text-lg mb-8" style={{ fontFamily: 'var(--font-body)' }}>
            Запишитесь на фотосессию и убедитесь в качестве наших услуг лично
          </p>
          <button
            className="transition-all duration-300 hover:bg-white hover:text-[var(--color-gold)]"
            style={{
              border: '2px solid white',
              color: 'white',
              borderRadius: '24px',
              padding: '14px 48px',
              backgroundColor: 'transparent',
              fontWeight: 'var(--font-weight-medium)',
            }}
          >
            Оставить заявку
          </button>
        </div>
      </section>
    </div>
  );
}