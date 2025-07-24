export type StoreState = {
    name: string;
    age: number;
};

export type StoreAction =
    | { type: "change"; key: string; value: any }
    | { type: "changeMore"; obj: Partial<StoreState> };
