import React from "react";
// import "./utils/util.css";
// import "./utils/main.css";
import axios from "axios";
import "./Login.css";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const payload = {
      email: this.email,
      password: this.password,
    };

    axios({
      url: "/api/users/login",
      method: "POST",
      data: payload,
    })
      .then(() => {
        this.resetForm();
        console.log("Your request has beem sent");
      })
      .catch(() => {
        console.log("There was an error");
      });
  };

  resetForm = () => {
    this.setState({
      email: "",
      password: "",
    });
  };

  render() {
    console.log("state:", this.state);
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="img">
                <img src="/images/img-01.png" alt="" />
              </div>
            </div>
            <div className="col-3">
              <div className="input-icons">
                <form onSubmit={this.onSubmit}>
                  <h2>Login</h2>
                  <div className="input-container">
                    <i className="fa fa-envelope icon"></i>
                    <input
                      className="input-field"
                      type="text"
                      placeholder="Email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="input-container">
                    <i className="fa fa-key icon"></i>
                    <input
                      className="input-field"
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </div>

                  <label>
                    <input type="checkbox" name="remember" /> Remember me
                  </label>
                  <button type="submit" className="btn">
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
