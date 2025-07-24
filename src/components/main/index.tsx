import useStore from "../../hooks/useStore";
import styles from "./index.module.scss";

export default function Main() {
    const { storeState, dispatch } = useStore();

    const changeAll = () => {
        dispatch({
            type: "changeMore",
            obj: {
                name: storeState.name.split("").reverse().join(""),
                age: storeState.age + 1,
            },
        });
    };

    return (
        <div className={styles.main}>
            <h2>main</h2>
            <div>name:{storeState?.name}</div>
            <div>age:{storeState?.age}</div>
            <button onClick={changeAll}>
                reverse name and age add one every time
            </button>
        </div>
    );
}
