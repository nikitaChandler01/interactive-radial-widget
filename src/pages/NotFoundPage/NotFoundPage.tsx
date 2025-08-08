import { Center } from "@chakra-ui/react/center";
import { Link } from "@chakra-ui/react/link";
import { Heading, Text } from "@chakra-ui/react/typography";
import { useNavigate } from "react-router";

const NotFoundPage = () => {
    const pathname = window.location.pathname;
    const navigate = useNavigate();
    const goHome = () => navigate("/home");
    return (
        <Center
            css={{
                width: "100%",
            }}
            flexDir={"column"}
        >
            <Heading as="h4">404</Heading>
            <Text color="fg.muted" textAlign={"center"}>
                Запрашиваемая страница {pathname} не найдена
            </Text>
            <Link onClick={goHome} variant="underline">
                Вернуться на главную
            </Link>
        </Center>
    );
};

export default NotFoundPage;
