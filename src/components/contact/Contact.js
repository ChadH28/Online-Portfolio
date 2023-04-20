import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import $ from "jquery";
import { init } from "emailjs-com";
import { data } from "./Contact.data";
init("user_AmU6cE2ngPIZ8voZHTlON");

const Contact = () => {
  // For the form validation
  (function () {
    window.addEventListener(
      "load",
      function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.getElementsByClassName("needs-validation");
        // Loop over them and prevent submission
        const validation = Array.prototype.filter.call(forms, function (form) {
          form.addEventListener(
            "submit",
            function (event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add("was-validated");
            },
            false
          );
        });
      },
      false
    );
  })();

  function sendEmail(e) {
    e.preventDefault();
    var btn = $("#button-send");
    btn.value = "Sending...";

    const serviceID = "default_service";
    const templateID = "template_ibctn0t";
    const userID = "user_AmU6cE2ngPIZ8voZHTlON";
    const accessToken = "6e8a701a57c55bcadbb97009a370a13f";

    emailjs.sendForm(serviceID, templateID, e.target, userID, accessToken).then(
      (result) => {
        console.log(result.text);
        btn.value = "Send Email";
        alert("Sent!");
      },
      (error) => {
        console.log(error.text);
        btn.value = "Send Email";
        alert(JSON.stringify(error));
      }
    );
  }

  return (
    <section id="contactme" className="container">
      <h2 className="section-title" data-aos="fade-right">
        Lets Interact
      </h2>
      <h3 className="section-sub" data-aos="fade-left">
        Swing by for a cup of coffee at my favourite Boristas, or leave me a
        message
      </h3>

      <div className="form-container" data-aos="zoom-in-right">
        <form
          className="needs-validation"
          id="form"
          noValidate
          onSubmit={sendEmail}
        >
          <div className="form-row">
            <div className="form-group col-md-6">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupPrepend">
                    <i className="fas fa-user" />
                  </span>
                </div>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="inputName name"
                  aria-describedby="inputGroupPrepend"
                  placeholder="First Name"
                  pattern="[A-Za-z]{1,25}"
                  required
                />
                <div
                  className="valid-feedback alert alert-success"
                  role="alert"
                >
                  Looks good!
                </div>
                <div
                  className="invalid-feedback alert alert-danger"
                  role="alert"
                >
                  Please provide your valid Name, no numbers or symbols are
                  allowed
                </div>
              </div>
            </div>
            <div className="form-group col-md-6">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupPrepend">
                    <i className="far fa-user" />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  name="lastname"
                  id="inputLastName lastname"
                  placeholder="Last Name"
                  aria-describedby="inputGroupPrepend"
                  pattern="[A-Za-z]{1,25}"
                  required
                />
                <div
                  className="valid-feedback alert alert-success"
                  role="alert"
                >
                  Looks good!
                </div>
                <div
                  className="invalid-feedback alert alert-danger"
                  role="alert"
                >
                  Please provide your valid Last Name, no numbers or symbols are
                  allowed
                </div>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupPrepend">
                    <i className="far fa-envelope" />
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="inputEmail email"
                  placeholder="user@example.com"
                  pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <div
                  className="valid-feedback alert alert-success"
                  role="alert"
                >
                  Looks good!
                </div>
                <div
                  className="invalid-feedback alert alert-danger"
                  role="alert"
                >
                  Please provide a valid email. eg: user@example.com
                </div>
              </div>
            </div>
            <div className="form-group col-md-12">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupPrepend">
                    <i className="fas fa-phone" />
                  </span>
                </div>
                <input
                  type="tel"
                  className="form-control"
                  name="mobile"
                  id="inputContact mobile"
                  placeholder="123 456 7891"
                  min="10"
                  aria-describedby="inputGroupPrepend"
                  pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                  required
                />
                <div
                  className="valid-feedback alert alert-success"
                  role="alert"
                >
                  Looks good!
                </div>
                <div
                  className="invalid-feedback alert alert-danger"
                  role="alert"
                >
                  Please provide a valid contact number with the required 10
                  digits followed by the spaces. eg: 123 456 7891
                </div>
              </div>
            </div>
            <div className="form-group col-md-12">
              <textarea
                name="message"
                className="form-control"
                id="exampleFormControlTextarea1 message"
                placeholder="Your Message Here..."
                rows="3"
              />
            </div>
          </div>
          <button
            data-sitekey="reCAPTCHA_site_key"
            data-callback="onSubmit"
            data-action="submit"
            type="submit"
            id="button-send"
            className="btn g-recaptcha send"
          >
            Send <i className="fas fa-paper-plane" />
          </button>
        </form>
      </div>

      <div className="grid-2 contact-container">
        {data.socials.map((social_item) => (
          <a
            href={social_item.link}
            className={`contact-card ${social_item.type}`}
            data-aos="zoom-in-up"
            data-aos-duration={social_item.fade_duration}
            target="_blank"
            rel="noreferrer"
          >
            <i className={social_item.icon} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
