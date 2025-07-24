export type StoreState = {
    name: string;
    age: number;
};

export type StoreAction =
    | { type: "change"; key: keyof StoreState; value: StoreState[keyof StoreState] }
    | { type: "changeMore"; obj: Partial<StoreState> };
