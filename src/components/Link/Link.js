import React from 'react'

/**
 * Компонент - обертка в ссылку
 */
function Link(props) {
  return (
    <a href={props.href} style={props.style}>
      {props.children}
    </a>
  )
}

export default Link

