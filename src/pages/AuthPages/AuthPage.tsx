import { CenterBox } from "@shared/ui/Box";
import { AuthWidget } from "@widgets/AuthWidgets";
import "./AuthPage.scss";

const AuthPage = () => {
  return (
    <div className="auth-page">
      <CenterBox>
        <AuthWidget />
      </CenterBox>
    </div>
  );
};

export default AuthPage;
