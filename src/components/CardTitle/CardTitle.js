import React from 'react'
import PropTypes from 'prop-types'

/**
 * Компонент - текстовый блок заголовка
 */
function CardTitle(props) {
  return <span className="card-title">{props.text}</span>;
}

CardTitle.defaultProps = {
  text: 'Card title',
}

CardTitle.propTypes = {
  text: PropTypes.string,
}

export default CardTitle
