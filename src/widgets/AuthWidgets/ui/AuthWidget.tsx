import { AuthSignUp } from "@features/Auth";
import "./AuthWidget.scss";

const AuthWidget = () => {
  return (
    <div className="auth-widget">
      <AuthSignUp />
    </div>
  );
};

export default AuthWidget;
