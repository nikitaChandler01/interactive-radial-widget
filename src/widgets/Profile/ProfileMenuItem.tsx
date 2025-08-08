import { Center } from "@chakra-ui/react/center";
import { Flex } from "@chakra-ui/react/flex";
import { Icon } from "@chakra-ui/react/icon";
import type { OptionType } from "@shared/types/OptionType";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaBoxOpen, FaUser } from "react-icons/fa";
import {
    MdAccountBalanceWallet,
    MdChat,
    MdLogout,
    MdOutlineFavorite,
} from "react-icons/md";
import { Link } from "react-router";

interface IProfileMenuIconProps {
    isActive?: boolean;
    iconName:
        | "orders"
        | "projects"
        | "personal"
        | "payments"
        | "favorites"
        | "support"
        | "logout";
}

export interface IProfileMenuOptionType extends OptionType {
    iconName: IProfileMenuIconProps["iconName"];
}

interface IProfileMenuItem {
    item: IProfileMenuOptionType;
    isActive: boolean;
}

const ProfileMenuIcon = ({ iconName, isActive }: IProfileMenuIconProps) => {
    const color = isActive
        ? {
              _light: "colorPalette.600",
              _dark: "white",
          }
        : {
              _dark: "colorPalette.contrast",
              _light: "colorPalette.600",
          };
    if (iconName === "orders")
        return (
            <Icon color={color} height={"28px"} aspectRatio={1}>
                <FaBoxOpen />
            </Icon>
        );
    if (iconName === "projects")
        return (
            <Icon color={color}>
                <AiOutlineFundProjectionScreen />
            </Icon>
        );
    if (iconName === "favorites")
        return (
            <Icon color={color}>
                <MdOutlineFavorite />
            </Icon>
        );
    if (iconName === "payments")
        return (
            <Icon color={color}>
                <MdAccountBalanceWallet />
            </Icon>
        );
    if (iconName === "personal")
        return (
            <Icon color={color}>
                <FaUser />
            </Icon>
        );
    if (iconName === "logout")
        return (
            <Icon color={color}>
                <MdLogout />
            </Icon>
        );
    if (iconName === "support")
        return (
            <Icon color={color}>
                <MdChat />
            </Icon>
        );
    return <></>;
};

const ProfileMenuItem = ({ item, isActive }: IProfileMenuItem) => {
    return (
        <Flex
            bg={
                isActive
                    ? { _light: "colorPalette.100/40", _dark: "colorPalette.500/10" }
                    : undefined
            }
            align={"center"}
            w={"full"}
            fontSize={18}
            fontWeight={isActive ? 600 : 400}
            color={
                isActive
                    ? {
                          _light: "colorPalette.600",
                          _dark: "colorPalette.400",
                      }
                    : undefined
            }
            borderRadius={"xl"}
            transitionProperty={"all"}
            transitionDuration={"0.2s"}
        >
            <Link
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    width: "100%",
                    padding: "8px 16px 8px 8px",
                }}
                to={item.key}
            >
                {item.iconName && (
                    <Center
                        height={"28px"}
                        aspectRatio={1}
                        boxSizing={"border-box"}
                        borderWidth={1}
                        borderColor={
                            isActive
                                ? "colorPalette.600"
                                : {
                                      _dark: "transparent",
                                      _light: "gray.100",
                                  }
                        }
                        bg={{
                            _light: "colorPalette.contrast",
                            _dark: isActive ? "colorPalette.500" : undefined,
                        }}
                        padding={1}
                        borderRadius={"md"}
                    >
                        <ProfileMenuIcon iconName={item.iconName} />
                    </Center>
                )}
                {item.label}
            </Link>
        </Flex>
    );
};

export default ProfileMenuItem;
