import Header from './components/Header'
import AppRoutes from './routes/AppRoutes'
import { BrowserRouter } from 'react-router-dom'
function App() {

  return (
    <div>
      <Header/>
      <BrowserRouter basename='/tic-tac-turbo'>
        <AppRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App
