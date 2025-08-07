
import React from 'react';
import type { Achievement, Language } from './types';
import { AwardIcon, RocketIcon, CompassIcon, Globe2Icon, BrainCircuitIcon, FlameIcon } from './Icons';

interface AchievementNotificationProps {
    achievement: Achievement | null;
    language: Language;
    t: (key: string, replacements?: Record<string, string | number>) => string;
}

const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    award: AwardIcon,
    rocket: RocketIcon,
    compass: CompassIcon,
    'globe-2': Globe2Icon,
    'brain-circuit': BrainCircuitIcon,
    flame: FlameIcon,
};

export const AchievementNotification: React.FC<AchievementNotificationProps> = ({ achievement, language, t }) => {
    const isVisible = !!achievement;

    const IconComponent = achievement ? iconMap[achievement.icon] || AwardIcon : AwardIcon;
    const title = achievement ? t(achievement.titleKey) : '';
    const desc = achievement ? `${t(achievement.descKey)} +${achievement.points} ${t('points')}` : '';

    return (
        <div 
            className="achievement-badge-wrapper fixed top-24 right-4 md:right-6 z-50"
            style={{ 
                transform: isVisible ? 'translateX(0)' : 'translateX(calc(100% + 24px))',
                opacity: isVisible ? 1 : 0,
            }}
            role="alert"
            aria-live="assertive"
        >
            <div className="achievement-badge p-4 rounded-xl text-white shadow-lg backdrop-blur-md">
                <div className="flex items-center gap-4">
                    <IconComponent className="w-8 h-8 flex-shrink-0" />
                    <div>
                        <div className="font-bold">{title}</div>
                        <div className="text-sm opacity-90">{desc}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};