import React, { useState, useEffect } from 'react'
import { getWidgets } from '../api'
import Widget from './Widget'

function App () {
  const [widgets, setWidgets] = useState ([])

  useEffect(() => {
    getWidgets()
    .then(widgets => {
      setWidgets(widgets)
    })
    // .catch(e = {
    //   console.log(e)
    // })
    // console.log('using the effect')
  }, [])


  return (
    <div>
      <h1>Widgets for the win!</h1>
      <ul>
        {widgets.map((mappyWidget) => <Widget key={mappyWidget.id} myWidget={mappyWidget}/>)}
      </ul>
      <form>
        <input></input>
        <input type='submit'>Save</input>
      </form>
    </div>
  )
}

export default App
