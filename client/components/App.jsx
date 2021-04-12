import React, { useState, useEffect } from 'react'
import { getWidgets } from '../api'

function App () {
  const [widgets,] = useState ([])

  useEffect(() => {
    getWidgets()
    .then(widgets => {
      console.log(widgets)
    })
    // .catch(e = {
    //   console.log(e)
    // })
    // console.log('using the effect')
  }, [])


  return (
    <div>
      <h1>Widgets for the win!</h1>
    </div>
  )
}

export default App
