import Navbar from "./components/Navbar";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.intro}>
          <h1>Mi proyecto Next.js</h1>
          <p>Bienvenido a mi portafolio creado con Next.js.</p>
        </section>
      </main>

      <Footer />
    </>
  );
}