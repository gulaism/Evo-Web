import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/common/base.scss'
import UserRouter from './router/UserRouter'
import { Provider } from 'react-redux'
import store from './redux/store';
import AdminRouter from './router/AdminRouter';

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<UserRouter />} />
          <Route path="/admin/*" element={<AdminRouter />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App
