import { useGetUser } from "@features/Auth";
import { ContactsPage } from "@pages/ContactsPage";
import { HomePage } from "@pages/HomePage";
import { NotFoundPage } from "@pages/NotFoundPage";
import { ProfilePage } from "@pages/ProfilePage";
import FullPageLoader from "@shared/ui/loaders/FullPageLoader";
import { Orders } from "@widgets/Orders";
import { Projects } from "@widgets/Projects";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";

const AuthorizedRouter = () => {
    const { user, isPending } = useGetUser();
    // добавить проверку на error

    if (isPending) return <FullPageLoader showText />;

    if (user) {
        return (
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/profile" element={<ProfilePage />}>
                        <Route path="orders" element={<Orders />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="*" element={<>404 Not Found</>} />
                    </Route>
                    <Route path="/contact" element={<ContactsPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Layout>
        );
    }

    return (
        //ошибка
        <Routes>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default AuthorizedRouter;
