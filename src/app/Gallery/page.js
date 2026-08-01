import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { fetchGalleryImages } from "../actions/fetchGalleryImages";

export const metadata = {
  title: "Gallery",
};

export default async function GalleryPage() {
  const result = await fetchGalleryImages();
  const images = result?.images || [];

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-white">
    
      <header className="sticky top-0 z-50 border-b border-orange-100/60 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-6">
         
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-all duration-300 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
          >
            <ArrowLeft
              size={18}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            <span className="hidden sm:inline">Back</span>
          </Link>

          {/* Mobile Title */}
          <h1 className="text-lg font-semibold text-zinc-900 md:hidden">
            Gallery
          </h1>

          {/* Spacer */}
          <div className="w-16 sm:w-24" />
        </div>
      </header>

      {/* Hero (Desktop Only) */}
      <section className="hidden md:block py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="inline-block rounded-full border border-orange-200 bg-orange-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-orange-600">
            Gallery
          </span>

          <h1 className="mt-5 text-5xl font-bold tracking-tight text-zinc-900 lg:text-6xl">
            Moments That Matter
          </h1>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        {images.length === 0 ? (
          <div className="flex h-[50vh] items-center justify-center rounded-3xl border border-orange-100 bg-white shadow-sm">
            <p className="text-zinc-500">No images available.</p>
          </div>
        ) : (
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
            {images.map((image) => (
              <Link
                key={image.id}
                href={image.image_url}
                target="_blank"
                className="group mb-5 block break-inside-avoid overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(249,115,22,0.18)]"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={image.image_url}
                    alt=""
                    width={800}
                    height={1000}
                    className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}