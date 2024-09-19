// ContactForm.js
import React from "react";

export default function ContactForm() {
  return (
    <form className="row g-3">
      <div className="col-md-6">
        <label htmlFor="inputFirst" className="form-label">
          First Name
        </label>
        <input type="text" className="form-control" id="inputFirst" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputLast" className="form-label">
          Last Name
        </label>
        <input type="text" className="form-control" id="inputLast" />
      </div>
      <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4" />
  </div>
  <div class="col-md-6">
    <label for="inputPhone" class="form-label">Phone</label>
    <input type="text" class="form-control" id="inputPhone" />
  </div>
      <div className="col-12">
        <label htmlFor="inputAddress" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="1234 Main St"
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputCity" className="form-label">
          City
        </label>
        <input type="text" className="form-control" id="inputCity" />
      </div>
      <div className="col-md-4">
        <label htmlFor="inputState" className="form-label">
          State
        </label>
        <select id="inputState" className="form-select">
          <option selected>Choose...</option>
          <option>...</option>
        </select>
      </div>
      <div className="col-md-2">
        <label htmlFor="inputZip" className="form-label">
          Zip
        </label>
        <input type="text" className="form-control" id="inputZip" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Describe Services 
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Request Service
        </button>
      </div>
    </form>
  );
}
