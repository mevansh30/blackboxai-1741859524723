import React, { useState, useEffect } from 'react';
import LiveStreamCard from './LiveStreamCard';
import { fetchLiveStreams } from '../services/youtubeService';

const LiveStreamList = ({ searchQuery }) => {
  const [streams, setStreams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadStreams = async () => {
    try {
      const data = await fetchLiveStreams();
      setStreams(data);
      setError(null);
    } catch (err) {
      setError('Failed to load live streams. Please try again later.');
      console.error('Error loading streams:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStreams();
    // Refresh data every 30 seconds
    const interval = setInterval(loadStreams, 30000);
    return () => clearInterval(interval);
  }, []);

  const filteredStreams = searchQuery
    ? streams.filter(stream =>
        stream.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        stream.channelName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : streams;

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 p-4">
        <i className="fas fa-exclamation-circle mr-2"></i>
        {error}
      </div>
    );
  }

  if (filteredStreams.length === 0) {
    return (
      <div className="text-center text-gray-600 dark:text-gray-400 p-4">
        <i className="fas fa-video-slash text-4xl mb-2"></i>
        <p>No Live Streams Available</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {filteredStreams.map(stream => (
        <LiveStreamCard key={stream.id} stream={stream} />
      ))}
    </div>
  );
};

export default LiveStreamList;
