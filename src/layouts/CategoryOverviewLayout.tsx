import React, { useEffect, useState, useCallback } from 'react';
import MenuCategory from '../components/Menu/Menu';
import HeroContainer from '../components/Hero/HeroContainer';
import NavbarMobile from '../components/NavbarMobile';
import Footer from '../components/Footer';
import CategoryBgTransition from '../components/Category/CategoryBgTransition';
import { useSearchParams } from 'react-router-dom';
import { cn } from '../lib/utils';

interface CategoryOverviewLayout {
    children: React.ReactNode;
}

const CategoryOverviewLayout: React.FC<CategoryOverviewLayout> = ({ children }) => {
    const [hasScrolled, setHasScrolled] = useState(false);
        const [searchParams] = useSearchParams();
        const category = React.useMemo(() => searchParams.get('category'), [searchParams]);

    const handleScroll = useCallback(() => {
        // Only execute on md screens and above (768px is Tailwind's md breakpoint)
        if (window.innerWidth < 800) return;

        const scrollPosition = window.scrollY;

        // Reset states when user scrolls back to top
        if (scrollPosition === 0) {
            setHasScrolled(false);
            return;
        }

        // Trigger scroll down when user starts scrolling
        if (!hasScrolled && scrollPosition > 50) {
            setHasScrolled(true);
            window.scrollTo({
                top: category !== 'creators' ? 500 : 430,
                behavior: 'smooth'
            });
        }
    }, [category, hasScrolled]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <CategoryBgTransition>
            {/* Main scrollable container */}
            <div className="flex-grow relative">
                {/* Hero Container */}
                <div className="hidden md:block absolute inset-0 overflow-x-hidden">
                    <HeroContainer />
                </div>

                {/* Overflow wrapper */}
                <div className="relative z-10 overflow-y-auto h-screen md:overflow-y-hidden md:h-auto">
                    <NavbarMobile />
                    <div className="md:hidden absolute inset-0 overflow-x-hidden">
                    <HeroContainer />
                </div>
                    <div className="pl-4 mb-24">
                        <div className="grid md:grid-cols-[300px_1fr] md:gap-10">
                            {/* Menu section */}
                            <div className="md:block">
                                <div 
                                    className={`md:sticky md:top-4 md:max-h-[800px] max-h-[380px] h-screen transition-transform duration-1000 ease-in-out`}
                                >
                                    <MenuCategory />
                                </div>
                            </div>

                            {/* Main content with overflow control */}
                            <div className="overflow-x-hidden z-10 md:z-0 mt-14 md:mt-0">
                                <div className="flex flex-col">
                                    {/* Spacer */}
                                    <div className={cn(category !== 'creators' ? "md:h-[550px]" : "md:h-[430px]" )} />

                                    {/* Content */}
                                    <div className="w-full">
                                        {children}
                                    </div>
                                </div>
                            </div>
                        </div>
    
                    </div>
                    <Footer />
                </div>
            </div>
        </CategoryBgTransition>
    );
};

export default CategoryOverviewLayout;