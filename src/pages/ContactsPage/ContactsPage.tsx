import {
    Fieldset,
    Flex,
    Heading,
    Input,
    InputGroup,
    Separator,
    Stack,
    Text,
    Textarea,
} from "@chakra-ui/react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { MdEmail, MdMessage, MdPhone } from "react-icons/md";
import { withMask } from "use-mask-input";
import { adresses, numberMask } from "./constants";

interface IFeedback {
    phone: string;
    email: string;
    message: string;
}

const ContactsPage = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        getValues,
    } = useForm<IFeedback>();

    const onSubmit: SubmitHandler<IFeedback> = (data) => {
        console.log(data);
    };

    const numberMaskRef = withMask(numberMask);

    return (
        <Flex flexDir={"column"} gapY={16}>
            <Flex
                flexDir={"row"}
                height={"fit-content"}
                width={"100%"}
                gap={12}
                wrap={"wrap"}
            >
                {adresses.map((item, index) => (
                    <Flex flexDir={"column"} w={350} gap={2} height={"max-content"}>
                        <Heading size={"2xl"}>{item.value}</Heading>
                        <Flex gap={4} wrap={"wrap"}>
                            <Text fontSize={16}>{item.street}</Text>
                            <Text fontSize={16}>{item.schedule}</Text>
                        </Flex>
                        <Flex flexDir={"column"}>
                            {item.phone.map((phone) => (
                                <Text>{phone}</Text>
                            ))}
                        </Flex>
                    </Flex>
                ))}
            </Flex>
            <Separator />
            <Flex
                flexDir={"column"}
                height={"fit-content"}
                maxWidth={"100%"}
                wrap={"wrap"}
                gapY={4}
            >
                <Heading size={"3xl"}>Обратная связь</Heading>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Fieldset.Root size="lg" maxW="md" minW={300} spaceY={8}>
                        <Fieldset.Legend fontWeight={300}>
                            Свяжитесь с нами — мы ответим в ближайшее время
                        </Fieldset.Legend>
                        <Fieldset.Content>
                            <InputGroup startElement={<MdPhone />}>
                                <Input
                                    {...register("phone", {
                                        required: "Это поле обязательно для заполнения",
                                    })}
                                    ref={numberMaskRef}
                                    variant={"flushed"}
                                    size={"lg"}
                                    name="phone"
                                    placeholder="Телефон"
                                />
                            </InputGroup>
                            <InputGroup startElement={<MdEmail />}>
                                <Input
                                    mask={"(99) 99999-9999"}
                                    {...register("email", {
                                        required: "Это поле обязательно для заполнения",
                                    })}
                                    variant={"flushed"}
                                    size={"lg"}
                                    name="email"
                                    placeholder="example@mail.ru"
                                />
                            </InputGroup>
                            <Textarea
                                autoresize
                                resize={"none"}
                                {...register("message", {
                                    required: "Это поле обязательно для заполнения",
                                })}
                                size={"lg"}
                                name="message"
                                placeholder="Сообщение"
                            />
                        </Fieldset.Content>
                    </Fieldset.Root>
                </form>
            </Flex>
        </Flex>
    );
};

export default ContactsPage;
