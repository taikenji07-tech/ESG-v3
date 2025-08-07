

import React, { useState, useMemo } from 'react';
import type { DragDropQuizNode, Language } from './types';
import { translations } from './translations';

interface DragDropQuizProps {
    node: DragDropQuizNode;
    onComplete: (isCorrect: boolean) => void;
    language: Language;
}

type Placements = Record<string, string | null>;

export const DragDropQuiz: React.FC<DragDropQuizProps> = ({ node, onComplete, language }) => {
    const t = (key: string) => translations[language][key] || key;

    const initialPlacements = useMemo(() => node.targets.reduce((acc, target) => {
        acc[target.id] = null;
        return acc;
    }, {} as Placements), [node.targets]);
    
    const [placements, setPlacements] = useState<Placements>(initialPlacements);
    const [draggedItem, setDraggedItem] = useState<string | null>(null);
    const [dragOverTarget, setDragOverTarget] = useState<string | null>(null);

    const shuffledItems = useMemo(() => [...node.items].sort(() => Math.random() - 0.5), [node.items]);
    const unplacedItems = shuffledItems.filter(item => !Object.values(placements).includes(item.id));
    
    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, itemId: string) => {
        setDraggedItem(itemId);
        e.dataTransfer.effectAllowed = 'move';
        e.currentTarget.style.opacity = '0.5';
    };

    const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
        e.currentTarget.style.opacity = '1';
        setDraggedItem(null);
        setDragOverTarget(null);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetId: string) => {
        e.preventDefault();
        if (!draggedItem) return;

        const newPlacements = { ...placements };
        
        // Find if the dragged item was previously in another target
        const oldTargetKey = Object.keys(newPlacements).find(key => newPlacements[key] === draggedItem);
        
        if (targetId === 'unplaced') {
            if (oldTargetKey) newPlacements[oldTargetKey] = null;
        } else {
             // If there's an item in the target zone, swap it with the dragged item's original position
            const itemInTarget = newPlacements[targetId];
            if (oldTargetKey) {
                newPlacements[oldTargetKey] = itemInTarget; // Move item from target to old spot
            }
            newPlacements[targetId] = draggedItem; // Place dragged item in new spot
        }
        
        setPlacements(newPlacements);
        setDraggedItem(null);
        setDragOverTarget(null);
    };
    
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault();
    const handleDragEnter = (targetId: string) => setDragOverTarget(targetId);
    const handleDragLeave = () => setDragOverTarget(null);

    const handleCheckAnswer = () => {
        const isCorrect = node.targets.every(target => placements[target.id] === target.correctItemId);
        onComplete(isCorrect);
    };

    const allPlaced = unplacedItems.length === 0;
    
    return (
        <div className="mt-4 space-y-4 animate-fade-in-up">
            {/* Drop Zones */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {node.targets.map(target => {
                    const placedItem = node.items.find(item => item.id === placements[target.id]);
                    const isDragOver = dragOverTarget === target.id;
                    return (
                        <div
                            key={target.id}
                            onDrop={(e) => handleDrop(e, target.id)}
                            onDragOver={handleDragOver}
                            onDragEnter={() => handleDragEnter(target.id)}
                            onDragLeave={handleDragLeave}
                            className={`dd-target dd-target-${target.id} ${isDragOver ? 'drag-over' : ''}`}
                        >
                            <h3 className="dd-target-label">{target.label}</h3>
                            <div className="flex-grow flex items-center justify-center min-h-[4rem]">
                                {placedItem ? (
                                    <div
                                        draggable
                                        onDragStart={(e) => handleDragStart(e, placedItem.id)}
                                        onDragEnd={handleDragEnd}
                                        className="dd-item"
                                    >
                                        {t(placedItem.textKey)}
                                    </div>
                                ) : (
                                    <span className="text-sm text-text-dim">{t('Drop here')}</span>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Unplaced Items Area */}
            <div 
                className="dd-item-source"
                onDrop={(e) => handleDrop(e, 'unplaced')}
                onDragOver={handleDragOver}
            >
                {unplacedItems.map(item => (
                    <div
                        key={item.id}
                        draggable
                        onDragStart={(e) => handleDragStart(e, item.id)}
                        onDragEnd={handleDragEnd}
                        className="dd-item"
                    >
                        {t(item.textKey)}
                    </div>
                ))}
                {unplacedItems.length === 0 && <p className="text-sm w-full text-center text-text-dim">{t('All items placed!')}</p>}
            </div>


            {/* Submit Button */}
            {allPlaced && (
                <div className="text-center pt-4">
                    <button
                        onClick={handleCheckAnswer}
                        className="dd-submit-button"
                    >
                        {t('btn_check_answer')}
                    </button>
                </div>
            )}
        </div>
    );
};