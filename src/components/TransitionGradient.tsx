import React from 'react';
import { useTransitionAnimation } from '../context/TransitionAnimationContext/TransitionAnimationContext';

interface TransitionGradientProps {
    defaultGradient?: string[];
}

const TransitionGradient: React.FC<TransitionGradientProps> = () => {
    const { activeIndex, isTransitioning, nextIndex, category } = useTransitionAnimation();

    const getGradientsByCategory = (category: string | null): string[][] => {
        switch (category) {
            case 'home':
                return [
                    ['#090D23', '#090D23', '#090D23'],
                    ['#621916', '#621916', '#621916'],
                    ['#122C7D', '#122C7D', '#122C7D']
                ];
            case 'media':
                return [
                    ['#090D23', '#090D23', '#090D23'],
                    ['#621916', '#621916', '#621916'],
                    ['#177CCF', '#177CCF', '#177CCF']
                ];
            case 'music':
                return [
                    ['#124C7B', '#124C7B', '#124C7B'],
                    ['#090D23', '#090D23', '#090D23'],
                    ['#611113', '#611113', '#611113']
                ];
            case 'games':
                return [
                    ['#611113', '#611113', '#611113'],
                    ['#090D23', '#090D23', '#090D23'],
                    ['#177CCF', '#177CCF', '#177CCF']
                ];
            case 'casino':
                return [
                    ['#090D23', '#090D23', '#090D23'],
                    ['#611113', '#611113', '#611113'],
                    ['#177CCF', '#177CCF', '#177CCF'],
                    ['#090D23', '#090D23', '#090D23']
                ];
            case 'technology':
                return [
                    ['#124C7B', '#124C7B', '#124C7B'],
                    ['#611113', '#611113', '#611113'],
                    ['#090D23', '#090D23', '#090D23']
                ];
            default:
                return [
                    ['#090D23', '#090D23', '#090D23'],
                    ['#611113', '#611113', '#611113'],
                    ['#177CCF', '#177CCF', '#177CCF']
                ];
        }
    };

    const gradients = getGradientsByCategory(category);
    const currentGradient = gradients[activeIndex];
    const nextGradient = gradients[nextIndex];

    const baseStyle = {
        zIndex: 1,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '180%',
        transition: 'all 1000ms ease-in-out',
    };

    return (
        <>
            {/* Current gradient layers */}
            <div
                key={`current-1-${activeIndex}`}
                className='absolute w-screen flex-shrink-0 md:bottom-[-215px] md:h-[429px] h-[200px] bottom-[100px]'
                style={{
                    ...baseStyle,
                    background: currentGradient[0],
                    filter: 'blur(44px)',
                    opacity: isTransitioning ? 0 : 1,
                }}
            />
            <div
                key={`current-2-${activeIndex}`}
                className='absolute w-screen flex-shrink-0 md:bottom-[-315px] md:h-[429px] h-[200px] bottom-[50px]'
                style={{
                    ...baseStyle,
                    background: currentGradient[1],
                    filter: 'blur(54px)',
                    opacity: isTransitioning ? 0 : 1,
                }}
            />
            <div
                key={`current-3-${activeIndex}`}
                className='absolute w-screen flex-shrink-0 md:bottom-[-315px] md:h-[429px] h-[200px] bottom-[0px]'
                style={{
                    ...baseStyle,
                    background: currentGradient[2],
                    filter: 'blur(64px)',
                    opacity: isTransitioning ? 0 : 1,
                }}
            />

            {/* Next gradient layers */}
            <div
                key={`next-1-${nextIndex}`}
                className='absolute w-screen flex-shrink-0 md:bottom-[-215px] md:h-[429px] h-[200px] bottom-[100px]'
                style={{
                    ...baseStyle,
                    background: nextGradient[0],
                    filter: 'blur(44px)',
                    opacity: isTransitioning ? 1 : 0,
                }}
            />
            <div
                key={`next-2-${nextIndex}`}
                className='absolute w-screen flex-shrink-0 md:bottom-[-315px] md:h-[429px] h-[200px] bottom-[50px]'
                style={{
                    ...baseStyle,
                    background: nextGradient[1],
                    filter: 'blur(54px)',
                    opacity: isTransitioning ? 1 : 0,
                }}
            />
            <div
                key={`next-3-${nextIndex}`}
                className='absolute w-screen flex-shrink-0 md:bottom-[-315px] md:h-[429px] h-[200px] bottom-[0px]'
                style={{
                    ...baseStyle,
                    background: nextGradient[2],
                    filter: 'blur(64px)',
                    opacity: isTransitioning ? 1 : 0,
                }}
            />
        </>
    );
};

export default TransitionGradient;