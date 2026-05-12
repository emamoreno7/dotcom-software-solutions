import { useInView } from 'react-intersection-observer';

export function useScrollAnimation(threshold = 0.1, triggerOnce = true) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  return { ref, isVisible: inView };
}
