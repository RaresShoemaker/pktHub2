import React, { useState, useEffect } from 'react';
import { useTransitionAnimation } from '../../context/TransitionAnimationContext/TransitionAnimationContext';
import { TRANSITION_DURATION } from '../../context/TransitionAnimationContext/constants';

const HeroImage: React.FC = () => {
    const { activeIndex, isTransitioning, nextIndex, category } = useTransitionAnimation();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 500);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const getImagesByCategory = (category: string | null): string[] => {
        const mobileSuffix = isMobile ? '-mobile' : '';

        switch (category) {
            case 'home':
                return [`/Home1${mobileSuffix}.jpg`, `/Home2${mobileSuffix}.jpg`, `/Home3${mobileSuffix}.jpg`];
            case 'media':
                return [`/Media1${mobileSuffix}.jpg`, `/Media2${mobileSuffix}.jpg`, `/Media3${mobileSuffix}.jpg`];
            case 'music':
                return [`/Music1${mobileSuffix}.jpg`, `/Music2${mobileSuffix}.jpg`, `/Music3${mobileSuffix}.jpg`];
            case 'games':
                return [`/Games1${mobileSuffix}.jpg`, `/Games2${mobileSuffix}.jpg`, `/Games3${mobileSuffix}.jpg`];
            case 'casino':
                return [`/Casino1${mobileSuffix}.jpg`, `/Casino2${mobileSuffix}.jpg`, `/Casino3${mobileSuffix}.jpg`];
            case 'technology':
                return [
                    `/Technology1${mobileSuffix}.jpg`,
                    `/Technology2${mobileSuffix}.jpg`,
                    `/Technology3${mobileSuffix}.jpg`
                ];
            default:
                return [`/Home1${mobileSuffix}.jpg`, `/Home2${mobileSuffix}.jpg`, `/Home3${mobileSuffix}.jpg`];
        }
    };

    const preloadImages = (images: string[]) => {
        images.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    };

    const images = getImagesByCategory(category);

    useEffect(() => {
        preloadImages(images);
    }, [images]);

    if (!images || images.length === 0) return null;

    if (images.length === 1) {
        return (
            <div className="relative h-[460px] md:h-full w-full">
                <img
                    src={images[0]}
                    alt="Hero Background"
                    className="absolute inset-0 h-[460px] md:h-full w-full object-cover"
                />
            </div>
        );
    }

    const currentImageIndex = activeIndex % images.length;
    const nextImageIndex = nextIndex % images.length;

    const transitionStyle = {
		transition: `opacity ${TRANSITION_DURATION}ms ease-in-out`
	};

    return (
        <div className="relative h-[460px] md:h-full w-full">
            {/* Next image (bottom layer) */}
            <img
                key={`next-${nextImageIndex}`}
                src={images[nextImageIndex]}
                alt="Hero Background Next"
                className="absolute inset-0 h-[460px] md:h-full w-full object-cover"
            />

            {/* Current image (top layer) */}
            <img
                key={`active-${currentImageIndex}`}
                src={images[currentImageIndex]}
                alt="Hero Background Current"
                className="absolute inset-0 h-[460px] md:h-full w-full object-cover"
                style={{
                    ...transitionStyle,
                    opacity: isTransitioning ? 0 : 1
                }}
            />
        </div>
    );
};

export default HeroImage;