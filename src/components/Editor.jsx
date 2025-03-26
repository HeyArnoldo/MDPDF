import React from 'react'

function Editor({ text, setText }) {
  return (
    <div className="flex flex-col">
      <label className="mb-2 font-medium">Editor de Texto</label>
      <textarea
        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300 resize-y h-80"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ejemplo: # Título\n\n**Negrita**\n\n$\\frac{a}{b}$ (fórmula LaTeX)"
      />
    </div>
  )
}

export default Editor
