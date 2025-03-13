import React from 'react';

const LiveStreamCard = ({ stream }) => {
  const handleClick = () => {
    window.open(`https://www.youtube.com/watch?v=${stream.id}`, '_blank');
  };

  return (
    <div 
      onClick={handleClick}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
    >
      <div className="relative">
        <img 
          src={stream.thumbnail} 
          alt={stream.title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 bg-black bg-opacity-70 px-2 py-1 rounded-full flex items-center">
          <i className="fas fa-eye mr-2 text-white"></i>
          <span className="text-white text-sm">
            {stream.viewCount.toLocaleString()}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 line-clamp-2 dark:text-white">
          {stream.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          {stream.channelName}
        </p>
      </div>
    </div>
  );
};

export default LiveStreamCard;
