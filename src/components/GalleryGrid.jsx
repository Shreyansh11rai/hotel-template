"use client";

import { useState } from "react";
import { galleryPhotos } from "../data/gallery";

const categories = ["All photos", "Wedding", "Events", "Corporate events"];

export default function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const photos =
    selectedCategory === categories[0]
      ? galleryPhotos
      : galleryPhotos.filter((photo) => photo.category === selectedCategory);

  return (
    <>
      <div
        className="mb-8 flex flex-wrap gap-3"
        role="tablist"
        aria-label="Filter gallery photos"
      >
        {categories.map((category) => (
          <button
            className={`cursor-pointer border px-5 py-3 text-sm font-bold tracking-[0.08em] uppercase transition-colors ${
              selectedCategory === category
                ? "border-ink bg-ink text-paper"
                : "border-line bg-transparent text-ink hover:border-ink"
            }`}
            key={category}
            id={`gallery-tab-${category.toLowerCase().replaceAll(" ", "-")}`}
            type="button"
            role="tab"
            aria-selected={selectedCategory === category}
            aria-controls="gallery-panel"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div
        className="grid grid-cols-3 gap-[14px] max-[760px]:grid-cols-2 max-[760px]:gap-[9px] max-[430px]:grid-cols-1"
        id="gallery-panel"
        role="tabpanel"
        aria-labelledby={`gallery-tab-${selectedCategory.toLowerCase().replaceAll(" ", "-")}`}
      >
        {photos.map((photo) => (
          <figure
            className="group relative m-0 min-h-[240px] overflow-hidden bg-band max-[760px]:min-h-[190px] max-[430px]:min-h-[235px]"
            key={photo.id}
          >
            <img
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              src={photo.image}
              alt={photo.alt}
              loading="lazy"
            />
            <figcaption className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent px-4 pt-12 pb-4 text-sm font-bold tracking-[0.08em] text-white uppercase">
              {photo.category}
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
