interface HeaderProps {
  currentPage: string
}

const Header = ({ currentPage }: HeaderProps) => {
  const linkStyle = (linkHref: string) => {
    if (typeof window !== "undefined") {
      if (window.location.pathname === linkHref) {
        return {
          color: "rgba(255,255,255, 1)",
          textDecoration: "underline",
        } as React.CSSProperties
      } else {
        return {} as React.CSSProperties
      }
    } else if (currentPage === linkHref) {
      return {
        color: "rgba(255,255,255, 1)",
        textDecoration: "underline",
      } as React.CSSProperties
    } else {
      return {} as React.CSSProperties
    }
  }

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
        <a className="nav-link" rel="prefetch-intent" href="/" style={{ ...linkStyle("/") }}>
          {" "}
          Home
        </a>
        <a
          className="nav-link"
          rel="prefetch-intent"
          href="/diensten"
          style={{ ...linkStyle("/diensten") }}
        >
          {" "}
          Diensten
        </a>
        <a
          className="nav-link"
          rel="prefetch-intent"
          href="/tarieven"
          style={{ ...linkStyle("/tarieven") }}
        >
          {" "}
          Tarieven
        </a>
      </nav>
    </header>
  )
}
export default Header
