import { CategorySection } from './components/CategorySection';
import { FloatingElements } from './components/FloatingElements';
import { Milk, Droplets, Leaf, Sparkles, IceCream, Star } from 'lucide-react';
import logo from 'figma:asset/e8c03d4b2f7a4a60b23d8f1e172712a4d9c13e93.png';
import mojito from 'src/assets/mojito.png';

const img = mojito;

export default function App() {
  const menuData = [
    {
      title: 'Lassi',
      icon: Milk,
      items: [
        { name: 'Sweet Lassi', price: 80, image: img },
        { name: 'Mango Lassi', price: 100, image: img },
        { name: 'Rose Lassi', price: 90, image: img },
        { name: 'Strawberry Lassi', price: 110, image: img },
      ],
    },
    {
      title: 'Juice',
      icon: Droplets,
      items: [
        { name: 'Fresh Orange', price: 70, image: img },
        { name: 'Pineapple', price: 80, image: img },
        { name: 'Watermelon', price: 75, image: img },
        { name: 'Apple', price: 65, image: img },
        { name: 'Mixed Fruit', price: 90, image: img },
      ],
    },
    {
      title: 'Mojito Natural',
      icon: Leaf,
      items: [
        { name: 'Classic Mint', price: 90, image: img },
        { name: 'Lemon Fresh', price: 85, image: img },
        { name: 'Cucumber Mint', price: 95, image: img },
      ],
    },
    {
      title: 'Mojito Flavour',
      icon: Sparkles,
      items: [
        { name: 'Strawberry Blast', price: 110, image: img },
        { name: 'Blue Curacao', price: 120, image: img },
        { name: 'Passion Fruit', price: 115, image: img },
        { name: 'Mango Twist', price: 110, image: img },
      ],
    },
    {
      title: 'Shakes',
      icon: IceCream,
      items: [
        { name: 'Chocolate Heaven', price: 130, image: img },
        { name: 'Strawberry Dream', price: 125, image: img },
        { name: 'Vanilla Classic', price: 115, image: img },
        { name: 'Oreo Crunch', price: 140, image: img },
      ],
    },
    {
      title: 'Our Special',
      icon: Star,
      items: [
        { name: 'Refresho Signature', price: 150, image: img },
        { name: 'Tropical Paradise', price: 145, image: img },
        { name: 'Berry Fusion', price: 140, image: img },
        { name: 'Green Detox', price: 135, image: img },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAFDF9] via-[#F0FDF7] to-[#F8FCFE] overflow-x-hidden relative">
      {/* Floating decorative elements */}
      <FloatingElements />

      {/* Main content */}
      <div className="relative z-10">
        {/* Header with logo */}
        <header className="pt-12 pb-8 px-6">
          <div className="flex justify-center">
            <img
              src={logo}
              alt="Re-Fresho"
              className="h-20 w-auto object-contain"
            />
          </div>
          
          {/* Tagline */}
          <p className="text-center font-bold mt-4 text-emerald-600/80">
            Freshness in Every Sip
          </p>
        </header>

        {/* Categories */}
        <main className="pb-16">
          {menuData.map((category, index) => (
            <CategorySection
              key={category.title}
              title={category.title}
              icon={category.icon}
              items={category.items}
              index={index}
            />
          ))}
        </main>

        {/* Footer */}
        <footer className="text-center pb-8 px-6">
          <div className="inline-flex items-center font-bold gap-2 text-emerald-600/80">
            <Leaf size={16} />
            <p>Made with love & freshness</p>
            <Leaf size={16} />
          </div>
        </footer>
      </div>
    </div>
  );
}
