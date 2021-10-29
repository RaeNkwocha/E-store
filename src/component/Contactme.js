import React, { useState } from "react";
import { send } from "emailjs-com";

import "../css/contactme.css";

const Contactme = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    send(
      "service_dw2q6nk",
      "template_mdn38th",
      toSend,
      "user_5wgUqb0y1Y7iRMUkGo2qX"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
    e.target.reset();
  };
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <>
      <main className="contact-me">
        <div>
          <h3>If Not Now, When? Let’s Work Together!</h3>

          <p>
            Are you looking for a web developer to take your ideas and make them
            a reality. Feel free to contact me a frontEnd developer who would
            build scalable web apps using recent technologies to satisfy your
            needs.
          </p>
        </div>
        <div className="contact-container">
          <form className="contact-1" onSubmit={sendEmail}>
            <fieldset>
              <input
                type="text"
                name="name"
                placeholder="First name"
                required
                // value={toSend.from_name}
                onChange={handleChange}
              />
            </fieldset>

            <fieldset>
              <input
                type="text"
                name="name"
                placeholder="Last name"
                required
                onChange={handleChange}
              />
            </fieldset>
            <fieldset>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                onChange={handleChange}
              />
            </fieldset>

            <fieldset>
              <textarea
                type="text"
                name="message"
                required
                onChange={handleChange}
                placeholder="Type your message here...."
              />
            </fieldset>
            <button
              name="submit"
              type="submit"
              className="contact-submit"
              data-submit="...Sending"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Contactme;
