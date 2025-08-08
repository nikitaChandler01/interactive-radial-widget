import { Flex } from "@chakra-ui/react";
import type { OptionType } from "@shared/types/OptionType";
import React from "react";

interface IList<T extends OptionType> {
    checkIsActive: (key: string) => boolean;
    items: Array<T>;
    itemRenderer: (item: T, isActive: boolean) => React.ReactNode;
}

const List = <T extends OptionType>({ checkIsActive, items, itemRenderer }: IList<T>) => {
    return (
        <Flex direction="column" gapY="2">
            {items.map((item) => {
                const isActive = checkIsActive(item.key);
                return (
                    <Flex key={item.key} alignItems="center">
                        {itemRenderer(item, isActive)}
                    </Flex>
                );
            })}
        </Flex>
    );
};

export default List;
