import { getOgImageUrl } from "@/lib/ogImage";
import { Metadata } from "next";
import { ThemeSelection } from "../../components/ThemeSelection";

const title = "Pemilih tema";
const description = "Pilih atau buat tema gradien untuk blog Anda";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [getOgImageUrl(title)],
  },
};

export default async function Page() {
  return <ThemeSelection />;
}
