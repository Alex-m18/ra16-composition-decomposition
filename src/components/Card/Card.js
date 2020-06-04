import React from 'react'
import Image from '../Image/Image'
import CardBody from '../CardBody/CardBody'
import './Card.css'

/**
 * Компонент - карточка с картинкой, заголовком, текстом
 */
function Card({ img, ...props }) {
  return (
    <div className={props.className || 'card'} style={{ width: props.width }}>
      <Image src={img}/>
      <CardBody>
        {props.children}
      </CardBody>
    </div>
  )
}

export default Card

