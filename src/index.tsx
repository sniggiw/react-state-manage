import { useReducer } from "react";
import Header from "./components/header";
import Main from "./components/main";
import styles from "./index.module.scss";
import {
    PageDispatchContext,
    PageReducer,
    PageStateContext,
    initPageState,
} from "./stores";

function App() {
    const [initState, dispatch] = useReducer(PageReducer, initPageState);

    return (
        <PageStateContext.Provider value={initState}>
            <PageDispatchContext.Provider value={dispatch}>
                <div className={styles.app}>
                    <Header />
                    <Main />
                </div>
            </PageDispatchContext.Provider>
        </PageStateContext.Provider>
    );
}

export default App;
