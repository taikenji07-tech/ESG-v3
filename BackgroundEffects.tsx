


import React, { useState, useEffect } from 'react';

interface Particle {
    id: number;
    style: React.CSSProperties;
    size: number;
}

export const BackgroundEffects: React.FC = () => {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const createParticle = () => {
            const size = Math.random() * 5 + 2; // size between 2px and 7px
            const newParticle: Particle = {
                id: Date.now() + Math.random(),
                size: size,
                style: {
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 15}s`,
                    animationDuration: `${Math.random() * 10 + 10}s`,
                    width: `${size}px`,
                    height: `${size}px`,
                }
            };

            setParticles(p => [...p, newParticle]);

            // Remove particle after animation ends
            setTimeout(() => {
                setParticles(p => p.filter(particle => particle.id !== newParticle.id));
            }, 20000); 
        };

        const intervalId = setInterval(createParticle, 2000);
        
        // Create initial batch
        for(let i=0; i<5; i++) {
          setTimeout(createParticle, i*1000);
        }

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="particle-container">
            {particles.map(p => (
                <div key={p.id} className="particle" style={p.style}></div>
            ))}
        </div>
    );
};