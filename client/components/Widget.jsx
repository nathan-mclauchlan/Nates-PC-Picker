import React from 'react'

const Widget = (props) => {
  const { inStock, mfg, name } = props.widget
  return (
    <>
      <div>
        <h3>{name}</h3>
        <h4>{mfg}</h4>
        <p>In stock: {inStock}</p>
      </div>
    </>
  )
}

export default Widget
