import React from 'react'
import random from '../utility'

const Circle = ({ positionX, positionY, radius }) => (
  <circle cx={positionX} cy={positionY} r={radius} style={random()} />
)

export default Circle
