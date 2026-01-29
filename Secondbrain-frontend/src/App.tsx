import './App.css'
import { Button } from './components/Button'
import { ShareIcon } from './Icons/ShareIcon'

function App() {


  return (
    <>
    <Button variant="primary" text="Share" startIcon={<ShareIcon/>}></Button> 
    </>
  )
}

export default App
