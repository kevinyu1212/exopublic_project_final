import "@/styles/globals.css";
import Footer from "@/components/layout/Footer";

export const metadata = { 
  title: "Exopublic | Premium Bio-Asset Exchange",
  description: "Next-gen Animal Finance Platform"
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body className="bg-white dark:bg-zinc-950 text-black dark:text-white antialiased">
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-900">
          <div className="max-w-[1600px] mx-auto px-10 h-20 flex justify-between items-center">
            <h1 className="text-3xl font-[950] italic tracking-tighter uppercase leading-none">Exopublic</h1>
            <nav className="flex items-center gap-12 text-[11px] font-black uppercase tracking-[0.2em]">
              <span className="cursor-pointer hover:opacity-50 transition-opacity">Market</span>
              <span className="cursor-pointer hover:opacity-50 transition-opacity">Index</span>
              <span className="cursor-pointer hover:opacity-50 transition-opacity">Archive</span>
              <button className="bg-black text-white dark:bg-white dark:text-black px-6 py-2.5 rounded-full text-[10px] hover:scale-105 transition-transform">Connect Wallet</button>
            </nav>
          </div>
        </header>
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}