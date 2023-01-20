import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer + " " + styles.bgGrey}>
      <div className={styles.container}>
        <h1 className={styles.title}>Footer</h1>
      </div>
    </footer>
  );
};

export default Footer;
