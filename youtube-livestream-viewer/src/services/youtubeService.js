import axios from 'axios';

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const fetchLiveStreams = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        part: 'snippet',
        q: '#lifeinsoulcity',
        type: 'video',
        eventType: 'live',
        key: API_KEY,
        maxResults: 50
      }
    });

    const videoIds = response.data.items.map(item => item.id.videoId).join(',');
    
    if (!videoIds) {
      return [];
    }

    const statsResponse = await axios.get(`${BASE_URL}/videos`, {
      params: {
        part: 'statistics,liveStreamingDetails',
        id: videoIds,
        key: API_KEY
      }
    });

    return response.data.items.map((item, index) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high.url,
      channelName: item.snippet.channelTitle,
      viewCount: statsResponse.data.items[index]?.liveStreamingDetails?.concurrentViewers || 0
    }));
  } catch (error) {
    console.error('Error fetching live streams:', error);
    return [];
  }
};
