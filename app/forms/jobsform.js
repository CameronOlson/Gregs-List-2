


export function getJobFormTemplate(){
    return /*html*/ `
    <form class="bg-white rounded p-3 shadow visually-hidden" onsubmit="app.jobsController.addJob()"
    id="job-form">

    <div class="form-group">
    <label>
    <span>Post a Job</span>
    <span class="ms-2"></span>
    </label>
    </div>

    <div class="jobTitle">
    <label for="jobTitle" class="">Position:</label>
    <input type="text" name="jobTitle" id="jobTitle" class="form-control">
    </div>
    
    <div class="form-group">
    <label for="company" class="">Company:</label>
    <input type="text" name="company" id="company" class="form-control">
    </div>

    <div class="form-group">
    <label for="rate" class="">Rate</label>
    <input type="number" name="rate" id="rate" class="form-control">
    </div>

    <div class="form-group">
    <label for="hours" class="">Hours</label>
    <input type="number" class="form-control" name="hours" id="hours" required>
    </div>

    <div class="form-group">
    <label for="description" class="">Description</label>
    <input type="text" class = "form-control" name="description" id="description">
    </div>

    <div class="button-group my-3">
    <button type="reset" class="btn btn-secondary">clear</button>
    <button type="submit" class="btn btn-primary">submit</button>
  </div>
  </form>
    
    `
}