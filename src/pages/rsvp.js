import React from "react"
import { navigate } from "gatsby";

import Layout from "../components/layout"
import SVG from "../components/svg"
import SEO from "../components/seo"
import logo from "!!raw-loader!../assets/images/logo.svg"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class RSVPPage extends React.Component {
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
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <main className="site-main wrapper rsvp">
          <div className="border">
            <div className="border__inner">
              <a href="/" className="site-logo">
                <SVG svg={logo} />
              </a>
              <div className="container">
                <h1>R.S.V.P</h1>
                <p>SAVE THE DATE &amp; RSVP</p>
                <h2>SUNDAY, 22.11.20</h2>
              </div>
              <section className="rsvp-form">
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
                <div className="row">
                  <div className="col">
                    <div className="rsvp-email form-item">
                      <label className="form-item__label">Email Address</label>
                      <div className="text-input__outer-wrapper">
                        <div className="text-input__wrapper">
                          <input type="email" name="email" className="text-input" onChange={this.handleChange} required />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">

                    <div className="rsvp-phone form-item">
                      <label className="form-item__label">Phone Number</label>
                      <div className="text-input__outer-wrapper">
                        <div className="text-input__wrapper">
                          <input type="text" name="phone" className="text-input" onChange={this.handleChange} required />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



                <div className="rsvp-attendance form-item">
                  <div className="form-item__label">Attendance</div>
                  <div className="radio-button-group">
                    <div className="radio-button__wrapper">
                      <input id="radio-1" type="radio" name="RSVP Response" className="radio-button" value="Yes" onChange={this.handleChange} required />
                      <label for="radio-1" className="radio-button__label">
                        <span className="radio-button__appearance"></span>
                        <span>JOYFULLY ACCEPT</span>
                      </label>
                    </div>
                    <div className="radio-button__wrapper">
                      <input id="radio-2" type="radio" name="RSVP Response" className="radio-button" value="No" onChange={this.handleChange} required />
                      <label for="radio-2" className="radio-button__label">
                        <span className="radio-button__appearance"></span>
                        <span>REGRETFULLY DECLINE</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="rsvp-name form-item">
                  <label className="form-item__label">Suggest a Song</label>
                  <div className="text-input__outer-wrapper">
                    <div className="text-input__wrapper">
                      <input type="text" name="song" className="text-input" onChange={this.handleChange} required />
                    </div>
                  </div>
                </div>
                <div className="rsvp-messagebox form-item">
                  <label className="form-item__label">Message</label>
                  <div className="text-input__outer-wrapper">
                    <div className="text-input__wrapper">
                      <textarea name="message" className="text-area" onChange={this.handleChange} />
                    </div>
                  </div>
                </div>

                <div className="rsvp-recaptcha" data-netlify-recaptcha></div>
                <div className="rsvp-submit">
                  <button className="btn" type="submit">SEND RSVP</button>
                </div>
              </form>
            </div>
          </section>
            </div>
          </div>
        </main>
      </Layout>
    );
  }
}

export default RSVPPage;
