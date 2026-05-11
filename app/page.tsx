import Link from "next/link";
import Navbar from "./components/Navbar";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Next.js Portfolio</span>

            <h1>Construyendo interfaces modernas con React y Next.js.</h1>

            <p>
              Un portafolio simple, rápido y visual, con componentes reutilizables,
              rutas limpias y una base preparada para seguir creciendo.
            </p>

            <div className={styles.actions}>
              <Link className={styles.primaryButton} href="/favoritos">
                Ver favoritos
              </Link>

              <Link className={styles.secondaryButton} href="/about">
                Acerca de mí
              </Link>
            </div>
          </div>

          <div className={styles.previewCard}>
            <div className={styles.windowBar}>
              <span />
              <span />
              <span />
            </div>

            <div className={styles.previewBody}>
              <p className={styles.previewLabel}>Proyecto actual</p>
              <h2>MiPortafolio</h2>
              <p>
                Next.js · TypeScript · CSS Modules
              </p>
            </div>
          </div>
        </section>

        <section className={styles.grid}>
          <article className={styles.infoCard}>
            <span className={styles.cardNumber}>01</span>
            <h2>Rutas limpias</h2>
            <p>
              Navegación con App Router usando páginas como Inicio, Acerca de y
              Favoritos.
            </p>
          </article>

          <article className={styles.infoCard}>
            <span className={styles.cardNumber}>02</span>
            <h2>Componentes</h2>
            <p>
              Navbar, Footer y Favorites separados para mantener el código más
              ordenado.
            </p>
          </article>

          <article className={styles.infoCard}>
            <span className={styles.cardNumber}>03</span>
            <h2>Estilo visual</h2>
            <p>
              Paleta inspirada en Next/Vercel: negro, blanco, grises y azul de
              acento.
            </p>
          </article>
        </section>
      </main>

      <Footer />
    </>
  );
}