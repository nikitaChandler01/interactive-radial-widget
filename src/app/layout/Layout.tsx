import { Flex } from "@chakra-ui/react";
import Header from "@widgets/Header/Header";
import "./Layout.scss";

interface ILayout {
    children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
    return (
        <Flex className="layout" flexDir="column" minHeight={"100vh"}>
            <Header />
            <Flex className="layout__content" flexDir={"column"}>
                {children}
            </Flex>
        </Flex>
    );
};

export default Layout;
