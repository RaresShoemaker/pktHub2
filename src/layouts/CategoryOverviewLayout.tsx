import React, { useEffect, useState, useCallback } from 'react';
import MenuCategory from '../components/Menu/Menu';
import HeroContainer from '../components/Hero/HeroContainer';
import MobileMenu from '../components/Menu/MobileMenu';
import CategoryBgTransition from '../components/Category/CategoryBgTransition';

interface CategoryOverviewLayout {
    children: React.ReactNode;
}

const CategoryOverviewLayout: React.FC<CategoryOverviewLayout> = ({ children }) => {
    const [hasScrolled, setHasScrolled] = useState(false);

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
                top: 500,
                behavior: 'smooth'
            });
        }
    }, [hasScrolled]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <CategoryBgTransition>
            {/* Main scrollable container */}
            <div className="flex-grow relative">
                {/* Hero Container */}
                <div className="absolute inset-0 overflow-x-hidden">
                    <HeroContainer />
                </div>

                {/* Overflow wrapper */}
                <div className="relative z-10">
                    <div className="pl-4 mb-24">
                        <div className="grid md:grid-cols-[300px_1fr] md:gap-10">
                            {/* Menu section */}
                            <div className="md:block">
                                <div className="md:hidden p-4 md:p-0 flex justify-end mt-8">
                                    <MobileMenu />
                                </div>
                                <div 
                                    className={`md:sticky md:top-4 md:max-h-[800px] max-h-[380px] h-screen transition-transform duration-1000 ease-in-out`}
                                >
                                    <MenuCategory />
                                </div>
                            </div>

                            {/* Main content with overflow control */}
                            <div className="overflow-x-hidden">
                                <div className="flex flex-col">
                                    {/* Spacer */}
                                    <div className="md:h-[550px]" />

                                    {/* Content */}
                                    <div className="w-full">
                                        {children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CategoryBgTransition>
    );
};

export default CategoryOverviewLayout;