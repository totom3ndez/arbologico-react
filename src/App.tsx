import './App.css'
import { useState } from 'react'
import { HelpIcon } from './assets'
import { Button, ShowHelp, Form } from './components'
import { showHelpScreen } from './actions'

const buttonStyles = {
  helpButton: 'flex gap-2 text-center items-center text-white cursor-pointer  py-2 px-3'
}


function App() {
  const [showHelp, setShowHelp] = useState(false)
  const {helpButton} = buttonStyles

  return (
    <div className='app'>
      <aside className='bg-slate-800'>
        <div className='font-bold mx-auto hover:bg-linear-to-r rounded-lg bg-amber-500 hover:from-amber-500 hover:to-amber-300 transition ease duration-500'>
          <Button style={helpButton} icon={<HelpIcon />} label='Como usar' method={() => showHelpScreen(setShowHelp, showHelp)} />
        </div>
        <h2 className='font-bold text-xl'>Menú de acciones</h2>
        <Form />
      </aside>
      <main className='w-full' id='main'>
        {showHelp && <ShowHelp method={() => showHelpScreen(setShowHelp, showHelp)} />}
      </main>
    </div>
  )
}

export default App