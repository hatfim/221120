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
    this.state = {
      formData: {},
      display: 'showForm',
      isLoading: false,
      isSubmissionError: false,
    };
  }

  handleChange = e => {
    const copyFormData = this.state.formData
    copyFormData[e.target.name] = e.target.value;
    this.setState({
      formData: copyFormData
    })
  };

  handleSubmit = async e => {
    e.preventDefault();
    const {name, message} = this.state.formData
    try {
        const response = await fetch(
            "https://v1.nocodeapi.com/hatfim/google_sheets/XNgTKZgLXdiTpmJf?tabId=Message",
            {
                method: "post",
                body: JSON.stringify([[name, message]]),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
        const json = await response.json();

        if(json) {
          console.log("Success:", JSON.stringify(json));
          this.setState({
            isSubmissionError: false,
            isLoading: false,
            display: 'showResult',
          });
        }
    } catch (error) {
        console.error("Error:", error);
    }
  };
  renderComponents = () => {
    switch(this.state.display) {
      case "showForm":
        return (
          <form className="form-body"
              onSubmit={this.handleSubmit}
            >
            <div className="rsvp-name form-item">
              <label className="form-item__label">Your Name(s)</label>
              <div className="text-input__outer-wrapper">
                <div className="text-input__wrapper">
                  <input type="text" name="name" className="text-input" onChange={this.handleChange} required />
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
            <div className="rsvp-submit">
              <button className="btn" type="submit">SEND MESSAGE</button>
            </div>
            </form>
        );
      case "showResult":

        return (
          <div className="rsvp-success">
            <h2>Thank you!</h2>
          </div>
        );
      }
  };
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <main className="site-main wrapper rsvp welcome">
          <div className="border">
            <div className="border__inner">
              <a href="/" className="site-logo">
                <SVG svg={logo} />
              </a>
              <section className="rsvp-form welcome">
                <div className="container rsvp-body">
                  <h2>Beloved friends,</h2>
                  <p>As you may have already heard, we will be tying the knot on November 22nd, 2020. We are extremely excited to start our new chapter, but unfortunately, the pandemic we are experiencing now impedes us from celebrating with all of you. Nonetheless, nothing will make us happier than to hear from you, friends who have become our family, and to have your blessings and well wishes. Please leave us some lovely words as a mark of a beautiful (and fun!) beginning. </p>

                  <p>All the love,<br />Windy & Novrita</p>
                  { this.renderComponents() }
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
