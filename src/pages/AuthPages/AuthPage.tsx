import { CenterBox } from "@shared/ui/Box";
import "./AuthPage.scss";
import { AuthWidget } from "@widgets/AuthWidgets";

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
