import React from "react";

const Testing = () => {
  return (
    <div className="container">
      <form>
        <div className="form-group ">
          <label className="control-label " htmlFor="email">
            Email
          </label>
          <div className="input-group">
            <div className="input-group-addon">
              <i className="bi bi-mic"></i>
            </div>
            <input
              className="form-control"
              id="email"
              name="email"
              type="text"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Testing;
