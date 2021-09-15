import React from "react";


function OldForm() {
  return (
    <div>
      <form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input type="text" id="channel" name="channel" />
        </div>

        <button
          type="submit"
          style={{
            marginTop: "10px",
            padding: "5px 20px",
            borderRadius: "10px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default OldForm;
