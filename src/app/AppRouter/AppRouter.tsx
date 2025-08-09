import { useUserStore } from "@entities/User";
import { Route, Routes } from "react-router";
import AuthorizedAppRouter from "./AuthorizedAppRouter";
import { SignInPage, SignUpPage } from "@pages/AuthPages";

const AppRouter = () => {
  const user = useUserStore((state) => state.user);
  const isAuthorized = !!user;
  return (
    <Routes>
      {isAuthorized ? (
        <AuthorizedAppRouter />
      ) : (
        <Route>
          <Route path="login" element={<SignInPage />} />
          <Route path="register" element={<SignUpPage />} />
          <Route path="*" element={<SignUpPage />} />
        </Route>
      )}
    </Routes>
  );
};

export default AppRouter;
