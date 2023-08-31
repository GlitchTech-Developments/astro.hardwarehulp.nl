import Logo from "@/img/logo.webp"

const Header = () => {
  return (
    <header id="header">
      <a className="logo no-select" href="/">
        <img
          id="header-icon"
          src={Logo.src}
          alt="Logo Hardwarehulp"
          height={Logo.height}
          width={Logo.width}
          loading="eager"
        />
      </a>
      <nav className="no-select font-semibold" style={{ color: "rgba(255,255,255, 0.85)" }}>
        <a className="nav-link" rel="prefetch-intent" href="/">
          {" "}
          Home
        </a>
        <a className="nav-link" rel="prefetch-intent" href="/diensten">
          {" "}
          Diensten
        </a>
        <a className="nav-link" rel="prefetch-intent" href="/tarieven">
          {" "}
          Tarieven
        </a>
      </nav>
    </header>
  )
}
export default Header
