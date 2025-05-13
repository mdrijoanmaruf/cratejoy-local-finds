
import React, { useState } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

interface ImageGalleryProps {
  images: string[];
  className?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, className }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  if (!images || images.length === 0) {
    return null;
  }
  
  return (
    <div className={cn("space-y-4", className)}>
      <AspectRatio ratio={16 / 9} className="bg-muted overflow-hidden rounded-lg border">
        <img 
          src={images[selectedIndex]} 
          alt="Selected image" 
          className="w-full h-full object-cover transition-all duration-300"
        />
      </AspectRatio>
      
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={cn(
              "rounded-md overflow-hidden border-2",
              selectedIndex === index ? "border-primary" : "border-transparent"
            )}
          >
            <AspectRatio ratio={1 / 1} className="bg-muted">
              <img 
                src={image} 
                alt={`Thumbnail ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
