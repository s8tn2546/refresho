import { motion } from 'motion/react';

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Mint green top left */}
      <motion.div
        className="absolute top-[10%] left-[5%] w-12 h-12 rounded-full bg-gradient-to-br from-emerald-300/20 to-emerald-400/30 blur-sm"
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
          scale: [1, 1.35, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Orange slice top right */}
      <motion.div
        className="absolute top-[15%] right-[8%] w-16 h-16 rounded-full bg-gradient-to-br from-yellow-300/25 to-orange-400/35 blur-md"
        animate={{
          y: [0, 45, 0],
          rotate: [0, -35, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Sky bubble middle left */}
      <motion.div
        className="absolute top-[35%] left-[10%] w-8 h-8 rounded-full bg-gradient-to-br from-sky-200/30 to-sky-300/40 blur-sm"
        animate={{
          y: [0, -50, 0],
          x: [0, 25, 0],
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      />

      {/* Watermelon pink circle middle right */}
      <motion.div
        className="absolute top-[45%] right-[5%] w-14 h-14 rounded-full bg-gradient-to-br from-pink-300/20 to-pink-400/30 blur-md"
        animate={{
          y: [0, 35, 0],
          rotate: [0, 45, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Mint green bubble bottom left */}
      <motion.div
        className="absolute bottom-[20%] left-[7%] w-10 h-10 rounded-full bg-gradient-to-br from-emerald-200/25 to-green-300/35 blur-sm"
        animate={{
          y: [0, -35, 0],
          x: [0, -20, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.5,
        }}
      />

      {/* Yellow citrus bottom right */}
      <motion.div
        className="absolute bottom-[25%] right-[10%] w-12 h-12 rounded-full bg-gradient-to-br from-yellow-200/30 to-yellow-400/40 blur-md"
        animate={{
          y: [0, 40, 0],
          rotate: [0, -30, 0],
          scale: [1, 1.28, 1],
        }}
        transition={{
          duration: 2.6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.8,
        }}
      />

      {/* Small sky bubble top center */}
      <motion.div
        className="absolute top-[25%] left-[50%] w-6 h-6 rounded-full bg-gradient-to-br from-sky-300/25 to-blue-300/35 blur-sm"
        animate={{
          y: [0, -45, 0],
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.3,
        }}
      />

      {/* Pink floating element lower left */}
      <motion.div
        className="absolute bottom-[35%] left-[15%] w-7 h-7 rounded-full bg-gradient-to-br from-pink-200/20 to-rose-300/30 blur-sm"
        animate={{
          y: [0, 30, 0],
          x: [0, 15, 0],
          scale: [1, 1.35, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 2.1,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2.5,
        }}
      />

      {/* New green element top center-left */}
      <motion.div
        className="absolute top-[20%] left-[25%] w-9 h-9 rounded-full bg-gradient-to-br from-green-300/25 to-emerald-400/35 blur-sm"
        animate={{
          y: [0, -42, 0],
          x: [0, 25, 0],
          scale: [1, 1.4, 1],
          opacity: [0.4, 0.85, 0.4],
        }}
        transition={{
          duration: 2.7,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.8,
        }}
      />

      {/* New green element middle center */}
      <motion.div
        className="absolute top-[50%] left-[40%] w-11 h-11 rounded-full bg-gradient-to-br from-lime-300/20 to-green-400/30 blur-md"
        animate={{
          y: [0, 38, 0],
          rotate: [0, 30, 0],
          scale: [1, 1.32, 1],
        }}
        transition={{
          duration: 2.9,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.9,
        }}
      />

      {/* New green element bottom center-right */}
      <motion.div
        className="absolute bottom-[15%] right-[25%] w-8 h-8 rounded-full bg-gradient-to-br from-emerald-300/30 to-teal-400/35 blur-sm"
        animate={{
          y: [0, -32, 0],
          x: [0, -18, 0],
          scale: [1, 1.34, 1],
          opacity: [0.35, 0.75, 0.35],
        }}
        transition={{
          duration: 2.3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2.2,
        }}
      />

      {/* New green element middle right */}
      <motion.div
        className="absolute top-[30%] right-[15%] w-10 h-10 rounded-full bg-gradient-to-br from-green-200/25 to-emerald-300/30 blur-sm"
        animate={{
          y: [0, 44, 0],
          rotate: [0, -40, 0],
          scale: [1, 1.36, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.3,
        }}
      />
    </div>
  );
}
