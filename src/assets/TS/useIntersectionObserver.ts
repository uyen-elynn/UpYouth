import { ref, onMounted, onUnmounted } from 'vue';

export function useIntersectionObserver(targetRef: any, callback: (isVisible: boolean) => void) {
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    if (!targetRef.value) return;

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          callback(entry.isIntersecting);   
        });
      },
      { threshold: 0.1 } // Trigger callback when 10% of the element is visible
    );

    observer.observe(targetRef.value);
  });

  onUnmounted(() => {
    if (observer && targetRef.value) {
      observer.unobserve(targetRef.value);
    }
  });
}
