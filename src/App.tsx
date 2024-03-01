import { useState } from 'react'
import PDFViewer from './PDFViewer/PDFViewer';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <PDFViewer url="/jtb.pdf" />
    </>
  )
}

export default App
