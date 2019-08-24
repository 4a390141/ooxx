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

// export
export default {
  getObjectKeyLength,
  getMaxOfArray
}
