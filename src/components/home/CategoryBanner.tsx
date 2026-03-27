import React from 'react';

const CATEGORIES = [
  { id: 'reptile', name: '파충류', emoji: '🦎' },
  { id: 'insect', name: '곤충', emoji: '🪲' },
  { id: 'arthropod', name: '절지류', emoji: '🕷️' },
  { id: 'fish', name: '관상어', emoji: '🐠' },
  { id: 'bird', name: '관상조', emoji: '🦜' },
  { id: 'small', name: '소동물', emoji: '🐹' },
  { id: 'vivarium', name: '비바리움', emoji: '🌿' },
];

export default function CategoryBanner() {
  return (
    <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
      <div className="flex gap-4 min-w-max">
        {CATEGORIES.map((cat) => (
          <button 
            key={cat.id} 
            className="flex flex-col items-center justify-center min-w-[100px] p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-black dark:hover:border-white transition-all group"
          >
            <span className="text-3xl mb-2 group-hover:scale-110 transition-transform">{cat.emoji}</span>
            <span className="text-xs font-black uppercase tracking-tighter">{cat.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
