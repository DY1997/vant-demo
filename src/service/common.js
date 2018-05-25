// common
import fetch from '../config/fetch'
import { API_PATH } from '../config/env'

/**
 * 当前系统时间（毫秒）
 */
export const currentTimeMillis = (dataObj) => fetch(API_PATH + '/common/date/currentTimeMillis', dataObj, 'POST')

/**
 * 当前系统时间（格式化年月日）
 */
export const currentTime = (dataObj) => fetch(API_PATH + '/common/date/currentTime', dataObj, 'POST')
