import React, { useState, useEffect } from 'react'
import { getWidgets } from '../api'
import Widget from './Widget'

function App() {
  return (
    <div>
      <h1>Widgets for the win!</h1>
      <Widget />
    </div>
  )
}

export default App
