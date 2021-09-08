import { generateId } from "../Utils/generateId.js";

export class Job{
    constructor(jobData){
        this.jobTitle = jobData.jobTitle
        this.company = jobData.company
        this.rate = jobData.rate
        this.hours = jobData.hours
        this.description = jobData.description
        this.id = jobData.id
    }

    get CardTemplate(){
        return /*html*/`
        <div class="col-lg-3 mb-4 listing">
        <div class="card tall">
            <div class="card-body">
                <h5 class="card-title">${this.jobTitle}</h5>
                <h6 class="card-subtitle mb-2 text-muted">$${this.rate}/hr ${this.hours}hr/week</h6>
                <p class="card-text">${this.description}</p>
                <button class="btn btn-primary" onclick="app.jobsController.deleteJob('${this.id}')">Delete</button>
            </div>
        </div>
        </div>
        `

    }
}