'use client'

import React from 'react';

// Animal Finance 핵심 데이터 구조 (충우의 전문성 + 금융 인덱스)
const MOCK_DATA = [
  { 
    id: 1, 
    name: "Dorcus hopei binodulosus", 
    subName: "극태 왕사슴벌레 - [혈통: 흑강]",
    code: "KR-ST-99", 
    price: "₩450,000", 
    change: "+12.5%", 
    status: "LIVE AUCTION",
    image: "https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    id: 2, 
    name: "Dynastes hercules hercules", 
    subName: "헤라클레스 장수풍뎅이 - [160mm+]",
    code: "GUA-HH-07", 
    price: "₩1,200,000", 
    change: "-2.1%", 
    status: "INSTANT BUY",
    image: "https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    id: 3, 
    name: "Prosopocoilus giraffa keisukei", 
    subName: "기라파 톱사슴벌레 - [산지: 플로레스]",
    code: "ID-PG-12", 
    price: "₩180,000", 
    change: "+1.8%", 
    status: "LIVE AUCTION",
    image: "https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=1000&auto=format&fit=crop" 
  },
  { 
    id: 4, 
    name: "Caelifera | Rare Morph", 
    subName: "희귀 모프 메뚜기 - [Neon Blue]",
    code: "JP-CF-03", 
    price: "₩320,000", 
    change: "+24.0%", 
    status: "NEW DROP",
    image: "https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=1000&auto=format&fit=crop" 
  }
];

export default function MainMarket() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-12">
      {MOCK_DATA.map((item) => (
        <div key={item.id} className="group relative flex flex-col">
          {/* 카드 상단: 이미지 및 상태 태그 (KIWO Style) */}
          <div className="relative aspect-[4/5] bg-zinc-100 dark:bg-zinc-900 overflow-hidden mb-8 border border-zinc-200 dark:border-zinc-800">
            <img 
              src={item.image} 
              alt={item.name} 
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000 ease-in-out grayscale group-hover:grayscale-0" 
            />
            
            {/* 고유 식별 코드 태그 */}
            <div className="absolute top-0 left-0 bg-black text-white text-[10px] font-black px-3 py-1.5 uppercase tracking-[0.2em]">
              {item.code}
            </div>

            {/* 판매 상태 태그 (네이버 카페 등급/상태 개념 융합) */}
            <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-black/90 backdrop-blur px-3 py-1 text-[9px] font-bold border border-zinc-200 dark:border-zinc-800">
              {item.status}
            </div>
          </div>

          {/* 카드 하단: 금융 정보 (Stagbeetles + KIWO) */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-[12px] font-black text-zinc-400 uppercase tracking-widest leading-none mb-2">
                  {item.name}
                </h3>
                <p className="text-xl font-[950] tracking-tighter leading-tight italic uppercase">
                  {item.subName}
                </p>
              </div>
            </div>

            <div className="flex justify-between items-end pt-4 border-t border-zinc-100 dark:border-zinc-900">
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">Current Index</span>
                <span className="text-2xl font-[1000] tracking-tighter">{item.price}</span>
              </div>
              <div className={`flex flex-col items-end ${item.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                <span className="text-[9px] font-black uppercase tracking-widest">24h Change</span>
                <span className="text-lg font-black italic">{item.change}</span>
              </div>
            </div>
          </div>
          
          {/* 하이엔드 오버레이 효과 */}
          <div className="absolute inset-0 border-2 border-black opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none translate-x-2 translate-y-2 -z-10" />
        </div>
      ))}
    </div>
  );
}