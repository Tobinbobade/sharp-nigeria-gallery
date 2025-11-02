import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import Lightbox from "./Lightbox";
import wedding1 from "@/assets/wedding1.jpg";
import wedding2 from "@/assets/wedding2.jpg";
import corporate1 from "@/assets/corporate1.jpg";
import corporate2 from "@/assets/corporate2.jpg";
import portrait1 from "@/assets/portrait1.jpg";
import portrait2 from "@/assets/portrait2.jpg";
import event1 from "@/assets/event1.jpg";
import event2 from "@/assets/event2.jpg";

interface Photo {
  id: number;
  src: string;
  category: string;
  alt: string;
}

const photos: Photo[] = [
  { id: 1, src: wedding1, category: "Weddings", alt: "Traditional Nigerian wedding ceremony" },
  { id: 2, src: wedding2, category: "Weddings", alt: "Elegant wedding reception moment" },
  { id: 3, src: corporate1, category: "Corporate", alt: "Professional business team portrait" },
  { id: 4, src: corporate2, category: "Corporate", alt: "Corporate networking event" },
  { id: 5, src: portrait1, category: "Portraits", alt: "Professional portrait photography" },
  { id: 6, src: portrait2, category: "Portraits", alt: "Creative portrait session" },
  { id: 7, src: event1, category: "Events", alt: "Joyful birthday celebration" },
  { id: 8, src: event2, category: "Events", alt: "Cultural festival photography" },
];

const categories = ["All", "Weddings", "Events", "Portraits", "Corporate"];

const GalleryGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const filteredPhotos = activeCategory === "All"
    ? photos
    : photos.filter((photo) => photo.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Portfolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through my work across different categories
          </p>
        </div>

        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative aspect-[3/4] overflow-hidden rounded-sm cursor-pointer hover-lift"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      {selectedPhoto && (
        <Lightbox
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
          onNext={() => {
            const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
            const nextIndex = (currentIndex + 1) % filteredPhotos.length;
            setSelectedPhoto(filteredPhotos[nextIndex]);
          }}
          onPrev={() => {
            const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
            const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
            setSelectedPhoto(filteredPhotos[prevIndex]);
          }}
        />
      )}
    </section>
  );
};

export default GalleryGrid;
