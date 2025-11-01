import { motion } from 'motion/react';
import { DrinkCard } from './DrinkCard';
import { LucideIcon } from 'lucide-react';

interface MenuItem {
  name: string;
  price: number;
  image: string;
}

interface CategorySectionProps {
  title: string;
  icon: LucideIcon;
  items: MenuItem[];
  index: number;
}

export function CategorySection({ title, icon: Icon, items }: CategorySectionProps) {
  return (
    <section className="mb-12">
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-6 px-6">
        <motion.div
          animate={{
            rotate: [0, 15, -15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Icon className="text-emerald-500" size={28} strokeWidth={2.5} />
        </motion.div>
        <h2 className="text-gray-800 font-bold">{title}</h2>
      </div>

      {/* Horizontal Scrolling Container */}
      <div className="relative">
        {/* Scroll gradient hints */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#FAFDF9] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#FAFDF9] to-transparent z-10 pointer-events-none" />
        
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 px-6 pb-4">
            {items.map((item, idx) => (
              <DrinkCard
                key={idx}
                name={item.name}
                price={item.price}
                image={item.image}
                index={idx}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
