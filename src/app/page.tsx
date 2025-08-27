import About from "./_components/_About/about";
import Header from "./_components/_Header/header";

export default function Home() {
  return (
    <div className="flex flex-col space-y-10">
      <header>
        <Header />
      </header>

      <main>
        <section>
          <About />
        </section>
      </main>

      <footer></footer>
    </div>
  );
}
