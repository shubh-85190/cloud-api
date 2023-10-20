const BASE_URL = 'https://shy-jade-turtle-tutu.cyclic.app/api'

export const GET_ITEMS = `${BASE_URL}/master/items/viewitem`
export const ADD_USER = `${BASE_URL}/user/adduser`
export const LOGIN = `${BASE_URL}/user/login`

const BASE_URL_MASTER = `${BASE_URL}/master` 
export const LOGIN_MASTER = `${BASE_URL_MASTER}/login`
export const KITCHEN_STATUS = `${BASE_URL_MASTER}/kitchenstatus`
export const GET_ID = `${BASE_URL_MASTER}/items/getid`
export const ADD_ITEM = `${BASE_URL_MASTER}/items/additem`
export const DELETE_ITEM = `${BASE_URL_MASTER}/items/deleteitem`
export const UPDATE_ITEM = `${BASE_URL_MASTER}/items/updateitem`
export const VIEW_ITEM = `${BASE_URL_MASTER}/items/viewitem`