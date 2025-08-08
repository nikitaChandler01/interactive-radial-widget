import { Box } from "@chakra-ui/react/box";
import { Flex } from "@chakra-ui/react/flex";
import { ProfileMenu } from "@widgets/Profile";
import { Outlet } from "react-router";
import ProfilePageHeader from "./ProfilePageHeader";
import MyBox from "@shared/ui/container/MyBox";

const ProfilePage = () => {
    return (
        <Flex className="profile" flexDir={"column"} flex={1} style={{ height: "100%" }}>
            <ProfilePageHeader />
            <Box paddingTop={8}>
                <Flex gap={12}>
                    <ProfileMenu />
                    <MyBox>
                        <Outlet />
                    </MyBox>
                </Flex>
            </Box>
        </Flex>
    );
};

export default ProfilePage;
