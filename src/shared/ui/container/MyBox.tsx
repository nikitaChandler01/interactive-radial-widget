import { Flex } from "@chakra-ui/react/flex";
import React from "react";

interface MyBoxProps {
    children: React.ReactNode;
}

const MyBox = ({ children }: MyBoxProps) => {
    return (
        <Flex
            className="my-box"
            height={"fit-content"}
            minHeight={"max-content"}
            direction="column"
            gapY="2"
            borderRadius={"2xl"}
            bg={{ _dark: "colorPalette.100/10" }}
            padding={2}
            w="full"
        >
            {children}
        </Flex>
    );
};

export default MyBox;
