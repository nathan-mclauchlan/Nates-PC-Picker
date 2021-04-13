import React, { useState, useEffect } from 'react'
import { addWidgets } from '../api'

const AddWidget = () => {
  const [widgets, setWidgets] = useState([])

  useEffect(() => {
    addWidgets()
      .then(widgets => {
        setWidgets(widgets)
        return null
      })
      .catch(e => {
        console.log(e)
      })
  }, [])

  return (
    <div className="form">
      <input type="text"></input>
      <button className="submit-btn">Submit</button>
    </div>
  )
}

export default AddWidget
