import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/common/base.scss'
import UserRouter from './router/UserRouter'
import { Provider } from 'react-redux'
import store from './redux/store';

function App() {
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<UserRouter />} />
          <Route path="/admin/*" element={<h1>Admin</h1>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App
