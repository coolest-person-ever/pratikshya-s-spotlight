import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import galleryDance from "@/assets/gallery-dance-1.jpg";
import galleryArt from "@/assets/gallery-art-1.jpg";
import galleryPhoto from "@/assets/gallery-photo-1.jpg";
import galleryEvent from "@/assets/gallery-event-1.jpg";

const categories = ["All", "Dance", "Photoshoots", "Events", "Art & Paintings"];

const items = [
  { src: galleryDance, category: "Dance", caption: "Contemporary Flow" },
  { src: galleryArt, category: "Art & Paintings", caption: "Abstract Expression" },
  { src: galleryPhoto, category: "Photoshoots", caption: "Neon Vibes Shoot" },
  { src: galleryEvent, category: "Events", caption: "Live Performance" },
  { src: galleryDance, category: "Dance", caption: "Stage Presence" },
  { src: galleryPhoto, category: "Photoshoots", caption: "Urban Aesthetics" },
];

const GallerySection = () => {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <section id="gallery" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-display font-black gradient-text mb-4">Gallery</h2>
          <p className="text-muted-foreground text-lg">My creative world in frames ✨</p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground neon-glow-sm"
                  : "glass-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((item, i) => (
            <motion.div
              key={`${item.caption}-${i}`}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="break-inside-avoid group cursor-pointer relative overflow-hidden rounded-2xl"
              onClick={() => setLightbox(item.src)}
            >
              <img
                src={item.src}
                alt={item.caption}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <p className="text-foreground font-bold">{item.caption}</p>
                  <p className="text-muted-foreground text-sm">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            src={lightbox}
            alt="Gallery fullscreen"
            className="max-w-full max-h-[90vh] rounded-2xl object-contain"
          />
          <button
            className="absolute top-6 right-6 text-foreground text-3xl hover:text-primary transition-colors"
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default GallerySection;
