import { useState } from "react";
import FormInput from "../Form-Input/FormInput";
import "./SignIn.scss";
import CustomButton from "../customButton/CustomButton";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

function SignIn() {
  // const [SignIn, SetSignIn] = useState({ email: "", password: "" });
  const [password, setPassword] = useState({ password: "" });
  const [email, setEmail] = useState({ email: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    // SetSignIn({ email: "", password: "" });
    setPassword({ password: "" });
    setEmail({ email: "" });

    const { email } = email;
    const { password } = password;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setPassword({ password: "" });
      setEmail({ email: "" });
    } catch (error) {
      console.log(error);
    }
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
        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
          {" "}
          Sign In with Google{" "}
        </CustomButton>
      </form>
    </div>
  );
}

export default SignIn;
