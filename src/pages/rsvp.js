import React from "react"
import AddToCalendar from "react-add-to-calendar"

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
    const {name, attendance, message, song} = this.state.formData
    try {
        const response = await fetch(
            "https://v1.nocodeapi.com/hatfim/google_sheets/XNgTKZgLXdiTpmJf?tabId=RSVP",
            {
                method: "post",
                body: JSON.stringify([[name, attendance, message, song]]),
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
              name="RSVP"
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
              <div className="rsvp-attendance form-item">
                <div className="form-item__label">Attendance</div>
                <div className="radio-button-group">
                  <div className="radio-button__wrapper">
                    <input id="radio-1" type="radio" name="attendance" className="radio-button" value="Yes" onChange={this.handleChange} required />
                    <label htmlFor="radio-1" className="radio-button__label">
                      <span className="radio-button__appearance"></span>
                      <span>JOYFULLY ACCEPT</span>
                    </label>
                  </div>
                  <div className="radio-button__wrapper">
                    <input id="radio-2" type="radio" name="attendance" className="radio-button" value="No" onChange={this.handleChange} required />
                    <label htmlFor="radio-2" className="radio-button__label">
                      <span className="radio-button__appearance"></span>
                      <span>REGRETFULLY DECLINE</span>
                    </label>
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
              <div className="rsvp-name form-item">
                <label className="form-item__label">Suggest a Song</label>
                <div className="text-input__outer-wrapper">
                  <div className="text-input__wrapper">
                    <input type="text" name="song" className="text-input" onChange={this.handleChange} required />
                  </div>
                </div>
              </div>
              <div className="rsvp-submit">
                <button className="btn" type="submit">SEND RSVP</button>
              </div>
            </form>
        );
      case "showResult":
        let event = {
          title: 'Windy & Novrita Intimate Dinner',
          description: 'Can`t wait to see you on the big day!',
          location: 'Hotel Santika Premiere ICE BSD',
          startTime: '2020-11-22T18:00:00+07:00',
          endTime: '2020-11-22T21:00:00+07:00'
        };

        return (
          <div className="rsvp-success">
            <h2>Hurray! Can't wait to see you on the big day!</h2>
            <AddToCalendar event={event} />
          </div>
        );
      }
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
                <h2>Intimate Wedding Dinner</h2>
                <p>HOTEL SANTIKA PRIMIERE ICE BSD CITY<br />SKY LOUNGE 15, 15 Fl<br />SUNDAY, NOVEMBER 22nd 2020</p>
              </div>
              <section className="rsvp-form">
                <div className="container rsvp-body">
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
