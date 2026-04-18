import Navigation from "./navigation";

function Header() {
  return (
    <header
      id="header"
      className="sticky top-0 z-50 w-full border-b border-white/[0.07] bg-[#0a0a0f]/90 backdrop-blur-sm"
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:px-6">
        <span className="font-mono text-sm tracking-widest text-[#00e5a0] sm:text-base">
          lucashackd.dev
        </span>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
