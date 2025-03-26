import React, { useState } from 'react'
import Editor from './components/Editor'
import Preview from './components/Preview'

function App() {
  const [text, setText] = useState('')
  // Estado para controlar la pestaña activa en móvil
  const [activeTab, setActiveTab] = useState('editor')

  return (
    <div className="min-h-screen p-4 container mx-auto">
      {/* Tabs para móvil (se ocultan en desktop) */}
      <div className="md:hidden flex justify-center space-x-4 border-b mb-4">
        <button
          className={`py-2 px-4 ${
            activeTab === 'editor'
              ? 'border-b-2 border-blue-500 font-semibold'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('editor')}
        >
          Editor
        </button>
        <button
          className={`py-2 px-4 ${
            activeTab === 'preview'
              ? 'border-b-2 border-blue-500 font-semibold'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('preview')}
        >
          Preview
        </button>
      </div>

      {/* Vista de escritorio (dos columnas) */}
      <div className="hidden md:grid md:grid-cols-2 gap-4">
        <Editor text={text} setText={setText} />
        <Preview text={text} />
      </div>

      {/* Vista móvil (muestra sólo la tab activa) */}
      <div className="md:hidden">
        {activeTab === 'editor' && <Editor text={text} setText={setText} />}
        {activeTab === 'preview' && <Preview text={text} />}
      </div>
    </div>
  )
}

export default App
