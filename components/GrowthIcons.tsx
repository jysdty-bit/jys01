import React from 'react';

export const EarthIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.41 3.59-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9A7.952 7.952 0 014 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1A7.952 7.952 0 0120 12c0 4.41-3.59 8-8 8z" />
  </svg>
);

export const TreeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="42" y="60" width="16" height="40" rx="4" fill="currentColor" />
        <circle cx="50" cy="40" r="35" fill="currentColor" />
    </svg>
);

export const SaplingIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="46" y="65" width="8" height="35" rx="4" fill="currentColor" />
        <circle cx="50" cy="50" r="25" fill="currentColor" />
    </svg>
);

export const SproutIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 90 C 50 70, 60 70, 60 60 C 60 50, 70 50, 80 40" stroke="currentColor" fill="none" strokeWidth="8" strokeLinecap="round" />
        <path d="M60 60 C 55 50, 45 55, 40 45" stroke="currentColor" fill="none" strokeWidth="8" strokeLinecap="round" />
    </svg>
);

export const SeedIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="88" width="80" height="8" rx="4" fill="currentColor" opacity="0.5"/>
        <ellipse cx="50" cy="85" rx="15" ry="10" fill="currentColor" />
    </svg>
);
