import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

function TiltCard({ children, className = '', as = 'div' }) {
  const ref = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, { stiffness: 200, damping: 15 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 15 });

  const handleMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const degree = 15;
    // Rotate so the cursor "presses" the card down at the hovered point
    rotateX.set(-((y - midY) / midY) * degree);
    rotateY.set(-((x - midX) / midX) * degree);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const MotionComponent = motion[as] || motion.div;

  return (
    <MotionComponent
      ref={ref}
      className={className}
      style={{ perspective: 1000, rotateX: springX, rotateY: springY }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileHover={{ scale: 1.05 }}
    >
      {children}
    </MotionComponent>
  );
}

export default TiltCard;
