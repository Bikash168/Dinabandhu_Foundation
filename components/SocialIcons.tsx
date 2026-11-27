'use client';

import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { SOCIAL_LINKS } from '@/data/foundationData';

interface SocialIconsProps {
  variant?: 'topbar' | 'footer' | 'drawer' | 'card';
  className?: string;
  showLabels?: boolean;
}

export default function SocialIcons({
  variant = 'footer',
  className = '',
  showLabels = false
}: SocialIconsProps) {
  const getIcon = (iconName: string, iconClassName: string) => {
    switch (iconName) {
      case 'Facebook':
        return <Facebook className={iconClassName} />;
      case 'Instagram':
        return <Instagram className={iconClassName} />;
      case 'Linkedin':
        return <Linkedin className={iconClassName} />;
      case 'Youtube':
        return <Youtube className={iconClassName} />;
      case 'Twitter':
      default:
        return <Twitter className={iconClassName} />;
    }
  };

  if (variant === 'topbar') {
    return (
      <div className={`flex items-center gap-1 sm:gap-2 ${className}`}>
        {SOCIAL_LINKS.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.ariaLabel}
            className="w-7 h-7 rounded-full bg-white/10 hover:bg-brand-800 text-cream-200 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm border border-white/10"
            title={`${item.name} - ${item.handle}`}
          >
            {getIcon(item.icon, 'w-3.5 h-3.5')}
          </a>
        ))}
      </div>
    );
  }

  if (variant === 'drawer') {
    return (
      <div className={`flex items-center justify-between gap-2 ${className}`}>
        {SOCIAL_LINKS.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.ariaLabel}
            className="flex-1 h-10 rounded-xl bg-white border border-cream-200 text-brand-900 hover:bg-brand-800 hover:text-cream-50 hover:border-brand-800 flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95"
            title={item.name}
          >
            {getIcon(item.icon, 'w-4 h-4')}
          </a>
        ))}
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 ${className}`}>
        {SOCIAL_LINKS.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.ariaLabel}
            className="flex items-center gap-3 p-3 bg-white hover:bg-cream-100/80 rounded-2xl border border-cream-200 hover:border-brand-700 shadow-sm hover:shadow-md transition-all duration-200 group"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-50 group-hover:bg-brand-800 text-brand-800 group-hover:text-cream-50 flex items-center justify-center transition-colors shadow-sm flex-shrink-0">
              {getIcon(item.icon, 'w-5 h-5')}
            </div>
            <div className="min-w-0 flex-1">
              <span className="font-bold text-xs sm:text-sm text-brand-950 block truncate group-hover:text-brand-800 transition-colors">
                {item.name}
              </span>
              <span className="text-[11px] text-cream-700 block truncate">
                {item.handle}
              </span>
            </div>
          </a>
        ))}
      </div>
    );
  }

  // Default: Footer variant
  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {SOCIAL_LINKS.map((item) => (
        <a
          key={item.name}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.ariaLabel}
          className="w-9 h-9 rounded-full bg-brand-900/90 hover:bg-brand-700 text-cream-200 hover:text-white border border-brand-800/80 hover:border-brand-500 flex items-center justify-center transition-all duration-200 shadow hover:shadow-lg hover:-translate-y-0.5"
          title={`${item.name} (${item.handle})`}
        >
          {getIcon(item.icon, 'w-4 h-4')}
          {showLabels && <span className="ml-2 text-xs font-medium">{item.name}</span>}
        </a>
      ))}
    </div>
  );
}
