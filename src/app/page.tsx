import About from "./_components/_About/about";
import Contact from "./_components/_Contact/contact";
import Footer from "./_components/_Footer/footer";
import Header from "./_components/_Header/header";
import Projects from "./_components/_Projects/projects";
import Skills from "./_components/_Skills/skills";
export default function Home() {
  return <div className="portfolio-shell">
    <div className="ambient-grain" aria-hidden="true" />
    <Header />
    <div className="portfolio-content md:pl-[18rem]">
      <main className="relative flex min-h-screen flex-col">
        <div className="realm-backdrop" aria-hidden="true"><span className="realm-orb realm-orb-one" /><span className="realm-orb realm-orb-two" /><span className="realm-grid" /></div>
        <About /><Skills /><Projects /><Contact />
      </main><Footer />
    </div>
  </div>;
}