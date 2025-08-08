import { Flex } from "@chakra-ui/react/flex";
import { Separator } from "@chakra-ui/react/separator";
import MyBox from "@shared/ui/container/MyBox";
import { List } from "@shared/ui/list";
import { useLocation } from "react-router";
import type { IProfileMenuOptionType } from "./ProfileMenuItem";
import ProfileMenuItem from "./ProfileMenuItem";

const ProfileMenu = () => {
    const location = useLocation();
    const profileEndpoint = location.pathname.split("/").at(-1);
    const menuItems: IProfileMenuOptionType[] = [
        { label: "Заказы", key: "orders", iconName: "orders" },
        { label: "Проекты", key: "projects", iconName: "projects" },
        { label: "Платежи", key: "payments", iconName: "payments" },
        { label: "Личная информация", key: "info", iconName: "personal" },
        { label: "Избранное", key: "favorites", iconName: "favorites" },
    ];

    const portalMenuItems: IProfileMenuOptionType[] = [
        { label: "Поддержка", key: "support", iconName: "support" },
        { label: "Выйти", key: "logout", iconName: "logout" },
    ];

    return (
        <Flex minW={280}>
            <MyBox>
                <List<IProfileMenuOptionType>
                    checkIsActive={(key) => key === profileEndpoint}
                    items={menuItems}
                    itemRenderer={(item, isActive) => (
                        <ProfileMenuItem item={item} isActive={isActive} />
                    )}
                />

                <Separator />
                <List<IProfileMenuOptionType>
                    checkIsActive={(key) => key === profileEndpoint}
                    items={portalMenuItems}
                    itemRenderer={(item, isActive) => (
                        <ProfileMenuItem item={item} isActive={isActive} />
                    )}
                />
            </MyBox>
        </Flex>
    );
};

export default ProfileMenu;
