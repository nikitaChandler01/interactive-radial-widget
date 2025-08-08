import { VStack } from "@chakra-ui/react/stack";
import { Center } from "@chakra-ui/react/center";
import { Spinner } from "@chakra-ui/react/spinner";
import { Text } from "@chakra-ui/react/typography";

interface IFullPageLoader {
    showText?: boolean;
}

const FullPageLoader = ({ showText }: IFullPageLoader) => {
    return (
        <Center w="100%" h="100vh">
            <VStack colorPalette="colorPalette">
                <Spinner
                    css={{ "--spinner-track-color": "colors.gray.200" }}
                    size="lg"
                    color="colorPalette.600"
                />
                {showText ? (
                    <Text fontWeight={600} color="colorPalette.600">
                        Проверка доступа...
                    </Text>
                ) : undefined}
            </VStack>
        </Center>
    );
};

export default FullPageLoader;
