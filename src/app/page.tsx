import About from "./_components/about";
import Header from "./_components/_Header/header";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <section>
          <About />
        </section>
      </main>

      <footer></footer>
    </>
  );
}
