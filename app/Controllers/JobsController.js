import { ProxyState } from "../AppState.js";
import { getJobFormTemplate } from "../forms/jobsform.js";
import { jobsService } from "../Services/JobsService.js";




function _drawJobs(){
    let template = ''
    ProxyState.jobs.forEach(job => template+= job.CardTemplate)
    document.getElementById('listings').innerHTML = template

}

export class JobsController {
    constructor(){
        ProxyState.on('jobs', _drawJobs)
        jobsService.getJobs()
    }

    async addJob(){
        event.preventDefault()

        const form = event.target

        const jobData = {
            jobTitle: form.jobTitle.value,
            id: form.id.value,
            company: form.company.value,
            rate: form.rate.value,
            hours: form.hours.value,
            description: form.description.value,
        }

        try{
            console.log(jobData)
           await jobsService.addJob(jobData)
        }   catch (e) {
            // form.make.classList.add('border-danger')
            console.error('you need to do this')
            return
        }
        form.reset()
    }
    showJobs(){
        _drawJobs()
        document.getElementById('controls').innerHTML = `
        <button class="btn btn-success" onclick="app.jobsController.toggleJobForm()">Add Job</button>
        `
        document.getElementById('forms').innerHTML = getJobFormTemplate()
    }
    toggleJobForm(){
        document.getElementById('job-form').classList.toggle('visually-hidden')
        console.log('fill me in')
    }
    async deleteJob(jobId){
        try{
            await jobsService.deleteJob(jobId)
        }   catch (error){
            alert (error.message)
        }
    }
}
