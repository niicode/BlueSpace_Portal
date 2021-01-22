import React from "react";
// import { useForm } from "react-hook-form";
import "./Signup.css";
import axios from "axios";

// function Signup() {
//   const [getName, setName] = useState("");
//   const [getEmail, setEmail] = useState("");
//   const [getPassword, setPassword] = useState("");

//   const { register, handleSubmit, errors } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   const state = {
//     full_name: "",
//     email: "",
//     password: "",
//   };
//   function handleNameInput(e) {
//     setName(e.target.value);
//   }

// function handleEmailInput(e) {
//   console.log(e.target.value);
//   e.preventDefault();
//   setEmail(e.target.value);
// }

// function handlePassword(e) {
//   setPassword(e.target.value);

class Signup extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    experience: "",
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
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      gender: this.state.gender,
      experience: this.state.experience,
    };

    axios({
      url: "/api/users/register",
      method: "Post",
      data: payload,
    })
      .then(() => {
        console.log("Data has been sent succesfully");
        this.resetUserInput();
      })
      .catch(() => {
        console.log("Internal server error");
      });
  };

  resetUserInput = () => {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      gender: "",
      experience: "",
    });
  };
  render() {
    console.log("State:", this.state);
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <img className="signup_image" src="/images/room.jpg" alt="" />
          </div>
          <div className="col-3">
            <p className="heading">Create an account to continue</p>
            <form onSubmit={this.onSubmit}>
              <p>First name</p>
              <input
                name="firstName"
                // ref={register({ required: true, maxLength: 29 })}
                className="main_input"
                type="text"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
              <p>Last name</p>
              <input
                name="lastName"
                // ref={register({ required: true, maxLength: 29 })}
                className="main_input"
                type="text"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
              {/* {errors.full_name && <p>This is required</p>} */}
              <p>Email</p>
              <input
                name="email"
                // ref={register({ required: true, maxLength: 29 })}
                className="main_input"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              {/* {errors.email && <p>Enter a valid email</p>} */}
              <p>Password</p>
              <input
                name="password"
                // ref={register({ required: true, minLength: 8 })}
                className="main_input"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              {/* {errors.password && (
                <p>Password can't be less than 8 characters</p>
              )} */}
              <p></p>
              <div className="experience_capture">
                <input
                  className="beginner"
                  type="radio"
                  value="Beginnner"
                  name="experience"
                  onChange={this.handleChange}
                />
                Beginner
                <input
                  type="radio"
                  value="Intermediate"
                  name="experience"
                  onChange={this.handleChange}
                />
                Intermediate
                <input
                  type="radio"
                  value="Expert"
                  name="experience"
                  onClick={this.handleChange}
                />{" "}
                Expert
              </div>
              <p></p>
              <input
                type="radio"
                value="Male"
                name="gender"
                onClick={this.handleChange}
              />
              Male
              <input
                type="radio"
                value="Female"
                name="gender"
                onClick={this.handleChange}
              />{" "}
              Female
              <input
                type="radio"
                value="Other"
                name="gender"
                onClick={this.handleChange}
              />{" "}
              Other
              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
