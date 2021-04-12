import React, { useState, useEffect } from 'react'
import { getWidgets } from '../api'

function App () {
  const [widgets] = useState([])

  useEffect(() => {
    // console.log('using the effect')
    getWidgets()
      .then(widgets => {
        console.log(widgets)
      })
  }, [])

  return (
    <div>
      <h1>Widgets for the win!</h1>
    </div>
  )
}

export default App
