import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

export const SparklesIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 3-1.9 5.8-5.8 1.9 5.8 1.9L12 18l1.9-5.8 5.8-1.9-5.8-1.9L12 3zM5 3l3.8 3.8M2 14l6-2M19 21l-3.8-3.8M16 2l2 6"/></svg>
);

export const SunIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
);

export const MoonIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
);

export const StarIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);

export const ZapIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);

export const AwardIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
);

export const BotIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="5" y="7" width="14" height="12" rx="4" />
        <circle cx="9.5" cy="12" r="1.5" fill="currentColor" strokeWidth="0" />
        <circle cx="14.5" cy="12" r="1.5" fill="currentColor" strokeWidth="0" />
        <path d="M12 7V4" />
        <circle cx="12" cy="3" r="1" fill="currentColor" strokeWidth="0" />
        <path d="M9.5 15.5a3 3 0 0 0 5 0" />
    </svg>
);


export const SendIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m3 3 3 9-3 9 19-9Z"/>
    <path d="m6 12h16"/>
  </svg>
);

export const UserIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
);

// User Avatars (Cute Kawaii Style)
export const Avatar1Icon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="50" cy="50" r="50" fill="#ffc8dd"/>
    <circle cx="35" cy="45" r="5" fill="#2c2c2c"/>
    <circle cx="65" cy="45" r="5" fill="#2c2c2c"/>
    <path d="M40 65C40 60 45 60 50 60C55 60 60 60 60 65" stroke="#2c2c2c" strokeWidth="4" strokeLinecap="round"/>
    <ellipse cx="28" cy="55" rx="8" ry="5" fill="#ffafcc" transform="rotate(-15 28 55)"/>
    <ellipse cx="72" cy="55" rx="8" ry="5" fill="#ffafcc" transform="rotate(15 72 55)"/>
  </svg>
);

export const Avatar2Icon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="50" cy="50" r="50" fill="#d0eaff"/>
    <path d="M30 42C30 39 33 39 35 39C37 39 40 39 40 42" stroke="#2c2c2c" strokeWidth="4" strokeLinecap="round"/>
    <path d="M60 42C60 39 63 39 65 39C67 39 70 39 70 42" stroke="#2c2c2c" strokeWidth="4" strokeLinecap="round"/>
    <path d="M45 60H55" stroke="#2c2c2c" strokeWidth="4" strokeLinecap="round"/>
    <ellipse cx="28" cy="55" rx="8" ry="5" fill="#bde0fe" transform="rotate(-15 28 55)"/>
    <ellipse cx="72" cy="55" rx="8" ry="5" fill="#bde0fe" transform="rotate(15 72 55)"/>
  </svg>
);

export const Avatar3Icon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="50" cy="50" r="50" fill="#cdffcd"/>
    <circle cx="35" cy="45" r="3" fill="#2c2c2c"/>
    <circle cx="65" cy="45" r="3" fill="#2c2c2c"/>
    <path d="M40 60C45 68 55 68 60 60" stroke="#2c2c2c" strokeWidth="4" strokeLinecap="round"/>
    <ellipse cx="28" cy="55" rx="8" ry="5" fill="#aaffaa" transform="rotate(-15 28 55)"/>
    <ellipse cx="72" cy="55" rx="8" ry="5" fill="#aaffaa" transform="rotate(15 72 55)"/>
    <path d="M48 35L52 35" stroke="#2c2c2c" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export const Avatar4Icon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="50" cy="50" r="50" fill="#fff4d6"/>
    <path d="M32 50C32 47 34 45 37 45C40 45 42 47 42 50" fill="#2c2c2c"/>
    <path d="M58 50C58 47 60 45 63 45C66 45 68 47 68 50" fill="#2c2c2c"/>
    <path d="M45 65C50 62 50 62 55 65" stroke="#2c2c2c" strokeWidth="4" strokeLinecap="round"/>
    <ellipse cx="28" cy="60" rx="8" ry="5" fill="#ffe8b0" transform="rotate(-15 28 60)"/>
    <ellipse cx="72" cy="60" rx="8" ry="5" fill="#ffe8b0" transform="rotate(15 72 60)"/>
  </svg>
);


// Achievement Icons
export const RocketIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.05-3.1S5.21 15.66 4.5 16.5z"/><path d="M7.5 12.5c0-1.5-2-5-2-5s5 2 5 2c.84.71 2.3.7 3.1-.05s.9-2.39.05-3.1c-1.26-1.5-5-2-5-2s2 5 2 5"/><path d="M12.5 7.5c1.5 0 5-2 5-2s-2 5-2 5c-.71.84-.7 2.3.05 3.1s2.39.9 3.1.05c1.26-1.5 2-5 2-5s-5 2-5 2"/><path d="m21.5 21.5-6.9-6.9"/></svg>
);

export const CompassIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 -10.24 14.24 7.76 16.24 14.24 7.76"/></svg>
);

export const Globe2Icon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"/><path d="M7 3.34V5a2 2 0 0 0 2 2h2.5"/><path d="M3 15h2a2 2 0 0 1 2 2v2.66"/><path d="M12 21.94V19a2 2 0 0 0-2-2H7.5"/><circle cx="12" cy="12" r="10"/></svg>
);

export const BrainCircuitIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 2a2.5 2.5 0 0 1 2.5 2.5v.01a2.5 2.5 0 0 1-2.5 2.5h-1a2.5 2.5 0 0 0-2.5 2.5V9.5A2.5 2.5 0 0 1 6 12a2.5 2.5 0 0 0-2.5 2.5v.01a2.5 2.5 0 0 0 2.5 2.5h1a2.5 2.5 0 0 1 2.5 2.5v.01a2.5 2.5 0 0 1-2.5 2.5"/><path d="M12 2a2.5 2.5 0 0 0-2.5 2.5v.01a2.5 2.5 0 0 0 2.5 2.5h1a2.5 2.5 0 0 1 2.5 2.5V9.5A2.5 2.5 0 0 0 18 12a2.5 2.5 0 0 1 2.5 2.5v.01a2.5 2.5 0 0 1-2.5 2.5h-1a2.5 2.5 0 0 0-2.5 2.5v.01a2.5 2.5 0 0 0 2.5 2.5"/><path d="M12 11v2"/><path d="M12 18v2"/><path d="M12 4V2"/></svg>
);

export const FlameIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
);