import React from 'react'
import { useEffect, useState } from 'react'
import { getWidgets } from '../api'
import Widgets from './Widgets'
import AddWidget from './AddWidget'

function App () {
  const [widgets, setWidgets] = useState([])

  useEffect(() => {
    getWidgets()
      .then(widgets => {
        setWidgets(widgets)
        return null
      })
      .catch(e => {
        console.log(e)
      })
  }, [])

  return (
    <div>
      <Widgets widgets={widgets}/>
      <AddWidget />
    </div>
  )
}

export default App
