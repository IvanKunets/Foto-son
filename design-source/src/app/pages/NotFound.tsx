import { Link } from 'react-router';

export function NotFound() {
  return (
    <div className="min-h-screen pt-[72px] flex items-center justify-center bg-[var(--background)]">
      <div className="text-center px-8">
        <h1 className="mb-6" style={{ fontSize: '96px' }}>404</h1>
        <h2 className="mb-6">Страница не найдена</h2>
        <p className="text-xl text-[var(--color-gray)] mb-10 max-w-md mx-auto">
          К сожалению, запрашиваемая страница не существует или была удалена
        </p>
        <Link to="/">
          <button className="btn btn-primary text-lg px-10 py-4">
            Вернуться на главную
          </button>
        </Link>
      </div>
    </div>
  );
}
