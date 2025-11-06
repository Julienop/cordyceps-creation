import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const ScrollReveal = ({ 
    children, 
    animation = 'fade-up',
    delay = 0,
    duration = 0.6,
    threshold = 0.1,
    once = true,
    className = ''
    }) => {
    const [ref, isVisible] = useScrollReveal({ threshold, once });

    const animations = {
        'fade-up': {
        hidden: 'opacity-0 translate-y-10',
        visible: 'opacity-100 translate-y-0'
        },
        'fade-down': {
        hidden: 'opacity-0 -translate-y-10',
        visible: 'opacity-100 translate-y-0'
        },
        'fade-left': {
        hidden: 'opacity-0 translate-x-10',
        visible: 'opacity-100 translate-x-0'
        },
        'fade-right': {
        hidden: 'opacity-0 -translate-x-10',
        visible: 'opacity-100 translate-x-0'
        },
        'fade': {
        hidden: 'opacity-0',
        visible: 'opacity-100'
        },
        'zoom-in': {
        hidden: 'opacity-0 scale-95',
        visible: 'opacity-100 scale-100'
        },
        'zoom-out': {
        hidden: 'opacity-0 scale-105',
        visible: 'opacity-100 scale-100'
        },
        'slide-up': {
        hidden: 'translate-y-20 opacity-0',
        visible: 'translate-y-0 opacity-100'
        },
        'flip': {
        hidden: 'opacity-0 rotate-y-90',
        visible: 'opacity-100 rotate-y-0'
        }
    };

    const selectedAnimation = animations[animation] || animations['fade-up'];

    return (
        <div
        ref={ref}
        className={`
            transition-all
            ${className}
            ${isVisible ? selectedAnimation.visible : selectedAnimation.hidden}
        `}
        style={{
            transitionDuration: `${duration}s`,
            transitionDelay: `${delay}s`,
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }}
        >
        {children}
        </div>
    );
};

export default ScrollReveal;