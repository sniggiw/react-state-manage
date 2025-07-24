export type StoreState = {
    name: string;
};

export type StoreAction =
    | { type: "change"; key: string; value: any }
    | { type: "changeMore"; obj: StoreState };
