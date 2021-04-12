import React from 'react'

const Widget = (props) => {
  const { inStock, mfg, name, price } = props.widget
  return (
    <>
      <div>
        <h3>{name}</h3>
        <h5>{price}</h5>
        <h4>{mfg}</h4>
        <p>In stock: {inStock}</p>
        <br/>
      </div>
    </>
  )
}

export default Widget
