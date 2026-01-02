import styles from "./Button_UI.module.css";

function Button_UI({ text, colorType = "blue", onClick }) {
  return (
    <button
      className={`${styles.button} ${styles[colorType]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button_UI;
