type BannerProps = {
  title: string
  desc: string
}

const Banner = ({ title, desc }: BannerProps) => {
  return (
    <section id="banner">
      <div className="inner" style={{ opacity: 1 }}>
        <h1 style={{ opacity: 1 }}>
          {title}
          <small style={{ display: "none" }}>{" " + "Jesse Koldewijn."}</small>
        </h1>
        <p
          style={{
            opacity: 1,
          }}
        >
          {desc}
        </p>
      </div>
    </section>
  )
}

export default Banner
