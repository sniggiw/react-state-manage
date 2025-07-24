import { useReducer } from "react";
import Header from "./components/header";
import Main from "./components/main";
import { PageDispatchContext, PageReducer, PageStateContext } from "./stores";
import styles from "./index.module.scss";

function App() {
    const [initState, dispatch] = useReducer(PageReducer, {
        name: "wiggins",
    });

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
