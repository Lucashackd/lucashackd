import About from "./_components/_About/about";
import Header from "./_components/_Header/header";
import Projects from "./_components/_Projects/projects";
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

        <section>
          <Projects />
        </section>
      </main>

      <footer></footer>
    </div>
  );
}
