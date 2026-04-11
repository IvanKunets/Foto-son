import { useState } from 'react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Search } from 'lucide-react';

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'Все работы' },
    { id: 'portrait', label: 'Портреты' },
    { id: 'children', label: 'Дети' },
    { id: 'family', label: 'Семья' },
    { id: 'wedding', label: 'Свадьбы' },
    { id: 'document', label: 'Документы' },
  ];

  const photos = [
    // Row 1: portrait, landscape, portrait
    {
      src: 'https://images.unsplash.com/photo-1746733706320-bc3b55dfcd57?w=800',
      category: 'portrait',
      orientation: 'portrait' as const,
      title: 'Студийный портрет',
    },
    {
      src: 'https://images.unsplash.com/photo-1616745958899-b01511e7a7e5?w=800',
      category: 'family',
      orientation: 'landscape' as const,
      title: 'Семейная фотосессия',
    },
    {
      src: 'https://images.unsplash.com/photo-1699903905361-4d408679753f?w=800',
      category: 'children',
      orientation: 'portrait' as const,
      title: 'Детский портрет',
    },
    // Row 2: landscape, portrait, landscape
    {
      src: 'https://images.unsplash.com/photo-1655640061626-c1b0e4f81b1f?w=800',
      category: 'portrait',
      orientation: 'landscape' as const,
      title: 'Пара',
    },
    {
      src: 'https://images.unsplash.com/photo-1554765345-6ad6a5417cde?w=800',
      category: 'portrait',
      orientation: 'portrait' as const,
      title: 'Деловой портрет',
    },
    {
      src: 'https://images.unsplash.com/photo-1556953291-e4b3cf7a8973?w=800',
      category: 'wedding',
      orientation: 'landscape' as const,
      title: 'Детали свадьбы',
    },
    // Row 3: portrait, landscape, portrait
    {
      src: 'https://images.unsplash.com/photo-1769636929388-99eff95d3bf1?w=800',
      category: 'document',
      orientation: 'portrait' as const,
      title: 'Корпоративный портрет',
    },
    {
      src: 'https://images.unsplash.com/photo-1706007913871-d6364b8d685c?w=800',
      category: 'family',
      orientation: 'landscape' as const,
      title: 'Мама и дочь',
    },
    {
      src: 'https://images.unsplash.com/photo-1706471406001-cb671b29cc7f?w=800',
      category: 'wedding',
      orientation: 'portrait' as const,
      title: 'Свадебная съемка',
    },
    // Row 4: landscape, portrait, landscape
    {
      src: 'https://images.unsplash.com/photo-1665578331760-3b05f5ba2bfd?w=800',
      category: 'children',
      orientation: 'landscape' as const,
      title: 'Новорожденный',
    },
    {
      src: 'https://images.unsplash.com/photo-1772178957104-c8be1b99b84a?w=800',
      category: 'family',
      orientation: 'portrait' as const,
      title: 'Семья на природе',
    },
    {
      src: 'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?w=800',
      category: 'portrait',
      orientation: 'landscape' as const,
      title: 'Женский портрет',
    },
  ];

  const filteredPhotos =
    activeFilter === 'all'
      ? photos
      : photos.filter((photo) => photo.category === activeFilter);

  return (
    <div className="pt-[60px] md:pt-[72px]" style={{ backgroundColor: 'var(--color-offwhite)' }}>
      {/* Hero Section */}
      <section className="relative h-[200px] md:h-[280px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1627890458144-4c0c481bf4b8?w=1600)',
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
            Галерея работ
          </h1>
          <p className="text-[#E0DDD8] text-xs md:text-sm" style={{ fontFamily: 'var(--font-body)' }}>
            <Link to="/" className="hover:text-white transition-colors no-underline text-[#E0DDD8]">
              Главная
            </Link>
            {' / '}Галерея
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-6 md:py-12">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex gap-2 md:gap-3 md:justify-center md:flex-wrap overflow-x-auto pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 md:px-6 py-2 md:py-3 transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                  activeFilter === filter.id
                    ? 'bg-[var(--color-gold)] text-white border-[var(--color-gold)]'
                    : 'bg-white text-[#6B6B6B] border-[#E0DDD8] hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]'
                }`}
                style={{
                  borderRadius: '24px',
                  border: '1.5px solid',
                  fontWeight: 'var(--font-weight-medium)',
                  fontSize: '14px',
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="pb-8 md:pb-12">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {filteredPhotos.map((photo, index) => (
              <div
                key={index}
                className="group relative overflow-hidden cursor-pointer"
                style={{
                  borderRadius: '8px',
                  aspectRatio: photo.orientation === 'portrait' ? '3/4' : '4/3',
                }}
              >
                <ImageWithFallback
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Search className="text-white" size={24} />
                </div>
              </div>
            ))}
          </div>

          {filteredPhotos.length === 0 && (
            <div className="text-center py-12 md:py-20">
              <p className="text-base md:text-xl text-[var(--color-gray)]">
                Фотографии в этой категории скоро появятся
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Load More Button */}
      <section className="pb-8 md:pb-12">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center">
          <button
            className="transition-all duration-300 hover:bg-[var(--color-gold)] hover:text-white w-full md:w-auto"
            style={{
              border: '1.5px solid var(--color-gold)',
              color: 'var(--color-gold)',
              borderRadius: '24px',
              padding: '12px 32px',
              backgroundColor: 'transparent',
              fontWeight: 'var(--font-weight-medium)',
              fontSize: '14px',
            }}
          >
            Загрузить ещё
          </button>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 md:py-24" style={{ backgroundColor: 'var(--color-gold)' }}>
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center">
          <h2 className="text-white mb-3 md:mb-4 text-[28px] md:text-[48px]">
            Хотите такие же фотографии?
          </h2>
          <p className="text-white text-base md:text-lg mb-6 md:mb-8" style={{ fontFamily: 'var(--font-body)' }}>Запишитесь на съемку прямо сейчас</p>
          <Link to="/contacts" className="block md:inline-block">
          <button
            className="btn text-base md:text-lg w-full md:w-auto"
            style={{
              backgroundColor: 'white',
              border: 'none',
              color: 'var(--color-charcoal)',
              padding: '12px 32px',
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