import './App.css';

import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './router';
import Provider from './context';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <AppRoutes />
      </Provider>
    </BrowserRouter>
  );
}

export default App
