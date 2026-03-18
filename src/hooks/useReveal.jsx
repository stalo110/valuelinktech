import { useEffect, useRef, useState } from 'react';

function useReveal({ amount = 0.2, once = true, rootMargin = '0px 0px -10% 0px' } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: amount,
        rootMargin,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [amount, once, rootMargin]);

  return { ref, isVisible };
}

export default useReveal;
