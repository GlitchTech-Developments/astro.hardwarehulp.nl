const Header = () => {
  return (
    <header id="header">
      <a className="logo no-select" href="/">
        <img
          id="header-icon"
          src={"/img/logo.webp"}
          alt="Logo Hardwarehulp"
          height={70}
          width={70}
          loading="eager"
        />
      </a>
      <nav className="no-select font-semibold" style={{ color: "rgba(255,255,255, 0.85)" }}>
        <a className="nav-link" rel="canonical" href="/">
          {" "}
          Home
        </a>
        <a className="nav-link" rel="canonical" href="/diensten">
          {" "}
          Diensten
        </a>
        <a className="nav-link" rel="canonical" href="/tarieven">
          {" "}
          Tarieven
        </a>
      </nav>
    </header>
  )
}
export default Header
