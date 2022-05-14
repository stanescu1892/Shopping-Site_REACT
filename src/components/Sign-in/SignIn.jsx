import { useContext, useState } from "react";
import FormInput from "../Form-Input/FormInput";
import CustomButton from "../customButton/CustomButton";
import { useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { StoreContext } from "../../context/store";
import "./SignIn.scss";

function SignIn() {
  // const [SignIn, SetSignIn] = useState({ email: "", password: "" });
  const [password, setPassword] = useState({ password: "" });
  const [email, setEmail] = useState({ email: "" });

  const navigate = useNavigate();
  const context = useContext(StoreContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // SetSignIn({ email: "", password: "" });
    setPassword({ password: "" });
    setEmail({ email: "" });

    const { email } = email;
    const { password } = password;

    try {
      const authRes = await auth.signInWithEmailAndPassword(email, password);
      console.log("auth-user-pass", authRes);
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

  const handleSignInWithGoogle = async () => {
    const authRes = await signInWithGoogle();

    if (authRes.additionalUserInfo.profile) {
      context.dispatch({
        type: "SET_USER",
        payload: authRes.additionalUserInfo.profile,
      });
      navigate("/");
    }
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
        <CustomButton
          type="button"
          onClick={handleSignInWithGoogle}
          isGoogleSignIn
        >
          {" "}
          Sign In with Google{" "}
        </CustomButton>
      </form>
    </div>
  );
}

export default SignIn;
