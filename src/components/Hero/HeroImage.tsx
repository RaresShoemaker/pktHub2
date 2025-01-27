import React, { useState, useEffect, useMemo } from 'react';
import { useTransitionAnimation } from '../../context/TransitionAnimationContext/TransitionAnimationContext';
import { TRANSITION_DURATION } from '../../context/TransitionAnimationContext/constants';
import { debounce } from 'lodash';

const HeroImage: React.FC = () => {
    const { activeIndex, isTransitioning, nextIndex, category } = useTransitionAnimation();
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        const checkDevice = () => {
            if(window.innerWidth < 768) {
                setIsMobile(true);
                setIsTablet(false);
            } else if(window.innerWidth < 1024 && window.innerWidth >= 769) {
                setIsMobile(false);
                setIsTablet(true);
            } else {
                setIsMobile(false);
                setIsTablet(false);
            }
        };


        const debouncedCheckMobile = debounce(checkDevice, 200);
        checkDevice();
        window.addEventListener('resize', debouncedCheckMobile);
        return () => window.removeEventListener('resize', debouncedCheckMobile);
    }, []);

    const getImagesByCategory = (category: string | null): string[] => {
        const suffix = isMobile ? '-mobile' : isTablet && category === "creators" ? '-tablet' : '';

        switch (category) {
            case 'home':
                return [`/Home1${suffix}.jpg`, `/Home2${suffix}.jpg`, `/Home3${suffix}.jpg`];
            case 'media':
                return [`/Media1${suffix}.jpg`, `/Media2${suffix}.jpg`, `/Media3${suffix}.jpg`];
            case 'music':
                return [`/Music1${suffix}.jpg`, `/Music2${suffix}.jpg`, `/Music3${suffix}.jpg`];
            case 'games':
                return [`/Games1${suffix}.jpg`, `/Games2${suffix}.jpg`, `/Games3${suffix}.jpg`];
            case 'casino':
                return [`/Casino1${suffix}.jpg`, `/Casino2${suffix}.jpg`, `/Casino3${suffix}.jpg`];
            case 'creators':
                return [`/Creators1${suffix}.jpg`, `Creators2${suffix}.jpg`, `Creators3${suffix}.jpg`, `Creators4${suffix}.jpg`, `Creators5${suffix}.jpg`];
            case 'technology':
                return [
                    `/Technology1${suffix}.jpg`,
                    `/Technology2${suffix}.jpg`,
                    `/Technology3${suffix}.jpg`
                ];
            default:
                return [`/Home1${suffix}.jpg`, `/Home2${suffix}.jpg`, `/Home3${suffix}.jpg`];
        }
    };

    const images = useMemo(() => getImagesByCategory(category), [category, isMobile, isTablet]);

    useEffect(() => {
        const preloadImages = (images: string[]) => {
            images.forEach((src) => {
                const img = new Image();
                img.src = src;
            });
        };
        preloadImages(images);
    }, [images]);

    if (!images || images.length === 0) return null;

    if (images.length === 1) {
        return (
            <div className="md:relative h-[460px] xl:h-screen xl:max-h-[140%] w-full">
                <img
                    src={images[0]}
                    alt="Hero Background"
                    className="absolute h-[460px] md:h-full w-full object-cover"
                />
            </div>
        );
    }

    const currentImageIndex = activeIndex % images.length;
    const nextImageIndex = nextIndex % images.length;

    const transitionStyle = {
		transition: `opacity ${TRANSITION_DURATION}ms ease-in-out`
	};

    if (images.length === 1) {
        return (
            <div className="md:relative h-[460px] xl:h-screen xl:max-h-[140%] w-full">
                <img
                    src={images[0]}
                    alt="Hero Background"
                    className="absolute inset-0 h-[460px] md:h-full w-full object-cover"
                />
            </div>
        );
    }

    return (
        <div className="md:relative h-[460px] md:h-full xl:h-screen xl:max-h-[140%] w-full">
            {/* Next image (bottom layer) */}
            <img
                key={`next-${nextImageIndex}`}
                src={images[nextImageIndex]}
                loading='lazy'
                alt="Hero Background Next"
                className="absolute md:inset-0 md:h-full w-full object-cover"
            />

            {/* Current image (top layer) */}
            <img
                key={`active-${currentImageIndex}`}
                src={images[currentImageIndex]}
                alt="Hero Background Current"
                className="absolute md:inset-0 md:h-full w-full object-cover"
                style={{
                    ...transitionStyle,
                    opacity: isTransitioning ? 0 : 1
                }}
            />
        </div>
    );
};

export default React.memo(HeroImage);