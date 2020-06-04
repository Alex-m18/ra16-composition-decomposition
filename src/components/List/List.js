import React from 'react'

/**
 * Компонент "список". Создает список из дочерних компонентов. В качестве дочернего элемента принимает функцию
 */
function List(props) {
  return (
    <ul className={props.className} style={props.style}>
      {props.children(props.items)}
    </ul>
  )
}

export default List

