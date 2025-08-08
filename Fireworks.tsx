import React from 'react';

type FireworkType = 'burst' | 'glitter'; // Focused on two distinct, impactful explosion types

// Represents a single firework explosion
const FireworkInstance: React.FC<{ style: React.CSSProperties, type: FireworkType }> = ({ style, type }) => {
    // Increased particle count for a fuller explosion
    const particleCount = type === 'glitter' ? 80 : 60;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
        const particleStyle: React.CSSProperties & { [key: string]: any } = {
            '--delay': `${Math.random() * 0.3}s`,
            // Longer, more varied duration for a lingering effect
            '--duration': `${1.8 + Math.random() * 1.2}s`, 
        };

        switch (type) {
            case 'glitter':
                particleStyle['--angle'] = `${Math.random() * 360}deg`;
                // Glitter doesn't spread as wide but falls more
                particleStyle['--distance'] = `${80 + Math.random() * 100}px`; 
                particleStyle['--animation-name'] = 'glitter-fall';
                break;
            case 'burst':
            default:
                particleStyle['--angle'] = `${Math.random() * 360}deg`;
                // Significantly larger spread for the main burst to create a huge explosion
                particleStyle['--distance'] = `${120 + Math.random() * 130}px`; 
                particleStyle['--animation-name'] = 'explode';
                break;
        }
        
        particles.push(<div key={i} className="particle" style={particleStyle} />);
    }

    return (
        <div className="firework" style={style}>
            {particles}
        </div>
    );
};

// Main component to orchestrate the fireworks display
export const Fireworks: React.FC = () => {
    const fireworkCount = 45; 
    const fireworkTypes: FireworkType[] = ['burst', 'glitter'];

    const fireworks = Array.from({ length: fireworkCount }).map((_, i) => {
        const type = fireworkTypes[i % fireworkTypes.length]; // Alternate between burst and glitter
        const style = {
            left: `${Math.random() * 95 + 2.5}%`,
            top: `${Math.random() * 40 + 15}%`, // Explode higher up on the screen
            '--hue': `${Math.random() * 360}`,
            // Stagger the launch times and use ease-out for a more natural launch
            animation: `shoot 1.2s ${Math.random() * 3.8}s ease-out forwards`,
        } as React.CSSProperties;

        return <FireworkInstance key={i} style={style} type={type} />;
    });

    return <div className="fireworks-container">{fireworks}</div>;
};
