import Navigation from "./navigation";

type HeaderProps = {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
};

function Header({ activeSection, onNavigate }: HeaderProps) {
  return (
    <>
      <header className="mobile-topbar md:hidden">
        <a href="#about" className="brand-mark" aria-label="Ir para o início">
          <span className="brand-monogram">LH</span>
          <span className="brand-wordmark"><strong>Lucas Hackbart Döhnert</strong><small>Desenvolvedor Full Stack</small></span>
        </a>
        <Navigation activeSection={activeSection} onNavigate={onNavigate} />
      </header>
      <aside id="header" className="desktop-sidebar hidden md:flex">
        <a href="#about" className="brand-mark" aria-label="Ir para o início">
          <span className="brand-monogram">LH</span>
          <span className="brand-wordmark"><strong>Lucas Hackbart Döhnert</strong><small>Desenvolvedor Full Stack</small></span>
        </a>
        <div className="sidebar-divider"><span>COMPÊNDIO</span></div>
        <Navigation activeSection={activeSection} onNavigate={onNavigate} />
        <div className="sidebar-bottom"><span className="sidebar-rune">✦</span><p>Uma jornada através<br />de ideias e tecnologia.</p><span className="sidebar-version">PORTFÓLIO · 2026</span></div>
      </aside>
    </>
  );
}

export default Header;