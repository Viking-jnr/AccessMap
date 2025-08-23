import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/View/Index'
import { CssBaseline } from '@mui/material'
import Login from './auth/Login'
import SignUp from './auth/SignUp'
import { AuthProvider } from './Context/authContext'
import Report from './Dashboards/ReportBarrier'

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
      <CssBaseline />
      <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        <main style={{flexGrow: 1}}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/log-in' element={<Login />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/report-barrier' element={<Report />} />
          </Routes>
        </main>
      </div>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
