import React from 'react'
import PropTypes from 'prop-types'

/**
 * Компонент - текстовый блок
 */
function CardText(props) {
  return <span className={`card-text ${props.faded}`}>{props.text}</span>
}

CardText.propTypes = {
  text: PropTypes.string.isRequired,
}

export default CardText
