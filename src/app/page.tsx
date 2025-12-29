import About from "./_components/_About/about";
import Contact from "./_components/_Contact/contact";
import Footer from "./_components/_Footer/footer";
import Header from "./_components/_Header/header";
import Projects from "./_components/_Projects/projects";
import Skills from "./_components/_Skills/skills";

export default function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main className="flex flex-col space-y-10">
        <section>
          <About />
        </section>

        <section>
          <Skills />
        </section>

        <section>
          <Projects />
        </section>

        <section>
          <Contact />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
