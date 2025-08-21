import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/View/Index'
import { CssBaseline } from '@mui/material'
import Login from './auth/Login'
import SignUp from './auth/SignUp'

function App() {

  return (
      <BrowserRouter>
      <CssBaseline />
      <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        <main style={{flexGrow: 1}}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/log-in' element={<Login />} />
            <Route path='/sign-up' element={<SignUp />} />
          </Routes>
        </main>
      </div>
      </BrowserRouter>
  )
}

export default App
