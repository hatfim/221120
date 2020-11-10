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
      .then(() => {
        console.log('success')
      })
      .catch(error => alert(error));
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

                  <form
                    action="https://formspree.io/f/moqpwgrn"
                    method="POST"
                  >
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
