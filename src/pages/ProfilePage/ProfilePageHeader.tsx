import { Stack } from "@chakra-ui/react/stack";
import { Flex } from "@chakra-ui/react/flex";
import { Heading, Text } from "@chakra-ui/react/typography";
import { useGetUser } from "@features/Auth";

const ProfilePageHeader = () => {
    const { user } = useGetUser();
    return (
        <Flex flexDir={"column"}>
            <Heading size={"3xl"}>Ваш личный кабинет</Heading>
            <Stack direction={"row"} gap={3} wrap={"wrap"}>
                <Text color={"gray.400"}>{user?.name}</Text>
                <Text color={"gray.400"}>{user?.email}</Text>
                <Text color={"gray.400"}>{user?.phone}</Text>
            </Stack>
        </Flex>
    );
};

export default ProfilePageHeader;
