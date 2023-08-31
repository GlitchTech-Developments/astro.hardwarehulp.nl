import { LifePreserver, Search, Wrench } from "react-bootstrap-icons"

import Me from "@/img/Jesse.webp"

const HomeContent = () => {
  return (
    <>
      <section className="wrapper" style={{ paddingTop: "3rem" }}>
        <div className="inner">
          <header className="special no-select">
            <h2>Waar kan ik u mee van dienst zijn?</h2>
            <p>
              Alle diensten die ik aanbied worden uitgebreider uitgelegd op de &quot;Diensten&quot;
              pagina.
            </p>
          </header>

          <div className="highlights">
            <section>
              <a
                href="/diensten#com-mobile"
                rel="prefetch-intent"
                style={{ textDecoration: "none" }}
              >
                <div className="content btn-highlights">
                  <span className="flex w-full flex-col items-center justify-center gap-4">
                    <figure className="icon" style={{ color: "#ffa600" }}>
                      <Wrench />
                    </figure>
                    <h3>Computer op maat</h3>
                  </span>
                  <p className="text-gray-700">
                    Computer speciaal op maat voor uw gebruik. Bij u thuis in elkaar gezet,
                    geïnstalleerd.
                  </p>
                </div>
              </a>
            </section>
            <section>
              <a
                style={{ textDecoration: "none" }}
                rel="prefetch-intent"
                href="/diensten#com-ondersteuning"
              >
                <div className="content btn-highlights">
                  <span className="flex w-full flex-col items-center justify-center gap-4">
                    <figure className="icon" style={{ color: "#ffa600" }}>
                      <LifePreserver />
                    </figure>
                    <h3>Ondersteuning</h3>
                  </span>
                  <p className="text-gray-700">
                    Heeft u problemen met bepaalde apparaten aan de praat krijgen? dan kan ik u hier
                    ook mee helpen.
                  </p>
                </div>
              </a>
            </section>
            <section>
              <a
                href="/diensten#com-advies"
                rel="prefetch-intent"
                style={{ textDecoration: "none" }}
              >
                <div className="content btn-highlights">
                  <span className="flex w-full flex-col items-center justify-center gap-4">
                    <figure className="icon" style={{ color: "#ffa600" }}>
                      <Search />
                    </figure>
                    <h3>Aankoop advies</h3>
                  </span>
                  <p className="text-gray-700">
                    Advisering van de aankoop van elektronica zoals computers, laptops, smartphones
                    etc.
                  </p>
                </div>
              </a>
            </section>
          </div>
        </div>
      </section>

      <section className="wrapper no-select" style={{ marginTop: "0px", paddingTop: "2rem" }}>
        <div className="inner">
          <div className="special" style={{ display: "flex", flexDirection: "column" }}>
            <h2 style={{ marginLeft: "auto", marginRight: "auto" }}>Wie is Hardwarehulp</h2>
            <p
              style={{
                maxWidth: "800px",
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
              }}
            >
              Goedendag en bedankt dat u een kijkje neemt op mijn website. Na ruim een jaar in de IT
              ondersteuningswereld gewerkt te hebben merkte ik dat plaatselijk in Kampen een tekort
              is aan een specifieke behoefte, betaalbare IT hulp aan huis zowel software als
              hardwarematig. Door dit tekort aan opties ben ik begonnen namens Hardwarehulp lokaal
              in Kampen, Overijssel.
            </p>
            <div
              className="author"
              style={{
                paddingBottom: "3rem",
              }}
            >
              <div className="image">
                <div
                  style={{
                    alignContent: "center",
                    paddingTop: "5px",
                  }}
                >
                  <img
                    src={Me.src}
                    alt="Jesse Koldewijn, Eigenaar Hardwarehulp"
                    height={Me.height}
                    width={Me.width}
                  />
                </div>
              </div>
              <p className="credit flex flex-col">
                <a
                  href="https://www.linkedin.com/in/jesse-koldewijn-5914531a3/"
                  target="_blank"
                  rel="noreferrer prefetch-intent"
                  style={{
                    textDecoration: "none",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                  data-astro-reload
                >
                  Jesse Koldewijn
                </a>
                <a
                  href="https://www.linkedin.com/company/hardwarehulp"
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  rel="noreferrer prefetch-intent"
                  data-astro-reload
                >
                  Hardwarehulp
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="wrapper no-select middle">
        <div className="inner">
          <h2>Transparantie staat voorop!</h2>
          <p style={{ color: "white" }}>
            Wat bedoel ik met transparantie? Transparant zijn zie ik zowel als eerlijk en open
            omgaan met feedback, maar ook om zo open mogelijk te zijn over de prijs/uurtarief die
            een afspraak zal gaan kosten. Om zo transparant mogelijk met feedback om te gaan wijs ik
            na elke eerste afspraak u op het feit dat u mij kunt beoordelen op Trustpilot. Hieronder
            kunt u mijn Trustpilot pagina en beoordeling vinden.
          </p>
          <div
            className="NotMobile"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
            }}
          >
            <a
              rel="canonical noreferrer prefetch-intent"
              href="https://nl.trustpilot.com/review/hardwarehulp.nl"
              className="btnTrus"
              target="_blank"
              data-astro-reload
            >
              Bekijk mijn pagina
            </a>
            <br className="spacer" />
            <a
              href="https://nl.trustpilot.com/evaluate/hardwarehulp.nl"
              className="btnTrus"
              target="_blank"
              rel="noreferrer"
              data-astro-reload
            >
              Plaats een review
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeContent
