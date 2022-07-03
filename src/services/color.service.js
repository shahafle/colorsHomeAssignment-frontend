
import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'

const STORAGE_KEY = 'color'
const ROUTE = 'color'

export const colorService = {
   query,
   getById,
   save,
   remove,
   getEmptyColor,
}
//AWAIT???????????????????????????????????????????
async function query() {
   // return storageService.query(STORAGE_KEY)
   return await httpService.get(`${ROUTE}`)
}

function getById(colorId) {
   return storageService.get(STORAGE_KEY, colorId)
   // return httpService.get(`${ROUTE}/${colorId}`)
}

async function remove(colorId) {
   await storageService.remove(STORAGE_KEY, colorId)
   // return httpService.delete(`${ROUTE}/${colorId}`)
}

async function save(color) {
   let savedColor
   if (color._id) {
      savedColor = await storageService.put(STORAGE_KEY, color)
      // savedColor = await httpService.put(ROUTE,color)
   } else {
      savedColor = await storageService.post(STORAGE_KEY, color)
      // savedColor = await httpService.post(ROUTE,color)
   }
   return savedColor
}

function getEmptyColor() {
   return {
      txt: '',
      isDone: false
   }
}