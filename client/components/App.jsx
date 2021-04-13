import React from 'react'
import { useEffect, useState } from 'react'
import { getWidgets } from '../api'
import Widgets from './Widgets'
import AddWidget from './AddWidget'

function App () {
  const [widgets, setWidgets] = useState([])
  const [widgetButton, setAddWidgetButton] = useState(false)

  useEffect(() => {
    loadWidgets()
  }, [])

  function loadWidgets () {
    getWidgets()
      .then(widgets => {
        setWidgets(widgets)
        return null
      })
      .catch(e => {
        console.log(e)
      })
  }

  function renderForm () {
    setAddWidgetButton(true)
  }
  return (
    <div>
      <Widgets widgets={widgets}/>
      <button onClick={renderForm}>Add Widget</button>
      { widgetButton &&
      <AddWidget loadWidgets={loadWidgets}/>
      }
    </div>
  )
}

export default App
