import useStore from "../../hooks/useStore";
import styles from "./ index.module.scss";

export default function Header() {
    const { storeState, dispatch } = useStore();

    const changeName = () => {
        dispatch({ type: "change", key: "name", value: "arron" });
    };

    return (
        <div className={styles.header}>
            <h2>header</h2>
            <div>name:{storeState?.name}</div>
            <button onClick={changeName}>change name</button>
        </div>
    );
}
