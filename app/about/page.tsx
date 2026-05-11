import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.hero}>
          <span className={styles.badge}>Acerca de mí</span>

          <h1>Desarrollador fullstack enfocado en interfaces modernas.</h1>

          <p>
            Me gusta construir aplicaciones claras, rápidas y fáciles de usar,
            combinando React, Next.js, TypeScript y buenas prácticas de diseño
            visual.
          </p>
        </section>

        <section className={styles.contentGrid}>
          <article className={styles.card}>
            <span className={styles.cardNumber}>01</span>
            <h2>Frontend</h2>
            <p>
              Trabajo con componentes reutilizables, rutas limpias y estilos
              modulares para crear interfaces ordenadas y mantenibles.
            </p>
          </article>

          <article className={styles.card}>
            <span className={styles.cardNumber}>02</span>
            <h2>Backend</h2>
            <p>
              Tengo experiencia creando lógica de servidor, APIs y estructuras
              preparadas para conectar datos reales con la interfaz.
            </p>
          </article>

          <article className={styles.card}>
            <span className={styles.cardNumber}>03</span>
            <h2>Objetivo</h2>
            <p>
              Seguir mejorando como desarrollador construyendo proyectos útiles,
              visuales y bien organizados.
            </p>
          </article>
        </section>

        <section className={styles.stackSection}>
          <div>
            <span className={styles.smallLabel}>Stack principal</span>
            <h2>Tecnologías que estoy usando</h2>
          </div>

          <ul className={styles.stackList}>
            <li>React</li>
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>CSS Modules</li>
            <li>Node.js</li>
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}