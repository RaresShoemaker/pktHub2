import React from 'react';
import CreatorsCard from './CreatorsCard';



const CreatorsContainer: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {data.map((movie, index) => (
        <CreatorsCard
          key={`${movie.title}-${index}`}
          title={movie.title}
          description={movie.description}
          img={movie.img}
          genre={movie.genre}
          alt={movie.alt}
        />
      ))}
    </div>
  );
};

export default CreatorsContainer;