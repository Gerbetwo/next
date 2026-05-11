import Navbar from "../components/Navbar";
import Favorites from "../components/Favorites";
import Footer from "../components/Footer";

export default function FavoritosPage() {
  return (
    <>
      <Navbar />

      <main style={{ padding: "2rem" }}>
        <h1>Mis favoritos</h1>
        <Favorites />
      </main>

      <Footer />
    </>
  );
}