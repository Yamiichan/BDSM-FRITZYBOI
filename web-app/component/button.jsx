import styles from "./Button.module.css";

export default function Button({ children, variant }) {
    return (
      <div>
        {variant === "primary" ? (
          <div>
            <button className={styles.primary}>{children}</button>
          </div>
        ) : (
          <div>
            <button className={styles.secondary}>{children}</button>
          </div>
        )}
      </div>
    );
  }