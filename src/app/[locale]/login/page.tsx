import SideNav from "@/components/layout/SideNav";
import RightAside from "@/components/layout/RightAside";
import MainMarket from "@/components/home/MainMarket";
import CategoryBanner from "@/components/home/CategoryBanner";

export default function HomePage() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-12">
      {/* 1. 상단 퀵 메뉴 - 충우의 실용성 */}
      <header className="mb-16">
        <CategoryBanner />
      </header>

      <div className="grid grid-cols-12 gap-12">
        {/* 2. 좌측 카테고리 트리 - 충우의 체계적인 종 분류 */}
        <aside className="hidden lg:block lg:col-span-2">
          <SideNav />
        </aside>

        {/* 3. 중앙 메인 마켓 - 기워의 세련된 UI + 충우의 정보력 */}
        <main className="col-span-12 lg:col-span-7">
          <header className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">Live Exchange</h2>
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] mt-2">Real-time Bio-Asset Bidding</p>
            </div>
            <button className="text-xs font-black uppercase border-b-2 border-black pb-1">View All</button>
          </header>
          
          <MainMarket />
        </main>

        {/* 4. 우측 위젯 - 카페의 커뮤니티 흐름 + 커스텀 로그인 */}
        <aside className="col-span-12 lg:col-span-3">
          <RightAside />
        </aside>
      </div>
    </div>
  );
}