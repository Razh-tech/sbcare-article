import Link from "next/link";
import { config } from "@/config";

export const SiteHeader = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-semibold">
          SB Artikel
        </Link>
        <nav aria-label="Navigasi situs" className="flex items-center gap-4 text-sm">
          <Link href="/category">Kategori</Link>
          <a href={config.mainSiteUrl}>SBCare utama</a>
        </nav>
      </div>
    </header>
  );
};