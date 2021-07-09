const isString = str => typeof str === 'string'

const trim = str => str.trim()


const validateInput = input => isString(input)

const validateMarkers = markers =>
  Array.isArray(markers) && markers.every(isString)

const validateParams = (input, markers) =>
  validateInput(input) && validateMarkers(markers)


const join = separator => arr => arr.join(separator)

const split = separator => arr => arr.split(separator)

const map = fn => arr => arr.map(fn)

const first = arr => arr[0]


const pipe = (...fns) => initial =>
  fns.reduce((val, fn) => fn(val), initial)


const removeLineComment = (commentFinder, line) => pipe(
  split(commentFinder),
  first,
  trim
)(line)


const solution = (input, markers) => {
  if (!validateParams(input, markers)) return null

  const commentFinder = new RegExp(`[${markers.join('')}]`)

  const strippedString = pipe(
    split('\n'),
    map(line => removeLineComment(commentFinder, line)),
    join('\n')
  )(input)

  return strippedString
}

export {
  solution
}
