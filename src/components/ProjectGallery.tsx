import { useCallback, useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

export type GalleryImage = { src: string; caption: string };

type Props = {
  images: GalleryImage[];
  title: string;
  /** "cover" crops to 16:9 (projects); "contain" keeps original proportions. */
  fit?: "cover" | "contain";
};

const ProjectGallery = ({ images, title, fit = "cover" }: Props) => {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const current = images[active];
  const multi = images.length > 1;

  const prev = useCallback(() => setActive((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setActive((i) => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    if (!open || !multi) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, multi, prev, next]);

  const imgClass =
    fit === "cover"
      ? "w-full aspect-[16/9] object-cover object-top"
      : "w-full h-auto object-contain";

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
          className={`${imgClass} transition-transform duration-500 group-hover/img:scale-[1.02]`}
        />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-foreground/70 to-transparent px-4 py-3">
          <span className="text-sm font-medium text-background text-left">{current.caption}</span>
          <span className="flex items-center gap-2 text-xs text-background/90">
            {multi && `${active + 1} of ${images.length}`}
            <Maximize2 className="w-4 h-4" />
          </span>
        </div>
      </button>

      {multi && (
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
          <div className="relative">
            <img src={current.src} alt={`${title} — ${current.caption}`} className="w-full h-auto max-h-[80vh] object-contain rounded-lg" />
            {multi && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous image"
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/85 p-2 shadow-lg border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next image"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/85 p-2 shadow-lg border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>
          <div className="flex items-center justify-between gap-3 px-2 pb-1">
            <p className="text-sm text-muted-foreground">{current.caption}</p>
            {multi && (
              <span className="text-sm font-medium text-foreground whitespace-nowrap">
                {active + 1} of {images.length}
              </span>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectGallery;
