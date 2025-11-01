import { ImageWithFallback } from './figma/ImageWithFallback';

interface DrinkCardProps {
  name: string;
  price: number;
  image: string;
  index: number;
}

export function DrinkCard({ name, price, image }: DrinkCardProps) {
  return (
    <div className="flex-shrink-0 w-[280px] h-[380px] relative group">
      <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm shadow-lg border border-white/50">
        {/* Image container */}
        <div className="relative w-full h-[260px] overflow-hidden flex items-center justify-center p-4">
          <ImageWithFallback
            src={image}
            alt={name}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white to-transparent">
          <h3 className="text-gray-800 mb-2">{name}</h3>
          <div className="flex items-center justify-between">
            <p className="text-emerald-600 font-bold">₹{price}</p>
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
