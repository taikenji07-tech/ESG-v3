

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
    
    // --- Shared Drop Logic ---
    const performDrop = (targetId: string) => {
        if (!draggedItem) return;

        const newPlacements = { ...placements };
        const oldTargetKey = Object.keys(newPlacements).find(key => newPlacements[key] === draggedItem);
        
        if (targetId === 'unplaced') {
            if (oldTargetKey) newPlacements[oldTargetKey] = null;
        } else {
            const itemInTarget = newPlacements[targetId];
            if (oldTargetKey) {
                newPlacements[oldTargetKey] = itemInTarget;
            }
            newPlacements[targetId] = draggedItem;
        }
        
        setPlacements(newPlacements);
    };

    // --- Mouse Event Handlers ---
    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, itemId: string) => {
        setDraggedItem(itemId);
        e.dataTransfer.effectAllowed = 'move';
    };

    const handleDragEnd = () => {
        setDraggedItem(null);
        setDragOverTarget(null);
    };
    
    const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetId: string) => {
        e.preventDefault();
        performDrop(targetId);
        setDraggedItem(null);
        setDragOverTarget(null);
    };
    
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault();
    const handleDragEnter = (targetId: string) => {
        if (draggedItem) { // Only set drag over if an item is being dragged
           setDragOverTarget(targetId);
        }
    };
    const handleDragLeave = () => setDragOverTarget(null);

    // --- Touch Event Handlers ---
    const handleTouchStart = (itemId: string) => {
        setDraggedItem(itemId);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!draggedItem) return;
        
        // This prevents the page from scrolling, which is crucial for a good UX.
        if (e.cancelable) {
            e.preventDefault();
        }
        
        const touch = e.touches[0];
        const elementUnderTouch = document.elementFromPoint(touch.clientX, touch.clientY);

        if (elementUnderTouch) {
            const dropTarget = elementUnderTouch.closest('.dd-target, .dd-item-source');
            if (dropTarget && dropTarget instanceof HTMLElement) {
                const targetId = dropTarget.dataset.targetId;
                 if (targetId) {
                    setDragOverTarget(targetId);
                }
            } else {
                setDragOverTarget(null);
            }
        }
    };
    
    const handleTouchEnd = () => {
        if (draggedItem && dragOverTarget) {
            performDrop(dragOverTarget);
        }
        setDraggedItem(null);
        setDragOverTarget(null);
    };

    const handleCheckAnswer = () => {
        const isCorrect = node.targets.every(target => placements[target.id] === target.correctItemId);
        onComplete(isCorrect);
    };

    const allPlaced = unplacedItems.length === 0;
    
    // Helper to render draggable items
    const renderDraggableItem = (item: typeof node.items[0]) => (
        <div
            key={item.id}
            draggable
            onDragStart={(e) => handleDragStart(e, item.id)}
            onDragEnd={handleDragEnd}
            onTouchStart={() => handleTouchStart(item.id)}
            className={`dd-item ${draggedItem === item.id ? 'dragging' : ''}`}
        >
            {t(item.textKey)}
        </div>
    );

    return (
        <div 
            className="mt-4 space-y-4 animate-fade-in-up"
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onDragLeave={handleDragLeave}
        >
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
                            className={`dd-target dd-target-${target.id} ${isDragOver ? 'drag-over' : ''}`}
                            data-target-id={target.id}
                        >
                            <h3 className="dd-target-label">{target.label}</h3>
                            <div className="flex-grow flex items-center justify-center min-h-[4rem]">
                                {placedItem ? renderDraggableItem(placedItem) : (
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
                onDragEnter={() => handleDragEnter('unplaced')}
                data-target-id="unplaced"
            >
                {unplacedItems.map(renderDraggableItem)}
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
