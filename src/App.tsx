import { Home } from 'lucide-react'
import Header from './components/Header'
import HomePageBody from './components/HomePageBody'

function App() {

  return (
    <div className='bg-[var(--background-100)] h-[100vh]'>
      <Header/>
      <HomePageBody/>
    </div>
  )
}

export default App
