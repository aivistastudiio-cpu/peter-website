import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = '',
  href,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-3 gap-2',
    lg: 'text-base px-8 py-4 gap-2.5 font-semibold',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-sky-400 via-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-sky-400/40 hover:scale-[1.02] border border-sky-300/30',
    secondary:
      'bg-studio-surface text-slate-200 border border-white/10 hover:bg-studio-elevated hover:text-white hover:border-sky-400/30 shadow-sm',
    outline:
      'bg-white/5 backdrop-blur-md text-white border border-white/15 hover:bg-white/10 hover:border-sky-400/40',
    ghost:
      'text-slate-400 hover:text-white hover:bg-white/5',
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedStyles}>
        {icon && <span className="shrink-0">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </button>
  );
};

