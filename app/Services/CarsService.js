import { ProxyState } from "../AppState.js"
import { Car } from "../Models/Car.js"

const api = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/cars"
})


class CarsService {
  async addCar(carData) {
    let res = await api.post('', carData)
    console.log('what is the car data?', res)
      ProxyState.cars =[...ProxyState.cars, new Car(res.data)]
  }

  async deleteCar(carData){
    await api.delete(carData)
    ProxyState.cars = ProxyState.cars.filter(c => c.id !== carData)
  }

  async getCars(){
    let res = await api.get()
    console.log('what was the res', res)
    ProxyState.cars = res.data.map(c => new Car(c))
    console.log('what is a car', ProxyState.cars)
  }
}

// singleton pattern
export const carsService = new CarsService()