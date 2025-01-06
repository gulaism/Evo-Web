import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/common/base.scss'
import UserRouter from './router/UserRouter'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<UserRouter />}/>
        <Route path='/admin/*' element={<h1>Admin</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
