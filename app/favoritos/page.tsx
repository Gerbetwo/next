import Navbar from "../components/Navbar";
import Favorites from "../components/Favorites";
import Footer from "../components/Footer";
import styles from "./favoritos.module.css";

export default function FavoritosPage() {
  return (
    <>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.header}>
          <span className={styles.badge}>Favoritos</span>

          <h1>Herramientas que uso para construir mejores interfaces.</h1>

          <p>
            Una pequeña colección de tecnologías importantes dentro de este
            proyecto.
          </p>
        </section>

        <Favorites />
      </main>

      <Footer />
    </>
  );
}