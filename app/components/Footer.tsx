import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.brand}>MiPortafolio</span>

      <p className={styles.text}>
        © 2026 Daniel Lasso. Todos los derechos reservados.
      </p>
    </footer>
  );
}