import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './components/App/App';
import store from './slices/index.js';
import SearchParamsProvider from './provider/SearchParamsProvider';

const init = () => {
  const root = createRoot(document.getElementById('root'));

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <HashRouter>
          <SearchParamsProvider>
            <App />
          </SearchParamsProvider>
        </HashRouter>
      </Provider>
    </React.StrictMode>,
  );
};

init();
