import './App.css'
import { useState } from 'react'
import { HelpIcon } from './assets'
import { Button, ShowHelp, Form } from './components'
import { showHelpScreen } from './actions'

function App() {
  const [showHelp, setShowHelp] = useState(false)

  return (
    <div className='app'>
      <aside className=''>
        <div className='flex gap-2 font-bold justify-center'>
          <Button style='flex gap-2 text-center items-center bg-amber-200 hover:bg-amber-300 transition-all ease rounded-full py-2 px-3' icon={<HelpIcon />} label='Como usar' method={() => showHelpScreen(setShowHelp, showHelp)} />
        </div>
        <h2 className='font-bold text-xl'>Menú de acciones</h2>
        <Form submitAction={() => { }} />
      </aside>
      <main className='w-full'>
        {showHelp && <ShowHelp method={() => showHelpScreen(setShowHelp, showHelp)} />}
      </main>
    </div>
  )
}

export default App