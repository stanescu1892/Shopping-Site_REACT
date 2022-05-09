import "./SignInAndSignUp.scss";
import SignIn from "../../components/Sign-in/SignIn";
import SignUp from "../../components/Sign-Up/SignUp";

function SignInAndSignUp() {
  return (
    <div className="sign-in-and-sign-out">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInAndSignUp;
