import React from 'react';

export default function RightAside() {
  return (
    <div className="space-y-4">
      {/* 로그인 박스 */}
      <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-5 rounded-lg">
        <input type="text" placeholder="ID" className="w-full mb-2 p-2 text-xs border border-zinc-300 rounded" />
        <input type="password" placeholder="PASSWORD" className="w-full mb-3 p-2 text-xs border border-zinc-300 rounded" />
        <button className="w-full py-2 bg-zinc-900 text-white text-xs font-bold rounded hover:bg-black transition-colors">LOGIN</button>
        <div className="mt-3 flex justify-between text-[10px] text-zinc-400">
          <span>회원가입</span>
          <span>아이디/비번찾기</span>
        </div>
      </div>
      
      {/* 실시간 인기글 */}
      <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg">
        <h3 className="text-[11px] font-black border-b pb-2 mb-3">HOT TOPICS</h3>
        <ul className="space-y-2">
          {[1, 2, 3, 4, 5].map(i => (
            <li key={i} className="text-[11px] truncate text-zinc-500 hover:text-black cursor-pointer leading-tight">
               {i}. 사육장 습도 조절 어떻게 하시나요?
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
