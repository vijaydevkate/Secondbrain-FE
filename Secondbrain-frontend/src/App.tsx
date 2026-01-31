import './App.css'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { PlusIcon } from './Icons/PlusIcon'
import { ShareIcon } from './Icons/ShareIcon'

function App() {


  return (
    <>
    <div className='flex p-4 justify-end gap-4'>
      <Button variant="primary" text="Share Brain" startIcon={<ShareIcon/>}>
      </Button> 
      <Button variant= "secondary" text="Add content" startIcon={<PlusIcon/>}></Button>
    </div>

    <div className='flex gap-4 p-4 flex-wrap'>
      <Card type= "youtube" link="https://www.youtube.com/watch?v=WovgAKWSYY4" title= "youtube link"/>
      <Card type= "youtube" link="https://www.youtube.com/watch?v=oGKIhfenTRk" title= "youtube link"/>
    </div>
    </>
  )
}

export default App
