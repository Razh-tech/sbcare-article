export const dynamic = "force-dynamic";
export const revalidate = 60;

import { wisp } from "@/lib/wisp";
import Link from "next/link";
import { FullWidthHeader } from "../../components/FullWidthHeader";
import { Metadata } from "next";
import { config } from "@/config";
import { getOgImageUrl } from "@/lib/ogImage";

export const metadata: Metadata = {
  title: `Kategori artikel`,
  description: `Daftar semua kategori artikel di ${config.organization}`,
  alternates: {
    canonical: "/category",
  },
  openGraph: {
    title: `Kategori artikel`,
    description: `Daftar semua kategori artikel di ${config.organization}`,
    images: [getOgImageUrl(`Kategori Artikel`)],
  },
};

export default async function Page() {
  const result = await wisp.getTags();

  return (
    <>
      <FullWidthHeader
        title="Kategori"
        description="Jelajahi artikel berdasarkan kategori"
        breadcrumb={[
          { label: "Beranda", href: "/" },
          { label: "Kategori", href: `/category/` },
        ]}
      />
      <div className="container mx-auto text-xl px-4 mb-10 max-w-6xl">
        {result.tags.map((tag) => (
          <Link key={tag.id} href={`/category/${tag.name}`}>
            <div className="inline-block mr-4 mt-2">#{tag.name}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
