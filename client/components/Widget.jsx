import React, { useState, useEffect } from 'react'
import { getWidgets } from '../api'

const Widget = () => {
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
      <ul>
        {widgets.map((widget) => <li key={widget.id}>{widget.name}</li>)}
      </ul>
    </div>
  )
}

export default Widget