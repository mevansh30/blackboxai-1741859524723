import React, { useState } from 'react';
import LiveStreamList from './components/LiveStreamList';
import SearchBar from './components/SearchBar';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-accent">
                <i className="fab fa-youtube mr-2"></i>
                SoulCity Live
              </h1>
              <DarkModeToggle />
            </div>
            <SearchBar 
              value={searchQuery}
              onChange={setSearchQuery}
            />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <LiveStreamList searchQuery={searchQuery} />
      </main>

      <footer className="bg-white dark:bg-gray-800 shadow-md mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-gray-600 dark:text-gray-400">
            Powered by YouTube Data API
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
