import { useEffect, useState } from "react"
import Logo from "@/img/logo.webp"

interface HeaderProps {
  currentPage: string
}

interface LinkStyle {
  linkHref: string
  linkStyle: React.CSSProperties
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

  const [linkStyles, setLinkStyle] = useState<LinkStyle[]>([
    {
      linkHref: "/",
      linkStyle: linkStyle("/"),
    },
    {
      linkHref: "/diensten",
      linkStyle: linkStyle("/diensten"),
    },
    {
      linkHref: "/tarieven",
      linkStyle: linkStyle("/tarieven"),
    },
  ])

  const getLinkStyleFromSignal = (linkHref: string) => {
    const linkStyle = linkStyles.find((linkStyle) => linkStyle.linkHref === linkHref)

    if (linkStyle) {
      return linkStyle.linkStyle
    } else {
      return {} as React.CSSProperties
    }
  }

  const updateLinkStyles = () => {
    setLinkStyle([
      {
        linkHref: "/",
        linkStyle: linkStyle("/"),
      },
      {
        linkHref: "/diensten",
        linkStyle: linkStyle("/diensten"),
      },
      {
        linkHref: "/tarieven",
        linkStyle: linkStyle("/tarieven"),
      },
    ])
  }

  useEffect(() => {
    updateLinkStyles()
    window.addEventListener("astro:after-swap", () => updateLinkStyles())
  }, [])

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
        <a
          className="nav-link"
          rel="prefetch-intent"
          href="/"
          style={{ ...getLinkStyleFromSignal("/") }}
        >
          {" "}
          Home
        </a>
        <a
          className="nav-link"
          rel="prefetch-intent"
          href="/diensten"
          style={{ ...getLinkStyleFromSignal("/diensten") }}
        >
          {" "}
          Diensten
        </a>
        <a
          className="nav-link"
          rel="prefetch-intent"
          href="/tarieven"
          style={{ ...getLinkStyleFromSignal("/tarieven") }}
        >
          {" "}
          Tarieven
        </a>
      </nav>
    </header>
  )
}
export default Header
