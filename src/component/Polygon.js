import React from 'react'
import random from '../utility'

const Poly = ({ param }) => {
  return <polygon points={param} style={random()}/>
}

export default Poly
