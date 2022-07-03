import { httpService } from './http.service.js'

const ROUTE = 'color'

export const colorService = {
   query,
   addVote
}

async function query() {
   return await httpService.get(`${ROUTE}`)
}

async function addVote(colorId) {
   return await httpService.post(`${ROUTE}/${colorId}`)
}