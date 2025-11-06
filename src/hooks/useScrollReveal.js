import { useEffect, useRef, useState } from 'react';

export const useScrollReveal = (options = {}) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setIsVisible(true);
            // Une fois visible, on arrête d'observer (l'animation ne se joue qu'une fois)
            if (options.once !== false) {
                observer.unobserve(element);
            }
            } else if (options.once === false) {
            setIsVisible(false);
            }
        },
        {
            threshold: options.threshold || 0.1,
            rootMargin: options.rootMargin || '0px',
        }
        );

        observer.observe(element);

        return () => {
        if (element) {
            observer.unobserve(element);
        }
        };
    }, [options.threshold, options.rootMargin, options.once]);

    return [ref, isVisible];
};