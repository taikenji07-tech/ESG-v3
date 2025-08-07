import React from 'react';

// Represents a single firework explosion
const FireworkInstance: React.FC<{ style: React.CSSProperties }> = ({ style }) => {
    const particleCount = 50 + Math.floor(Math.random() * 20); // 50-70 particles for a full burst
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
        const particleStyle = {
            '--angle': `${(360 / particleCount) * i}deg`,
            '--distance': `${60 + Math.random() * 40}px`, // Explosion radius from 60px to 100px
            '--delay': `${Math.random() * 0.15}s`,
        } as React.CSSProperties;
        
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
    const fireworkCount = 25;

    const fireworks = Array.from({ length: fireworkCount }).map((_, i) => {
        const style = {
            left: `${Math.random() * 90 + 5}%`, // Position horizontally
            top: `${Math.random() * 50 + 20}%`,  // Position vertically, not too low or high
            '--hue': `${Math.random() * 360}`,    // Base color for the explosion
            // Main animation: shoot up, then trigger particles. Delay is randomized.
            animation: `shoot 1s ${Math.random() * 2.5}s ease-in forwards`,
        } as React.CSSProperties;

        return <FireworkInstance key={i} style={style} />;
    });

    return <div className="fireworks-container">{fireworks}</div>;
};
