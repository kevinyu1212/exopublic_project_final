import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-10 mt-20 border-t border-zinc-900">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-12 gap-16 mb-20">
          {/* Brand Section */}
          <div className="col-span-12 lg:col-span-5">
            <h2 className="text-[12vw] lg:text-[80px] font-[1000] italic uppercase tracking-tighter leading-[0.8] mb-8">
              Exopublic
            </h2>
            <p className="text-zinc-500 text-sm max-w-sm font-medium tracking-tight uppercase">
              The World's Most Advanced Bio-Asset Exchange & Community for Rare Species.
            </p>
          </div>

          {/* Sitemap (Naver Cafe Style) */}
          <div className="col-span-6 lg:col-span-2 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Marketplace</h4>
            <ul className="text-xs font-bold space-y-3 uppercase tracking-widest text-zinc-600">
              <li className="hover:text-white cursor-pointer transition-colors">Coleoptera</li>
              <li className="hover:text-white cursor-pointer transition-colors">Lepidoptera</li>
              <li className="hover:text-white cursor-pointer transition-colors">Reptiles</li>
              <li className="hover:text-white cursor-pointer transition-colors">Archives</li>
            </ul>
          </div>

          {/* Support & Governance */}
          <div className="col-span-6 lg:col-span-2 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Platform</h4>
            <ul className="text-xs font-bold space-y-3 uppercase tracking-widest text-zinc-600">
              <li className="hover:text-white cursor-pointer transition-colors">Index Guide</li>
              <li className="hover:text-white cursor-pointer transition-colors">Governance</li>
              <li className="hover:text-white cursor-pointer transition-colors">Privacy</li>
              <li className="hover:text-white cursor-pointer transition-colors">Terms</li>
            </ul>
          </div>

          {/* Status (Finance Hub Style) */}
          <div className="col-span-12 lg:col-span-3 space-y-6 border-l border-zinc-900 pl-0 lg:pl-10">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Network Status</h4>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-black uppercase tracking-widest">Operational : Node 01-KR</span>
            </div>
            <div className="pt-4">
              <p className="text-[9px] text-zinc-700 font-bold uppercase leading-relaxed">
                Exopublic Project Final<br />
                Managed by kevinyu1212<br />
                Seoul, Republic of Korea
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-zinc-900 gap-6">
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-700">
            © 2026 EXOPUBLIC BIO-ASSET EXCHANGE.
          </span>
          <div className="flex gap-8 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">
            <span className="hover:text-white cursor-pointer">Instagram</span>
            <span className="hover:text-white cursor-pointer">Discord</span>
            <span className="hover:text-white cursor-pointer">Twitter (X)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}