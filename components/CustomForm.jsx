import { useState } from "react";

export const CustomForm = ({ message, onValidated, status }) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      fullname &&
      email.indexOf("@") > -1 &&
      onValidated({
        MERGE0: email,
        MERGE2: fullname,
      });
    alert("Submit");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="waitlist">
      <div className="container">
        <h2>
          {status === "success"
            ? "Success!"
            : "Join our email list for future updates."}
        </h2>

        {status === "sending" && (
          <span className="message sending">sending...</span>
        )}
        {status === "error" && (
          <span
            className="message error"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <span
            className="message success"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}

        <div className="row">
          <div className="form-group">
            <label htmlFor="fullname">Fullname</label>
            <input
              type="text"
              id="fullname"
              required
              onChange={(e) => setFullname(e.target.value)}
              value={fullname}
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter your email"
            />
          </div>

          <button>Submit</button>
        </div>
      </div>
    </form>
  );
};
