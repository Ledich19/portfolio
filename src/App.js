
import './App.css'
import Menu from './components/Menu/Menu'
import Body from './components/Body/Body'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const hash = document.location.hash
    hash ? location = hash :  location = '#home'
  },[])
  return (
    <div id='slider-bg' className="App">
      <Menu/>
      <Body/>
    </div>
  )
}

export default App
