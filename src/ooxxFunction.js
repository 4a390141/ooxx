import logger from '../src/logger.js'
// 物件
// 物件key值數量
function getObjectKeyLength (param) {
  if (!Array.isArray(param) && typeof param === 'object') {
    return Object.keys(param).length
  } else {
    logger.warn(`function getObjectKeyLength (param's not a object)`)
    return param
  }
}

// 陣列
// 找出最大值
function getMaxOfArray (param, key) {
  if (!Array.isArray(param)) {
    logger.warn(`function getMaxOfArray (param's not a Array )`)
    return param
  }
  return key ? Math.max(...param.map(e => e[key.toString()])) : Math.max(...param.map(e => e))
}

// 陣列
// key值排序
function ArraySorForKey (array, key) {
  if (Array.isArray(array) && key) {
    return array.sort((a, b) => {
      return parseInt(a[key], 10) - parseInt(b[key], 10)
    })
  }
}
function copyText (text) {
  if (text.length > 0) {
    let clipArea = document.createElement('textarea')
    clipArea.textContent = text
    document.body.appendChild(clipArea)
    clipArea.select()
    document.execCommand('copy')
    clipArea.remove()
  }
}

// export
export default {
  getObjectKeyLength,
  getMaxOfArray,
  ArraySorForKey,
  copyText
}
