import React from 'react'
import Circle from './Circle'
import Rect from './Rect'
import Poly from './Polygon'
const SvgBOx = ({ elementsArr }) => {
  if (elementsArr.length === 0) return <div />
  else {
    return (
      <svg viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
        {Array.from(elementsArr).map((e, i) => {
          switch (e.type) {
            case 'c':
              return (
                <Circle key={i} positionX={e.x} positionY={e.y} radius={e.r} />
              )
            case 'r':
              return (
                <Rect
                  key={i}
                  positionX={e.x}
                  positionY={e.y}
                  w={e.width}
                  h={e.height}
                />
              )
            case 'p':
              return <Poly key={i} param={e.param} />
            default:
              break
          }
        })}
      </svg>
    )
  }
}
export default SvgBOx
