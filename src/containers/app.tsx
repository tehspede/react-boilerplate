import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import store from '../store';
import Counter from './counter';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="*" element={<Navigate to="/counter" />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
