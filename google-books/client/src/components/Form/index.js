import React from "react";

function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
        </label>
        <input
          className="input-field col s12"
          id="Title"
          type="text"
          value={q}
          placeholder="Jurassic Park"
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="waves-effect waves-light btn"
        >
        <i className="material-icons">search</i>
        </button>
      </div>
    </form>
  );
}

export default Form;
