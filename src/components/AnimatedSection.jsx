import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function AnimatedSection({ as = 'section', className = '', children, delay = 0 }) {
  const MotionTag = motion[as] || motion.section;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}

export default AnimatedSection;
