// https://script.google.com/macros/s/AKfycbzWeCF_KHlsOY3zX11G-6-sIFu2eFDV3sxuPTtrk_LB4w2qQwQ0/exec

import React from "react";
import styles from "./Form.scss"

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <div className="wrapper rsvp-form">
        <div className="container rsvp-body">
          <form className="form-body"
            name="RSVP"
            method="post"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </p>
            <div className="rsvp-name form-item">
              <label className="form-item__label">Your Name(s)</label>
              <div className="text-input__outer-wrapper">
                <div className="text-input__wrapper">
                  <input type="text" name="name" className="text-input" onChange={this.handleChange} required />
                </div>
              </div>
            </div>
            <div className="rsvp-name form-item">
              <label className="form-item__label">Email Address</label>
              <div className="text-input__outer-wrapper">
                <div className="text-input__wrapper">
                  <input type="text" name="name" className="text-input" onChange={this.handleChange} required />
                </div>
              </div>
            </div>
            <div className="rsvp-attendance form-item">
              <div className="radio-button-group">
                <div className="radio-button__wrapper">
                  <input id="radio-1" type="radio" name="RSVP Response" className="radio-button" value="Yes" onChange={this.handleChange} required /> Definitely!
                  <label for="radio-1" className="radio-button__label">
                    <span className="radio-button__appearance"></span>
                    <span>JOYFULLY ACCEPT</span>
                  </label>
                </div>
                <div className="radio-button__wrapper">
                  <input id="radio-2" type="radio" name="RSVP Response" className="radio-button" value="No" onChange={this.handleChange} required /> Regretfully No
                  <label for="radio-2" className="radio-button__label">
                    <span className="radio-button__appearance"></span>
                    <span>REGRETFULLY DECLINE</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="rsvp-messagebox form-item">
              <label className="form-item__label">Email Address</label>
              <div className="text-input__outer-wrapper">
                <div className="text-input__wrapper">
                  <textarea name="message" rows="3" className="text-area" onChange={this.handleChange} />
                </div>
              </div>
            </div>

            <div className="rsvp-recaptcha" data-netlify-recaptcha></div>
            <div className="rsvp-submit">
              <button type="submit">Submit</button>
            </div>
          </form>
          </div>
      </div>
    );
  }
}

export default Form;

