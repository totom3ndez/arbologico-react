import { useState } from 'react'
import './App.css'
import { HelpIcon } from './assets'
import { Button, ShowHelp, Form } from './components'

function App() {
  const [showHelp, setShowHelp] = useState(false)
  const showHelpScreen = () => {
    setShowHelp(!showHelp)
  }

  return (
    <div className='app'>
      <aside>
        <div className='flex gap-2 font-bold justify-center'>
          <Button style='flex gap-2 text-center items-center bg-amber-200 hover:bg-amber-300 transition-all ease- rounded-full py-2 px-3' icon={<HelpIcon />} label='Como usar' method={showHelpScreen} />
        </div>
        <h2 className='font-bold text-xl'>Menú de acciones</h2>
        <Form />
      </aside>
      <main className='w-full'>
        {showHelp && <ShowHelp method={showHelpScreen} />}
      </main>
    </div>
  )
}

export default App
