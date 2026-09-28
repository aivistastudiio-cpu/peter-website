import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'blue' | 'slate' | 'glow';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  className = '',
  icon,
}) => {
  const baseStyles =
    'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide transition-colors';

  const variantStyles = {
    cyan: 'bg-sky-500/10 text-sky-400 border border-sky-500/20',
    blue: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
    slate: 'bg-slate-800/80 text-slate-300 border border-slate-700/60',
    glow: 'bg-sky-400/15 text-sky-300 border border-sky-400/40 shadow-sm shadow-sky-500/20 animate-pulse-slow',
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
};

