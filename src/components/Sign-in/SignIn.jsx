import { useState } from "react";
import FormInput from "../Form-Input/FormInput";
import "./SignIn.scss";
import CustomButton from "../customButton/CustomButton";
import { signInWithGoogle } from "../../firebase/firebase.utils";

function SignIn() {
  // const [SignIn, SetSignIn] = useState({ email: "", password: "" });
  const [password, setPassword] = useState({ password: "" });
  const [email, setEmail] = useState({ email: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    // SetSignIn({ email: "", password: "" });
    setPassword({ password: "" });
    setEmail({ email: "" });
  };

  const handleChangeEmail = (event) => {
    const { value } = event.target;
    // SetSignIn({ [name]: value });
    setEmail({ email: value });
  };

  const handleChangePassword = (event) => {
    const { value } = event.target;
    setPassword({ password: value });
  };

  return (
    <div className="sign-in">
      <h2> I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChangeEmail}
          value={email.email}
          label="email"
          required
        />

        <FormInput
          name="password"
          type="password"
          value={password.password}
          handleChange={handleChangePassword}
          label="password"
          required
        />
        <CustomButton type="submit"> Sign In </CustomButton>
        <CustomButton onClick={signInWithGoogle}>
          {" "}
          Sign In with Google{" "}
        </CustomButton>
      </form>
    </div>
  );
}

export default SignIn;
