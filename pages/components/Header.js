import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header + " " + styles.bgGrey}>
      <div className={styles.container}>
        <h1 className={styles.title}>Header</h1>
      </div>
    </header>
  );
};

export default Header;
