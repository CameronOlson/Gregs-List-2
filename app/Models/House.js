import { generateId } from "../Utils/generateId.js";

export class House{
    constructor(houseData){
        this.id = houseData.id 
        this.bedrooms = houseData.bedrooms
        this.bathrooms = houseData.bathrooms
        this.levels = houseData.levels
        this.year = houseData.year
        this.price = houseData.price
        this.imgUrl = houseData.imgUrl
        this.description = houseData.description
    }
    
    get CardTemplate(){
        return /*html*/`
        <div class="col-lg-3 mb-4 listing">
            <div class="card m-1 shadow">
                <img class="house-picture" src="${this.imgUrl}" alt="listing image" class="rounded">
                <div class="card-body">
                    <h5 class="d-flex justify-content-between">$${this.price}</h5>
                    <div><h6>${this.bedrooms} Beds ${this.bathrooms} Baths</h6></div>
                    <span>${this.levels} Level</span>
                    <p>${this.description}</p>
                    <div><button class="btn btn-primary" onclick="app.housesController.deleteHouse('${this.id}')">Delete</button></div>
                </div>
            </div>
        </div>
        `
    }
}