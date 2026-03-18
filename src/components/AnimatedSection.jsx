import { motion, useReducedMotion } from 'framer-motion';
import useReveal from '../hooks/useReveal';

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function AnimatedSection({ as = 'section', className = '', children, delay = 0, amount = 0.2 }) {
  const MotionTag = motion[as] || motion.section;
  const shouldReduceMotion = useReducedMotion();
  const { ref, isVisible } = useReveal({ amount });

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={
        shouldReduceMotion
          ? {
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.3, delay } },
            }
          : sectionVariants
      }
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}

export default AnimatedSection;
