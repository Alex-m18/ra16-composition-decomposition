import React from 'react'
import PropTypes from 'prop-types'

/**
 * Компонент - блок, с ориентацией потомков по горизонтали или вертикали
 */

function Block(props) {
  return (
    <div className={`block-${props.direction}`}>
      {props.children}
    </div>
  )
}

Block.defaultProps = {
  direction: 'col',
}

Block.propTypes = {
  /** Ориентация потомков */
  direction: PropTypes.oneOf(['col', 'row']),
}

export default Block

