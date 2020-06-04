import React from 'react'
import PropTypes from 'prop-types'

/**
 * Компонент "элемент списка" - создает <li> и передает в него
 * дочерние компоненты
 */
function ListItem(props) {
  return <li className={props.className} style={props.style}>{props.children}</li>
}

ListItem.propTypes = {
  className: PropTypes.string,
}

export default ListItem;
