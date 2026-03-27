import SideNav from "@/components/layout/SideNav";
import RightAside from "@/components/layout/RightAside";
import MainMarket from "@/components/home/MainMarket";
import CategoryBanner from "@/components/home/CategoryBanner";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  await params;
  return (
    <div className="max-w-[1600px] mx-auto px-10 py-12">
      {/* Hero Section: 충우의 카테고리 직관성 */}
      <CategoryBanner />

      <div className="grid grid-cols-12 gap-16 mt-20">
        {/* Left: 네이버 카페의 Taxonomy Navigation */}
        <aside className="col-span-2 hidden xl:block sticky top-32 h-fit">
          <div className="space-y-10">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-6">Taxonomy</h3>
              <SideNav />
            </div>
          </div>
        </aside>

        {/* Center: 기워(KIWO)의 하이엔드 콘텐츠 피드 */}
        <main className="col-span-12 xl:col-span-7">
          <header className="mb-12 border-b-[6px] border-black dark:border-white pb-8 flex justify-between items-end">
            <h2 className="text-8xl leading-[0.8] mb-[-4px]">Live<br/>Drops</h2>
            <div className="text-right">
              <p className="text-[11px] font-black uppercase tracking-tighter">Market Volatility</p>
              <p className="text-2xl font-[950] text-green-500">+12.4%</p>
            </div>
          </header>
          <MainMarket />
        </main>

        {/* Right: 실시간 커뮤니티 & 유저 정보 */}
        <aside className="col-span-12 xl:col-span-3 sticky top-32 h-fit">
          <RightAside />
        </aside>
      </div>
    </div>
  );
}