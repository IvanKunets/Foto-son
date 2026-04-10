interface ServiceIconProps {
  type: 'portrait' | 'wedding' | 'family' | 'fashion' | 'corporate' | 'creative' | 'pregnancy' | 'children' | 'lovestory';
  className?: string;
}

export function ServiceIcon({ type, className = '' }: ServiceIconProps) {
  const icons = {
    portrait: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="12" r="6" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
        <path d="M10 32C10 26.4772 14.4772 22 20 22C25.5228 22 30 26.4772 30 32" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    wedding: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="6" stroke="#C9A84C" strokeWidth="2"/>
        <circle cx="26" cy="14" r="6" stroke="#C9A84C" strokeWidth="2"/>
        <path d="M14 20L20 32L26 20" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    family: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="10" r="4" stroke="#C9A84C" strokeWidth="2"/>
        <circle cx="28" cy="10" r="4" stroke="#C9A84C" strokeWidth="2"/>
        <circle cx="20" cy="22" r="3" stroke="#C9A84C" strokeWidth="2"/>
        <path d="M6 28C6 24.6863 8.68629 22 12 22C15.3137 22 18 24.6863 18 28" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
        <path d="M22 28C22 24.6863 24.6863 22 28 22C31.3137 22 34 24.6863 34 28" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 34C16 32.3431 17.3431 31 19 31H21C22.6569 31 24 32.3431 24 34" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    fashion: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 8L13 14H27L25 8" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 14V34C13 35.1046 13.8954 36 15 36H25C26.1046 36 27 35.1046 27 34V14" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 8C15 6.34315 16.3431 5 18 5H22C23.6569 5 25 6.34315 25 8" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    corporate: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="12" width="24" height="22" rx="2" stroke="#C9A84C" strokeWidth="2"/>
        <path d="M14 12V10C14 8.89543 14.8954 8 16 8H24C25.1046 8 26 8.89543 26 10V12" stroke="#C9A84C" strokeWidth="2"/>
        <path d="M20 20V24" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="20" cy="27" r="1.5" fill="#C9A84C"/>
      </svg>
    ),
    creative: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 32C12 32 10 30 10 26C10 22 12 20 12 20" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="20" cy="20" r="8" stroke="#C9A84C" strokeWidth="2"/>
        <path d="M20 12V8M20 32V28M28 20H32M8 20H12" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
        <path d="M25.66 14.34L28.49 11.51M11.51 28.49L14.34 25.66M25.66 25.66L28.49 28.49M11.51 11.51L14.34 14.34" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    pregnancy: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="10" r="4" stroke="#C9A84C" strokeWidth="2"/>
        <path d="M14 18C14 16.8954 14.8954 16 16 16H24C25.1046 16 26 16.8954 26 18V28C26 30.2091 24.2091 32 22 32H18C15.7909 32 14 30.2091 14 28V18Z" stroke="#C9A84C" strokeWidth="2"/>
        <circle cx="22" cy="24" r="4" stroke="#C9A84C" strokeWidth="2"/>
      </svg>
    ),
    children: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="12" r="5" stroke="#C9A84C" strokeWidth="2"/>
        <path d="M12 34V26C12 23.7909 13.7909 22 16 22H24C26.2091 22 28 23.7909 28 26V34" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 22V16" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14 28L10 24M26 28L30 24" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    lovestory: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 34L6 20C3.79086 17.7909 3.79086 14.2091 6 12C8.20914 9.79086 11.7909 9.79086 14 12L20 18L26 12C28.2091 9.79086 31.7909 9.79086 34 12C36.2091 14.2091 36.2091 17.7909 34 20L20 34Z" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  };

  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{
        width: '64px',
        height: '64px',
        borderRadius: '50%',
        backgroundColor: '#FDF6E3',
      }}
    >
      {icons[type]}
    </div>
  );
}
