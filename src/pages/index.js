import React from "react"

import Layout from "../components/layout"
import SVG from "../components/svg"
import SEO from "../components/seo"
import Form from "../components/form"
import logo from "!!raw-loader!../assets/images/logo.svg"
import ring from "!!raw-loader!../assets/images/ring.svg";
import separator from "../assets/images/separator.jpg"
import mapHotel from "../assets/images/map-hotel.png"
import mapGereja from "../assets/images/map-gereja.png"

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
                <SVG svg={ring} />
              </div>
              <div className="col">
                <div className="">
                  <p className="label">The Date</p>
                  <h2 className="heading--large">SUNDAY, NOVEMBER 22 2020</h2>
                </div>
                <div className="rsvp-box">
                  <p className="label">The Invite</p>
                  <p>What we want most for our wedding is to have our friends and family there to celebrate the occasion with us. So more than anything we`re simply grateful for your presence </p>
                  <a className="btn" href='/about'>RSVP</a>
                </div>
              </div>
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
        <section className="box-wrapper">
          <div className="container">
            <div className="row">
              <div className="col">
                <SVG svg={ring} />
              </div>
              <div className="col">
                <p className="label">The Ceremony</p>
                <h2 className="heading--large">Gereja Katolik<br />
                    Santa Monica</h2>
                <p>Jl. Alamanda Sektor 1.2, <br />
                  Jl. Komp. Bsd No.1, Rw. Buntu, <br />
                  Kec. Serpong, Kota Tangerang Selatan, <br />
                  Banten 15318</p>
                <img src={mapGereja} />
                <a class="btn" href="https://www.google.com/maps/place/Catholic+Church+of+Saint+Monica/@-6.3012349,106.6802113,17z/data=!3m1!4b1!4m5!3m4!1s0x2e69f96b7bfde095:0x1b06779dd2e7f0f2!8m2!3d-6.3012402!4d106.6824">SHOW DIRECTION</a>
              </div>
              <a href="#home-block-2" className="js-scroll-down scroll-down">
                <span className="arrow-down"></span>
              </a>
              <div className="bg-black -left"></div>
            </div>
          </div>
        </section>
        <section className="box-wrapper">
          <div className="container">
            <div className="row">

              <div className="col">
                <p className="label">The Reception</p>
                <h2 className="heading--large">Hotel Santika Premiere ICE BSD City</h2>
                <p>Indonesia Convention Exhibition,<br />
                  Jalan BSD Grand Boulevard, Pagedangan, <br />
                  Tangerang, Banten 15339</p>
                 <img src={mapHotel} />
                 <a class="btn" href="https://www.google.com/maps/place/Hotel+Santika+Premiere+ICE+BSD+City/@-6.2989222,106.6340902,17z/data=!3m1!4b1!4m8!3m7!1s0x2e69fb538fd1864b:0x4f93866d21038550!5m2!4m1!1i2!8m2!3d-6.2989275!4d106.6362789">SHOW DIRECTION</a>
              </div>
              <div className="col">
                <SVG svg={ring} />
              </div>
                <a href="#home-block-2" className="js-scroll-down scroll-down">
                <span className="arrow-down"></span>
              </a>
              <div className="bg-black -right"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </Layout>
)

export default IndexPage
