import { useContext } from "react";
import { PageDispatchContext, PageStateContext } from "../stores";

export default function useStore() {
    const storeState = useContext(PageStateContext);
    const dispatch = useContext(PageDispatchContext);

    if(!storeState || !dispatch) {
        throw new Error('useStore must be used within a PageProvider')
    }

    return { storeState, dispatch };
}
