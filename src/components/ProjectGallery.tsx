import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Maximize2 } from "lucide-react";

export type GalleryImage = { src: string; caption: string };

const ProjectGallery = ({ images, title }: { images: GalleryImage[]; title: string }) => {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const current = images[active];

  return (
    <div className="mt-6">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative block w-full overflow-hidden rounded-2xl border border-border/60 bg-muted/30 group/img"
        aria-label={`Enlarge screenshot: ${current.caption}`}
      >
        <img
          src={current.src}
          alt={`${title} — ${current.caption}`}
          loading="lazy"
          className="w-full aspect-[16/9] object-cover object-top transition-transform duration-500 group-hover/img:scale-[1.02]"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-foreground/70 to-transparent px-4 py-3">
          <span className="text-sm font-medium text-background">{current.caption}</span>
          <Maximize2 className="w-4 h-4 text-background opacity-80" />
        </div>
      </button>

      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-3">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show ${img.caption}`}
              className={`overflow-hidden rounded-xl border-2 transition-all ${
                i === active ? "border-primary shadow-glow" : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <img src={img.src} alt="" loading="lazy" className="w-full aspect-[16/10] object-cover object-top" />
            </button>
          ))}
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-6xl p-2 sm:p-3">
          <DialogTitle className="sr-only">{`${title} — ${current.caption}`}</DialogTitle>
          <img src={current.src} alt={`${title} — ${current.caption}`} className="w-full h-auto rounded-lg" />
          <p className="text-sm text-muted-foreground px-2 pb-1">{current.caption}</p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectGallery;
