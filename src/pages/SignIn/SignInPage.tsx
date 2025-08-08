import {
    Box,
    Button,
    Center,
    Checkbox,
    Field,
    Fieldset,
    Input,
    Stack,
} from "@chakra-ui/react";
import { useLogin } from "@features/Auth";
import { PasswordInput } from "@shared/snippets/password-input";
import { useForm, type SubmitHandler } from "react-hook-form";
import "./SignInPage.scss";
interface ISignInForm {
    username: string;
    password: string;
    remember: boolean;
}

const SignInPage = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        getValues,
    } = useForm<ISignInForm>();

    const { login, isPending, isError, error } = useLogin({
        remember: getValues("remember"),
    });
    const onSubmit: SubmitHandler<ISignInForm> = (data) => {
        login(data);
    };
    return (
        <Center className="morph-background" direction="column" w="100%" h="100vh">
            <Box
                bg={"colorPalette.contrast"}
                padding={"12"}
                paddingTop={"8"}
                paddingBottom={"18"}
                borderRadius={"4xl"}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Fieldset.Root
                        size="lg"
                        maxW="md"
                        minW={300}
                        spaceY={8}
                        invalid={isError}
                    >
                        <Stack align={"center"}>
                            <Fieldset.Legend fontWeight={"regular"} textAlign={"center"}>
                                Авторизация
                            </Fieldset.Legend>
                            {error?.response?.data?.error === "invalid_grant" ? (
                                <Fieldset.ErrorText
                                    fontWeight={"thin"}
                                    textAlign={"center"}
                                >
                                    Неправильный логин или пароль
                                </Fieldset.ErrorText>
                            ) : undefined}
                        </Stack>
                        <Fieldset.Content spaceY={2}>
                            <Field.Root invalid={!!errors.username}>
                                <Input
                                    {...register("username", {
                                        required: "Это поле обязательно для заполнения",
                                    })}
                                    borderRadius={"xl"}
                                    size={"xl"}
                                    fontWeight={"regular"}
                                    name="username"
                                    placeholder="Email"
                                    _placeholder={{
                                        fontWeight: "thin",
                                    }}
                                />
                                <Field.ErrorText>
                                    Это поле обязательно для заполнения
                                </Field.ErrorText>
                            </Field.Root>

                            <Field.Root invalid={!!errors.password}>
                                <PasswordInput
                                    {...register("password", {
                                        required: "Это поле обязательно для заполнения",
                                    })}
                                    borderRadius={"xl"}
                                    size={"xl"}
                                    name="password"
                                    placeholder="Пароль"
                                    _placeholder={{
                                        fontWeight: "thin",
                                    }}
                                />
                                <Field.ErrorText>
                                    Это поле обязательно для заполнения
                                </Field.ErrorText>
                            </Field.Root>
                            <Field.Root>
                                <Checkbox.Root
                                    variant={"outline"}
                                    size={"sm"}
                                    {...register("remember")}
                                >
                                    <Checkbox.HiddenInput />
                                    <Checkbox.Control borderRadius={"md"} />
                                    <Checkbox.Label fontWeight={"regular"}>
                                        Запомнить меня
                                    </Checkbox.Label>
                                </Checkbox.Root>
                            </Field.Root>
                        </Fieldset.Content>

                        <Center>
                            <Button
                                borderRadius={"xl"}
                                size={"lg"}
                                width={"full"}
                                variant={"solid"}
                                type="submit"
                                alignSelf="flex-start"
                                loading={isPending}
                            >
                                Войти
                            </Button>
                        </Center>
                    </Fieldset.Root>
                </form>
            </Box>
        </Center>
    );
};

export default SignInPage;
