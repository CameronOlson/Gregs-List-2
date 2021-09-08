import { ProxyState } from "../AppState.js"
import { getHouseFormTemplate } from "../forms/houseform.js"
import { housesService } from "../Services/HousesService.js"

function _drawHouses() {
  let template = ''
  ProxyState.houses.forEach(house => template += house.CardTemplate) 
  document.getElementById('listings').innerHTML = template
}

export class HousesController {
  constructor() {
    ProxyState.on('houses', _drawHouses)
    housesService.getHouses()
  }

  async addHouse(){
    event.preventDefault()

    const form = event.target

    const houseData = {
      id: form.id.value,
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      levels: form.levels.value,
      year: form.year.value,
      price: form.price.value,
      imgUrl: form.imgUrl.value,
      description: form.description.value,
    }

    try{
      await housesService.addHouse(houseData)
    } catch (e) {
      // form.make.classList.add('border-danger')
      console.error('you should do this', e)
      return
    }

    form.reset()

  }

  showHouses() {
    _drawHouses()
    document.getElementById('controls').innerHTML = `
      <button class="btn btn-success" onclick="app.housesController.toggleHouseForm()">Add House</button>
    `

    document.getElementById('forms').innerHTML = getHouseFormTemplate()
  }

  showFeet(){
    document.getElementById('size').textContent = event.target.value
  }

  toggleHouseForm() {
    document.getElementById('house-form').classList.toggle('visually-hidden')
    console.log('[TODO fill me in]')
  }

  async deleteHouse(houseId){
    
    try{
      await housesService.deleteHouse(houseId)
    } catch (error){
      alert (error.message)
    }
  }

}