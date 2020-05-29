import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { VideoListProvider } from './contexts/VideoListContext';
import './index.css';
import App from './components/App/App';

ReactDOM.render(
    <BrowserRouter>
      <VideoListProvider>
        <App />
      </VideoListProvider>
    </BrowserRouter>,
  document.getElementById('root')
);