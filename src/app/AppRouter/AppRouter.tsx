import Layout from "@app/Layout/Layout";
import { useUserStore } from "@entities/User";
import { AuthPage } from "@pages/AuthPages";
import { Route, Routes } from "react-router";
import AuthorizedAppRouter from "./AuthorizedAppRouter";

const AppRouter = () => {
  const user = useUserStore((state) => state.user);
  const isAuthorized = !!user;
  return (
    <Routes>
      {isAuthorized ? (
        <Layout>
          <AuthorizedAppRouter />
        </Layout>
      ) : (
        <Route>
          <Route path="auth" element={<AuthPage />} />
          <Route path="*" element={<AuthPage />} />
        </Route>
      )}
    </Routes>
  );
};

export default AppRouter;
