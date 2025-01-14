import React from 'react';
import MenuCategory from '../components/Menu/Menu';
import HeroContainer from '../components/Hero/HeroContainer';
import MobileMenu from '../components/Menu/MobileMenu';
import CategoryBgTransition from '../components/Category/CategoryBgTransition';

interface CategoryOverviewLayout {
    children: React.ReactNode;
}

const CategoryOverviewLayout: React.FC<CategoryOverviewLayout> = ({ children }) => {
    return (
        <CategoryBgTransition >
            {/* Main scrollable container */}
            <div className="flex-grow relative">
                {/* Hero Container */}
                <div className="absolute inset-0 overflow-x-hidden">
                    <HeroContainer />
                </div>

                {/* Overflow wrapper */}
                <div className="relative z-10">
                    <div className="p-4 mb-24">
                        <div className="grid md:grid-cols-[300px_1fr] gap-10">
                            {/* Menu section */}
                            <div className="md:block">
                                <div className='md:hidden flex justify-end mt-8'>
                                    <MobileMenu />
                                </div>
                                <div className="md:sticky md:top-4 md:max-h-[800px] max-h-[380px] h-screen">
                                    <MenuCategory />
                                </div>
                            </div>

                            {/* Main content with overflow control */}
                            <div className="overflow-x-hidden">
                                <div className="flex flex-col">
                                    {/* Spacer */}
                                    <div className="md:h-[500px]" />

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