import "./CustomButton.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    id="custom-card-button"
    className={`${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    }
    custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
