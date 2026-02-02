import { useState } from 'react'
import './App.css'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { CreateContentModel } from './components/CreateContentModel'
import { PlusIcon } from './Icons/PlusIcon'
import { ShareIcon } from './Icons/ShareIcon'
import { Sidebar } from './components/Sidebar'
import { Sidebaritem } from './components/Sidebaritem'

function App() {
  const [modelOpen, setModelOpen] = useState(false)

  return (
    <>
    <div>
      <Sidebar/>
      
    </div>
    <div className='p-4 ml-72 bg-gray-100 min-h-screen'>
        <CreateContentModel open= {modelOpen} onClose={()=> {setModelOpen(false)}}></CreateContentModel>

        <div className='flex p-4 justify-end gap-4'>
          <Button onClick={()=>{setModelOpen(true)}} variant="primary" text="Share Brain" startIcon={<ShareIcon/>}>
          </Button> 
          <Button variant= "secondary" text="Add content" startIcon={<PlusIcon/>}></Button>
        </div>

        <div className='flex gap-4 p-4 flex-wrap'>
          <Card type= "youtube" link="https://www.youtube.com/watch?v=WovgAKWSYY4" title= "youtube link"/>
          <Card type= "youtube" link="https://www.youtube.com/watch?v=oGKIhfenTRk" title= "youtube link"/>
        </div>
    </div>
    </>
  )
}

export default App
