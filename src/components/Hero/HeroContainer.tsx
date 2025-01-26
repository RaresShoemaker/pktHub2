import React, { useMemo } from 'react';
import HeroImage from './HeroImage';
import TransitionGradient from '../TransitionGradient';
import HeroText from './HeroText';
import PktHubLogo from '../../assets/PktHubLogo.svg';
import { Link } from 'react-router-dom';
import { useTransitionAnimation } from '../../context/TransitionAnimationContext/TransitionAnimationContext';
import { cn } from '../../lib/utils';

const CtaButton = ({ href, label }: { href: string; label: string }) => (
    <Link to={href} target='_blank'>
        <button className='rounded-full bg-primary text-white font-medium w-64 h-10' aria-label={label}>
            {label}
        </button>
    </Link>
);

const HeroContainer: React.FC = () => {
    const { category, activeIndex, isTransitioning } = useTransitionAnimation();

    const hrefCta = useMemo(() => [
        'https://www.youtube.com/watch?v=pr_nVsfoUm8',
        'https://podcasts.apple.com/us/podcast/the-charlie-shrem-show/id1462346183',
        'https://www.amazon.com/gp/video/detail/amzn1.dv.gti.7d23bc05-bf4e-4427-ac47-79d0d3c0142e?autoplay=0&ref_=atv_cf_strg_wb',
        'https://watch.amazon.com/detail?gti=amzn1.dv.gti.ef87b53e-6595-4fc4-b949-3789a8a39672',
        'https://www.amazon.com/Fire-Peter-Facinelli/dp/B0CHJK71MQ'
    ], []);

    const ctaLabel = useMemo(() => activeIndex === 1 ? 'Listen Now' : 'Watch Now', [activeIndex]);

    return (
        <>
            {category !== 'creators' ? (
                <div className={cn('absolute top-0 left-0 right-0 md:h-[700px] w-full', !category ? 'h-[550px]' : category !== "home" ? 'h-[470px]' : 'h-[550px]')}>
                    <HeroImage />
                    <TransitionGradient />
                </div>
            ) : (
                <>
                    <div className='md:h-[900px]'>
                        <HeroImage />
                        <div className='md:block absolute top-0 left-0 right-0 h-[670px] overflow-hidden md:h-[600px] w-full'>
                            <TransitionGradient />
                        </div>
                        <div className={cn('hidden md:block absolute w-64 left-[40%] transition-opacity duration-1000 z-40', isTransitioning ? 'opacity-0' : activeIndex === 0 ? 'opacity-0 hidden' : 'opacity-100', activeIndex === 2 ? 'top-[350px]' : activeIndex === 4 ? 'top-[335px]' : 'top-[300px]')}>
                            <CtaButton href={hrefCta[activeIndex]} label={ctaLabel} />
                        </div>
                    </div>
                    <div className={cn('md:hidden absolute flex justify-center w-full transition-opacity duration-1000 z-40 mt-2', isTransitioning ? 'opacity-0' : 'opacity-100')}>
                        <CtaButton href={hrefCta[activeIndex]} label={ctaLabel} />
                    </div>
                </>
            )}
            <div className={cn('z-50 absolute top-0 md:left-auto md:right-10 left-10 transition-all duration-500 ease-in-out transform')}>
                <Link to='/'>
                    <img src={PktHubLogo} alt='Packet Hub Logo' className='w-14 h-14 mx-auto mt-10 fixed md:static' />
                </Link>
            </div>
            {category !== 'creators' && <HeroText description='Discover content platforms from around the world' />}
        </>
    );
};

export default HeroContainer;