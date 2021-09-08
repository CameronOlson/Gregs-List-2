import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";

const api = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/houses"
})

class HousesService{
   async addHouse(houseData) {
        let res = await api.post('', houseData)
        console.log("what is the house data??", res)
        ProxyState.houses = [...ProxyState.houses, new House(res.data)]
    }

    async deleteHouse(houseData){
        await api.delete(houseData)
        ProxyState.houses = ProxyState.houses.filter(h => h.id !== houseData)
    }

    async getHouses(){
        let res = await api.get()
        console.log('what was the res', res)
        ProxyState.houses = res.data.map(h => new House(h))
        console.log('what is the house', ProxyState.houses)
    }
}

export const housesService = new HousesService()