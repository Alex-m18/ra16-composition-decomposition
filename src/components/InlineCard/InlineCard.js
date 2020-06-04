import React from 'react'
import Card from '../Card/Card'
import './InlineCard.css'

/**
 * Компонент - однострочная карточка
 */
function InlineCard(props) {
  return (
    <Card {...props} className='inline-card'>
      {props.children}
    </Card>
  )
}

export default InlineCard
