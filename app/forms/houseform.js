export function getHouseFormTemplate(){
    return /*html*/ `
    <form class="bg-white rounded p-3 shadow visually-hidden" onsubmit="app.housesController.addHouse()"
    id="house-form">


    <div class="form-group">
    <label for="bedrooms" class="">Beds:</label>
    <input type="number" id="bedrooms" name="bedrooms" class="form-control">
    </div>

    <div class="form-group">
    <label for="bathrooms" class="">Baths:</label>
    <input type="number" class="form-control" name="bathrooms" id="bathrooms" required>
    </div>

    <div class="form-group">
    <label for="year" class="">Year:</label>
    <input type="number" class="form-control" name="year" id="year" required>
    </div>

    <div class="form-group">
    <label for="levels" class="">Floors:</label>
    <input type="number" class = "form-control" name="levels" id="levels">
    </div>

    <div class="form-group">
    <label for="imgUrl" class="">img:</label>
    <input type="url" class="form-control" name="imgUrl" id="imgUrl" required>
    </select>
    </div>

    <div class="form-group">
    <label for="price" class="">Price:</label>
    <input type="number" class="form-control" name="price" id="price">
    </div>

    <div class="form-group">
    <label for="description" class="">Description</label>
    <input type="text" class="form-control" name="description" id="description">
    </div>

    <div class="button-group my-3">
    <button type="reset" class="btn btn-secondary">clear</button>
    <button type="submit" class="btn btn-primary">submit</button>
  </div>
  </form>
    
    `
}