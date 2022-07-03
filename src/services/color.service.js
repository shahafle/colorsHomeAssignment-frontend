import { httpService } from './http.service.js'

const STORAGE_KEY = 'color'
const ROUTE = 'color'

export const colorService = {
   query,
   getById,
   save,
   remove,
   getEmptyColor,
   addVote
}

async function query() {
   return await httpService.get(`${ROUTE}`)
}

async function getById(colorId) {
   return await httpService.get(`${ROUTE}/${colorId}`)
}

async function remove(colorId) {
   return httpService.delete(`${ROUTE}/${colorId}`)
}

async function save(color) {
   let savedColor
   if (color._id) {
      savedColor = await httpService.put(ROUTE, color)
   } else {
      savedColor = await httpService.post(ROUTE, color)
   }
   return savedColor
}
async function addVote(colorId) {
   return await httpService.post(`${ROUTE}/${colorId}`)
}

function getEmptyColor() {
   return {
      txt: '',
      isDone: false
   }
}