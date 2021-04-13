import React from 'react'
import { useEffect, useState } from 'react'
import { getWidgets } from '../api'
import Widgets from './Widgets'
import AddWidget from './AddWidget'

function App () {
  const [widgets, setWidgets] = useState([])

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
  return (
    <div>
      <Widgets widgets={widgets}/>
      <AddWidget loadWidgets={loadWidgets}/>
    </div>
  )
}

export default App
