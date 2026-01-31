import './App.css'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { PlusIcon } from './Icons/PlusIcon'
import { ShareIcon } from './Icons/ShareIcon'

function App() {


  return (
    <>
    <Button variant="primary" text="Share Brain" startIcon={<ShareIcon/>}></Button> 
    <Button variant= "secondary" text="Add content" startIcon={<PlusIcon/>}></Button>
    <Card type= "youtube" link="https://www.youtube.com/watch?v=oGKIhfenTRk" title= "youtube link"/>
    </>
  )
}

export default App
