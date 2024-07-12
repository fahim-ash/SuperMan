// src/App.js
import React from 'react';
import RouterPaths from './routes';
import TopNavBar from './components/topNaveBar';

const App = () => {
  return (
    <div>
      <TopNavBar />
      <RouterPaths />
    </div>
  );
};

export default App;
