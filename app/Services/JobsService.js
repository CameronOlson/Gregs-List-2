import { ProxyState } from "../AppState.js";
import { Job } from "../Models/Job.js";

const api = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/jobs"
})

class JobsService{
    async addJob(jobData){
        let res = await api.post('', jobData)
        console.log("what is the job data?", res)
        ProxyState.jobs = [...ProxyState.jobs, new Job(res.data)]
    }

    async deleteJob(jobData){
        await api.delete(jobData)
        ProxyState.jobs = ProxyState.jobs.filter(j => j.id !== jobData)
    }

    async getJobs(){
        let res = await api.get()
        console.log("what was the rez??", res)
        ProxyState.jobs = res.data.map(j => new Job(j))
        console.log('what is a job??', ProxyState.jobs)
    }
}

export const jobsService = new JobsService()

