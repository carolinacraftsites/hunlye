import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Import all gallery images
import img1 from "@/assets/gallery/71ba4eaf-7806-459f-af22-264e0df5bc45.jpg";
import img2 from "@/assets/gallery/910c6d43-afbc-4786-b373-b424ce559bdf.jpg";
import img3 from "@/assets/gallery/IMG_0551.jpeg";
import img4 from "@/assets/gallery/IMG_0668.JPG";
import img5 from "@/assets/gallery/IMG_1886.jpeg";
import img6 from "@/assets/gallery/IMG_4587.JPG";
import img7 from "@/assets/gallery/IMG_9352.JPG";
import img8 from "@/assets/gallery/R0000705.JPG";

interface GalleryImage {
  src: string;
  alt: string;
  aspectRatio: "portrait" | "landscape" | "square";
}

const galleryImages: GalleryImage[] = [
  { src: img1, alt: "Dorlöp Rinpoché teaching Buddhist wisdom", aspectRatio: "portrait" },
  { src: img2, alt: "Dr. Hun Lye in traditional Buddhist setting", aspectRatio: "portrait" },
  { src: img3, alt: "Tibetan Buddhist teaching session", aspectRatio: "portrait" },
  { src: img4, alt: "Buddhist ceremony and practice", aspectRatio: "landscape" },
  { src: img5, alt: "Meditation and dharma practice", aspectRatio: "square" },
  { src: img6, alt: "Dorlöp Rinpoché with students", aspectRatio: "portrait" },
  { src: img7, alt: "Buddhist teachings and meditation", aspectRatio: "portrait" },
  { src: img8, alt: "Traditional Buddhist gathering", aspectRatio: "landscape" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section id="gallery" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3">
              Gallery
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Moments in Practice
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Images from teachings, ceremonies, and community gatherings
            </p>
          </div>

          {/* Responsive Masonry Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-auto">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
                  image.aspectRatio === "landscape"
                    ? "sm:col-span-2"
                    : image.aspectRatio === "square"
                    ? "row-span-1"
                    : ""
                }`}
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-maroon-dark/0 group-hover:bg-maroon-dark/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-12 h-12 text-cream"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl w-full p-0 bg-transparent border-0 overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={selectedImage || ""}
              alt="Full size view"
              className="max-h-[90vh] w-auto object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Gallery;
