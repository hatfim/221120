import React from "react"

import Layout from "../components/layout"
import SVG from "../components/svg"
import SEO from "../components/seo"
import Form from "../components/form"
import logo from "!!raw-loader!../assets/images/logo.svg"
import ring from "!!raw-loader!../assets/images/ring.svg";
import separator from "../assets/images/separator.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="border">
      <div className="border__inner">
        <section className="hero__wrapper">
          <a href="#" className="site-logo">
            <SVG svg={logo} />
          </a>
        </section>
        <section className="box-wrapper overlap-bottom-120">
          <div className="container">
            <div className="row">
              <div className="col">

              </div>
              <div className="col" style={{ height:"300px"}}></div>
              <a href="#home-block-2" className="js-scroll-down scroll-down">
                <span className="arrow-down"></span>
              </a>
              <div className="bg-black -left"></div>
            </div>
          </div>
        </section>
        <section className="bg-wrapper">
          <div className="bg-wrapper__image" style={{ backgroundImage: `url(${separator})` }}>
          </div>
        </section>
        <section className="container">
          <div className="row">
            <div className="col">
              <p className="label">The Ceremony</p>
              <h2 className="heading--large">Gereja Katolik<br />
                  Santa Monica</h2>
              <p>Jl. Alamanda Sektor 1.2, <br />
                Jl. Komp. Bsd No.1, Rw. Buntu, <br />
                Kec. Serpong, Kota Tangerang Selatan, <br />
                Banten 15318</p>
            </div>
            <div className="col">
              <p className="label">The Reception</p>
              <h2 className="heading--large">Hotel Santika Premiere ICE BSD City</h2>
              <p>Indonesia Convention Exhibition,<br />
                Jalan BSD Grand Boulevard, Pagedangan, <br />
                Tangerang, Banten 15339</p>

            </div>
          </div>
      </section>
      </div>
    </div>
  </Layout>
)

export default IndexPage
