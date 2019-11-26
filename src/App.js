import React, { useState } from 'react'
import './style.css'

import SvgBox from './component/SvgBox'
const ELEMENT_CATEGORY = ['r', 'c', 'p']

const App = () => {
  const [inputValue, setInputValue] = useState()
  const [svgElements, setSvgElement] = useState([])
  const [errInfo, setErrInfo] = useState('')
  const handleTextChange = e => {
    setInputValue(e.target.value)
  }
  const handleBtnClick = () => {
    let finalList = [] // storing final processed data
    const eleList = String(inputValue).split('\n')
    finalList = eleList.map(e => {
      const details = String(e)
        .trim()
        .split(' ')
      if (
        Array.isArray(details) &&
        details.length >= 4 &&
        ELEMENT_CATEGORY.includes(details[0])
      ) {
        switch (details[0]) {
          // circle case
          case 'c':
            if (details.length !== 4) {
              setErrInfo('error format of Circle')
              return {
                type: 'c',
                x: 0,
                y: 0,
                r: 0
              }
            }
            return {
              type: 'c',
              x: !(Number.isNaN(details[1])) ? details[1] : 0,
              y: !(Number.isNaN(details[2])) ? details[2] : 0,
              r: !(Number.isNaN(details[3])) ? details[3] : 0
            }
          // rectangle case
          case 'r':
            if (details.length !== 5) {
              setErrInfo('error format of Rectangle')
              return {
                type: 'r',
                x: 0,
                y: 0,
                width: 0,
                height: 0
              }
            }
            return {
              type: 'r',
              x: !(Number.isNaN(details[1])) ? details[1] : 0,
              y: !(Number.isNaN(details[2])) ? details[2] : 0,
              width: !(Number.isNaN(details[3])) ? details[3] : 0,
              height: !(Number.isNaN(details[4])) ? details[4] : 0
            }
          case 'p':
            const parameter = Object.create(details) // shift operation is not immutable
            parameter.shift()
            if (parameter.length % 2 !== 0) {
              setErrInfo('error format of polygon')
              return { type: 'p', param: '0, 0 1, 1' }
            }
            let finalParam = ''
            for (let i = 0; i < parameter.length; i++) {
              i % 2 === 0 // event index should fellow with a comma
                ? (finalParam += parameter[i] + ', ')
                : (finalParam += parameter[i] + ' ')
            }
            return { type: 'p', param: finalParam }
          default:
            setErrInfo('wrong type')
        }
      } else {
        setErrInfo('wrong type')
        return {
          type: 'c',
          x: 0,
          y: 0,
          r: 0
        }
      }
    })
    console.log(finalList)
    setSvgElement(finalList)
  }

  return (
    <React.Fragment>
      <h3>{errInfo}</h3>
      <div id="input-place">
        <textarea rows="4" cols="50" onChange={handleTextChange} />
        <input type="button" value="Show SVG" onClick={handleBtnClick} />
      </div>
      <div className="show-place">
        <SvgBox elementsArr={svgElements} />
      </div>
    </React.Fragment>
  )
}

export default App
