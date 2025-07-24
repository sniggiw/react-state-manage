import useStore from "../../hooks/useStore";
import styles from "./ index.module.scss";

export default function Header() {
    const { storeState, dispatch } = useStore();

    const changeName = () => {
        dispatch({
            type: "change",
            key: "name",
            value: storeState.name.split("").reverse().join(""),
        });
    };

    return (
        <div className={styles.header}>
            <h2>header</h2>
            <div>name:{storeState?.name}</div>
            <div>age:{storeState?.age}</div>
            <button onClick={changeName}>reverse name</button>
        </div>
    );
}
