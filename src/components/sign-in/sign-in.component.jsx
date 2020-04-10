import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.componenet";
import { auth, signInWithGoogle } from "../../firebase/firebase.util";
import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  HandleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.error(error.message);
    }
  };

  HandelChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I Already have An account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.HandleSubmit}>
          <FormInput
            type="text"
            name="email"
            label="email"
            value={this.state.email}
            handleChange={this.HandelChange}
          />

          <FormInput
            type="password"
            label="password"
            name="password"
            value={this.state.password}
            handleChange={this.HandelChange}
          />
          <div className="button-holder">
            <CustomButton type="submit">Submit</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
