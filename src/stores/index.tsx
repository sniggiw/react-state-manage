import { createContext } from "react";
import type { StoreAction, StoreState } from "../type/store";

// 全局状态上下文
export const PageStateContext = createContext<StoreState | null>(null);

// 全局状态分发上下文
export const PageDispatchContext =
    createContext<React.Dispatch<StoreAction> | null>(null);

/**
 * 全局状态分发
 * @param state 当前状态
 * @param action 动作（类型）
 * @returns 新的状态
 */
export const PageReducer = (
    state: StoreState,
    action: StoreAction
): StoreState => {
    switch (action.type) {
        case "change":
            return { ...state, [action.key]: action.value };
        case "changeMore":
            return { ...state, ...action.obj };
        default:
            return state;
    }
};

// 获取初始状态
export const GetPageInitStateFn = (): StoreState => {
    return {
        name: "wiggins",
        age: 28,
    };
};
