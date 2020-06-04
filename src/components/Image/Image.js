import React from 'react'
import PropTypes from 'prop-types'

/**
 * Компонент - картинка
 */
function Image(props) {
  return <React.Fragment>
    { props.src && <img src={props.src} className={props.className} alt="..."/> }
  </React.Fragment>
}

Image.propTypes = {
  src: PropTypes.string,
}

export default Image

