import { motion } from 'framer-motion';
import { useState } from 'react';

function SmartImage({
  src,
  alt,
  className = '',
  containerClassName = '',
  priority = false,
  overlayClassName = '',
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      <motion.img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: loaded ? 1 : 0.4, scale: loaded ? 1 : 1.04 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        onLoad={() => setLoaded(true)}
        className={className}
      />
      <div
        className={`pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),transparent_40%,rgba(10,25,41,0.12))] transition-opacity duration-700 ${
          loaded ? 'opacity-0' : 'opacity-100'
        } ${overlayClassName}`}
      />
    </div>
  );
}

export default SmartImage;
