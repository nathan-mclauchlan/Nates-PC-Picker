import React, { useState, useEffect } from 'react'
import { getWidgets } from '../api'
import Widget from './Widget'
import AddWidget from './AddWidget'

function App() {
  return (
    <div>
      <h1>Widgets for the win!</h1>
      <Widget />
      <AddWidget />
    </div>
  )
}

export default App
