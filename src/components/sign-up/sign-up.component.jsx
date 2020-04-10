import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.componenet";
import { auth, createUserProfileDocument } from "../../firebase/firebase.util";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  HandleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    } else {
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
        await createUserProfileDocument(user, { displayName });
        this.setState({
          displayName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  HandelChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
    console.log(name);
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.HandleSubmit}>
          <FormInput
            type="text"
            label="Display Name"
            name="displayName"
            value={displayName}
            handleChange={this.HandelChange}
          />
          <FormInput
            type="email"
            label="Email"
            name="email"
            value={email}
            handleChange={this.HandelChange}
          />
          <FormInput
            type="password"
            label="password"
            name="password"
            value={password}
            handleChange={this.HandelChange}
          />
          <FormInput
            type="password"
            label="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.HandelChange}
          />
          <CustomButton type="submit">SignUp</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
