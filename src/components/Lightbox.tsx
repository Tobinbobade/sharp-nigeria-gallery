import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

interface Photo {
  id: number;
  src: string;
  category: string;
  alt: string;
}

interface LightboxProps {
  photo: Photo;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox = ({ photo, onClose, onNext, onPrev }: LightboxProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div
      className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center animate-scale-in"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-primary-foreground hover:text-accent transition-colors p-2"
        aria-label="Close lightbox"
      >
        <X className="h-8 w-8" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 text-primary-foreground hover:text-accent transition-colors p-2"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-10 w-10" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 text-primary-foreground hover:text-accent transition-colors p-2"
        aria-label="Next image"
      >
        <ChevronRight className="h-10 w-10" />
      </button>

      <div
        className="max-w-5xl max-h-[90vh] p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.src}
          alt={photo.alt}
          className="max-w-full max-h-[85vh] object-contain rounded-sm"
        />
        <p className="text-primary-foreground text-center mt-4 text-sm">
          {photo.category} - {photo.alt}
        </p>
      </div>
    </div>
  );
};

export default Lightbox;
