export const filterData = <T extends Record<string, unknown>>(data: T[] | undefined, search: string) => data?.filter(
    item =>
        Object.values(item).some(val =>
            typeof val === 'string' || typeof val === 'number'
                ? val.toString().toLowerCase().includes(search.toLowerCase())
                : false,
        ),
);
