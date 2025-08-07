
import React from 'react';
import { SparklesIcon, SunIcon, MoonIcon, StarIcon, ZapIcon } from './Icons';
import { Language } from './types';

interface HeaderProps {
    score: number;
    streak: number;
    progress: number;
    theme: 'light' | 'dark';
    onThemeToggle: () => void;
    language: Language;
    onLanguageChange: (language: Language) => void;
    t: (key: string) => string;
}

export const Header: React.FC<HeaderProps> = ({ score, streak, progress, theme, onThemeToggle, language, onLanguageChange, t }) => {
    return (
        <header className="header-bg sticky top-0 z-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4">
                <div className="flex items-center justify-between gap-4">
                    {/* Left side: Title and RHB link */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-md">
                            <SparklesIcon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-lg font-bold text-text-main">{t('header_title')}</h1>
                            <a 
                                href="https://www.rhbinsurance.com.my/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-xs text-text-dim hover:text-accent transition-colors"
                            >
                                by RHB Insurance
                            </a>
                        </div>
                    </div>

                    {/* Right side: Toggles */}
                    <div className="flex items-center gap-2">
                         <div className="language-selector">
                            <button
                                onClick={() => onLanguageChange('en')}
                                className={language === 'en' ? 'active' : ''}
                                aria-label={t('toggle_language_to_en')}
                                aria-pressed={language === 'en'}
                            >
                                ENG
                            </button>
                            <button
                                onClick={() => onLanguageChange('ms')}
                                className={language === 'ms' ? 'active' : ''}
                                aria-label={t('toggle_language_to_ms')}
                                aria-pressed={language === 'ms'}
                            >
                                BM
                            </button>
                        </div>
                        <button 
                            onClick={onThemeToggle} 
                            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? <SunIcon className="w-5 h-5 text-text-dim" /> : <MoonIcon className="w-5 h-5 text-text-dim" />}
                        </button>
                    </div>
                </div>

                {/* Bottom part: Progress and stats */}
                <div className="mt-4">
                    <div className="flex items-center justify-between text-xs text-text-dim mb-1">
                        <span>{t('learning_progress')}</span>
                        <span>{Math.round(progress)}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full progress-container overflow-hidden">
                        <div className="progress-bar h-full rounded-full" style={{ width: `${progress}%` }}></div>
                    </div>
                    <div className="flex items-center justify-end gap-3 mt-2">
                        <div className="score-display px-3 py-1 rounded-full flex items-center gap-1.5 text-xs">
                            <StarIcon className="w-3.5 h-3.5 text-amber-500" />
                            <span className="font-medium">{score}</span>
                        </div>
                        {streak > 0 && (
                            <div className="streak-counter px-3 py-1 rounded-full text-white flex items-center gap-1.5 text-xs">
                                <ZapIcon className="w-3.5 h-3.5" />
                                <span className="font-bold">{streak}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};