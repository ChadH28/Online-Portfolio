import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import $ from "jquery";
import { init } from "emailjs-com";
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
      <h2 className="section-title" >Lets Interact</h2>
      <h3 className="section-sub" data-aos="fade-left">
        Swing by for a cup of coffee at my favourite Boristas, or leave me a
        message
      </h3>
      <div className="row">
        <div className="col-sm-12">
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
                        <i className="fas fa-user"></i>
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
                        <i className="far fa-user"></i>
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
                      Please provide your valid Last Name, no numbers or symbols
                      are allowed
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="inputGroupPrepend">
                        <i className="far fa-envelope"></i>
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
                        <i className="fas fa-phone"></i>
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
                  ></textarea>
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
                Send <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
        <div className="col-sm-12">
          {/* <h3>Socials</h3> */}
          <div className="grid-2 contact-container">
            <div className="contact-card call" data-aos="zoom-in-up" data-aos-duration="1600">
              <div>
                <a href="tel:084-466-4783">
                  <i className="fas fa-phone"></i>
                </a>
              </div>
            </div>
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=new"
              className="contact-card google" data-aos="zoom-in-up" data-aos-duration="1800"
            >
              <div>
                <i className="far fa-envelope"></i>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/chad-hoosain-3660641a6/"
              className="contact-card linkedin" data-aos="zoom-in-up" data-aos-duration="2000"
            >
              <div>
                <i className="fab fa-linkedin-in"></i>
              </div>
            </a>
            <a
              href="https://github.com/ChadH28"
              className="contact-card github" data-aos="zoom-in-up" data-aos-duration="2200"
            >
              <div>
                <i className="fab fa-github text-center"></i>
              </div>
            </a>
            <a
              href="https://codepen.io/chadh28"
              className="contact-card code-pen" data-aos="zoom-in-up" data-aos-duration="2400"
            >
              <div>
                <i className="fab fa-codepen"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
