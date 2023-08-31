import { EnvelopeAt, Facebook, Instagram, Linkedin, Whatsapp } from "react-bootstrap-icons"

const Footer = () => {
  const changeIconHoverEffect = (iconID: string, action: "remove" | "add") => {
    const Icon = document.getElementById(iconID)

    switch (action) {
      case "add": {
        Icon?.classList.add("fill-brand")
        return
      }
      case "remove": {
        Icon?.classList.remove("fill-brand")
        return
      }
    }
  }

  return (
    <>
      <section className="wrapper no-select">
        <div className="inner">
          <div className="special-footer">
            <h2>Heeft u nog vragen?</h2>
            <p>Dat snap ik wel. Neem alstublieft contact op als u vragen heeft.</p>
            <div className="flex w-full items-center justify-center gap-4 align-middle">
              Whatsapp{" "}
              <a href="https://wa.me/31642981933">
                <figure
                  className="icon animate-bounce hover:shadow-md"
                  style={{
                    color: "#ffa600",
                    fontSize: "35px",
                  }}
                >
                  <span className="sr-only">Whatsapp</span>
                  <Whatsapp />
                </figure>
              </a>
              E-mail{" "}
              <a href="mailto://jesse@hardwarehulp.nl">
                <figure
                  className="icon animate-bounce hover:shadow-md"
                  style={{
                    color: "#ffa600",
                    fontSize: "35px",
                  }}
                >
                  <span className="sr-only">Email</span>
                  <EnvelopeAt />
                </figure>
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer">
        <div className="inner">
          <div className="content">
            <section>
              <div className="plain">
                <h3 className="no-select">Hardwarehulp</h3>
                <p className="no-select">
                  IT hulp aan huis
                  <br />
                  Ik help u graag met de volgende apparaten:
                  <br />
                  <i>computers, laptops, smartphones en tablets.</i>
                  <br />
                  Valt het apparaat waar u hulp voor zoekt hier niet onder?
                  <br />
                  Neem dan contact op.
                </p>
                <p
                  style={{
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontSize: "13px",
                  }}
                  class="select-none"
                >
                  Kvk: <span id="kvk-display">81511515</span>
                  <br />
                  IBAN: NL15 ABNA 0884 2883 74
                  <br />
                  Tel:{" "}
                  <a href="https://wa.me/31642981933" data-astro-reload>
                    +31 6 42 98 1933
                  </a>
                </p>
              </div>
            </section>
            <section>
              <h4 className="no-select">Pagina&apos;s</h4>
              <div className="alt no-select flex flex-col gap-3">
                <a href="/">Hoofdpagina</a>
                <a href="/diensten">Diensten</a>
                <a href="/tarieven">Tarieven</a>
                <a rel="canonical" href="https://hhhost.nl" data-astro-reload>
                  Hosting
                </a>
              </div>
            </section>
            <section className="no-select mt-6">
              <h4>Volg mij!</h4>
              <ul className="plain no-select">
                <li>
                  <a
                    href="https://www.instagram.com/hardwarehulp/"
                    className="flex items-center"
                    onMouseEnter={() => changeIconHoverEffect("ig-icon", "add")}
                    onMouseLeave={() => changeIconHoverEffect("ig-icon", "remove")}
                    onClick={() => changeIconHoverEffect("ig-icon", "add")}
                    data-astro-reload
                  >
                    {/** @ts-ignore */}
                    <Instagram id="ig-icon" className="icon mb-1" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/hardwarehulp"
                    className="flex items-center"
                    onMouseEnter={() => changeIconHoverEffect("fb-icon", "add")}
                    onMouseLeave={() => changeIconHoverEffect("fb-icon", "remove")}
                    onClick={() => changeIconHoverEffect("fb-icon", "add")}
                    data-astro-reload
                  >
                    {/** @ts-ignore */}
                    <Facebook id="fb-icon" className="icon mb-1" />
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/hardwarehulp"
                    className="flex items-center"
                    onMouseEnter={() => changeIconHoverEffect("li-icon", "add")}
                    onMouseLeave={() => changeIconHoverEffect("li-icon", "remove")}
                    onClick={() => changeIconHoverEffect("li-icon", "add")}
                    data-astro-reload
                  >
                    {/** @ts-ignore */}
                    <Linkedin id="li-icon" className="icon mb-1" />
                    Linkedin
                  </a>
                </li>
              </ul>
            </section>
          </div>
          <div className="copyright no-select">
            <span style={{ fontSize: "13px" }}>
              <a href="/">Hardwarehulp</a>
              {" 2021-" + new Date().getFullYear()} | IT hulp aan huis
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
