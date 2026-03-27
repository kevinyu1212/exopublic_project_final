import React from 'react';

const CATEGORIES = [
  { title: "SHOPPING", items: ["곤충샵", "파충류샵", "표본/채집용품", "사육장/장식"] },
  { title: "COMMUNITY", items: ["자유게시판", "사육일기", "질문/답변", "포토갤러리"] },
  { title: "EXO-MARKET", items: ["실시간 경매", "개인분양", "업체분양"] }
];

export default function SideNav() {
  return (
    <nav className="w-full space-y-6">
      {CATEGORIES.map((cat) => (
        <div key={cat.title} className="border-b border-zinc-100 dark:border-zinc-800 pb-4">
          <h3 className="text-xs font-black text-zinc-900 dark:text-zinc-100 mb-3 px-2 tracking-tighter uppercase">{cat.title}</h3>
          <ul className="space-y-1">
            {cat.items.map((item) => (
              <li key={item}>
                <a href="#" className="block px-2 py-1.5 text-xs text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-900 rounded transition-all">
                  • {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
