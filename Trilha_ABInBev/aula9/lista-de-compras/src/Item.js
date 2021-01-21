import React from 'react'

const Item = (props) => {
  return (
    
    <p style={{color: props.cor}}>
      {props.nome} custa {props.preco}
    </p>
    
  )
}

export default Item