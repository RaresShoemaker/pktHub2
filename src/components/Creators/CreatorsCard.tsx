import React from 'react';

export interface CreatorsCardProps {
  alt: string;
  img?: React.ReactNode | string;
  logo?: React.ReactNode | string;
  description: string;
  title: string;
  genre?: string;
}

const CreatorsCard: React.FC<CreatorsCardProps> = ({
  alt, 
  img, 
  logo, 
  description, 
  title, 
  genre
}) => {
  return (
    <div className="flex flex-col gap-3">
      {/* Image Container */}
      <div className="relative w-64 h-60">
        {/* Image */}
        <div className="rounded-4xl overflow-hidden">
          {typeof img === 'string' && (
            <img 
              src={img}
              alt={alt}
              className="w-full h-full object-cover"
            />
          )}
          {typeof img === 'object' && img}
          {typeof logo === 'string' && (
            <img 
              src={logo}
              alt={alt}
              className="w-full h-full object-cover"
            />
          )}
          {typeof logo === 'object' && logo}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1">
        <div>
        <h3 className="text-white text-lg font-semibold">{title}</h3>
        </div>
        <div className='h-auto min-h-[36px] w-auto max-w-64'>
        <p className="text-sm text-gray-100 line-clamp-2">{description}</p>
        </div>
        <div>
        {genre && (
             <p className="text-sm font-semibold text-gray-300 line-clamp-2">{genre}</p>
        )}
        </div>
      </div>
    </div>
  );
};

export default CreatorsCard;