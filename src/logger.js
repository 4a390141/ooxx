function log (content = '', value = '') {
  console.log(
    '%c[log]',
    `color: black;font-size:15px;background-color:white;`,
    content,
    value
  )
}
function info (content = '', value = '') {
  console.info(
    '%c[info]',
    `color: blue;font-size:15px;background-color:lightblue;`,
    content,
    value
  )
}
function warn (content = '', value = '') {
  console.warn(
    '%c[warn]',
    `color: goldenrod;font-size:15px;`,
    content,
    value
  )
}
function error (content = '', value = '') {
  console.error(
    '%c[error]',
    `color: red;font-size:18px;`,
    content,
    value
  )
}
export default {
  log,
  info,
  warn,
  error
}
