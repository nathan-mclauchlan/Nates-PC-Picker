import React, { useState, useEffect } from 'react'

function App() {
  const [widgets, setWidgets] = useState([])

  useEffect(() => {
    console.log('using the effect')
  }, [])

  return (
    <div>
      <h1>Widgets for the win!</h1>
    </div>
  )
}

export default App
