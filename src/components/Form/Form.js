// https://script.google.com/macros/s/AKfycbzWeCF_KHlsOY3zX11G-6-sIFu2eFDV3sxuPTtrk_LB4w2qQwQ0/exec

import React from "react";
import styles from "./Form.scss"

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        email: "",
        password: ""
      },
      isSubmitting: false,
      isError: false
    };
  }

  submitForm = async e => {
    e.preventDefault();
    console.log(this.state);
    this.setState({ isSubmitting: true });

    const res = await fetch("https://script.google.com/macros/s/AKfycbzWeCF_KHlsOY3zX11G-6-sIFu2eFDV3sxuPTtrk_LB4w2qQwQ0/exec", {
      method: "POST",
      body: JSON.stringify(this.state.values),
      headers: {
        "Content-Type": "application/json"
      }
    });
    console.log(res);
    this.setState({ isSubmitting: false });
    const data = await res.json();
    !data.hasOwnProperty("error")
      ? this.setState({ message: data.success })
      : this.setState({ message: data.error, isError: true });

    setTimeout(
      () =>
        this.setState({
          isError: false,
          message: "",
          values: { email: "", password: "" }
        }),
      1600
    );
  };

  handleInputChange = e =>
    this.setState({
      values: { ...this.state.values, [e.target.name]: e.target.value }
    });

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <div className="input-group">
            <label htmlFor="email">E-mail Address</label>
            <input
              type="email"
              name="email"
              id="email"
              value={this.state.values.email}
              onChange={this.handleInputChange}
              title="Email"
              required
            />
          </div>
          <div className="input-group">
            <input type="number" name="extras" className="" min="0" max="4" placeholder="Husband/Wife or kids" required />
            <input type="number" name="invite_code" id="invite_code" className="" min="0" placeholder="Invite code" required />
            <input name="name" className="" placeholder="Your name" required />
          </div>
          <button type="submit">Sign In</button>
        </form>
        <div className={`message ${this.state.isError && "error"}`}>
          {this.state.isSubmitting ? "Submitting..." : this.state.message}
        </div>
      </div>
    );
  }
}

export default Form;

