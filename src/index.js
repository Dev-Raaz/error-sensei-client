import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

// @User defined imports
import PostsProvider from './context/PostsCotext';
import ScrolledProvider from './context/ScrolledContext';
import TechnologiesProvider from './context/TechnlogiesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Provides the posts */}
    <PostsProvider>
      {/* Provides how much the user has scrolled  */}
      <ScrolledProvider>
        {/* Provides the different technologies */}
        <TechnologiesProvider>
          <App />
        </TechnologiesProvider>
      </ScrolledProvider>
    </PostsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
