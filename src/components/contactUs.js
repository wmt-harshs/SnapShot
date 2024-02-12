import React from "react";

function ContactUs() {
  return (
    <div class="">
      <h2>Project Submission Form</h2>
      <form >
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div class="form-group">
          <label for="project-description">Project Description:</label>
          <textarea
            id="project-description"
            name="project-description"
            rows="5"
            required
          ></textarea>
        </div>
        <div style={{textAlign:"start", padding:"10px 0px",textDecoration: "underline" }}>
            <a href="https://docs.google.com/document/d/1Q_Ty9HokfaHPAKrtr6CW8209b0DPGTNCHnt9DX6XQpA/edit?usp=sharing" target="blank"> Privacy Policy</a>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ContactUs;
