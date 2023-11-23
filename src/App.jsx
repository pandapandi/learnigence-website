
import Container from './components/Container'
import './App.css'
import LeftPanel from './components/LeftPanel'

function App() {

  return (
    <div className='w-screen max-w-screen h-screen flex overflow-scroll'>
      <LeftPanel />
      <Container />
      
    </div>
  )
}

export default App

