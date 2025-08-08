import { Flex } from "@chakra-ui/react/flex";
import { Tabs } from "@chakra-ui/react/tabs";
import { useEffect, useState } from "react";

const Orders = () => {
    const [dataState, setDataState] = useState("open");

    useEffect(() => {
        setDataState("open");
        return () => {
            setDataState("close");
        };
    }, []);

    return (
        <Flex w="full">
            <Tabs.Root
                data-state={dataState}
                _open={{
                    animation: "fade-in 100ms ease-out",
                }}
                size={"sm"}
                _before={{ display: "none" }}
                lazyMount
                w="full"
                variant={"enclosed"}
                defaultValue="current"
            >
                <Tabs.List rounded="l3" p="1">
                    <Tabs.Trigger fontWeight={600} fontSize={16} value="current">
                        Текущие
                    </Tabs.Trigger>
                    <Tabs.Trigger fontWeight={600} fontSize={16} value="debit">
                        Дебиторка
                    </Tabs.Trigger>
                    <Tabs.Trigger fontWeight={600} fontSize={16} value="non-paid">
                        Неоплаченные
                    </Tabs.Trigger>
                    <Tabs.Trigger fontWeight={600} fontSize={16} value="all">
                        Все заказы
                    </Tabs.Trigger>
                    <Tabs.Indicator rounded="l2" />
                </Tabs.List>
                <Tabs.Content
                    value="current"
                    _open={{
                        animation: "fade-in 200ms ease-out",
                    }}
                >
                    Manage your team members
                </Tabs.Content>
                <Tabs.Content
                    value="non-paid"
                    _open={{
                        animation: "fade-in 200ms ease-out",
                    }}
                >
                    Manage your projects
                </Tabs.Content>
                <Tabs.Content
                    value="all"
                    _open={{
                        animation: "fade-in 200ms ease-out",
                    }}
                >
                    Manage your tasks for freelancers
                </Tabs.Content>
            </Tabs.Root>
        </Flex>
    );
};

export default Orders;
