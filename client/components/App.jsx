import React, { useState, useEffect } from 'react'

import { getWidgets } from '../api'


function App () {
  const [widgets, setWidgets] = useState([])


  useEffect(() => {
    getWidgets()
      .then(widgets => {
        setWidgets(widgets)
        
        return null
      })
      .catch(e => {
        console.error(e)
      })  
  }, [])

  {console.log(widgets)}

  return (
    <div>
      <h1>Widgets for the win!</h1>
      <ul>
        {widgets.map(widget => {
          return <li key ={widget.id}>{widget.name}</li>
        }
        )}
      </ul>
    </div>
  )
}

export default App
