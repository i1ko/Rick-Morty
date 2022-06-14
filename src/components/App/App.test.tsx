import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore } from '../../redux/store';
import App from './App';
import {BrowserRouter} from "react-router-dom";

test('renders learn react link', () => {
  const { getByText } = render(
      <React.StrictMode>
          <Provider store={setupStore()}>
              <BrowserRouter>
                  <App />
              </BrowserRouter>
          </Provider>
      </React.StrictMode>
  );

  // expect(getByText(/learn/i)).toBeInTheDocument();
});
