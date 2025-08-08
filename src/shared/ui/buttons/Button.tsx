import { Button as ButtonChakra, type ButtonProps } from "@chakra-ui/react";

const Button = (props: ButtonProps) => {
    return <ButtonChakra {...props} colorPalette={"brand"} />;
};

export default Button;
