import React from 'react'

const Widget = ({ inStock, mfg, name }) => {
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
