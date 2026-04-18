import About from "./_components/_About/about";
import Contact from "./_components/_Contact/contact";
import Footer from "./_components/_Footer/footer";
import Header from "./_components/_Header/header";
import Projects from "./_components/_Projects/projects";
import Skills from "./_components/_Skills/skills";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex flex-1 flex-col">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
