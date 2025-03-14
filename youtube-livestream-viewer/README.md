# SoulCity Live - YouTube Livestream Viewer

A React application that displays live streams from YouTube with the hashtag #lifeinsoulcity. Features include:
- Real-time live stream display with thumbnails
- Live viewer count
- Dark mode support
- Search functionality
- Responsive design
- Auto-refresh every 30 seconds

## Features
- Modern, responsive design with Tailwind CSS
- Dark mode toggle
- Search functionality
- Live viewer count display
- Clickable stream cards that open YouTube
- Automatic refresh of stream data
- Error handling and loading states

## Prerequisites
- Node.js (v14 or higher)
- YouTube Data API key

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your YouTube API key:
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create a new project or select an existing one
   - Enable the YouTube Data API v3
   - Create credentials (API key)
   - Copy your API key
   - Create a `.env` file in the root directory
   - Add your API key:
     ```
     REACT_APP_YOUTUBE_API_KEY=your_youtube_api_key_here
     ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open [http://localhost:8000](http://localhost:8000) to view the application

## Technologies Used
- React
- Tailwind CSS
- YouTube Data API v3
- Font Awesome Icons
- Google Fonts (Inter)

## License
MIT License
