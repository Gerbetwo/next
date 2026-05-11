import styles from "./Favorites.module.css";

export default function Favorites() {
  const favorites = [
    { id: 1, name: "React" },
    { id: 2, name: "Next.js" },
    { id: 3, name: "Tailwind CSS" },
  ];

  return (
    <section className={styles.card}>
      <h2 className={styles.title}>Favoritos</h2>

      <ul className={styles.list}>
        {favorites.map((item) => (
          <li className={styles.item} key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </section>
  );
}