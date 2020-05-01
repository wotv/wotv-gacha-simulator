import _ from "lodash";

export const sort = <T>(list: T[], column: keyof T, orders: string[]) => {
    return _.sortBy(list, (item) =>
        _.indexOf(orders, item[column] as any)
    )
};