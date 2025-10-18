import About from "./_components/_About/about";
import Header from "./_components/_Header/header";
import Skills from "./_components/_Skills/skills";

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

        <section>
          <Skills />
        </section>
      </main>

      <footer></footer>
    </div>
  );
}
