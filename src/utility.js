export default () => {
  const red = Math.ceil((Math.random() * 100) % 255)
  const green = Math.ceil((Math.random() * 100) % 255)
  const blue = Math.ceil((Math.random() * 100) % 255)

  return { fill: `rgb(${red},${green},${blue})` }
}
